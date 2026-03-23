---
name: incident-commander
description: Lead incident response and write postmortems
---

## What
Guide incident response from detection through resolution, coordinate communication, track timeline, and produce blameless postmortems.

## How
- Establish incident severity (SEV1–SEV4) and assign roles: IC, comms lead, tech lead
- Maintain a live incident timeline with timestamped actions
- Draft stakeholder updates at the right cadence and detail level
- Track mitigation steps and confirm resolution criteria
- After resolution: write a blameless postmortem with timeline, impact, root cause, and action items

## Workflow
1. **Declare**: Capture incident start time, description, and initial severity
2. **Triage**: Identify affected systems, blast radius, and on-call owners
3. **Coordinate**: Draft stakeholder update templates; track timeline entries
4. **Mitigate**: Document each remediation step and its outcome
5. **Resolve**: Confirm resolution criteria met; set follow-up review time
6. **Postmortem**: Generate blameless postmortem doc with 5-whys root cause analysis and action items

## Infra rollback (Pulumi)
When the incident involves infrastructure managed by Pulumi:
1. Run `pulumi stack history` to list recent deployments and identify the last known-good deploy
2. Re-deploy the previous version: check out the corresponding commit and run `pulumi up`, or use `pulumi up --target-replace <urn>` for surgical replacement of a single resource
3. Use `pulumi refresh` after rollback to confirm state matches real infrastructure

## Live Data Sources
- **AWS Service Health Dashboard API**: `https://health.aws.amazon.com/health/status` — real-time AWS service events; use `aws health describe-events --filter eventTypeCategories=issue` for programmatic querying
- **GCP status API**: `https://status.cloud.google.com/incidents.json` — current and historical GCP incidents in JSON format
- **PagerDuty webhook patterns**: Inbound webhooks deliver `incident.trigger`, `incident.acknowledge`, `incident.resolve` payloads — use these to auto-populate incident timelines and sync state

## Example
User: "Production database is down, started 14:32 UTC, ~10k users affected"
→ Declares SEV1, drafts initial stakeholder update, starts timeline, prompts for on-call contacts, and guides through mitigation steps to resolution and postmortem.
