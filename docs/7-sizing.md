# System Sizing — MVP Projection

## Container-Level T-Shirt Sizing

T-shirt sizing reflects:

- Compute intensity
- Traffic volume
- Scaling complexity
- External dependency load

Sizing scale:

- **XS** – Lightweight metadata service, low CPU
- **S** – Low to moderate API traffic
- **M** – Moderate traffic or stateful coordination
- **L** – High traffic or CPU-heavy logic
- **XL** – High throughput + complex scaling characteristics

---

### Container Sizing (MVP)

| Container                       | Responsibility                             | T-Shirt Size  | Rationale                                                              |
| ------------------------------- | ------------------------------------------ | ------------- | ---------------------------------------------------------------------- |
| API Gateway                     | Entry point, routing, auth validation      | M             | Handles all inbound traffic; lightweight logic but high request volume |
| Journey Service                 | Core orchestration & recommendation engine | XL            | Highest business logic density; recalculations + polling coordination  |
| Flight Integration Service      | Polls airline/aggregator APIs              | M             | External dependency load; moderate traffic; I/O heavy                  |
| Traffic/ETA Integration Service | Traffic-based travel time lookup           | M             | Synchronous external API calls; cacheable                              |
| Taxi Integration Service        | Ride booking + status polling              | L             | High polling frequency; state transitions; user-facing critical path   |
| Lounge Service                  | Lounge metadata + entitlement checks       | S             | Mostly read-heavy; low compute                                         |
| Notification Service            | Push notifications + alerts                | S             | Event-triggered; low CPU                                               |
| Shared PostgreSQL DB            | Persistent state storage                   | L             | Central state store; write-heavy during peak                           |
| (Optional Future) Redis Cache   | ETA + metadata caching                     | XS (M future) | Not required for MVP; small footprint initially                        |

---

## Scaling Implications

### Largest Scaling Drivers

1. Journey Service (XL)
2. Taxi Integration Service (L)
3. Database (L)

These will require horizontal scaling first.

---

## Year 1 Estimates

Users: 500,000  
DAU: 30,000  
Journeys/day: 10,000  
Peak concurrent journeys: ~6,000

---

## API Call Estimates (Per Journey)

Per journey:

- Flight polling: 6–10 calls
- ETA (traffic) lookup: 1–2 calls
- Taxi status polling: 5–10 calls
- Lounge lookup: 1 call

Estimated total: 15–25 external calls per journey

At 10,000 journeys/day:
≈ 200K–250K external API calls/day

Peak load estimate:
~400–500 requests/sec across all services

---

## Database Sizing

Year 1 estimates:

- Users: 500K
- Journeys: 3.6M/year
- Avg journey size: ~5KB
- Status updates + logs included

Estimated storage:
~20–40GB including indexes

Single PostgreSQL instance sufficient for MVP.

Future:

- Add read replicas
- Partition by journey date

---

## Horizontal Scaling Plan

### At 2× traffic:

- Increase Journey Service replicas
- Increase Taxi Integration replicas
- Add DB read replica

### At 5× traffic:

- Introduce Redis
- Separate Flight polling workers
- Introduce async processing

### At 10× traffic:

- Split DB per service
- Introduce event bus
- Introduce read models (CQRS-lite)

---

# Why This Is Not Over-Engineered

- No distributed cache required initially
- No message broker required initially
- Shared database acceptable for load

Complexity scales with business success — not before.

