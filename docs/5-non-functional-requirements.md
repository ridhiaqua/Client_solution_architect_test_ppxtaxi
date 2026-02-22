# Non-Functional Requirements — MVP

## Performance

- API response target: < 300ms (p95)
- Journey recomputation: < 1s
- Flight polling interval: 5–10 minutes
- Ride polling interval: configurable (e.g., 60–120 seconds)

## Availability

- Target SLA: 99.5% (MVP)
- No multi-region required initially
- Single-region failover acceptable

## Scalability

Initial load assumptions:

- 10K journeys/day
- 500K users Year 1

Scaling strategy:

- Horizontal scaling of services
- Read replicas for PostgreSQL
- Introduce Redis if needed
- Introduce event bus when traffic increases

## Security

- HTTPS everywhere
- OAuth token exchange for taxi platform
- No payment data processed by PP
- Minimal data sharing between platforms

## Data Integrity

- Strong consistency for:
  - Journey recommendations
  - Ride confirmation state

- Eventual consistency acceptable for:
  - Lounge metadata replication
  - Analytics

---

## Observability

- Centralized logging
- Correlation IDs across services
- Basic health checks
- Error alerting thresholds

---

## Compliance

- GDPR-compliant data handling
- PCI scope avoided (payments handled by Taxi Platform)

**Document Version**: 1.0  
**Last Updated**: February 2026  
**Owner**: Ridhi