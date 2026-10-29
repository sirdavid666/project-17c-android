"""Apply the BioNexa launcher artwork and label to a fresh Capacitor Android project."""

from pathlib import Path
from PIL import Image
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
ANDROID = ROOT / "android" / "app" / "src" / "main" / "res"
ICON = ROOT / "assets" / "icon.png"
FOREGROUND = ROOT / "assets" / "icon-foreground.png"
NAVY = "#0A1222"

if not ICON.is_file() or not FOREGROUND.is_file():
    raise SystemExit("BioNexa icon source files are missing from assets/.")

if not (ANDROID / "values" / "strings.xml").is_file():
    raise SystemExit(
        "Android project was not generated; missing res/values/strings.xml"
    )

icon_sizes = {
    "mdpi": 48,
    "hdpi": 72,
    "xhdpi": 96,
    "xxhdpi": 144,
    "xxxhdpi": 192
}

source = Image.open(ICON).convert("RGBA")
foreground_source = Image.open(FOREGROUND).convert("RGBA")

for density, size in icon_sizes.items():
    folder = ANDROID / f"mipmap-{density}"
    folder.mkdir(parents=True, exist_ok=True)

    rendered = source.resize(
        (size, size),
        Image.Resampling.LANCZOS
    )

    rendered.save(folder / "ic_launcher.png", optimize=True)
    rendered.save(folder / "ic_launcher_round.png", optimize=True)

    fg_size = int(size * 2.25)
    foreground = foreground_source.resize(
        (fg_size, fg_size),
        Image.Resampling.LANCZOS
    )

    foreground.save(
        folder / "ic_launcher_foreground.png",
        optimize=True
    )

values = ANDROID / "values"
values.mkdir(parents=True, exist_ok=True)

colors_file = values / "colors.xml"

if colors_file.exists():
    tree = ET.parse(colors_file)
    colors_root = tree.getroot()
else:
    colors_root = ET.Element("resources")

color = colors_root.find('color[@name="ic_launcher_background"]')

if color is None:
    color = ET.SubElement(
        colors_root,
        "color",
        {"name": "ic_launcher_background"}
    )

color.text = NAVY

ET.indent(colors_root, space="    ")

ET.ElementTree(colors_root).write(
    colors_file,
    encoding="utf-8",
    xml_declaration=True
)

adaptive = ANDROID / "mipmap-anydpi-v26"
adaptive.mkdir(parents=True, exist_ok=True)

xml = """<?xml version="1.0" encoding="utf-8"?>
<adaptive-icon xmlns:android="http://schemas.android.com/apk/res/android">
    <background android:drawable="@color/ic_launcher_background" />
    <foreground android:drawable="@mipmap/ic_launcher_foreground" />
</adaptive-icon>
"""

(adaptive / "ic_launcher.xml").write_text(xml)
(adaptive / "ic_launcher_round.xml").write_text(xml)

strings_file = values / "strings.xml"
tree = ET.parse(strings_file)
strings_root = tree.getroot()

app_name = strings_root.find('string[@name="app_name"]')

if app_name is None:
    app_name = ET.SubElement(
        strings_root,
        "string",
        {"name": "app_name"}
    )

app_name.text = "BioNexa"

ET.indent(strings_root, space="    ")

tree.write(
    strings_file,
    encoding="utf-8",
    xml_declaration=True
)

print("BioNexa branding applied: app label and launcher icons.")
