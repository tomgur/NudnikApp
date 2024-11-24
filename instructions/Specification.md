# Nudnik - Product Specification

## Overview
Nudnik is an innovative alarm clock app designed to challenge users to wake up fully by requiring them to complete interactive tasks before the alarm can be dismissed. 
This helps users combat the habit of hitting the snooze button and ensures they wake up for the day. 
The ability to form new habits is crucial for personal growth and development. 
Nudnik capitalizes on this ability by challenging users to complete engaging tasks before dismissing the alarm. 
This approach encourages users to cultivate a habit of actually completing tasks (e.g., taking a daily pill).

## Features

1. Home Screen
    1. See a list of alarms and add a new alarm button
    2. The user can edit an alarm by tapping on it.
    3. The user can delete an alarm by swiping on an alarm and tapping the delete button.
    4. The user can enable or disable an alarm by tapping the switch.
2. Alarm Configuration
    1. Date and Time: The user selects the date and time for the alarm using a date-time picker.
    2. Recurrence: The user can choose to repeat the alarm on a daily, weekly and monthly basis.
        1. Daily: The alarm will ring every day at the selected time.
        2. Weekly: The alarm will ring every week on the selected days (user can select multiple days) at the selected time.
        3. Work Week: The alarm will ring every work week (local based) at the selected time.
        4. Monthly: The alarm will ring every month on the selected day at the selected time.
    2. Task Configuration: The user chooses a task from a predefined list that needs to be completed to dismiss the alarm.
        - List of task types:
            1. Math Calculation: The user needs to solve a math calculation.
            2. QR Code Scan: The user needs to scan a QR code.
            3. Bar Code Scan: The user needs to scan a bar code.
            4. None: The user does not need to complete a task to dismiss the alarm.
    3. Save or Update Alarm: The user saves the alarm configuration, which is then displayed on the Home Screen.
    4. Cancel: The user cancels the alarm configuration and returns to the Home Screen.
    5. Snooze: the user can decide to disable the snooze feature. this will require the user to complete the task to dismiss the alarm.
3. Alarm Dismissal
    1. The user can dismiss the alarm by completing the task.
    2. The user can snooze the alarm by tapping the snooze button.
## Technical Specifications

- Platform: Mobile (iOS and Android)
- Framework: React Native
- Development Tools: Expo
- Authentication: Supabase
- Notifications: Expo Push Notifications
- Storage: Async Storage and Supabase
- State Management: Context API
- Routing: React Navigation
- Testing: Jest and React Native Testing Library

## Project Setup and Folder Structure

- Folder Structure

```bash
Nudnik/
├── assets/                # Asset files (images, fonts, etc.)
├── components/            # Reusable components
│   ├── Button.tsx
│   ├── Header.tsx
│   └── Footer.tsx
├── context/               # Context API store
│   ├── AppContext.tsx     # Context and provider
│   ├── actions.ts         # Action types and creators
│   └── reducers.ts        # Reducers for state management
├── hooks/                 # Custom hooks
│   ├── useAuth.ts         # Example custom hook for authentication
│   └── useFetch.ts        # Example custom hook for data fetching
├── app/                   # Navigation configuration
│   └── App.tsx
├── screens/               # Screen components
│   ├── HomeScreen.tsx
│   ├── DetailsScreen.tsx
│   └── SettingsScreen.tsx
├── utils/                 # Utility functions
│   └── helpers.ts
├── app.json               # Expo configuration
├── package.json           # Project dependencies
├── tsconfig.json          # TypeScript configuration
└── README.md              # Project documentation
```     

## Best Practices for Coding in React Native and Expo

- Component-Based Architecture: Break down the UI into reusable components.
- State Management: Use Context API for managing global state.
- Styling: Use StyleSheet for consistent styling and avoid inline styles.
- Navigation: Use React Navigation for handling navigation between screens.
- Testing: Write unit tests using Jest and React Native Testing Library.
- Code Quality: Use ESLint and Prettier for maintaining code quality and consistency.
- Performance Optimization: Optimize images, use lazy loading, and avoid unnecessary re-renders.
- Documentation: Maintain clear and concise documentation for the project.

## Best Practices for Error Handling and Logging
- Centralized Error Handling: Implement a centralized error handling mechanism to catch and handle errors globally.
- Error Boundaries: Use Reacts Error Boundaries to catch JavaScript errors in components and display fallback UI.
- Try-Catch Blocks: Use try-catch blocks to handle exceptions in asynchronous code.
- User-Friendly Error Messages: Display user-friendly error messages to inform users about issues without exposing technical details.
- Logging: Use a logging library like react-native-logs for error tracking and logging.
- Network Error Handling: Handle network errors gracefully by providing retry options and offline support.
- Validation: Validate user inputs and API responses to prevent errors from occurring.
- Graceful Degradation: Ensure the app continues to function with limited features if certain parts fail.

## Type Safety
- TypeScript: Use TypeScript to add static type checking to your JavaScript code. This helps catch errors early in the development process and improves code quality.
- PropTypes: For smaller projects or components, you can use PropTypes to validate the props passed to your React components.
- Type Definitions: Create and maintain type definitions for your components, state, and props to ensure consistency and reduce runtime errors.
- Third-Party Libraries: Use type-safe libraries and ensure their type definitions are correctly installed and used in your project.
- Strict Mode: Enable strict mode in TypeScript to enforce stricter type checking and catch potential issues early.
- ESLint: Use ESLint to catch errors and enforce code standards.
- Prettier: Use Prettier to format your code consistently.

---

Above is the project I want to build,
How should I structure my project files?
- All new components should go in /components at the root (not in app folder) and be named like example-component.tsx unless otherwise specified
- All new pages go in /app
- Use Root Layout strategy for routing
- All data fetching should be done in a server component and pass the data down as props
- All new context should go in /context and be named like example-context.tsx unless otherwise specified
- All new hooks go in /hooks and be named like use-example-hook.ts unless otherwise specified
- All new utils go in /utils and be named like example-utils.ts unless otherwise specified
- All new assets go in /assets
- Try to be as lean as possible, avoid unneccesary files and folders
- dont generate the code itself, just the file structure and dependencies


----

Given the details of your project and the specified structure, here’s how you should organize the file structure and dependencies for your **Nudnik** app. 

---

### ** File Structure**

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
│   ├── _layout.tsx              # Root layout (React Navigation setup)
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

---

### **Dependencies**

Here’s the list of dependencies for your **React Native** app along with explanations:

#### **Core Dependencies**
1. **React & React Native**: The core framework for building the app.
2. **React Navigation**: For routing and navigation.
   ```bash
   npm install @react-navigation/native react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated react-native-vector-icons
   ```
3. **Expo**: To streamline app development.
   ```bash
   npx create-expo-app@latest Nudnik --template blank-typescript
   npm install @react-native-community/datetimepicker @react-native-picker/picker
   npm install expo-router
   npm install date-fns
   ```

#### **State Management**
1. **Context API** (built into React): For global state management.

#### **TypeScript**
1. Install TypeScript and type definitions.
   ```bash
   npm install typescript @types/react @types/react-native
   ```

#### **Push Notifications**
1. **Expo Push Notifications**: For handling alarm reminders.
   ```bash
   npm install expo-notifications
   ```

#### **Date and Time**
1. **date-fns**: For formatting dates and times.
   ```bash
   npm install date-fns
   ```

#### **Form Handling**
1. **React Hook Form**: For form validation.
   ```bash
   npm install react-hook-form
   ```

#### **Networking**
1. **Axios**: For making API calls.
   ```bash
   npm install axios
   ```

#### **Testing**
1. **Jest**: Unit testing framework.
   ```bash
   npm install jest @testing-library/react-native
   ```

#### **Error Handling**
1. **react-native-logs**: For logging.
   ```bash
   npm install react-native-logs
   ```

---

### **Notes**
- **Lean structure:** Avoid unnecessary folders like `styles` or `test` unless they grow significantly.
- **Server components:** Handle data fetching in context and server-side logic, keeping components declarative.
- Use **dynamic routing** in the `/app` folder to keep everything modular.
- Avoid including redundant configurations by leveraging **Expo's managed workflow**.

----

Help me adding details to the original PRD that give clear alingment to developers who will implement the project.
- dont create actual code, just add details to the PRD
- including file structure and addtional requirements into the PRD
