# The Astral Prism Archive
**A Protected Audio & Text Repository for Baldur's Gate 3 Lore**

*The Astral Prism Archive* is a high-fidelity web interface designed to organize, preserve, and deliver the written and spoken lore of *Baldur's Gate 3* (Act 1). Built to modern Library and Information Science (MLIS) metadata standards, the archive replaces passive reading with an enhanced information-seeking experience, combining verbatim text, granular schema cataloging, and synchronized voice performances.

---

## 📚 Curatorial & Performance Credits

* **Information Architecture & Curators**: Chelsea Jones & Paige Turner, MLIS
* **Voice Performers**: Chelsea Jones & Sebastian Jones

---

## 🏛️ MLIS-Standard Information Architecture & Features

This archive upgrades traditional gaming wikis and static text lists into a structured, searchable digital repository:

* **Granular Schema Metadata**: Every item is cataloged with unique identifiers (`Item_ID`), document categories (Books, Primers, Liturgies, Journals, Dissections), spatial coordinates, and in-game location provenance.
* **Dual-Pane Reader**: Simultaneously examine verbatim transcripts alongside relational companion notes, camp dialogue triggers, and clearance classifications.
* **Controlled Companion Vocabularies**: Filter the collection through targeted companion reading lists (Gale, Shadowheart, Astarion, Lae'zel, Wyll, Karlach).
* **Restricted Clearance Protocol**: Items containing dangerous dark lore, devil pacts, or illithid stasis notes are marked with visual red wax seals for restricted access handling.
* **Excel / Data Export**: Integrated Tab-Separated Value (TSV) export buttons allow researchers and users to copy complete metadata rows directly into spreadsheets for data analysis.

---

## 🎧 Native Audio Engine ("The Ornate Music Box")

To eliminate latency, cross-origin security blocks (CORS), and external hosting failures, *The Astral Prism Archive* streams 192 voice recordings locally:

* **Zero-Latency Streaming**: Direct relative pathing (`/public/audio/`) ensures native browser playback without reliance on external drive APIs.
* **Interactive Mechanical Controls**: Features interactive scrubber bars, volume attenuation, mute toggling, and winding key animations during active voice playback.

---

## 📁 Repository Structure

```text
BG3_Library/
└── astral-prism-archive/
    ├── index.html
    ├── package.json
    ├── src/
    │   ├── main.jsx
    │   └── App.jsx
    └── public/
        └── audio/
            ├── BB-Audio/        # 100+ Voice Files (Narrator: Chelsea Jones)
            └── BoH-AUDIO/       # 90+ Voice Files (Narrators: Chelsea & Sebastian Jones)
