Auth.md

HennyMoneyAfric Agent Authentication & Registration

Website: https://hennymoneyafric.indevs.in

Issuer: https://hennymoneyafric.indevs.in

Last Updated: July 2026

---

Overview

HennyMoneyAfric provides public access to music, culture, tourism, educational resources, digital creator content, and digital services.

AI agents, search agents, indexing agents, research assistants, and automated systems may access publicly available content according to robots.txt permissions, applicable laws, and platform terms.

---

Agent Registration

Agents seeking access to protected resources should use the OAuth metadata endpoints published under:

- https://hennymoneyafric.indevs.in/.well-known/oauth-authorization-server
- https://hennymoneyafric.indevs.in/.well-known/openid-configuration
- https://hennymoneyafric.indevs.in/.well-known/oauth-protected-resource

Agent registration information may be obtained through the published authorization metadata.

---

Agent Authentication

Authentication methods may include:

- OAuth 2.0
- OpenID Connect (OIDC)
- Bearer Tokens
- API Credentials where applicable

Public website content generally does not require authentication unless explicitly stated.

---

Supported Agent Identity Types

- AI Assistants
- Search Agents
- Research Agents
- MCP Clients
- Web Automation Agents
- Enterprise Integrations

---

Supported Credential Types

- OAuth Access Tokens
- OIDC Identity Tokens
- Client Credentials
- Service Accounts

---

Agent Discovery

The following discovery resources are available:

API Catalog:

https://hennymoneyafric.indevs.in/.well-known/api-catalog

MCP Server Card:

https://hennymoneyafric.indevs.in/.well-known/mcp/server-card.json

Agent Skills:

https://hennymoneyafric.indevs.in/.well-known/agent-skills/index.json

OpenAPI Specification:

https://hennymoneyafric.indevs.in/openapi.json

---

Usage Policy

Permitted Uses:

- Search and indexing
- Content discovery
- Educational research
- Tourism information access
- Music and cultural information retrieval

Prohibited Uses:

- Illegal activity
- Security testing without authorization
- Service abuse
- Spam generation
- Unauthorized impersonation

---

Claim and Revocation

If access credentials are issued in the future, revocation and claims management information will be published through the authorization server metadata.

---

Contact

Organization: HennyMoneyAfric

Website:
https://hennymoneyafric.indevs.in

Email:
hennymoneyafric@gmail.com

---

Version

Auth.md Version: 1.1

Status: Active
