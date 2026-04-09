# n8n Orchestration Layer

## Purpose

This folder contains n8n workflow assets for Ætheris Automation Technologies.

n8n is the workflow orchestration layer, not the source of truth for AMLF reasoning logic.

## Responsibilities

Use this folder for:

- workflow JSON exports
- webhook orchestration
- integration flows
- operational automation
- review and notification routing
- system-to-system handoffs
- test payloads and examples

Do not use this folder as the canonical source for:

- AMLF node definitions
- AMLF link weights
- AMLF behavioral rules
- AMLF governance logic

Those remain under `/amlf/`.

## Suggested structure

- `workflows/` for exported workflow JSON files
- `credentials/` for non-secret templates and placeholders only
- `environment/` for environment notes and variable requirements
- `docs/` for workflow descriptions, ownership, and dependencies
- `examples/` for test payloads and sample runs

## Integration model

A typical pattern is:

1. External event enters n8n
2. n8n normalizes or enriches payload
3. n8n calls AMLF through MCP or service endpoint
4. AMLF returns traversal result
5. n8n routes result to review, logging, alerting, or VALKYRIE

## Rules

- Keep secrets out of Git
- Keep workflows documented
- Keep AMLF reasoning in AMLF
- Use n8n for orchestration and automation only
