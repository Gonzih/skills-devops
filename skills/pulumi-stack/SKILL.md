---
name: pulumi-stack
description: Scaffold, manage, and deploy infrastructure as code using Pulumi (TypeScript-first).
triggers: ["pulumi", "infrastructure as code", "iac", "deploy infrastructure", "pulumi stack"]
---
# Pulumi Stack

## What this skill does
Helps you scaffold new Pulumi stacks, convert from Terraform, write programs for common cloud patterns, and manage the full deploy lifecycle using real TypeScript/Python/Go — not DSLs.

## How to invoke
/pulumi-stack

## Workflow steps

### Step 1 — Choose stack type
Identify cloud target (AWS/GCP/Azure/K8s) and language preference (default: TypeScript).

### Step 2 — Scaffold or convert
New stack: `pulumi new aws-typescript` (or relevant template)
From Terraform: `pulumi convert --from terraform --language typescript`

### Step 3 — Write the program
Common patterns:
- VPC + subnets: use `@pulumi/awsx` NetworkX components
- ECS/EKS cluster: `awsx.ecs.Cluster` or `aws.eks.Cluster`
- RDS: `aws.rds.Instance` with `skipFinalSnapshot: false`
- S3 + CloudFront CDN: `aws.s3.Bucket` + `aws.cloudfront.Distribution`
- Secrets: `pulumi config set --secret DATABASE_PASSWORD`

### Step 4 — Preview and deploy
```bash
pulumi preview   # dry run, shows what will change
pulumi up        # apply changes
pulumi stack history  # audit trail
```

### Step 5 — Drift detection
```bash
pulumi refresh   # sync state with real infra
```

## Example outputs
- Scaffolded TypeScript Pulumi program for AWS VPC + ECS
- Converted Terraform module to Pulumi TypeScript
- Deploy preview showing resource changes
