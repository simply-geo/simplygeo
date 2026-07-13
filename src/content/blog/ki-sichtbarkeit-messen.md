---
title: "KI-Sichtbarkeit messen: Die wichtigsten GEO-Metriken erklärt"
description: "Wie misst man Sichtbarkeit in ChatGPT, Perplexity und Google AI Overviews? Die wichtigsten Metriken von Mentions über Citations bis zum AI-Referral-Traffic, ehrlich eingeordnet."
pubDate: 2026-07-13
author: "Yassine Oulada"
authorRole: "GEO & SEO Spezialist"
category: "Tools & Messung"
categoryColor: "#5c7186"
level: "Einsteiger"
readingTime: "10 Min"
slug: "ki-sichtbarkeit-messen"
heroImage: "/images/ki-sichtbarkeit-messen.svg"
---

**KI-Sichtbarkeit** ist der Grad, zu dem eine Marke oder Website in den Antworten von KI-Suchsystemen wie ChatGPT, Perplexity und Google AI Overviews vorkommt: als Erwähnung, als zitierte Quelle oder als Empfehlung. Und ja, sie lässt sich messen, nur anders, als du es von klassischem SEO gewohnt bist.

Dieser Artikel sortiert die Metriken, die dabei wirklich zählen: was sie bedeuten, woher du sie bekommst und wie viel Aussagekraft sie ehrlicherweise haben.

## Warum die Messung schwieriger ist als im SEO

Drei Gründe, und es lohnt sich, sie zu kennen, bevor du in Zahlen denkst:

1. **Es gibt (noch) keine offizielle Datenquelle.** Keine Search Console für KI-Antworten. Die Google Search Console zählt Impressionen aus AI Overviews zwar mit, weist sie aber nicht getrennt aus. Du siehst also nicht, welcher Teil deiner Impressionen aus KI-Antworten stammt.
2. **KI-Antworten sind nicht deterministisch.** Dieselbe Frage kann heute deine Website zitieren und morgen die der Konkurrenz. Einzelmessungen sind deshalb Momentaufnahmen; belastbar werden erst Messreihen über Zeit.
3. **Es gibt kein "Ranking".** Eine KI-Antwort hat keine Position 1 bis 10. Entweder du kommst vor oder nicht, und wenn ja, in unterschiedlicher Rolle: genannt, verlinkt, empfohlen.

Die gute Nachricht: Aus genau diesen Rollen ergeben sich die Metriken.

## Die direkten Metriken: Was in den Antworten passiert

### Mentions: Wird deine Marke genannt?

Eine **Mention** liegt vor, wenn deine Marke oder Website im Text einer KI-Antwort namentlich vorkommt, unabhängig davon, ob sie verlinkt wird. Mentions messen Bekanntheit im KI-Kontext: Das System "kennt" dich und hält dich für relevant genug, dich zu erwähnen.

Gemessen wird das über Prompt-Tracking: Ein festes Set an Fragen wird regelmäßig an die KI-Systeme gestellt und die Antworten werden auf Markennennungen ausgewertet. Tools wie Rankscale machen das automatisiert über viele Systeme hinweg, manuell geht es mit einem Fragenkatalog und einem Dokumentations-Sheet.

### Citations: Wirst du als Quelle verlinkt?

Eine **Citation** ist die härtere Währung: Deine Website wird in der KI-Antwort als Quelle verlinkt oder referenziert. Das ist das eigentliche GEO-Ziel, denn eine Citation bedeutet, dass das System deinen Content tatsächlich zur Beantwortung herangezogen hat und Nutzer zu dir durchklicken können.

Die Unterscheidung zwischen Mentions und Citations ist die wichtigste in der ganzen KI-Messung. Eine Marke kann oft genannt, aber nie zitiert werden: Dann ist die Bekanntheit da, aber der Content ist nicht zitierfähig. Umgekehrt kann eine unbekannte Website häufig zitiert werden, weil ihr Content extrahierbar und belegbar ist. Die beiden Fälle erfordern völlig unterschiedliche Maßnahmen, mehr dazu im Artikel über [zitierfähige Inhalte](/blog/content-eeat-fuer-geo).

### Visibility Score und Share of Voice: Wie oft, im Verhältnis zu wem?

Der **Visibility Score** verdichtet die Einzelmessungen zu einer Kennzahl: Wie oft tauchst du über alle getrackten Prompts und KI-Systeme hinweg in den Antworten auf? Als absolute Zahl ist das nett, richtig nützlich wird es im Vergleich: als **Share of Voice** gegenüber deinen Wettbewerbern. Wer wird bei denselben Fragen zitiert, du oder die Konkurrenz, und in welche Richtung verschiebt sich das gerade?

Genau dieser Vergleich ist der beste Frühindikator im GEO. Absolute Sichtbarkeit schwankt mit den Systemen; der Abstand zur Konkurrenz ist deutlich stabiler.

### Sentiment: Wie wird über dich gesprochen?

Vorkommen ist nicht alles. Das **Sentiment** misst, ob die KI-Antwort deine Marke positiv, neutral oder negativ darstellt. Relevant wird das vor allem bei Vergleichs- und Empfehlungsfragen ("Was ist das beste Tool für X?"): Dort entscheidet nicht die Nennung über den Wert, sondern der Kontext, in dem sie steht.

## Die indirekten Metriken: Was auf deiner Seite ankommt

### AI-Referral-Traffic: Klicks aus KI-Antworten

Nutzer, die aus einer KI-Antwort auf deine Website klicken, tauchen in der Webanalyse als Referral auf. In GA4 lohnt sich dafür ein eigenes Segment oder eine eigene Channel-Gruppe mit den einschlägigen Verweisquellen: `chatgpt.com`, `perplexity.ai`, `gemini.google.com`, `copilot.microsoft.com`.

Ehrliche Einordnung: Diese Zahl untertreibt systematisch. Viele KI-Interaktionen enden ohne Klick, und ein Teil der Klicks kommt ohne sauberen Referrer an und landet im Direct Traffic. AI-Referrals zeigen dir einen Trend, nicht das ganze Bild.

### Crawler-Aktivität: Werden deine Inhalte überhaupt abgeholt?

Bevor ein System dich zitieren kann, muss es dich crawlen. In den Server-Logfiles siehst du, ob und wie oft GPTBot, PerplexityBot, ClaudeBot und Co. deine Seiten abrufen. Null Crawler-Zugriffe sind ein Alarmsignal: Dann blockiert vermutlich deine robots.txt die Bots, der häufigste Befund überhaupt, wie im [GEO-Audit-Prozess](/blog/geo-audit-prozess) beschrieben.

### AI Readiness: Die Metrik, die nach vorne schaut

Alle bisherigen Metriken messen die Vergangenheit. Ein **AI Readiness Score**, wie ihn etwa Rankscale berechnet, bewertet stattdessen die Voraussetzungen: Ist dein Content strukturell so aufgebaut, dass KI-Systeme ihn zuverlässig übernehmen können? Geprüft werden Dinge wie Klarheit, Struktur, Autorenschaft und technische Zugänglichkeit. Das ist keine Sichtbarkeitsmessung im engeren Sinn, aber der beste Hebel, wenn die Sichtbarkeit noch bei null liegt.

## Alle Metriken im Überblick

| Metrik | Was sie misst | Datenquelle | Aussagekraft |
|---|---|---|---|
| **Mentions** | Markennennung in KI-Antworten | Prompt-Tracking (Tool oder manuell) | Bekanntheit im KI-Kontext |
| **Citations** | Verlinkung als Quelle | Prompt-Tracking | Zitierfähigkeit, das GEO-Kernziel |
| **Visibility Score / Share of Voice** | Sichtbarkeit über alle Prompts, im Wettbewerbsvergleich | Tracking-Tool | Bester Frühindikator für Trends |
| **Sentiment** | Tonalität der Darstellung | Tracking-Tool, manuelle Prüfung | Wichtig bei Empfehlungsfragen |
| **AI-Referral-Traffic** | Klicks aus KI-Antworten | GA4 / Webanalyse | Trend ja, Vollständigkeit nein |
| **Crawler-Aktivität** | Abrufe durch KI-Bots | Server-Logfiles | Grundvoraussetzung, Alarmsignal bei null |
| **AI Readiness** | Strukturelle Zitierfähigkeit | Site-Audit (z. B. Rankscale) | Vorhersage statt Rückblick |

## Was du daraus machst: ein pragmatisches Mess-Setup

Du brauchst nicht alle sieben Metriken ab Tag eins. Die Reihenfolge, mit der ich selbst arbeite:

1. **Baseline setzen.** Zehn bis zwanzig Fragen definieren, die deine Zielgruppe wirklich stellt, und sie einmal manuell an ChatGPT, Perplexity und Google stellen. Ergebnisse mit Datum dokumentieren. Ohne Baseline kannst du später keinen Fortschritt nachweisen.
2. **Crawler-Zugang prüfen.** robots.txt und Logfiles. Fünf Minuten, und der häufigste Blocker ist ausgeschlossen.
3. **AI-Referral-Segment in GA4 anlegen.** Kostet nichts und sammelt ab sofort Daten.
4. **Tracking automatisieren.** Sobald es ernst wird, ein Tool wie Rankscale aufsetzen, das Mentions, Citations und Share of Voice über die Systeme hinweg dauerhaft mitschreibt.

Und die wichtigste Regel zum Schluss: Miss Entwicklungen, keine Einzelwerte. Eine einzelne KI-Antwort sagt fast nichts, dieselbe Messung über drei Monate sagt fast alles. Welche Eigenheiten die einzelnen Systeme dabei haben, steht im [LLM-Vergleich](/blog/llm-suchmaschinen-ueberblick).
