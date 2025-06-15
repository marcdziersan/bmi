# 📱 BMI Rechner Progressive Web App (PWA)

Eine **progressive Web App** zur Berechnung des Body-Mass-Index (BMI) mit Dark-Mode-Unterstützung und Installierbarkeit auf allen Geräten.

## ✨ Live Demo
➡️ [https://marcdziersan.github.io/bmi/](https://marcdziersan.github.io/bmi/)

## 🔍 Features
- **BMI-Berechnung** mit Echtzeit-Ergebnis
- **🌙 Dark/Light Mode** mit automatischer Systemerkennung
- **📱 PWA-Optimiert**:
  - Installierbar auf Homescreen
  - Offline-fähig
  - App-ähnliche Oberfläche
- **📊 Visuelle BMI-Klassifikation** (Untergewicht bis Adipositas)
- **🔢 Intelligente Eingabevalidierung**

## 🛠 Technologien
- **Frontend**: HTML5, CSS3 (mit Variablen), JavaScript
- **PWA**: Web Manifest, Service Worker, Cache API
- **Hosting**: GitHub Pages

## 📥 Installation
1. **Als Web-App**:
   - Chrome/Edge: Klicken Sie auf "Installieren" in der Adressleiste
   - Safari: "Teilen" > "Zum Home-Bildschirm"
2. **Lokal entwickeln**:
   ```bash
   git clone https://github.com/marcdziersan/bmi.git
   cd bmi
   npx serve
   ```

## 📂 Projektstruktur
```
/bmi/
├── index.html           # Hauptanwendung
├── sw.js                # Service Worker
├── manifest.webmanifest # PWA-Konfig
└── icons/               # Icons & Bilder
```

## 🤝 Mitwirkung
Issues und PRs sind willkommen!  
Bitte beachten Sie den [Code of Conduct](CODE_OF_CONDUCT.md).

## 📜 Lizenz
MIT © 2023 Marc Dziersan  
➡️ [Lizenz anzeigen](LICENSE)

---

**Letztes Update**: ${new Date().toISOString().split('T')[0]}  
**Version**: 1.0.0  
**Projektstatus**: ⚡ Produktiv
```
