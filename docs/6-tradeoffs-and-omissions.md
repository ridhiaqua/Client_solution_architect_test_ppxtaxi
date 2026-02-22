# Architecture Tradeoffs & Intentional Omissions

This document captures key architectural decisions, tradeoffs, and intentional omissions made during MVP design.

It reflects:

- Business priorities
- Time-to-market constraints
- Operational realities
- Long-term scalability goals

This is not a static document — it grows as scale and requirements evolve.

---

# Core Architectural Tradeoffs

---

## 1. Modular Monolith (MVP) vs Full Microservices

### Decision

Modular service-oriented architecture, deployable as a cohesive unit for MVP.

### Why Not Immediate Microservices?

**Pros of Full Microservices:**

- Independent scaling
- Independent deployments
- Fault isolation
- Technology heterogeneity
- Team autonomy

**Cons:**

- Distributed tracing complexity
- Cross-service latency
- Eventual consistency everywhere
- Operational overhead (Kubernetes, observability, networking)
- Slower early iteration

### Tradeoff Accepted

We architect for microservices boundaries but deploy with minimal distributed complexity.

- Domain isolation via modules
- Separate schemas
- Clear service interfaces
- No shared business logic across domains

This provides an upgrade path without early operational tax.

---

## 2. REST vs GraphQL

### Decision

REST APIs + WebSocket (future enhancement)

### Why REST?

- Mature caching support (HTTP semantics)
- Easier rate limiting and gateway policies
- Simpler monitoring
- Team familiarity
- Clear versioning
- Predictable performance characteristics

### Why Not GraphQL?

- Increased caching complexity
- Risk of N+1 query explosion
- Harder gateway enforcement
- Requires additional infrastructure (schema stitching, federation)
- Added cognitive load for mobile teams

### Tradeoff Accepted

We prioritize operational simplicity and productivity over schema flexibility.

Revisit if:

- API payload complexity increases significantly

---

## 3. Event-Driven vs Request-Response

### Decision

Hybrid — REST for queries, events for cross-domain updates (future phase)

### MVP Implementation

- Primarily synchronous request/response
- Polling for flight and ride updates
- Background workers instead of full event bus

### Why Not Pure Event-Driven Now?

- Adds operational overhead (Kafka/RabbitMQ)
- Eventual consistency everywhere
- Debugging complexity increases
- Harder local development experience

### Tradeoff Accepted

MVP favors clarity and determinism.

Event-driven model introduced when:

- Cross-service coupling increases
- Async recompute needed
- Scale exceeds synchronous model comfort

---

## 4. PostgreSQL vs NoSQL for Core Data

### Decision

PostgreSQL for transactional data.

### Why PostgreSQL?

- ACID guarantees (critical for bookings)
- Strong relational integrity
- Mature ecosystem
- JSON column flexibility
- Excellent indexing capabilities

### Why Not NoSQL for Core?

- Eventual consistency unacceptable for bookings
- Multi-entity transactions required
- Schema flexibility not primary need

### Future

- MongoDB for logs/analytics
- Redis for hot data caching

### Tradeoff Accepted

Slight operational overhead justified for correctness guarantees.

---

## 5. Synchronous vs Asynchronous External API Calls

### Decision

Synchronous with aggressive timeouts + caching.

### Why?

User expects immediate recommendation feedback.

Async-only approach would:

- Require intermediate states
- Increase UX complexity
- Delay user decisions

### Mitigations

- 2–3 second timeout cap
- Cached fallback responses
- Confidence score exposure
- Circuit breaker pattern

### Tradeoff Accepted

Prioritize UX immediacy over pure decoupling.

---

## 6. Strong vs Eventual Consistency

### Strong Consistency

- Taxi bookings
- Lounge reservations
- Payment confirmation

### Eventual Consistency

- Cross-platform state sync
- Analytics updates
- Recommendation recalculations

### Tradeoff Accepted

Consistency model aligned to user expectations.

1–3 second sync delay acceptable for cross-app updates.

---

## 7. Single Region (MVP) vs Multi-Region

### MVP Decision

Single region primary deployment with failover readiness.

### Why Not Multi-Region Day One?

- Cross-region replication complexity
- Operational overhead
- Higher infra cost
- Not justified by MVP traffic

### Evolution Plan

- Introduce read replicas
- Then region-specific active deployments
- Then active-active multi-region

### Tradeoff Accepted

Scale complexity only when traffic and compliance demand it.

---

## 8. Build vs Buy — Recommendation Engine

### Decision

Build rule-based engine first.

### Why?

- Domain-specific journey logic
- Need explainability
- No historical data for ML
- Easier debugging

### Future

- ML personalization layer
- Delay prediction models
- A/B tested refinement engine

### Tradeoff Accepted

Slower initial intelligence in exchange for long-term control.

---

# Intentional Omissions (Phase 1)

---

## 1. Machine Learning

Omitted because:

- No training data
- Adds infra complexity
- Hard to debug in early phase

Plan:

- Collect behavioral data
- Introduce ML layer in 6–12 months

---

## 2. Dynamic Pricing

Omitted because:

- Risk of negative user sentiment
- Contractual partner limitations
- UX complexity

---

## 3. Multi-Party Journey Planning

Single traveler only.

Group planning introduces:

- Coordination complexity
- Shared state conflicts
- Edge case explosion

---

## 4. Deep Analytics Platform

Basic dashboards only at launch.

Data warehouse + BI tools deferred until:

- Product-market fit validated
- Meaningful event volume accumulated

---

## 5. Real-Time Flight Webhooks

Polling instead of streaming.

Webhook ingestion adds:

- Idempotency challenges
- Ordering problems
- Operational overhead

---

## 6. White-Label Architecture

Not abstracted for multiple partners initially.

Focus:

- Validate integration model first
- Avoid premature generalization

---

# Known Limitations

---

## Traffic Prediction Accuracy

- 75–85% accurate
- Mitigated via buffers + notifications

---

## Lounge Occupancy Gaps

- Some lounges lack real-time feeds
- Confidence indicator displayed

---

## Cross-App Sync Lag

- 1–3 seconds
- Acceptable for user behavior pattern

---

## External API Dependency Risk

Mitigated via:

- Multiple providers
- Circuit breakers
- Caching
- Graceful degradation

---

# Decision Review Framework

Re-evaluate decisions if:

- Traffic increases 10×
- p95 latency exceeds SLA
- User churn increases
- Cross-service complexity grows
- Operational incidents increase

---

# 7️⃣ Guiding Philosophy

We optimize for:

- Reversible decisions early
- Irreversible decisions carefully
- Business value over architectural purity
- Evolutionary architecture over speculative design

---

# Conclusion

This architecture intentionally balances:

- Ambition and pragmatism
- Scalability and simplicity
- Global readiness and MVP realism
- Innovation and operational stability

Complexity is introduced deliberately, not prematurely.
