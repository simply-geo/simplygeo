---
title: "Mein GEO-Audit Prozess: So analysiere ich Websites für KI-Sichtbarkeit"
description: "Wie sieht ein professioneller GEO-Audit aus? Ich zeige meinen persönlichen Prozess — von der technischen Basis bis zur KI-Sichtbarkeit — Schritt für Schritt."
pubDate: 2025-02-14
author: "Yassine Oulada"
authorRole: "GEO & SEO Spezialist"
category: "Tools & Messung"
categoryColor: "#ffd23f"
level: "Fortgeschritten"
readingTime: "18 Min"
slug: "geo-audit-prozess"
heroImage: "/images/geo-audit-prozess.svg"
---

## Warum ein GEO-Audit anders ist als ein SEO-Audit

Ein klassischer SEO-Audit hat klare Metriken: Ladezeit, Crawl-Fehler, fehlende Meta-Descriptions, Backlink-Profil. Alles messbar, alles in Tools abbildbar.

Ein GEO-Audit ist komplexer — weil die "Ranking-Faktoren" für KI-Systeme weniger transparent sind und sich ständig weiterentwickeln. Es gibt kein GEO-Pendant zu Google Search Console. Trotzdem lässt sich systematisch vorgehen.

Mein Prozess ist in fünf Phasen unterteilt. Ich führe ihn bei jedem Kunden in dieser Reihenfolge durch — weil jede Phase auf der vorherigen aufbaut.

## Phase 1: Technische Basis

**Ziel:** Sicherstellen, dass KI-Crawler die Website überhaupt erreichen und verarbeiten können.

### Crawlbarkeit für KI-Bots prüfen

Der erste Schritt ist ein Blick in die `robots.txt`. Viele Websites blockieren noch immer alle Bots, die nicht explizit in einer Allowlist stehen — was bedeutet, dass GPTBot, PerplexityBot, ClaudeBot und CCBot keinen Zugang haben.

Folgende Bots müssen ausdrücklich erlaubt sein:
- `GPTBot` (OpenAI / ChatGPT Search)
- `PerplexityBot` (Perplexity AI)
- `ClaudeBot` (Anthropic)
- `CCBot` (Common Crawl — Basis für viele LLM-Trainingsdaten)
- `GoogleOther` (Google AI Overviews)

### Core Web Vitals

Langsame Websites werden von KI-Crawlern de-priorisiert. LCP unter 2,5 Sekunden, CLS unter 0,1, INP unter 200ms — das sind die Schwellenwerte, die ich als Minimum betrachte.

### Seitenstruktur und interne Verlinkung

KI-Systeme folgen internen Links, um thematische Zusammenhänge zu verstehen. Eine flache, gut verlinkte Seitenstruktur hilft dabei, dass zusammenhängende Inhalte gemeinsam bewertet werden.

## Phase 2: Content-Analyse

**Ziel:** Bewerten, ob der vorhandene Content von KI-Systemen korrekt extrahiert und genutzt werden kann.

### Direktheit und Struktur

Ich lese jeden Artikel mit einer einfachen Frage: "Wenn ich nur den ersten Satz jedes Abschnitts lese — habe ich trotzdem alle wichtigen Aussagen?" Wenn die Antwort nein ist, ist der Content für GEO suboptimal.

KI-Systeme extrahieren bevorzugt:
- Definitionssätze ("X ist Y, das Z macht")
- Listen mit konkreten Fakten
- Klare Antworten auf implizite W-Fragen
- Vergleichstabellen

### Zitierfähigkeit

Nicht jeder Content ist zitierfähig. Was KI-Systeme bevorzugen: Aussagen, die auf spezifischem Wissen oder Erfahrung basieren, nicht auf Allgemeinplätzen. "GEO ist wichtig" ist nicht zitierfähig. "Eine Studie von Ahrefs zeigt, dass 65 % der ChatGPT-Antworten keine Links zu Quellen enthalten" ist zitierfähig.

### Content-Lücken identifizieren

Ich teste manuell: Welche Fragen zu den Kernthemen des Kunden beantwortet die Website? Welche nicht? Die Lücken sind die Priorität für neue Content-Produktion.

## Phase 3: Schema Markup Check

**Ziel:** Sicherstellen, dass maschinenlesbare Metadaten vorhanden und korrekt implementiert sind.

### Welche Schema-Typen relevant sind

Für die meisten B2B-Websites und Blogs sind folgende Schema-Typen prioritär:

| Schema-Typ | Wann | Warum |
|---|---|---|
| `Article` / `BlogPosting` | Alle Blogartikel | Kennzeichnet Content als Artikel, ermöglicht Autorenattribution |
| `Person` | Autorenprofil | Verknüpft Expertise mit Namen und Organisation |
| `Organization` | Homepage | Gibt KI-Systemen Kontext über das Unternehmen |
| `FAQPage` | FAQ-Sektionen | Direkte Extraktion von Frage-Antwort-Paaren |
| `HowTo` | Anleitungen | Strukturierte Schritt-für-Schritt-Extraktion |
| `BreadcrumbList` | Alle Unterseiten | Hilft bei der Seitenstruktur-Erkennung |

### Validierung

Ich nutze den [Schema Markup Validator](https://validator.schema.org/) für jede Hauptseitentyp. Häufige Fehler: fehlende Pflichtfelder (`author`, `datePublished`), falsche Typen, unverknüpfte Entitäten.

## Phase 4: E-E-A-T Bewertung

**Ziel:** Bewerten, wie gut die Website Expertise, Erfahrung, Autorität und Vertrauenswürdigkeit demonstriert.

### Autorenprofile

Jeder Artikel braucht einen echten Autor — mit vollständigem Namen, Rolle, Bild und idealerweise einem Link zum Autorenprofil. Ich prüfe: Ist der Autor erkennbar? Gibt es eine Autorenseite? Stimmen Name und Profilbild überein?

### Externe Signale

Wird der Autor oder das Unternehmen an anderer Stelle im Web erwähnt? Gibt es Interviews, Gastbeiträge, Sprecher-Profile? KI-Systeme verknüpfen Informationen aus verschiedenen Quellen — externe Erwähnungen stärken die Autorität erheblich.

### Transparenz

Impressum, Datenschutzerklärung, klare Kontaktmöglichkeiten — das sind grundlegende Vertrauenssignale, die in Deutschland auch rechtlich vorgeschrieben sind. Ich prüfe zusätzlich: Gibt es eine "Über uns"-Seite? Sind Quellen und Daten belegt?

## Phase 5: KI-Sichtbarkeit testen

**Ziel:** Direkt messen, wie gut die Website in KI-Antworten vertreten ist.

### Manuelles Testing

Ich teste systematisch in ChatGPT (mit Websuche aktiviert), Perplexity, Google AI Overviews und Microsoft Copilot. Meine Test-Fragen decken ab:

- Branded: "Was macht [Unternehmen/Website]?"
- Thematisch: Kernfragen zum Thema des Kunden
- Wettbewerb: Welche anderen Quellen werden für diese Themen zitiert?

### Baseline dokumentieren

Alle Ergebnisse werden mit Screenshot und Datum festgehalten. Das ist wichtig, um nach Optimierungsmaßnahmen die Verbesserung zu messen.

## Tools die ich nutze

- **Google Search Console** — organischer Traffic, Indexierungsstatus
- **Semrush** — Keyword-Analyse, Backlink-Profil, technisches Audit
- **Schema Markup Validator** — Validierung von strukturierten Daten
- **PageSpeed Insights** — Core Web Vitals
- **ChatGPT, Perplexity, Google AI Overviews** — direkte KI-Tests (manuell)
- **Screaming Frog** — technisches Crawling der Website

## Anonymisiertes Praxisbeispiel

**Kunde:** B2B-Software-Unternehmen, DACH-Markt, ca. 80 Blogposts vorhanden.

**Ausgangssituation:** Guter SEO-Traffic, aber kaum Erwähnungen in KI-Antworten. GPTBot in robots.txt blockiert. Keine Autorenprofile. Kein Schema Markup außer auf der Homepage.

**Maßnahmen (90 Tage):**
1. robots.txt angepasst, alle KI-Bots erlaubt
2. Autorenprofile für alle 3 schreibenden Mitarbeiter erstellt
3. `BlogPosting` und `Person` Schema auf alle Artikel ausgerollt
4. 15 bestehende Artikel nach GEO-Prinzipien überarbeitet (Direktheit, Struktur)
5. 5 neue FAQ-Sektionen mit `FAQPage`-Schema erstellt

**Ergebnis nach 90 Tagen:**
- Perplexity: 0 → 8 Erwähnungen bei Kernthemen
- Google AI Overviews: 0 → 3 Zitierungen bei Long-Tail-Anfragen
- ChatGPT Search: 0 → 2 direkte Nennungen bei Branded-Anfragen
- Organischer Traffic: +18 % (durch überarbeitete Artikel)

## GEO-Audit Checkliste

Eine vollständige Checkliste mit allen Prüfpunkten gibt es als Download:

→ [GEO-Checkliste 2025 herunterladen](/downloads/geo-checkliste-2025.pdf)

## Fazit

Ein GEO-Audit ist kein einmaliges Projekt — er ist der Startpunkt eines kontinuierlichen Prozesses. KI-Systeme entwickeln sich schnell, Trainingsdaten werden aktualisiert, neue Plattformen entstehen. Wer regelmäßig testet, misst und optimiert, bleibt sichtbar.

**Weiterführende Artikel:**
- [Was ist GEO? Generative Engine Optimization einfach erklärt](/blog/was-ist-geo)
- [GEO im DACH-Markt: Besonderheiten und Chancen](/blog/geo-dach)
