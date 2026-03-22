---
name: alert-triage
description: Analyze and prioritize incoming alerts
---

## What
Analyze a set of incoming monitoring alerts, determine severity and urgency, identify correlations, and produce a prioritized action plan.

## How
- Parse alert payloads (PagerDuty, Alertmanager, Datadog, CloudWatch, etc.)
- Group related alerts by service, host, or time window to avoid alert storms
- Assess business impact: user-facing vs. internal, revenue-critical vs. background
- Identify the probable root alert vs. downstream noise
- Recommend immediate actions vs. watch-and-wait

## Workflow
1. Paste or describe the active alerts
2. Group and deduplicate correlated alerts
3. Rank by impact: P1 (user-facing outage) → P4 (informational)
4. Identify the root cause alert and downstream effects
5. Output a triage summary: what to act on now, what to monitor, what to silence

## Example
User: "I have 47 alerts firing: disk full on db-01, high latency on api-gateway, 5xx spike on checkout"
→ Identifies disk-full on db-01 as root cause driving the cascade, recommends clearing disk space first, provides ordered action plan.
