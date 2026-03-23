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

## Infra change runbooks (Pulumi)
When the runbook covers an infrastructure change managed by Pulumi, include:
- `pulumi preview` output showing the planned resource changes (paste or link)
- Link to the stack in Pulumi Cloud (e.g. `https://app.pulumi.com/<org>/<project>/<stack>`)
- Rollback step using `pulumi stack history` to identify the previous deployment and re-run it

## Live Data Sources
- **AWS Runbook templates**: `https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-documents.html` — official AWS Systems Manager Automation runbook library
- **PagerDuty runbook community**: `https://community.pagerduty.com` — real-world runbook examples shared by practitioners
- **SRE Workbook public patterns**: `https://sre.google/workbook/table-of-contents/` — Google SRE Workbook chapters on on-call and operational procedures

## Example
User: "Write a runbook for restarting the payment-service in Kubernetes"
→ Produces a runbook covering health checks, drain, rolling restart, verification, and rollback with `kubectl` commands.
