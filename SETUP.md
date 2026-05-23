# Setup-Anleitung

Diese Anleitung führt Dich Schritt für Schritt durch das einmalige Setup, damit
die Website auf Netlify läuft und das CMS unter `/admin` mit Logins funktioniert.

> **Reihenfolge ist wichtig.** Mach die Schritte genau in dieser Reihenfolge.

---

## Voraussetzungen

- [x] GitHub-Repo: `VedicPandits/friedensinitiative-website`
- [x] Code dieses Projekts auf `main` Branch gepusht
- [ ] Netlify-Account (kostenloser Free-Tier reicht)

---

## Schritt 1 — Netlify Site mit GitHub verbinden

1. Auf [app.netlify.com](https://app.netlify.com) einloggen
2. **"Add new site"** → **"Import an existing project"**
3. **"Deploy with GitHub"** → ggf. GitHub autorisieren
4. Repo `VedicPandits/friedensinitiative-website` auswählen
5. Build-Einstellungen sollten automatisch erkannt werden aus `netlify.toml`:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - **Branch:** `main`
6. **"Deploy site"** klicken
7. Warten, bis der erste Build durchläuft (ca. 2 Minuten)

> Falls der Build fehlschlägt mit Node-Version-Fehler: In **Site settings →
> Build & deploy → Environment variables** `NODE_VERSION` auf `20` setzen.
> Steht eigentlich schon in `netlify.toml`, aber zur Sicherheit.

---

## Schritt 2 — Netlify Identity aktivieren

Identity ist das, was den eingeladenen Benutzern erlaubt, sich ein Passwort zu
setzen und sich später am CMS einzuloggen.

1. In der Site-Übersicht: **Integrations** Tab (links in der Sidebar)
2. Suche nach **"Netlify Identity"** → **"Enable Identity"**
3. Nach dem Aktivieren landest Du auf der Identity-Konfigurationsseite

### Registration-Einstellungen

4. **Registration preferences** → **"Invite only"** wählen
   (sehr wichtig! Sonst kann sich jeder Internet-Nutzer selbst registrieren)
5. **External providers** (optional): Hier könntest Du Login mit Google /
   GitHub erlauben, ist aber nicht nötig wenn nur Passwort-Login gewünscht.
6. **Emails** → Templates: Die Default-Templates funktionieren. Du kannst sie
   später anpassen, falls Du die Einladungs-E-Mails personalisieren willst.

---

## Schritt 3 — Git Gateway aktivieren

Git Gateway ist der Dienst, der dem CMS erlaubt, im Namen der eingeloggten
Benutzer Commits in Dein GitHub-Repo zu schreiben — ohne dass die Benutzer
GitHub-Accounts brauchen.

1. Auf der Identity-Seite nach unten scrollen zu **"Services"**
2. Bei **Git Gateway** auf **"Enable Git Gateway"** klicken
3. Netlify fragt nach GitHub-Berechtigungen → autorisieren
4. Fertig — Git Gateway ist aktiv

> Hinweis: Falls Du eine GitHub-Org verwendest (was Du tust: `VedicPandits`),
> stelle sicher, dass die Netlify-OAuth-App Zugriff auf diese Org hat. Falls
> das Repo nicht erscheint: Auf GitHub → **Settings → Applications →
> Authorized OAuth Apps → Netlify → Grant** für die Organisation.

---

## Schritt 4 — Erste Benutzer einladen

1. Zurück zur Identity-Seite (**Integrations → Identity → Manage**)
2. **"Invite users"** klicken
3. E-Mail-Adressen eingeben (eine pro Zeile)
4. **"Send"** klicken

Die Eingeladenen bekommen eine E-Mail mit einem Link wie:
```
https://<deine-site>.netlify.app/#invite_token=ABC123...
```

Wenn sie darauf klicken:
1. Die Identity Widget öffnet sich automatisch (weil im `index.html` eingebunden)
2. Sie werden gebeten, ein Passwort zu setzen
3. Nach dem Klick auf "Sign up" werden sie auf `/admin/` weitergeleitet
4. Dort können sie sofort Inhalte editieren

---

## Schritt 5 — Erster Login-Test

1. Selbst eine Einladung an Deine eigene E-Mail senden
2. Link klicken, Passwort setzen
3. Auf `/admin/` solltest Du das CMS sehen mit:
   - 🇬🇧 English Content
   - 🇩🇪 Deutsche Inhalte
   - 🇫🇷 Contenu Français
   - 🖼️ Bilder / Images

4. Eine Sektion öffnen, Text ändern, **"Save"** → **"Publish"**
5. Nach 1-2 Minuten ist die Änderung auf der Live-Site

---

## Schritt 6 — Custom Domain (optional)

Wenn Du eine eigene Domain verwenden willst (z.B. `friedensinitiative.ch`):

1. **Site settings → Domain management → Add custom domain**
2. Deine Domain eingeben
3. DNS-Einstellungen folgen, die Netlify zeigt
4. HTTPS wird automatisch via Let's Encrypt provisioniert

> Nach dem Setzen der Custom Domain: In Netlify Identity →
> **Settings → Identity → Site URL** überprüfen, dass die richtige URL steht.
> Auch in `public/admin/config.yml` das Feld `site_url` und `display_url`
> auf die neue Domain umstellen.

---

## Troubleshooting

### "Failed to load config.yml" im Admin-Panel
- Hard-Refresh (Cmd+Shift+R / Ctrl+Shift+R)
- Browser-Konsole öffnen → schauen, ob 404 oder YAML-Parse-Fehler
- YAML ist Einrückungs-sensitiv — keine Tabs verwenden, nur Spaces

### Login schlägt fehl mit "No identity instance detected"
- Sicherstellen, dass Identity aktiviert ist (Schritt 2)
- Hard-Refresh des `/admin/` URLs
- Im Inkognito-Fenster testen (Cookie-Probleme ausschließen)

### "You don't have permission to access this resource"
- Git Gateway ist nicht aktiviert (Schritt 3 wiederholen)
- Oder: Der eingeloggte User hat keine `Roles`, die Schreibzugriff erlauben.
  Standardmäßig brauchen User keine speziellen Rollen.

### Änderungen werden gespeichert, aber Site updated nicht
- Schauen, ob in GitHub neue Commits von einem Bot-User wie
  `decap-cms` oder vom eingeloggten Identity-User kommen
- Wenn ja: Netlify Deploy läuft? In Netlify unter **Deploys** prüfen
- Build könnte fehlschlagen — Logs anschauen

### Einladungslink funktioniert nicht
- Identity Widget muss in `index.html` geladen sein (ist es)
- URL muss `#invite_token=...` enthalten (Hash, nicht Query-Param)
- Test in einem anderen Browser

---

## Nützliche Links

- [Decap CMS Docs](https://decapcms.org/docs/)
- [Netlify Identity Docs](https://docs.netlify.com/security/secure-access-to-sites/identity/)
- [Git Gateway Docs](https://docs.netlify.com/security/secure-access-to-sites/git-gateway/)
