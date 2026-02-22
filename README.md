# Priority Pass × Taxi App Integration

A scalable, maintainable system that integrates Priority Pass lounge access with a global taxi app to enhance the airport journey for travelers.

## Overview

This repository documents the architecture for the Airport Journey Orchestration MVP.

The goal of this MVP is to deliver:

- Smart departure recommendations
- Taxi booking initiation from Priority Pass
- Lounge discovery inside Taxi app
- Risk/confidence indicators
- Automatic recalculation when flights change

The design prioritizes:

- Business value first
- Operational simplicity
- Clear domain boundaries
- Deferred distributed complexity
- Evolvability without re-architecture

---

## Project Structure

```
priority-pass-airport-journey/
│
├── README.md
├── docs/
│   ├── 1-architecture-overview.md
│   ├── 2-c4-context.md
│   ├── 3-c4-container.md
│   ├── 4-c4-component.md
│   ├── 5-non-functional-requirements.md
│   ├── 6-tradeoffs-and-omissions.md
│   ├── 7-sizing.md
│   └── frontend-prototype/ (Figma files and screen captures)
├── src/app/
│   ├── components/
│   │   ├── ui/
│   │   └── Navigation.tsx
│   ├── pages/
│   │   ├── PriorityPassApp.tsx
│   │   └── TaxiApp.tsx
│   └── routes.ts
└── src/styles/
```

# Assumptions & MVP Scope

## Explicit Assumptions (MVP)

### Platform Assumptions

1. Priority Pass already provides:
   - Authenticated users
   - Flight storage capability
   - Lounge inventory database
   - Entitlement validation engine

2. Taxi platform:
   - Exposes ride booking REST APIs
   - Supports deep linking to native app
   - Supports ride status polling
   - Supports OAuth token exchange

3. Traffic data:
   - Provided via external Maps API
   - Traffic-aware ETA available synchronously

4. Flight data:
   - Retrieved via REST polling
   - No webhook streaming required

5. Lounge occupancy:
   - Estimated via historical models
   - No real-time sensor integration

---

## MVP Feature Scope

### Core Capabilities

1. Smart departure recommendation  
   Based on:
   - Flight departure time
   - Security buffer
   - Traffic ETA
   - Risk margin
   - Lounge time allocation

2. Taxi booking initiation from Priority Pass
   - Redirect / deep link to taxi app
   - Ride confirmation status polled back

3. Lounge surfacing in Taxi app
   - Metadata replicated
   - Entitlement validated via PP API

4. Automatic recalculation
   - Poll flight every X minutes
   - Recompute recommendation if delay detected

5. Confidence indicator
   - On Track
   - At Risk
   - Delayed

---

## Out of Scope (Intentionally Not Included)

- No real-time event streaming
- No Kafka
- No ML-based traffic prediction
- No multi-taxi aggregation
- No dynamic surge comparison
- No real-time lounge occupancy sensors
- No bundled payment orchestration
- No loyalty integration
- No CQRS
- No distributed caching cluster

These omissions are deliberate to reduce operational complexity and ensure realistic MVP.

---

## Architectural Constraints for MVP

We intentionally:

- Use synchronous polling instead of event buses
- Use shared PostgreSQL instead of service-per-database
- Avoid Kafka
- Avoid CQRS
- Avoid distributed Redis cluster

This keeps:

- DevOps overhead minimal
- Debugging simple
- System behavior predictable
- MVP scope controlled

---

# Architectural Philosophy

We are applying:

## Progressive Complexity Architecture

Start with:

- Synchronous flows
- Modular service boundaries
- Shared infrastructure
- Low operational burden

Evolve later to:

- Event-driven architecture
- Database isolation
- Distributed caching
- Independent scaling

We are deferring complexity — not blocking scale.

---

# Documents

[Go to docs]()

---

**Document Version**: 1.0  
**Last Updated**: February 2026  
**Owner**: Ridhi
