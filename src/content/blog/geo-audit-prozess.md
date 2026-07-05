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

Das häufigste Ergebnis meiner GEO-Audits passt in einen Satz: Die Website blockiert die KI-Bots, von denen sie zitiert werden will.

Klingt absurd, ist aber Alltag. Viele robots.txt-Dateien wurden vor Jahren aufgesetzt, oft mit restriktiven Vorlagen, und seitdem hat niemand mehr reingeschaut. GPTBot und PerplexityBot stehen dann auf der Sperrliste, während das Marketing-Team sich wundert, warum die Konkurrenz in ChatGPT auftaucht und man selbst nicht.

Solche Dinge findet ein strukturierter Audit in der ersten Stunde. In diesem Artikel lege ich meinen kompletten Prozess offen: fünf Phasen, die aufeinander aufbauen, inklusive der Stellen, an denen es typischerweise hakt.

Eine Vorbemerkung zur Erwartungshaltung: Ein GEO-Audit ist unschärfer als ein SEO-Audit. Es gibt keine Search Console für KI-Antworten und keine offiziellen Ranking-Faktoren. Wer behauptet, KI-Sichtbarkeit exakt zu messen, übertreibt. Was man kann: systematisch prüfen, dokumentieren und vergleichen. Das reicht, um bessere Entscheidungen zu treffen als die Konkurrenz.

## Phase 1: Technische Basis

Hier entscheidet sich, ob KI-Crawler die Website überhaupt erreichen. Drei Prüfpunkte:

**robots.txt.** Diese Bots müssen ausdrücklich erlaubt sein: `GPTBot` (OpenAI), `PerplexityBot`, `ClaudeBot` (Anthropic), `CCBot` (Common Crawl, Basis vieler Trainingsdaten) und `GoogleOther` (Google AI). Der Klassiker, siehe oben, ist die pauschale Sperre. Der zweite Klassiker: Ein `User-agent: *`-Block mit Disallow-Regeln, die versehentlich auch die KI-Bots treffen.

**Core Web Vitals.** LCP unter 2,5 Sekunden, CLS unter 0,1, INP unter 200 ms. Langsame Seiten werden von Crawlern seltener und flacher gecrawlt. Nichts Neues für SEO-Leute, aber für GEO genauso relevant.

**Interne Verlinkung.** KI-Systeme folgen Links, um Themenzusammenhänge zu verstehen. Wichtige Inhalte sollten maximal drei Klicks von der Startseite entfernt sein. Verwaiste Seiten existieren für Maschinen praktisch nicht.

## Phase 2: Content-Analyse

Jetzt wird es handwerklich. Ich lese die wichtigsten Seiten mit einer einzigen Testfrage: **Wenn ich nur den ersten Satz jedes Abschnitts lese, verstehe ich dann die Kernaussagen?**

Bei den meisten Websites lautet die Antwort Nein. Die Information ist da, aber vergraben: unter Einleitungsfloskeln, unter "In diesem Abschnitt erfahren Sie", unter Marketing-Prosa. KI-Systeme graben nicht. Sie nehmen, was vorne steht.

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

Zwei Fehler sehe ich immer wieder. Erstens: Schema nur auf der Startseite, der Rest der Website ist nackt. Zweitens: Schema-Angaben, die nicht mit dem sichtbaren Seiteninhalt übereinstimmen. Letzteres ist nicht nur wirkungslos, sondern riskant, weil es als Manipulationsversuch gewertet werden kann. Validiert wird alles mit dem [Schema Markup Validator](https://validator.schema.org/).

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

Unspektakulär, aber bewährt: Google Search Console und Semrush für die SEO-Seite, Screaming Frog fürs Crawling, PageSpeed Insights für die Vitals, Schema Markup Validator für strukturierte Daten. Und für den KI-Teil: die Systeme selbst, manuell, mit einem simplen Dokumentations-Sheet. Es gibt inzwischen Tools, die "AI Visibility Tracking" versprechen. Ich beobachte die Kategorie, aber bisher ersetzt keines davon den manuellen Test.

## Ein Beispiel aus der Praxis

Anonymisiert, aber echt: B2B-Software-Unternehmen, rund 80 Blogartikel, solider SEO-Traffic, null Präsenz in KI-Antworten.

Der Audit fand die üblichen Verdächtigen: GPTBot blockiert, keine Autorenprofile, Schema Markup nur auf der Startseite. Die Maßnahmen der folgenden 90 Tage: robots.txt geöffnet, Autorenprofile für alle drei schreibenden Mitarbeiter aufgebaut, `BlogPosting`- und `Person`-Schema ausgerollt, 15 Artikel nach dem Antwort-zuerst-Prinzip umgeschrieben, 5 FAQ-Sektionen ergänzt.

Ergebnis nach 90 Tagen: 8 Erwähnungen in Perplexity bei Kernthemen (vorher: null), 3 Zitierungen in AI Overviews bei Long-Tail-Fragen, 2 Nennungen in ChatGPT bei Branded-Anfragen. Nebeneffekt: 18 % mehr organischer Traffic durch die überarbeiteten Artikel. GEO-Maßnahmen zahlen eben auch auf SEO ein.

## Zum Selbermachen

Die komplette Prüfliste aus diesem Prozess gibt es kompakt als PDF: [GEO-Checkliste herunterladen](/downloads/geo-checkliste.pdf). 36 Punkte, 6 Bereiche, direkt abhakbar.

Und falls du beim Durchgehen feststellst, dass deine robots.txt seit 2019 niemand mehr angefasst hat: Willkommen im Club. Genau dafür macht man Audits.
