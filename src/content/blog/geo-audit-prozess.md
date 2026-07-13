---
title: "Mein GEO-Audit Prozess: So analysiere ich Websites für KI-Sichtbarkeit"
description: "Wie sieht ein professioneller GEO-Audit aus? Ich zeige meinen persönlichen Prozess von der technischen Basis bis zur KI-Sichtbarkeit, Schritt für Schritt."
pubDate: 2026-07-04
author: "Yassine Oulada"
authorRole: "GEO & SEO Spezialist"
category: "Tools & Messung"
categoryColor: "#5c7186"
level: "Fortgeschritten"
readingTime: "18 Min"
slug: "geo-audit-prozess"
heroImage: "/images/geo-audit-prozess.svg"
---

Schon in meinen ersten GEO-Audits tauchte ein Befund auf, der in einen Satz passt: Die Website blockiert die KI-Bots, von denen sie zitiert werden will.

Klingt absurd, ist aber erstaunlich verbreitet. Viele robots.txt-Dateien wurden vor Jahren aufgesetzt, oft mit restriktiven Vorlagen, und seitdem hat niemand mehr reingeschaut. GPTBot und PerplexityBot stehen dann auf der Sperrliste, während das Marketing-Team sich wundert, warum die Konkurrenz in ChatGPT auftaucht und man selbst nicht.

Solche Dinge findet ein strukturierter Audit in der ersten Stunde. In diesem Artikel lege ich den Prozess offen, den ich mir dafür erarbeitet habe: fünf Phasen, die aufeinander aufbauen, inklusive der Stellen, an denen es typischerweise hakt.

Eine Vorbemerkung zur Erwartungshaltung: Ein GEO-Audit ist unschärfer als ein SEO-Audit. Es gibt (noch) keine Search Console für KI-Antworten, wobei ich mir ziemlich sicher bin, dass Google an genau so etwas arbeitet. Was es schon gibt: Tools, die mit hinterlegten Prompts arbeiten, sie aktiv in die jeweiligen LLMs eingeben und die Antworten analysieren und vergleichen. In gewisser Hinsicht lässt sich GEO also messen, aber eben nur begrenzt, und das meiste ist noch nicht in endgültige Zahlen zu fassen. Was man verlässlich kann: systematisch prüfen, dokumentieren und vergleichen. Das reicht, um bessere Entscheidungen zu treffen als die Konkurrenz.

## Phase 1: Technische Basis

Hier entscheidet sich, ob KI-Crawler die Website überhaupt erreichen. Drei Prüfpunkte:

**robots.txt.** Diese Bots müssen ausdrücklich erlaubt sein: `GPTBot` (OpenAI), `PerplexityBot`, `ClaudeBot` (Anthropic), `CCBot` (Common Crawl, Basis vieler Trainingsdaten) und `GoogleOther` (Google AI). Der Klassiker, siehe oben, ist die pauschale Sperre. Der zweite Klassiker: Ein `User-agent: *`-Block mit Disallow-Regeln, die versehentlich auch die KI-Bots treffen.

**Core Web Vitals.** LCP unter 2,5 Sekunden, CLS unter 0,1, INP unter 200 ms. Langsame Seiten werden von Crawlern seltener und flacher gecrawlt. Nichts Neues für SEO-Leute, aber für GEO genauso relevant.

**Interne Verlinkung.** KI-Systeme folgen Links, um Themenzusammenhänge zu verstehen. Wichtige Inhalte sollten maximal drei Klicks von der Startseite entfernt sein. Verwaiste Seiten existieren für Maschinen praktisch nicht.

## Phase 2: Content-Analyse

Jetzt wird es handwerklich. Ich lese die wichtigsten Seiten mit einer einzigen Testfrage: **Wenn ich nur den ersten Satz jedes Abschnitts lese, verstehe ich dann die Kernaussagen?**

Mach diesen Test mal mit einer beliebigen Unternehmens-Website: Die Antwort lautet erstaunlich oft Nein. Die Information ist da, aber vergraben: unter Einleitungsfloskeln, unter "In diesem Abschnitt erfahren Sie", unter Marketing-Prosa. KI-Systeme graben nicht. Sie nehmen, was vorne steht.

Worauf ich außerdem achte:

- **Zitierfähigkeit.** "GEO wird immer wichtiger" kann niemand zitieren. "Über 30 % der Google-Suchen enthalten laut BrightEdge eine AI Overview" schon. Konkrete, belegbare Aussagen sind die Währung.
- **Formate.** Definitionssätze, Tabellen, nummerierte Schritte, FAQ-Blöcke. Alles, was einer Maschine die Extraktion erleichtert.
- **Content-Lücken.** Welche Fragen der Zielgruppe beantwortet die Website nicht? Die Lückenliste wird später zum Redaktionsplan.

## Phase 3: Schema Markup

Der Check ist schnell, die Befunde sind meist eindeutig. Prioritätenliste für die üblichen B2B-Websites und Blogs:

| Schema-Typ | Wo | Warum |
|---|---|---|
| `Article` / `BlogPosting` | Alle Artikel | Autorschaft und Datum maschinenlesbar |
| `Person` | Autorenprofil | E-E-A-T-Signal, mit `sameAs` zu LinkedIn |
| `Organization` | Startseite | Unternehmenskontext |
| `FAQPage` | FAQ-Sektionen | Direkte Frage-Antwort-Extraktion |
| `HowTo` | Anleitungen | Schritt-Extraktion |
| `BreadcrumbList` | Unterseiten | Seitenstruktur |

Zwei Fehler tauchen dabei besonders oft auf. Erstens: Schema nur auf der Startseite, der Rest der Website ist nackt. Zweitens: Schema-Angaben, die nicht mit dem sichtbaren Seiteninhalt übereinstimmen. Letzteres ist nicht nur wirkungslos, sondern riskant, weil es als Manipulationsversuch gewertet werden kann. Validiert wird alles mit dem [Schema Markup Validator](https://validator.schema.org/).

Wer tiefer einsteigen will: Ich habe dem Thema einen [eigenen Artikel](/blog/schema-markup-fuer-geo) gewidmet.

## Phase 4: E-E-A-T

Die weichste Phase, aber nicht die unwichtigste. Ich prüfe im Kern drei Dinge:

**Ist erkennbar, wer schreibt?** Echter Name, Rolle, Foto, Autorenseite. Anonymer Content hat es schwer, zitiert zu werden.

**Wird die Person außerhalb der eigenen Website bestätigt?** LinkedIn-Profil, Gastbeiträge, Erwähnungen. KI-Systeme führen Signale aus verschiedenen Quellen zusammen. Eine Person, die nur auf der eigenen Website existiert, ist ein schwaches Signal.

**Stimmen die Basics?** Impressum, Datenschutz, Kontaktmöglichkeit, belegte Behauptungen. In Deutschland ohnehin Pflicht, für Vertrauenssignale unverzichtbar.

## Phase 5: KI-Sichtbarkeit direkt testen

Die einzige Phase, die es im SEO-Audit nicht gibt, und ehrlich gesagt meine liebste. Ich stelle den relevanten Systemen (ChatGPT mit Websuche, Perplexity, Google AI Overviews, Copilot) systematisch Fragen aus drei Kategorien:

1. **Branded:** "Was macht [Unternehmen]?" Taucht die eigene Website als Quelle auf?
2. **Thematisch:** die zehn wichtigsten Fachfragen der Zielgruppe. Wer wird zitiert?
3. **Wettbewerb:** dieselben Fragen mit Blick auf die Konkurrenz. Wer dominiert das Thema bisher?

Jedes Ergebnis wird mit Screenshot und Datum dokumentiert. Ohne diese Baseline lässt sich später kein Fortschritt nachweisen, und genau daran scheitert die Erfolgsmessung sonst.

## Mein Werkzeugkasten

Unspektakulär, aber funktional: Google Search Console und Sistrix für die SEO-Seite, Screaming Frog fürs Crawling, PageSpeed Insights für die Vitals, Schema Markup Validator für strukturierte Daten.

Für den KI-Teil nutze ich hauptsächlich [Rankscale](https://rankscale.ai/): Das Tool hinterlegt Prompts, stellt sie automatisiert an ChatGPT, Perplexity, Google AI Overviews, Gemini, Copilot und über ein Dutzend weitere Systeme und wertet die Antworten aus. Drei Metriken sind dabei für den Audit besonders wertvoll. Der **Visibility Score** zeigt, wie oft eine Marke über alle getrackten Prompts und Modelle hinweg in KI-Antworten auftaucht. Die Unterscheidung zwischen **Mentions** (die Marke wird in der Antwort genannt) und **Citations** (die Website wird als Quelle verlinkt) trennt Bekanntheit von Zitierfähigkeit, genau die Unterscheidung, um die es bei GEO geht. Und der **AI Readiness Score** prüft die eigene Website auf Struktur, Klarheit und Autoritätssignale, also darauf, ob KI-Systeme die Inhalte überhaupt zuverlässig übernehmen können. Dazu kommt der Wettbewerbsvergleich: Wer wird bei denselben Prompts zitiert, und gewinnt oder verliert er gerade?

Für Stichproben und Detailfragen gehe ich trotzdem manuell in die Systeme. Aber die laufende Beobachtung, die sich per Hand kaum stemmen lässt, übernimmt das Tool.

## Ehrlich: Wo sind die Fallstudien?

An dieser Stelle stünde in vielen Blogs jetzt eine anonymisierte Fallstudie mit beeindruckenden Prozentzahlen. Die findest du hier nicht, denn ich habe noch keine, die diesen Namen verdient. Ich stehe mit GEO-Audits am Anfang: Die ersten Analysen sind gemacht, die Langzeit-Messungen laufen noch.

Was sich aus dokumentierten Erfahrungsberichten und der Funktionsweise der Systeme aber ableiten lässt: Wer die typischen Blocker behebt (gesperrte KI-Bots, fehlende Autorenprofile, Schema Markup nur auf der Startseite) und die wichtigsten Artikel nach dem Antwort-zuerst-Prinzip überarbeitet, kann nach etwa 90 Tagen mit ersten messbaren Erwähnungen in KI-Antworten rechnen. Garantien gibt es keine, dafür ist das Feld zu jung.

Sobald ich eigene Vorher-Nachher-Daten habe, die belastbar sind, dokumentiere ich sie genau hier. Das ist der Deal auf dieser Website: keine ausgedachten Erfolgsgeschichten, dafür ein Prozess, den du komplett nachvollziehen kannst.

## Zum Selbermachen

Die komplette Prüfliste aus diesem Prozess gibt es kompakt als PDF: [GEO-Checkliste herunterladen](/downloads/geo-checkliste.pdf). 36 Punkte, 6 Bereiche, direkt abhakbar.

Und falls du beim Durchgehen feststellst, dass deine robots.txt seit 2019 niemand mehr angefasst hat: Willkommen im Club. Genau dafür macht man Audits.
