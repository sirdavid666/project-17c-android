export const referenceItems = [
{
area:"Physics",
name:"Newton's Second Law",
equation:"ΣF = ma",
meaning:"Net force equals mass times acceleration.",
symbols:"F: force (N); m: mass (kg); a: acceleration (m/s²).",
units:"N = kg·m/s²",
example:"A 4 kg object accelerating at 2 m/s² needs 8 N.",
tags:"mechanics force"
},
{
area:"Physics",
name:"Work",
equation:"W = Fd cos θ",
meaning:"Work is the component of force along displacement multiplied by displacement.",
symbols:"W: work; F: force; d: displacement; θ: angle between them.",
units:"J = N·m",
example:"10 N over 3 m in the same direction gives 30 J.",
tags:"energy"
},
{
area:"Physics",
name:"Kinetic energy",
equation:"KE = ½mv²",
export const referenceItems = [
{
area:"Physics",
name:"Newton's Second Law",
equation:"ΣF = ma",
meaning:"Net force equals mass times acceleration.",
symbols:"F: force (N); m: mass (kg); a: acceleration (m/s²).",
units:"N = kg·m/s²",
example:"A 4 kg object accelerating at 2 m/s² needs 8 N.",
tags:"mechanics force"
},
{
area:"Physics",
name:"Work",
equation:"W = Fd cos θ",
meaning:"Work is the component of force along displacement multiplied by displacement.",
symbols:"W: work; F: force; d: displacement; θ: angle between them.",
units:"J = N·m",
example:"10 N over 3 m in the same direction gives 30 J.",
tags:"energy"
},
{
area:"Physics",
name:"Kinetic energy",
equation:"KE = ½mv²",
meaning:"Translational energy due to motion.",
symbols:"m: mass (kg); v: speed (m/s).",
units:"J",
example:"2 kg at 3 m/s has 9 J.",
tags:"energy motion"
},
{
area:"Physics",
name:"Gravitational potential energy",
equation:"PE = mgh",
meaning:"Change in gravitational potential energy near Earth's surface.",
symbols:"m: mass; g≈9.81 m/s²; h: height change (m).",
units:"J",
example:"2 kg raised 1 m gains about 19.6 J.",
tags:"energy gravity"
},
{
area:"Physics",
name:"Momentum",
equation:"p = mv",
meaning:"Momentum is mass multiplied by velocity.",
symbols:"p: momentum; m: mass; v: velocity.",
units:"kg·m/s",
example:"3 kg moving at 2 m/s has momentum 6 kg·m/s.",
tags:"mechanics"
},
{
area:"Physics",
name:"Density",
equation:"ρ = m/V",
meaning:"Mass per unit volume.",
symbols:"ρ: density; m: mass; V: volume.",
units:"kg/m³",
example:"2 kg in 0.001 m³ gives 2000 kg/m³.",
tags:"fluids"
},
{
area:"Physics",
name:"Pressure",
equation:"P = F/A",
meaning:"Normal force divided by area.",
symbols:"P: pressure; F: force; A: area.",
units:"Pa = N/m²",
example:"100 N over 0.5 m² gives 200 Pa.",
tags:"fluids"
},
{
area:"Physics",
name:"Hydrostatic pressure",
equation:"ΔP = ρgh",
meaning:"Pressure increase with depth in a stationary constant-density fluid.",
symbols:"ρ: fluid density; g: gravity; h: depth.",
units:"Pa",
example:"Water pressure rises about 9.8 kPa per metre.",
tags:"fluids"
},
{
area:"Physics",
name:"Continuity equation",
equation:"A₁v₁ = A₂v₂",
meaning:"For steady incompressible flow, volume flow rate is conserved.",
symbols:"A: cross-sectional area; v: average speed.",
units:"m² and m/s",
example:"Halving area doubles ideal flow speed.",
tags:"fluids blood flow"
},
{
area:"Physics",
name:"Wave speed",
equation:"v = fλ",
meaning:"Wave speed equals frequency times wavelength.",
symbols:"v: speed; f: frequency (Hz); λ: wavelength (m).",
units:"m/s",
example:"2 Hz × 3 m = 6 m/s.",
tags:"waves sound"
},
{
area:"Physics",
name:"Sensible heat",
equation:"Q = mcΔT",
meaning:"Heat needed for a temperature change without phase change.",
symbols:"m: mass; c: specific heat; ΔT: temperature change.",
units:"J",
example:"Use consistent SI units.",
tags:"heat"
},
{
area:"Physics",
name:"First law of thermodynamics",
equation:"ΔU = Q − W",
meaning:"With W defined as work done by the system, internal energy change is heat added minus work done.",
symbols:"ΔU: internal energy change; Q: heat added; W: work by system.",
units:"J",
example:"100 J heat in and 30 J work out gives ΔU=70 J.",
tags:"thermodynamics"
},
{
area:"Physics",
name:"Ohm's law",
equation:"V = IR",
meaning:"For an ohmic component under suitable conditions, voltage equals current times resistance.",
symbols:"V: volts; I: amperes; R: ohms.",
units:"V = A·Ω",
example:"6 Ω carrying 2 A has 12 V across it.",
tags:"electricity circuits"
},
{
area:"Physics",
name:"Electrical power",
equation:"P = VI = I²R = V²/R",
meaning:"Power in a resistive electrical circuit.",
symbols:"P: power; V: voltage; I: current; R: resistance.",
units:"W",
example:"12 V × 0.5 A = 6 W.",
tags:"electricity"
},
{
area:"Physics",
name:"Coulomb's law",
equation:"F = k|q₁q₂|/r²",
meaning:"Magnitude of force between two point charges in vacuum.",
symbols:"k≈8.99×10⁹ N·m²/C²; q: charge; r: separation.",
units:"N",
example:"Force varies inversely with separation squared.",
tags:"electricity charge"
},
{
area:"Physics",
name:"Radioactive decay",
equation:"N = N₀e^(−λt)",
meaning:"Ideal exponential decay of a radioactive population.",
symbols:"N₀: initial amount; λ: decay constant; t: time.",
units:"λ has inverse-time units",
example:"Half-life t½ = ln(2)/λ.",
tags:"radiation"
},
{
area:"Chemistry",
name:"Moles",
equation:"n = m/M",
meaning:"Amount of substance equals sample mass divided by molar mass.",
symbols:"n: mol; m: mass; M: molar mass in matching units.",
units:"mol",
example:"18 g water is about 1 mol.",
tags:"stoichiometry"
},
{
area:"Chemistry",
name:"Molar concentration",
equation:"c = n/V",
meaning:"Amount of solute divided by final solution volume.",
symbols:"c: concentration; n: amount; V: solution volume.",
units:"mol/L or mol/m³",
example:"0.5 mol in 2 L gives 0.25 mol/L.",
tags:"solutions"
},
{
area:"Chemistry",
name:"Dilution",
equation:"C₁V₁ = C₂V₂",
meaning:"For dilution without solute loss, amount of solute remains constant.",
symbols:"C: concentration; V: volume.",
units:"Use consistent volume units",
example:"10 mL of 2 mol/L diluted to 100 mL gives 0.2 mol/L.",
tags:"solutions"
},
{
area:"Chemistry",
name:"Ideal gas law",
equation:"PV = nRT",
meaning:"Approximation for gases when intermolecular effects are small.",
symbols:"P: Pa; V: m³; n: mol; R=8.314 J/(mol·K); T: kelvin.",
units:"SI units with this R",
example:"Convert Celsius to kelvin before using.",
tags:"gas"
},
{
area:"Chemistry",
name:"pH",
equation:"pH ≈ −log₁₀[H⁺]",
meaning:"For dilute aqueous solutions, concentration approximates hydrogen-ion activity.",
symbols:"[H⁺]: mol/L in this approximation.",
units:"Dimensionless",
example:"[H⁺]=10⁻³ mol/L gives pH≈3.",
tags:"acid base"
},
{
area:"Chemistry",
name:"Equilibrium constant",
equation:"K = product activities / reactant activities",
meaning:"Activities are raised to their balanced-reaction stoichiometric powers; pure solids and liquids are omitted.",
symbols:"K: equilibrium constant; activities are dimensionless.",
units:"Dimensionless with activity definition",
example:"For aA+bB⇌cC, K=aC^c/(aA^a aB^b).",
tags:"equilibrium"
},
{
area:"Chemistry",
name:"Reaction rate law",
equation:"rate = k[A]^m[B]^n",
meaning:"Concentration dependence of reaction rate; exponents are normally determined experimentally.",
symbols:"k: rate constant; [A],[B]: concentrations; m,n: reaction orders.",
units:"Depend on reaction order",
example:"Do not assume orders equal equation coefficients.",
tags:"kinetics"
},
{
area:"Chemistry",
name:"Cell potential",
equation:"E°cell = E°cathode − E°anode",
meaning:"Standard cell potential from standard reduction potentials.",
symbols:"E°: voltage in volts.",
units:"V",
example:"Use reduction potentials from the same table.",
tags:"electrochemistry"
},
{
area:"Mathematics",
name:"Power rule derivative",
equation:"d(xⁿ)/dx = nxⁿ⁻¹",
meaning:"Derivative of a power function.",
symbols:"n: constant exponent.",
units:"Output units/input units",
example:"d(x³)/dx=3x².",
tags:"calculus"
},
{
area:"Mathematics",
name:"Power rule integral",
equation:"∫xⁿ dx = xⁿ⁺¹/(n+1)+C",
meaning:"Indefinite integral for n≠−1.",
symbols:"C: constant of integration.",
units:"Output units × input units",
example:"∫x² dx=x³/3+C.",
tags:"calculus"
},
{
area:"Mathematics",
name:"Arithmetic mean",
equation:"x̄ = Σxᵢ/n",
meaning:"Sum of observations divided by the number of observations.",
symbols:"xᵢ: observation; n: count.",
units:"Same as observations",
example:"Mean of 2,4,6 is 4.",
tags:"statistics"
},
{
area:"Engineering",
name:"Nyquist sampling criterion",
equation:"fₛ > 2fmax",
meaning:"Ideal band-limited signal sampling criterion; practical systems also need anti-alias filtering and margin.",
symbols:"fₛ: sample rate; fmax: highest signal frequency.",
units:"Hz",
example:"For a 100 Hz signal bandwidth, ideal sample rate exceeds 200 samples/s.",
tags:"signals"
},
{
area:"Biomedical Engineering",
name:"ECG",
equation:"Voltage differences plotted over time",
meaning:"ECG records electrical potential differences associated with cardiac electrical activity; artifacts and calibration matter.",
symbols:"Amplitude commonly mV; time s.",
units:"mV and s",
example:"Check gain, paper speed and lead before measuring.",
tags:"heart instrumentation"
},
{
area:"Biomedical Engineering",
name:"EEG",
equation:"Scalp potential differences over time",
meaning:"EEG measures small voltage changes related to brain activity and is sensitive to artifacts.",
symbols:"Amplitude often µV; frequency Hz.",
units:"µV, Hz",
example:"Eye and muscle activity may contaminate signals.",
tags:"brain signals"
},
{
area:"Biomedical Engineering",
name:"EMG",
equation:"Electrical activity associated with muscle activation",
meaning:"Electromyography records muscle electrical activity.",
symbols:"Amplitude may be µV or mV depending on method.",
units:"µV or mV",
example:"Electrode placement affects signal quality.",
tags:"muscle"
},
{
area:"Biomedical Engineering",
name:"Sensor sensitivity",
equation:"S = Δoutput/Δinput",
meaning:"Change in sensor output per change in measured input over a stated range.",
symbols:"S: sensitivity.",
units:"Output unit/input unit",
example:"20 mV change for 10°C gives 2 mV/°C.",
tags:"sensors"
},
{
area:"Biomedical Engineering",
name:"Stress",
equation:"σ = F/A",
meaning:"Average normal force divided by cross-sectional area.",
symbols:"σ: stress; F: force; A: area.",
units:"Pa",
example:"Use the load-bearing cross-sectional area.",
tags:"biomechanics materials"
},
{
area:"Biomedical Engineering",
name:"Strain",
equation:"ε = ΔL/L₀",
meaning:"Length change divided by original length.",
symbols:"ΔL: change; L₀: original length.",
units:"Dimensionless or %",
example:"1 mm extension of 100 mm gives 1% strain.",
tags:"biomechanics"
},
{
area:"Biomedical Engineering",
name:"Hooke's law",
equation:"σ = Eε",
meaning:"Stress is proportional to strain within the linear elastic range.",
symbols:"σ: stress; E: Young's modulus; ε: strain.",
units:"Pa",
example:"Not valid for all materials or all loads.",
tags:"materials"
},
{
area:"Biomedical Engineering",
name:"Poiseuille flow",
equation:"Q = πr⁴ΔP/(8ηL)",
meaning:"Ideal laminar Newtonian flow through a long, straight, rigid cylindrical tube.",
symbols:"Q: flow; r: radius; ΔP: pressure difference; η: viscosity; L: tube length.",
units:"Q in m³/s in SI",
example:"Radius has a fourth-power effect in the ideal model.",
tags:"blood flow"
},
{
area:"Biomedical Engineering",
name:"Ultrasound depth",
equation:"depth ≈ c·t/2",
meaning:"Pulse-echo depth uses round-trip travel time, divided by two.",
symbols:"c: sound speed; t: round-trip time.",
units:"m",
example:"Soft tissue is often approximated as 1540 m/s; tissues vary.",
tags:"imaging ultrasound"
},
{
area:"Biomedical Engineering",
name:"Absorbed radiation dose",
equation:"D = Eabs/m",
meaning:"Energy imparted per unit mass.",
symbols:"D: dose; Eabs: absorbed energy; m: mass.",
units:"Gy = J/kg",
example:"Clinical radiation decisions need qualified supervision.",
tags:"medical physics"
},
{
area:"Engineering",
name:"Series resistors",
equation:"Rtotal = R₁ + R₂ + …",
meaning:"Resistances in series add for ideal resistors.",
symbols:"R: resistance.",
units:"Ω",
example:"100 Ω + 100 Ω = 200 Ω.",
tags:"circuits"
},
{
area:"Engineering",
name:"Parallel resistors",
equation:"1/Rtotal = Σ(1/Rᵢ)",
meaning:"Reciprocal resistances add in parallel.",
symbols:"Rᵢ: each resistance.",
units:"Ω",
example:"Two 100 Ω resistors in parallel give 50 Ω.",
tags:"circuits"
},
{
area:"Physics",
name:"Useful constants",
equation:"g≈9.81 m/s²; c≈3.00×10⁸ m/s; h≈6.626×10⁻³⁴ J·s; e≈1.602×10⁻¹⁹ C",
meaning:"Approximate constants for introductory calculations.",
symbols:"g gravity; c light speed; h Planck constant; e elementary charge.",
units:"Shown beside each constant",
example:"Use the precision required by your question.",
tags:"constants"
},
{
area:"Engineering",
name:"Common conversions",
equation:"1 mL=1 cm³; 1 L=10⁻³ m³; 1 kPa=1000 Pa; 1 mmHg≈133.322 Pa",
meaning:"Useful laboratory and clinical unit conversions.",
symbols:"Convert before substituting into equations.",
units:"SI and common units",
example:"Check dimensions throughout every calculation.",
tags:"units"
}
];

export const areas = [
  "All",
  ...new Set(referenceItems.map(item => item.area))
];
