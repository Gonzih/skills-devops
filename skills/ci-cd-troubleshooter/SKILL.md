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

## Example
User: "My GitHub Actions deploy job is failing with 'Error: Unable to locate executable file: docker'"
→ Diagnose missing Docker setup step, suggest `docker/setup-buildx-action`, apply to workflow YAML.
