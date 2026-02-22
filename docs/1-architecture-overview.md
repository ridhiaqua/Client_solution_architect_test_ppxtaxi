# Architecture Overview

Priority Pass × Taxi Integration

---

# Executive Summary

The Priority Pass × Taxi integration transforms fragmented airport services into a unified, intelligent, end-to-end journey experience.

By combining:

- Lounge access management
- Intelligent transportation coordination
- Real-time flight and traffic intelligence

The system reduces traveler stress, improves punctuality, and increases cross-platform engagement and revenue.

This document defines:

- Architectural vision
- MVP implementation strategy
- Technology choices and rationale
- Scalability model
- Tradeoffs and evolution path

The architecture balances:

- Business ambition
- Technical realism
- Operational simplicity
- Long-term scalability

---

# Vision

Transform airport travel from disconnected steps into a proactive, intelligent journey:

From:

> “Did I leave early enough?”

To:

> “You’re perfectly on track. Relax — your lounge access is ready.”

---

# Business & System Goals

## Primary Objectives

### 1. Seamless Cross-Platform Experience

- Unified journey timeline
- Shared notifications
- No manual coordination between apps
- Optional integration (no forced dependency)

### 2. Intelligent Timing Engine

Optimal departure recommendations using:

- Real-time traffic
- Flight schedules & delays
- Security wait estimates
- Lounge occupancy
- Gate walking distance
- Risk buffer modeling

### 3. Cross-Platform Value Creation

- Taxi users discover lounges
- Priority Pass users book transport
- Shared journey intelligence

### 4. Global Scalability

- 2,500+ airports
- Millions of potential users
- Sub-second experience

---

# Architectural Principles

## 1. Business-First Engineering

Every technical decision is validated against:

- User friction reduction
- Revenue enablement
- Platform growth
- Time-to-market

We avoid technical maximalism that does not improve business value.

---

## 2. Progressive Complexity

We distinguish between:

### Target Architecture (Long-Term Vision)

Event-driven, real-time, distributed.

### MVP Architecture (Phase 1)

- REST-based services
- Polling instead of streaming
- Shared PostgreSQL
- No CQRS
- No distributed cache cluster
- Horizontally scalable stateless services

Complexity scales only when justified by load.

---

## 3. Modular Domain Separation

Even if deployed together initially, the system is structured into clear bounded domains:

- Journey Service (Orchestration)
- Integration Service
- Lounge Service
- Taxi/Booking Service
- Flight & Traffic Adapters
- Notification Service
- User Service

This allows:

- Independent scaling
- Microservice extraction
- Clear ownership boundaries

---

# High-Level Architecture

## Logical Architecture (Target State)

### Key Services

### Journey Service

Core orchestration engine:

- Timeline computation
- Risk scoring
- Recalculation logic
- State coordination

### Integration Service

- Cross-platform data sync
- Inventory discovery
- State consistency management

### Lounge Service

- Availability
- Amenities
- Access validation

### Booking Service

- Taxi booking lifecycle
- Driver assignment
- Route adjustments

### User Service

- Unified identity
- Preferences
- Journey history

---

# MVP Implementation Architecture

For MVP delivery, we simplify:

## Communication

- REST between services
- Polling for flight updates
- Polling for ride status

## Data

- Shared PostgreSQL (schema-isolated)
- Strong consistency for bookings
- Eventual consistency acceptable for metadata

## No Message Bus In MVP

For MVP:

- Synchronous orchestration
- Background polling workers
- No Kafka/RabbitMQ cluster

Future introduction:

- Domain events
- Async recompute
- Event-driven notifications

---

# Technology Stack & Rationale

## Frontend

- React Native (mobile)
- React (web)
- Context + Hooks
- Tailwind CSS
- Custom component system

Rationale:

- Shared codebase
- Rapid feature iteration
- Consistent UI primitives

---

## Backend

- Node.js + Express
- API Gateway (AWS API Gateway)
- REST communication
- WebSockets (future real-time layer)
- Redis (future cache)
- RabbitMQ / SQS (future event bus)

Rationale:

- High productivity
- Mature ecosystem
- Non-blocking I/O ideal for integration-heavy workloads

---

## Data Storage

MVP:

- PostgreSQL (primary)
- No MongoDB initially
- No Redis cluster initially

Future:

- Redis for hot data
- MongoDB for analytics/log aggregation
- Read replicas and sharding for scaling

---

## Infrastructure

- AWS
- Containerized services
- EKS (Elastic Kubernetes Service for future scale phase)
- CloudFront CDN
- GitHub Actions CI/CD
- Observability via CloudWatch / Datadog

MVP may deploy on simpler ECS (Elastic Container Service) to reduce ops burden.

---

# Integration Patterns

## 1. API Gateway Pattern

Centralized:

- Auth
- Rate limiting
- Routing
- Observability

## 2. Adapter Pattern

External APIs wrapped behind internal interfaces:

- Flight Adapter
- Traffic Adapter
- Taxi Adapter

Prevents vendor lock-in and domain leakage.

## 3. Circuit Breaker Pattern

- Prevent cascading failures
- Retry with backoff
- Fallback recommendations

## 4. Cache-Aside Pattern (Future Phase)

- TTL-based
- Improves ETA lookup performance

---

# Non-Functional Targets

## MVP Targets

- <300ms API p95
- 99.5% uptime
- Horizontal scalability
- GDPR compliance
- OAuth 2.0 integration

## Future State

- <200ms API p95
- 99.9% uptime
- Multi-region deployment
- 10K concurrent users per region

---

# Reliability Strategy

- Idempotent booking endpoints
- Correlation IDs across services
- Graceful degradation if integration fails
- Confidence indicator exposed to user
- Retry with exponential backoff

---

# Scalability Strategy

Phase 1:

- Horizontal scaling
- Add DB read replica

Phase 2:

- Introduce Redis
- Separate polling workers

Phase 3:

- Event-driven recompute
- Database per service
- CQRS-lite read models

Phase 4:

- Multi-region active-active
- ML-based timing prediction

---

# Risk Assessment

## Technical Risks

- External API instability
- State synchronization errors
- Latency spikes
- Booking consistency failures

Mitigations:

- Adapter isolation
- Retries & fallbacks
- Idempotency
- Observability

## Business Risks

- Low adoption
- Integration friction
- Regulatory changes
- Competitive response

Mitigation:

- Optional integration
- Phased rollout
- Contractual SLAs

---

# Architecture Maturity Model

| Capability    | MVP        | Growth        | Mature            |
| ------------- | ---------- | ------------- | ----------------- |
| Communication | REST       | Async workers | Event-driven      |
| Data          | Shared DB  | Read replicas | DB per service    |
| Caching       | None       | Redis         | Distributed cache |
| Real-time     | Polling    | WebSocket     | Streaming         |
| Intelligence  | Rule-based | Heuristic     | ML                |

---

# Why This Architecture?

This design:

- Separates vision from implementation
- Avoids premature microservices sprawl
- Demonstrates tradeoff awareness
- Shows clear evolution path
- Aligns business metrics with system design
- Balances ambition with operational realism

It is intentionally pragmatic : not academically maximalist.

---

# Conclusion

This architecture enables:

- Rapid MVP delivery
- Measurable business impact
- Operational simplicity
- Predictable evolution to enterprise-grade scale

Complexity grows only when the business justifies it.
