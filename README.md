# Friedensinitiative Website

Mehrsprachige React + Vite Website (EN/DE/FR) für die globale Friedensinitiative,
mit **Decap CMS** unter `/admin` zum Editieren von Inhalten ohne Code.

- **Hosting:** Netlify (Auto-Build auf Push zu `main`)
- **CMS:** Decap CMS 3 mit Netlify Identity + Git Gateway
- **Repo:** `VedicPandits/friedensinitiative-website`

---

## Erstmaliges Setup (einmalig nach Push)

Siehe **[SETUP.md](./SETUP.md)** für die Schritt-für-Schritt-Anleitung:
1. Netlify Site mit GitHub verbinden
2. Netlify Identity aktivieren
3. Git Gateway aktivieren
4. Benutzer einladen

Sobald das einmal eingerichtet ist, läuft alles automatisch.

---

## Tägliche Nutzung

### Inhalte über das CMS bearbeiten

1. Auf `https://<deine-site>.netlify.app/admin/` gehen
2. Mit eingeladener E-Mail einloggen
3. Sektion wählen (🇬🇧 English / 🇩🇪 Deutsch / 🇫🇷 Français)
4. Editieren → "Save" → "Publish"

Decap CMS committet die Änderungen automatisch in den `main` Branch, Netlify
baut die Site neu — typisch 1-2 Minuten bis live.

### Editorial Workflow

Das CMS ist auf `editorial_workflow` konfiguriert. Saves erscheinen zuerst als
Drafts unter "Workflow", können dort begutachtet und dann publiziert werden.
Wer das nicht braucht, kann in `public/admin/config.yml` die Zeile
`publish_mode: editorial_workflow` auskommentieren.

---

## Lokale Entwicklung

```bash
npm install
npm run dev      # Vite dev server auf http://localhost:5173
npm run build    # Production-Build nach dist/
npm run preview  # Build lokal anschauen
```

> Das CMS unter `/admin` funktioniert **nicht** auf `localhost`, weil Git Gateway
> einen deployten Netlify-Endpunkt braucht. Lokal nur den Frontend-Code testen.

---

## Projektstruktur

```
.
├── index.html                  Root HTML (lädt Netlify Identity Widget)
├── netlify.toml                Netlify Build- & Redirect-Config
├── public/
│   ├── admin/
│   │   ├── config.yml          ⭐ Decap CMS Konfiguration (Collections, Felder)
│   │   └── index.html          ⭐ Admin-Panel (lädt Decap CMS + Identity)
│   ├── uploads/                Bild-Uploads via CMS landen hier
│   └── yagya-ceremony.jpg
├── src/
│   ├── i18n/locales/
│   │   ├── en.json             Editierbar via CMS
│   │   ├── de.json             Editierbar via CMS
│   │   └── fr.json             Editierbar via CMS
│   ├── components/             UI-Komponenten
│   ├── pages/                  Seiten (Home, About, Donate, Contact, …)
│   └── config/site.config.ts   Statische Site-Config (nicht via CMS)
└── package.json
```

---

## Was kann via CMS editiert werden?

Pro Sprache (EN/DE/FR):
- Navigation (Home, About, Donate, Contact)
- Hero-Bereich (Titel, Untertitel, Beschreibung)
- Training-Sektion
- Yoga-Sektion (inkl. Sanskrit-Zitat)
- Yagya-Sektion
- Medien-Sektion
- About-Seite (Maharishi)
- Donate-Seite
- Contact-Seite (inkl. Formular-Labels)
- Footer
- Sprachbezeichnungen

Zusätzlich:
- 🖼️ Bilder-Library unter `/admin` → Bilder werden in `public/uploads/` gespeichert

**Nicht via CMS editierbar (bewusst):** Site-Config (`src/config/site.config.ts`),
weil das TypeScript ist und nicht zuverlässig per Decap geschrieben werden kann.
Für Änderungen dort bitte direkt im Code editieren.

---

## Tech Stack

- **Framework:** React 19 + TypeScript + Vite 7
- **Routing:** React Router 7
- **Styling:** Tailwind CSS + shadcn/ui (Radix Primitives)
- **i18n:** i18next + react-i18next
- **Forms:** react-hook-form + zod
- **CMS:** Decap CMS 3.x + Netlify Identity + Git Gateway
- **Hosting:** Netlify
