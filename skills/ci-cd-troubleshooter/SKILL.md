---
name: ci-cd-troubleshooter
description: Diagnose and fix CI/CD pipeline failures
---

## What
Diagnose failing CI/CD pipelines, identify root causes, and propose or apply fixes across GitHub Actions, GitLab CI, Jenkins, CircleCI, and similar systems.

## How
- Read pipeline config files and recent failure logs
- Identify the failing step, error type, and likely cause
- Check for common issues: missing secrets, dependency failures, flaky tests, resource limits, misconfigured caches
- Propose targeted fixes with minimal blast radius
- Verify the fix doesn't break other pipeline stages

## Workflow
1. Ask for the pipeline URL or paste the failure log
2. Identify the failing job and step
3. Classify the failure (config error, flaky test, infra issue, code bug)
4. Propose a fix and explain the root cause
5. Offer to apply the fix to the config file

## Pulumi CI patterns (GitHub Actions)
When the pipeline deploys infrastructure with Pulumi, check for:
- Action: `pulumi/actions@v5` — required for `pulumi preview` and `pulumi up` steps
- Required env var: `PULUMI_ACCESS_TOKEN` (must be stored as a repository secret)
- Common failures:
  - **Stack lock**: another run holds the state lock — cancel or use `pulumi cancel`
  - **Config missing**: stack config not committed or secret not set — run `pulumi config set <key>`
  - **Passphrase prompt**: `PULUMI_CONFIG_PASSPHRASE` env var missing for self-managed backends

## Example
User: "My GitHub Actions deploy job is failing with 'Error: Unable to locate executable file: docker'"
→ Diagnose missing Docker setup step, suggest `docker/setup-buildx-action`, apply to workflow YAML.
