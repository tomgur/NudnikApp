# Product Requirements Document (PRD) - Nudnik App

## Overview
**Nudnik** is a mobile application aimed at creating, managing, and dismissing alarms through an interactive and engaging user experience. This document outlines the requirements, features, and technical details necessary for developers to implement the project successfully.

---

## Goals and Objectives
1. Provide a robust and intuitive alarm management system.
2. Enable users to dismiss alarms using interactive tasks.
3. Leverage push notifications for reliable alarm alerts.
4. Ensure modularity and reusability in the app's architecture for scalability.

---

## Key Features
### 1. Alarm Management
- **Create, Edit, and Delete Alarms:** Users should be able to manage alarms through a simple interface.
- **Interactive Dismissal Tasks:** Users must complete tasks (e.g., solving puzzles) to dismiss alarms.
- **Recurring Alarms:** Option to set alarms on a recurring schedule (daily, weekly, etc.).

### 2. Notifications
- Push notifications will be used to trigger alarms even when the app is not active.

### 3. User Interface
- Minimalistic yet functional design with clear navigation.
- Responsive layouts for seamless usage across devices.

---

## Technical Details
### File Structure
The app should follow the structure below for maintainability and scalability:

```bash
Nudnik/
├── assets/                     # Asset files (images, fonts, etc.)
│   ├── images/                 # Image assets
│   ├── fonts/                  # Font files
│   └── icons/                  # Icon assets
├── components/                 # Reusable components
│   ├── alarm-list.tsx          # Displays list of alarms on Home Screen
│   ├── alarm-item.tsx          # Individual alarm item with options to edit/delete
│   ├── alarm-form.tsx          # Form for creating/editing alarms
│   └── interactive-task.tsx    # Handles interactive dismissal tasks
├── context/                    # Global state management
│   └── alarm-context.tsx       # Alarm state management (CRUD operations)
├── hooks/                      # Custom hooks
│   ├── use-alarm-actions.ts    # Handles alarm-specific logic
│   └── use-push-notifications.ts # Manages push notifications
├── app/                        # Pages and routing setup
│   ├── _layout.tsx             # Root layout (React Navigation setup)
│   ├── home/                   # Home screen folder
│   │   └── page.tsx            # Home screen entry point
│   ├── alarm/                  # Alarm details and configuration
│   │   ├── new/                # Page for adding a new alarm
│   │   │   └── page.tsx        # New alarm creation page
│   │   └── [id]/               # Dynamic routing for specific alarms
│   │       ├── page.tsx        # Edit alarm page
│   │       └── dismiss-task.tsx # Task-based alarm dismissal page
├── utils/                      # Utility functions
│   ├── date-utils.ts           # Handles alarm scheduling and date-time formatting
│   └── notification-utils.ts   # Push notification utilities
├── app.json                    # Expo configuration
├── package.json                # Project dependencies
├── tsconfig.json               # TypeScript configuration
└── README.md                   # Project documentation
```

### Dependencies

#### Core Dependencies
- **React & React Native**: The core framework for building the app.
- **React Navigation**: For routing and navigation.
- **Expo**: To streamline app development and access native features.

#### Additional Libraries
- **TypeScript**: For strong typing.
- **date-fns**: For date and time formatting.
- **Expo Notifications**: For push notifications.
- **React Hook Form**: For form validation.
- **Axios**: For networking.
- **Jest**: For unit testing.
- **react-native-logs**: For logging errors and debugging.

---

## Requirements for Developers
### Functional Requirements
1. Implement dynamic routing in the `/app` folder to support modular pages.
2. Use Context API for global state management.
3. Integrate push notifications using `expo-notifications`.
4. Ensure the app handles CRUD operations for alarms.
5. Design reusable components for scalability.

### Non-Functional Requirements
1. The app should maintain a responsive and clean design.
2. The architecture must support future scalability.
3. Follow TypeScript best practices for consistency and error reduction.
4. All code should be unit-tested with 80%+ test coverage.

---

## Notes for Implementation
1. **Push Notification Handling:** Ensure alarms trigger notifications when the app is in the background or closed.
2. **Interactive Dismissal Logic:** Use state to manage task progression during dismissal.
3. **Asset Management:** Store all static assets (images, fonts) in the `assets` folder.
4. **Testing:** Include unit tests for components and hooks. Use mock data to test alarm CRUD operations.
5. **Version Control:** Use Git with clear branching strategies (e.g., feature, development, main).


