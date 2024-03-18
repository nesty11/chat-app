# 📱 Chat App with React Native 🚀

## Features and Requirements

### User Stories
- Easily join chat rooms
- Send text messages, images, and location data
- Read messages offline
- Accessible chat interface for visually impaired users

### Key Features
- Name and background color selection before joining chat
- Conversation display with input field and submit button
- Additional features for sending images and location data
- Online and offline data storage

### Technical Requirements
- React Native for development
- Expo for building
- Firestore for chat storage
- Firebase authentication
- Local storage for chat conversations
- Image selection and capture
- Firebase Cloud Storage for image storage
- Location data retrieval

## Additional Details

- Location data displayed in map view
- Gifted Chat library for chat interface and functionality
- Codebase with detailed comments for clarity

##  Getting Started
### Prerequisites
- Node.js
- npm or yarn
- Expo CLI
  - Install Expo CLI globally:
    ```
    npm install -g expo-cli
### Database
This app was developed using Firebase Firestore from Google for data storage and Firebase Authentication for user authentication and management.
1. Install Firebase in your project directory
   ```
   npm install firebase
2. Go to https://console.firebase.google.com/ and create a new Firebase Project.
3. Initialize project in either test or production mode.
4. Enable anonymous authentication in Firebase console under Authentication -> Sign-In Mehtod
5. Head over to Project Settings -> General -> Your Apps -> SDK setup and configuration, and copy your personal Firebase SDK
   ```
   const firebaseConfig = {
   
   apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
    };
Add this to your `firebaseConfig.js` file.

6. Under Firestore Database -> Rules, change `false` to `true`:
   ```
   service cloud.firestore {
    match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
        }
      }
    }
   ```
   ```
   allow read, write: if true;
7. Make the same change under Storage -> Rules:
  ```
    service firebase.storage {
    match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read, write: if false;
        }
      }
    }
   ```
   ```
   allow read, write: if true;
```
### Installation
1. Install an emulator, Android Studio (PC) or XCode(Mac)
2. Clone this repository
   ```
   git clone https://github.com/nesty11/chat-app
3. Install the NPM packages
   ```
   npm install
   ```
4. Run your Expo Project
   ```
   npm start
- Once Expo is running, you can run the app on your emulator or download the Expo Go app on your mobile device where you can scan the QR code to emulate the app on your device.

  
👨‍💻 Happy coding!
