---
name: runbook-writer
description: Write operational runbooks for systems and services
---

## What
Generate clear, actionable operational runbooks for services, infrastructure components, and recurring operational tasks.

## How
- Gather context: service name, tech stack, deployment platform, on-call audience
- Structure runbooks with consistent sections: Overview, Prerequisites, Procedures, Rollback, Escalation
- Write steps at the right level of detail for the target audience (SRE, developer, NOC)
- Include verification commands after each major step
- Add decision trees for common failure modes

## Workflow
1. Ask for the service/system name and what the runbook should cover
2. Identify the target audience and their assumed knowledge level
3. Draft the runbook with Overview → Prerequisites → Step-by-step Procedures → Verification → Rollback → Escalation
4. Review for completeness: every step has a verification command, rollback is covered
5. Save to the appropriate location (e.g., `docs/runbooks/<service>.md`)

## Example
User: "Write a runbook for restarting the payment-service in Kubernetes"
→ Produces a runbook covering health checks, drain, rolling restart, verification, and rollback with `kubectl` commands.
