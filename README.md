# Flashcard Quick Capture & Gesture Review

## Authors

Megi Bagashvili
Mariam Shushanashvili


## Description

This project enhances the flashcard learning experience by combining a browser extension for quick card creation with webcam-based gesture recognition for card review, built upon the concepts from MIT 6.102 Software Construction.

It allows users to:
1.  Highlight text on any webpage and quickly create a flashcard front using a browser extension popup.
2.  Add a corresponding back text within the popup.
3.  Save the new flashcard to a persistent backend database.
4.  Review flashcards that are due using the extension popup.
5.  Indicate review difficulty (Easy, Hard, Wrong) by making simple hand gestures (Thumbs Up, Flat Hand, Thumbs Down) recognized via the webcam using TensorFlow.js Hand Pose Detection.

The system uses a simple Spaced Repetition System (SRS) logic on the backend to schedule card reviews based on user input.

## Features

*   **Browser Extension (Chrome/Edge):**
    *   Popup UI for card creation and review.
    *   Content script to capture selected text from webpages.
    *   Integration with backend API for saving and retrieving cards.
*   **Gesture Recognition:**
    *   Uses TensorFlow.js Hand Pose Detection (MediaPipeHands Lite model).
    *   Recognizes Thumbs Up (Easy), Flat Hand (Hard), and Thumbs Down (Wrong) gestures.
    *   Debouncing logic to prevent accidental triggers.
*   **Backend API (Node.js/Express):**
    *   RESTful API for CRUD operations on flashcards (Create, Practice/Read, Update review).
    *   Endpoints for fetching hints and basic progress statistics.
    *   Uses PostgreSQL for persistent storage.
*   **Persistence:**
    *   Flashcards are stored in a PostgreSQL database.
    *   Review difficulty updates the card's next due_date in the database.

## Technology Stack

*   **Browser Extension:** TypeScript, HTML, CSS, Chrome Extension APIs
*   **Gesture Recognition:** TensorFlow.js (@tensorflow/tfjs, @tensorflow/tfjs-backend-webgl), MediaPipe Hands Model (@tensorflow-models/hand-pose-detection)
*   **Backend:** Node.js, Express.js, TypeScript, PostgreSQL, CORS, Dotenv
*   **Testing:**
    *   Backend: Jest, Supertest (Integration Testing)
    *   Extension: Jest (Unit Testing for GestureRecognizer)
*   **Development:** ts-node-dev

## Project Structure

Flashcards-App/
├── backend/ # Node.js API Server & DB Logic
│ ├── src/
│ └── ... (package.json, tsconfig.json, etc.)
├── extension/ # Browser Extension Code
│ ├── src/ # Gesture Recognizer Logic
│ ├── dist/ # Bundled JS Output
│ └── ... (popup.ts, popup.html, manifest.json, etc.)
└── frontend/ # Separate React Frontend (Optional/Auxiliary UI)
├── src/
└── ... (package.json, vite.config.ts, etc.)


## Setup & Running

**Prerequisites:**

*   Node.js (v18+ recommended)
*   npm (usually comes with Node.js)
*   PostgreSQL database server running
*   Git

**Steps:**

1.  **Clone Repository:**
    ```bash
    git clone <repository_url>
    cd Flashcards-App
    ```
2.  **Backend Setup:**
    *   Navigate to backend: `cd backend`
    *   Install dependencies: `npm install`
    *   Create `.env` file: Copy `.env.example` (if provided) or create `.env` and add your PostgreSQL connection details:
        ```dotenv
        PGHOST=host
        PGUSER=db_abuser
        PGPASSWORD=password
        PGDATABASE=name
        PGPORT=5992
        PORT=3005 # Optional: Port for the backend server
        ```
    *   Setup Database Schema: Connect to your PostgreSQL instance using `psql` or a GUI tool. Create the database specified in `.env`. Execute the SQL commands in `backend/schema.sql` against your database.
    *   Run Backend Dev Server: `npm run dev` (Keep this terminal running)

3.  **Extension Setup:**
    *   Navigate to extension: `cd ../extension`
    *   Install dependencies: `npm install`
    *   Build the extension code: `npm run build` (This creates the `dist/popup.bundle.js` file)

4.  **Load Extension in Browser:**
    *   Open Chrome/Edge.
    *   Go to `chrome://extensions` or `edge://extensions`.
    *   Enable "Developer mode".
    *   Click "Load unpacked".
    *   Select the `Flashcards-App/extension` folder.
    *   Ensure the extension loads without errors.

## Usage

1.  **Capture:** Select text on a webpage, click the extension icon.
2.  **Create:** The selected text appears as the "Front". Enter the "Back" text and click "Save Card".
3.  **Review:** Open the extension popup. If cards are due, one will be displayed.
4.  **Show Answer:** Click the "Show Answer" button.
5.  **Gesture Input:** Make a clear Thumbs Up (Easy), Flat Hand (Hard), or Thumbs Down (Wrong) gesture towards the webcam. Hold briefly until the action is registered. The next card will load after a short pause.

## Testing

1.  **Backend Integration Tests:**
    *   Navigate to `backend/`.
    *   Ensure a separate test database is configured (or tests run within transactions, as currently implemented).
    *   Run: `npm test`
2.  **Extension Unit Tests (Gesture Recognizer):**
    *   Navigate to `extension/`.
    *   Run: `npm test` (Note: Jest configuration needs to be added to `extension/package.json` and `jest.config.js` created for this to work).

## Design Highlights

*   **Modularity:** Separated concerns between backend API, database logic, extension UI/logic, and gesture recognition.
*   **API Specification:** Backend routes include JSDoc `@specs` defining behavior.
*   **Testing:** Includes backend integration tests and unit tests for gesture logic.
*   **Type Safety:** Uses TypeScript throughout the backend, extension.
*   **Persistence:** Utilizes PostgreSQL for reliable data storage.
*   **Extensibility:** The API-driven design allows for different frontends (extension, web app) to interact with the same flashcard data.



