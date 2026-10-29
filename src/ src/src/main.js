import './style.css';
import { referenceItems, areas } from './formulas.js';

const app = document.querySelector('#app');

const GEMINI_API_KEY = 'AQ.Ab8RN6KT3S0dsR9WkbxBpq1is8qznbe5XlUzNTQmotJ3PQpKFg';
const GEMINI_MODEL = 'gemini-3.8-flash';

const read = (key, fallback) => {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback;
  } catch {
    return fallback;
  }
};

const save = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value));

let page = 'home';
let filter = 'All';
let query = '';
let notes = read('p17c-notes', []);
let tasks = read('p17c-tasks', []);

const esc = value =>
  String(value ?? '').replace(/[&<>"']/g, character => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }[character]));

function speak(text) {
  try {
    if ('speechSynthesis' in window) {
      speechSynthesis.cancel();
      speechSynthesis.speak(
        new SpeechSynthesisUtterance(text)
      );
    }
  } catch {}
}

function home() {
  return `
    <section class="hero">
      <small>YOUR STUDY COMPANION</small>
      <h1>Welcome Boss<span>.</span></h1>
      <p>
        Biomedical Engineering study tools and science references,
        available offline after installation.
      </p>
      <button data-page="library">
        Explore offline library →
      </button>
    </section>

    <div class="grid">
      <button data-page="library">
        <b>▤ Reference library</b>
        <small>${referenceItems.length} searchable entries</small>
      </button>

      <button data-page="tools">
        <b>∑ Calculators</b>
        <small>Ohm’s law, power, pressure</small>
      </button>

      <button data-page="study">
        <b>✓ Study desk</b>
        <small>Notes and planner</small>
      </button>

      <button data-page="tutor">
        <b>✦ AI Tutor</b>
        <small>Gemini online + offline helper</small>
      </button>
    </div>

    <aside>
      <b>Offline-ready + online AI</b>
      <p>
        Your library, calculators, notes and planner work offline.
        The Gemini tutor needs an internet connection.
      </p>
    </aside>

    <p class="muted">
      ${notes.length} saved notes · ${tasks.length} study tasks
    </p>
  `;
}

function library() {
  const list = referenceItems.filter(item =>
    (filter === 'All' || item.area === filter) &&
    (
      item.name + ' ' +
      item.area + ' ' +
      item.equation + ' ' +
      item.tags
    ).toLowerCase().includes(query.toLowerCase())
  );

  return `
    <h1>Offline science library</h1>

    <p class="muted">
      Search laws, equations and biomedical concepts.
    </p>

    <input
      id="search"
      placeholder="Search ECG, pressure, Ohm…"
      value="${esc(query)}"
    >

    <div class="chips">
      ${areas.map(area => `
        <button
          class="${filter === area ? 'chosen' : ''}"
          data-filter="${esc(area)}"
        >
          ${esc(area)}
        </button>
      `).join('')}
    </div>

    <p class="muted">
      ${list.length} references stored in the app
    </p>

    ${list.map(item => `
      <details>
        <summary>
          <small>${esc(item.area)}</small>
          <b>${esc(item.name)}</b>
          <code>${esc(item.equation)}</code>
        </summary>

        <div class="detail">
          <p>${esc(item.meaning)}</p>
          <p><b>Symbols:</b> ${esc(item.symbols)}</p>
          <p><b>Units:</b> ${esc(item.units)}</p>
          <p><b>Example / note:</b> ${esc(item.example)}</p>

          <button data-note="${esc(item.name)}">
            Save to notes
          </button>
        </div>
      </details>
    `).join('') || '<aside>No results. Try a different search.</aside>'}

    <p class="muted">
      Educational starter reference, not literally every scientific law.
      Check assumptions, units and course materials.
    </p>
  `;
}

function tools() {
  return `
    <h1>Engineering tools</h1>

    <section>
      <h2>Ohm’s law · V = IR</h2>

      <label>
        Voltage (V)
        <input id="v" type="number" placeholder="e.g. 12">
      </label>

      <label>
        Current (A)
        <input id="i" type="number" placeholder="e.g. 0.5">
      </label>

      <label>
        Resistance (Ω)
        <input id="r" type="number" placeholder="e.g. 24">
      </label>

      <button id="ohm">Calculate from any two</button>
      <p id="or" class="result">Result appears here.</p>
    </section>

    <section>
      <h2>Electrical power · P = VI</h2>

      <label>
        Voltage (V)
        <input id="pv" type="number">
      </label>

      <label>
        Current (A)
        <input id="pi" type="number">
      </label>

      <button id="power">Calculate power</button>
      <p id="pr" class="result">Result appears here.</p>
    </section>

    <section>
      <h2>Pressure conversion</h2>

      <label>
        Pressure (kPa)
        <input id="pk" type="number">
      </label>

      <button id="pressure">Convert</button>
      <p id="pkr" class="result">Result appears here.</p>
    </section>
  `;
}

function study() {
  return `
    <h1>Study desk</h1>

    <section>
      <h2>Save a note</h2>

      <label>
        Title
        <input id="nt" placeholder="Revision topic">
      </label>

      <label>
        Note
        <textarea id="nb" rows="4" placeholder="Write your notes…"></textarea>
      </label>

      <button id="saveNote">Save note</button>
    </section>

    <h2>Saved notes (${notes.length})</h2>

    ${notes.slice().reverse().map(note => `
      <article>
        <b>${esc(note.title)}</b>
        <p>${esc(note.body)}</p>
        <button data-del-note="${note.id}">Delete</button>
      </article>
    `).join('') || '<aside>No notes yet.</aside>'}

    <section>
      <h2>Study planner</h2>

      <form id="taskForm">
        <input id="task" placeholder="Add a study task" required>
        <button>Add task</button>
      </form>

      ${tasks.map(task => `
        <article>
          <label class="task">
            <input
              type="checkbox"
              data-task="${task.id}"
              ${task.done ? 'checked' : ''}
            >
            <span>${esc(task.text)}</span>
          </label>

          <button data-del-task="${task.id}">Delete</button>
        </article>
      `).join('') || '<p class="muted">No tasks yet.</p>'}
    </section>

    <section>
      <h2>Quick quiz</h2>
      <p>Which equation represents Ohm’s law?</p>

      <button data-quiz="wrong">P = mv</button>
      <button data-quiz="right">V = IR</button>

      <p id="quizResult" class="result"></p>
    </section>
  `;
}

function tutor() {
  return `
    <h1>BioNexa AI Tutor</h1>

    <p class="muted">
      Ask about biomedical engineering, maths, physics, chemistry,
      formulas or study topics. Gemini needs an internet connection.
    </p>

    <section>
      <h2>Ask Gemini</h2>

      <label>
        Your question
        <textarea
          id="tq"
          rows="5"
          placeholder="e.g. Explain how an ECG amplifier works, step by step."
        ></textarea>
      </label>

      <button id="askGemini">Ask BioNexa AI</button>

      <p id="geminiStatus" class="result" aria-live="polite">
        Ready when you are.
      </p>

      <div
        id="geminiAnswer"
        class="result"
        style="white-space:pre-wrap"
      ></div>
    </section>

    <section>
      <h2>Offline helper</h2>
      <p class="muted">Use this if you have no internet connection.</p>

      <button id="explain">Explain with offline helper</button>
      <p id="ta" class="result">An answer will appear here.</p>
    </section>

    <p class="muted">
      AI answers can be wrong. Verify calculations, units and clinical
      information with course materials and qualified lecturers.
    </p>
  `;
}

function render() {
  const views = { home, library, tools, study, tutor };

  app.innerHTML = `
    <header>
      <div class="logo">BN</div>
      <div>
        <b>BioNexa</b>
        <small>Biomedical Engineering Companion</small>
      </div>
      <button id="welcome">🔊</button>
    </header>

    <main>${views[page]()}</main>

    <nav>
      ${[
        ['home', 'Home'],
        ['library', 'Library'],
        ['tools', 'Tools'],
        ['study', 'Study'],
        ['tutor', 'Tutor']
      ].map(([key, label]) => `
        <button
          data-page="${key}"
          class="${page === key ? 'on' : ''}"
        >
          ${label}
        </button>
      `).join('')}
    </nav>
  `;

  app.querySelectorAll('[data-page]').forEach(button => {
    button.onclick = () => {
      page = button.dataset.page;
      render();
    };
  });

  document.querySelector('#welcome').onclick = () =>
    speak('Welcome Boss!');

  if (page === 'home') {
    setTimeout(() => speak('Welcome Boss!'), 350);
  }

  if (page === 'library') {
    document.querySelector('#search').oninput = event => {
      query = event.target.value;
      const position = event.target.selectionStart;
      render();

      const search = document.querySelector('#search');
      search.focus();
      search.setSelectionRange(position, position);
    };

    app.querySelectorAll('[data-filter]').forEach(button => {
      button.onclick = () => {
        filter = button.dataset.filter;
        render();
      };
    });

    app.querySelectorAll('[data-note]').forEach(button => {
      button.onclick = () => {
        const item = referenceItems.find(
          entry => entry.name === button.dataset.note
        );

        notes.push({
          id: Date.now(),
          title: item.name,
          body:
            `${item.equation}\n${item.meaning}\n` +
            `Symbols: ${item.symbols}\n` +
            `Units: ${item.units}\n` +
            `Example: ${item.example}`
        });

        save('p17c-notes', notes);
        button.textContent = 'Saved ✓';
      };
    });
  }

  if (page === 'tools') {
    document.querySelector('#ohm').onclick = () => {
      const voltage = parseFloat(document.querySelector('#v').value);
      const current = parseFloat(document.querySelector('#i').value);
      const resistance = parseFloat(document.querySelector('#r').value);

      const count = [
        voltage,
        current,
        resistance
      ].filter(Number.isFinite).length;

      let result = 'Enter exactly two values.';

      if (count === 2) {
        if (!Number.isFinite(voltage)) {
          result = `Voltage = ${(current * resistance).toPrecision(5)} V`;
        } else if (!Number.isFinite(current)) {
          result = resistance !== 0
            ? `Current = ${(voltage / resistance).toPrecision(5)} A`
            : 'Cannot divide by zero resistance.';
        } else {
          result = current !== 0
            ? `Resistance = ${(voltage / current).toPrecision(5)} Ω`
            : 'Cannot calculate resistance with zero current.';
        }
      }

      document.querySelector('#or').textContent = result;
    };

    document.querySelector('#power').onclick = () => {
      const voltage = parseFloat(document.querySelector('#pv').value);
      const current = parseFloat(document.querySelector('#pi').value);

      document.querySelector('#pr').textContent =
        Number.isFinite(voltage) && Number.isFinite(current)
          ? `Power = ${(voltage * current).toPrecision(5)} W`
          : 'Enter voltage and current.';
    };

    document.querySelector('#pressure').onclick = () => {
      const kPa = parseFloat(document.querySelector('#pk').value);

      document.querySelector('#pkr').textContent =
        Number.isFinite(kPa)
          ? `${kPa * 1000} Pa · ${(kPa * 7.50062).toFixed(4)} mmHg`
          : 'Enter pressure in kPa.';
    };
  }

  if (page === 'study') {
    document.querySelector('#saveNote').onclick = () => {
      const title = document.querySelector('#nt').value.trim();
      const body = document.querySelector('#nb').value.trim();

      if (!title || !body) {
        alert('Enter a title and note.');
        return;
      }

      notes.push({ id: Date.now(), title, body });
      save('p17c-notes', notes);
      render();
    };

    app.querySelectorAll('[data-del-note]').forEach(button => {
      button.onclick = () => {
        notes = notes.filter(
          note => note.id !== Number(button.dataset.delNote)
        );
        save('p17c-notes', notes);
        render();
      };
    });

    document.querySelector('#taskForm').onsubmit = event => {
      event.preventDefault();

      tasks.push({
        id: Date.now(),
        text: document.querySelector('#task').value.trim(),
        done: false
      });

      save('p17c-tasks', tasks);
      render();
    };

    app.querySelectorAll('[data-task]').forEach(button => {
      button.onchange = () => {
        tasks = tasks.map(task =>
          task.id === Number(button.dataset.task)
            ? { ...task, done: button.checked }
            : task
        );

        save('p17c-tasks', tasks);
        render();
      };
    });

    app.querySelectorAll('[data-del-task]').forEach(button => {
      button.onclick = () => {
        tasks = tasks.filter(
          task => task.id !== Number(button.dataset.delTask)
        );

        save('p17c-tasks', tasks);
        render();
      };
    });

    app.querySelectorAll('[data-quiz]').forEach(button => {
      button.onclick = () => {
        document.querySelector('#quizResult').textContent =
          button.dataset.quiz === 'right'
            ? 'Correct: V = IR.'
            : 'Not quite. Ohm’s law is V = IR.';
      };
    });
  }

  if (page === 'tutor') {
    document.querySelector('#askGemini').onclick = async () => {
      const question = document.querySelector('#tq').value.trim();
      const status = document.querySelector('#geminiStatus');
      const answer = document.querySelector('#geminiAnswer');

      if (!question) {
        status.textContent = 'Type a question first.';
        return;
      }

      if (
        !GEMINI_API_KEY ||
        GEMINI_API_KEY === 'YOUR_GEMINI_API_KEY_HERE'
      ) {
        status.textContent =
          'Gemini API key is not configured. Set up a valid key first.';
        return;
      }

      const button = document.querySelector('#askGemini');
      button.disabled = true;
      button.textContent = 'Thinking…';
      status.textContent = 'Connecting to Gemini…';
      answer.textContent = '';

      try {
        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'x-goog-api-key': GEMINI_API_KEY
            },
            body: JSON.stringify({
              systemInstruction: {
                parts: [{
                  text:
                    'You are BioNexa, a careful biomedical engineering ' +
                    'and science study tutor for a student. Explain ' +
                    'concepts clearly step by step, define symbols and ' +
                    'SI units, show calculations when useful, state ' +
                    'assumptions, and do not present yourself as a doctor ' +
                    'or replace qualified clinical supervision. If ' +
                    'uncertain, say so.'
                }]
              },
              contents: [{
                role: 'user',
                parts: [{ text: question }]
              }],
              generationConfig: {
                temperature: 0.35,
                maxOutputTokens: 1400
              }
            })
          }
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data?.error?.message ||
            `Gemini request failed (${response.status}).`
          );
        }

        const reply = (data.candidates || [])
          .flatMap(candidate => candidate.content?.parts || [])
          .map(part => part.text || '')
          .filter(Boolean)
          .join('\n')
          .trim();

        if (!reply) {
          throw new Error('Gemini returned no text. Try asking again.');
        }

        status.textContent = 'Gemini answered:';
        answer.textContent = reply;
      } catch (error) {
        status.textContent =
          'Could not get an AI answer. Check internet access and API ' +
          'key/model availability, then try again. Details: ' +
          (error?.message || 'Unknown error');
      } finally {
        button.disabled = false;
        button.textContent = 'Ask BioNexa AI';
      }
    };

    document.querySelector('#explain').onclick = () => {
      const question = document.querySelector('#tq').value.toLowerCase();

      let answer =
        'This simple offline helper has limited responses. Connect to ' +
        'the internet and use Ask BioNexa AI, or search the reference library.';

      if (question.includes('ohm') || question.includes('resistance')) {
        answer =
          'Ohm’s law: V = IR. Rearrange to R = V/I. If voltage is 12 V ' +
          'and current is 0.5 A, resistance is 12/0.5 = 24 Ω.';
      } else if (question.includes('pressure')) {
        answer =
          'Pressure is P = F/A: force in newtons divided by area in ' +
          'square metres gives pascals. For a stationary fluid, pressure ' +
          'change with depth is ΔP = ρgh.';
      } else if (question.includes('ecg')) {
        answer =
          'An ECG records electrical potential differences related to ' +
          'heart activity. Check calibration, lead, paper speed and ' +
          'artifacts; clinical interpretation needs qualified supervision.';
      } else if (question.includes('kinetic')) {
        answer =
          'Kinetic energy is KE = ½mv². Example: 2 kg moving at 3 m/s ' +
          'has 0.5×2×9 = 9 J.';
      }

      document.querySelector('#ta').textContent = answer;
    };
  }
}

render();
