# Frontend Prototype

## Overview

This directory contains the frontend prototype assets including Figma design files and screen captures demonstrating the Priority Pass × Taxi App integration user experience.

## Contents

### 1. Figma Design Files

**Location**: 
[Figma](https://glory-table-66584068.figma.site "@embed")


The Figma prototype includes:

- Complete mobile app screens for Priority Pass app
- Complete mobile app screens for Taxi app
- User flow diagrams
- Interactive prototypes

### 2. Screen Captures

#### Priority Pass App Views

**Home Screen** (`priority-pass-home.png`)

- Upcoming flight card
- Quick stats (visits, lounges)
- Airport transfer integration card
- Navigation bar

**Journey Planning Screen** (`priority-pass-journey.png`)

- Timeline view showing:
  - Departure from home
  - Travel to airport (with taxi booking)
  - Lounge time slot
  - Boarding at gate
- Journey summary card
- Real-time status indicators

**Lounge Details Screen** (`priority-pass-lounge.png`)

- Lounge information (Centurion Lounge)
- Amenities icons (WiFi, Bar, Dining, Showers)
- Current occupancy indicator
- Directions and location map
- Operating hours

**Booking Confirmation** (`priority-pass-confirmation.png`)

- Taxi booking confirmed
- Driver details
- Journey timeline
- QR code ready indicator

#### Taxi App Views

**Ride Booking Screen** (`taxi-booking.png`)

- Pickup and destination input
- Airport detection
- Lounge access availability card
- Time selection (Now/Schedule)
- Smart time recommendation
- Vehicle options (Standard/Premium)

**Route Planning Screen** (`taxi-route.png`)

- Map view with route
- Driver information card
- Lounge stop suggestion
- Trip details breakdown
- Estimated arrival times

**Lounge Discovery Screen** (`taxi-lounge-discovery.png`)

- Available lounges list
- Centurion Lounge featured
- Amenities badges
- Occupancy status
- "On your route" indicator
- Delta Sky Club alternative

**Journey Confirmation** (`taxi-confirmation.png`)

- Confirmed booking with lounge stop
- Complete timeline
- Driver en route notification
- Fare breakdown

### 3. User Flow Diagrams

#### Complete User Journey Flow

**Flow 1: Priority Pass User Books Taxi**

```
[Home Screen]
    ↓ (taps "Plan Your Journey")
[Journey Planning]
    ↓ (reviews timeline)
[Taxi Booking]
    ↓ (confirms booking)
[Confirmation]
    ↓ (day of travel)
[Real-Time Tracking]
```

**Flow 2: Taxi User Discovers Lounge**

```
[Ride Booking]
    ↓ (enters airport destination)
[Lounge Suggestion]
    ↓ (taps "Explore Lounges")
[Lounge Discovery]
    ↓ (selects lounge)
[Add to Journey]
    ↓ (confirms booking)
[Route with Lounge]
```

#### Key Interaction Points

**Priority Pass → Taxi Integration**

1. User on Priority Pass sees "Book Taxi Now" CTA
2. Tapping opens integrated booking modal
3. Pre-filled with optimal departure time
4. Confirmation syncs to both apps

**Taxi → Priority Pass Integration**

1. System detects airport destination
2. Shows lounge availability card
3. User explores lounges
4. Adding lounge adjusts journey timeline
5. Priority Pass membership required (or purchased)

### 4. Component Interactions

#### Timeline Component

- **Purpose**: Show complete door-to-gate journey
- **Interactions**:
  - Expandable segments for details
  - Real-time status updates
  - Edit/adjust timing
  - Share journey with others

#### Lounge Card Component

- **Purpose**: Display lounge information
- **Interactions**:
  - Tap to see full details
  - View occupancy status
  - Book/reserve access
  - Get directions

#### Smart Recommendation Component

- **Purpose**: Show AI-calculated optimal times
- **Interactions**:
  - Accept recommendation
  - View alternative times
  - See explanation of calculation
  - Adjust preferences

#### Driver Tracking Component

- **Purpose**: Real-time driver location
- **Interactions**:
  - Live map updates
  - ETA countdown
  - Contact driver
  - Share location

### 5. Accessibility

#### Screen Reader Support

- All interactive elements have labels
- Status updates announced
- Form fields properly labeled
- Error messages clearly associated

#### Visual Accessibility

- Minimum contrast ratio: 4.5:1 for text
- Touch targets: Minimum 44x44pt
- Color not sole indicator of state
- Support for dynamic type sizes

## How to Use This Prototype

### For Stakeholders

1. Review screen captures to understand user flow
2. See how both apps integrate seamlessly
3. Understand key interaction points
4. Evaluate user experience quality

**Document Version**: 1.0  
**Last Updated**: February 2026  
**Owner**: Ridhi
