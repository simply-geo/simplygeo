---
title: "Schema Markup für GEO: Welche strukturierten Daten KI-Systeme bevorzugen"
description: "Schema Markup ist das direkteste Signal, das du KI-Suchsystemen geben kannst. Welche Typen wichtig sind, wie du sie implementierst und warum maschinenlesbare Daten GEO entscheidend beeinflussen."
pubDate: 2025-02-28
author: "Yassine Oulada"
authorRole: "GEO & SEO Spezialist"
category: "Strukturierte Daten"
categoryColor: "#ff8c42"
level: "Einsteiger"
readingTime: "10 Min"
slug: "schema-markup-fuer-geo"
heroImage: "/images/schema-markup.svg"
---

## Was ist Schema Markup — und warum ist es für GEO entscheidend?

**Schema Markup** (auch: strukturierte Daten) ist maschinenlesbarer Code, den du in deine Website einbaust, um Suchmaschinen und KI-Systemen explizit zu sagen, was dein Inhalt bedeutet — nicht nur, was er sagt.

Während ein Mensch lesen kann, dass "Yassine Oulada" eine Person ist, die einen Artikel über GEO geschrieben hat, muss eine Maschine das aus dem Kontext erschließen. Schema Markup nimmt diesen Umweg ab: `"@type": "Person"`, `"name": "Yassine Oulada"` — eindeutig, maschinenlesbar, zuverlässig.

Für GEO ist Schema Markup aus einem einfachen Grund wichtig: **KI-Systeme verarbeiten strukturierte Daten priorisiert**, weil sie direkter und zuverlässiger sind als Fließtext. Wer Schema Markup korrekt implementiert hat, liefert KI-Suchsystemen genau das, was sie brauchen — ohne dass sie es aus dem Text extrahieren müssen.

## Die wichtigsten Schema-Typen für GEO

Nicht alle Schema-Typen sind gleich relevant. Hier sind die sechs, die ich in jedem GEO-Audit als Priorität behandle:

### 1. Article / BlogPosting

Der grundlegendste Schema-Typ für Content-Seiten. Er gibt KI-Systemen wichtige Kontextinformationen:

```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Schema Markup für GEO",
  "datePublished": "2025-02-28",
  "author": {
    "@type": "Person",
    "name": "Yassine Oulada"
  }
}
```

**Warum wichtig:** Ohne Article-Schema weiß ein KI-System nicht, wann ein Artikel veröffentlicht wurde — und bevorzugt möglicherweise neuere, schlechter recherchierte Quellen, nur weil deren Datum erkennbar ist.

### 2. Person

Das Person-Schema verknüpft Inhalte mit einer konkreten Autorenidentität. Es ist der direkte Weg, E-E-A-T (Expertise, Authoritativeness, Trustworthiness) maschinenlesbar zu machen:

```json
{
  "@type": "Person",
  "name": "Yassine Oulada",
  "jobTitle": "GEO & SEO Spezialist",
  "url": "https://simplygeo.de/about",
  "sameAs": ["https://www.linkedin.com/in/yassine-o-726988196/"]
}
```

Das `sameAs`-Feld ist besonders wertvoll: Es verknüpft die Autorenidentität auf deiner Website mit externen Profilen — LinkedIn, XING, andere Plattformen. KI-Systeme können so Informationen aus mehreren Quellen zusammenführen und die Autorität der Person besser einschätzen.

### 3. FAQPage

FAQPage ist eines der direktesten GEO-Signale überhaupt. Es liefert KI-Systemen exakte Frage-Antwort-Paare — in einem Format, das direkt in Antworten übernommen werden kann:

```json
{
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "Was ist GEO?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "GEO steht für Generative Engine Optimization..."
    }
  }]
}
```

**Praxis-Tipp:** FAQPage-Markup lohnt sich besonders für Seiten, die W-Fragen beantworten. Die Antwort im Schema sollte identisch mit dem Text auf der Seite sein — KI-Systeme können Diskrepanzen erkennen.

### 4. HowTo

HowTo-Schema strukturiert Anleitungen in nummerierte Schritte — ideal für "Wie"-Anfragen:

```json
{
  "@type": "HowTo",
  "name": "So führst du einen GEO-Audit durch",
  "step": [
    {"@type": "HowToStep", "name": "Technische Basis prüfen", "text": "..."},
    {"@type": "HowToStep", "name": "Content analysieren", "text": "..."}
  ]
}
```

Google AI Overviews und Perplexity extrahieren HowTo-Schritte häufig direkt in ihre Antworten.

### 5. Organization

Organization-Schema auf der Homepage gibt KI-Systemen fundamentale Kontextinformationen über das Unternehmen oder die Website:

```json
{
  "@type": "Organization",
  "name": "SimplyGEO",
  "url": "https://simplygeo.de",
  "description": "GEO, AEO und KI-Suche für den DACH-Markt",
  "sameAs": ["https://www.linkedin.com/company/..."]
}
```

### 6. BreadcrumbList

Breadcrumbs helfen KI-Systemen, die Hierarchie einer Website zu verstehen — und signalisieren, welche Seiten zu welchem Themenbereich gehören.

## Implementierung: JSON-LD vs. Microdata vs. RDFa

Es gibt drei Wege, Schema Markup zu implementieren. Die Empfehlung ist eindeutig: **JSON-LD**.

| Format | Empfehlung | Begründung |
|---|---|---|
| **JSON-LD** | ✅ Empfohlen | Wird von Google bevorzugt, einfach zu warten, kein Eingriff in HTML |
| **Microdata** | ⚠️ Vermeiden | Verschachtelt in HTML, schwer wartbar |
| **RDFa** | ⚠️ Vermeiden | Komplex, selten notwendig |

JSON-LD wird als `<script type="application/ld+json">` im `<head>` oder am Ende des `<body>` eingebunden. Es beeinflusst das visuelle Layout der Seite nicht.

## Die häufigsten Fehler im GEO-Audit

In meinen GEO-Audits sehe ich dieselben Fehler immer wieder:

**1. Kein Author-Schema:** Der häufigste Fehler. Ohne Person-Schema kann kein KI-System Autorschaft zuordnen — E-E-A-T bleibt ungenutzt.

**2. Falsche `datePublished`:** Das Datum wird nicht gesetzt oder mit dem Änderungsdatum verwechselt. KI-Systeme bevorzugen aktuelle Inhalte — ein korrektes Publikationsdatum ist relevant.

**3. Schema ohne passenden Seiteninhalt:** Schema Markup, das Informationen enthält, die nicht auf der Seite stehen, wird von Google und KI-Systemen als Spam gewertet und kann zu Abstrafungen führen.

**4. Fehlende `sameAs`-Verknüpfungen:** Ohne externe Verknüpfungen bleibt die Autorenidentität isoliert — KI-Systeme können keine weiteren Autoritätssignale zusammenführen.

**5. Nur Homepage hat Schema:** Schema Markup muss auf jeder relevanten Seite individuell implementiert sein — nicht nur auf der Homepage.

## Validierung: So prüfst du dein Schema Markup

Bevor du Schema Markup live stellst, solltest du es validieren. Das wichtigste Tool:

- **[Schema Markup Validator](https://validator.schema.org/)** — das offizielle Validierungstool von schema.org. Gibt an, ob das Markup syntaktisch korrekt ist und ob alle Pflichtfelder vorhanden sind.
- **Google Rich Results Test** — prüft zusätzlich, ob dein Markup für Google Rich Results qualifiziert.

## Fazit

Schema Markup ist kein optionales Extra — es ist das direkteste Signal, das du KI-Systemen über deinen Content geben kannst. Wer strukturierte Daten korrekt implementiert, gibt Suchmaschinen und KI-Systemen einen klaren, maschinenlesbaren Kontext: wer du bist, was dein Content bedeutet, und warum er vertrauenswürdig ist.

Der Aufwand ist überschaubar. Der Effekt auf GEO ist messbar.

**Weiterführende Artikel:**
- [Was ist GEO? Generative Engine Optimization einfach erklärt](/blog/was-ist-geo)
- [Mein GEO-Audit Prozess: So analysiere ich Websites für KI-Sichtbarkeit](/blog/geo-audit-prozess)
