# NovaKaur | Simran Kaur Portfolio

This is a professional portfolio built with Next.js, Tailwind CSS, ShadCN UI, and Genkit for AI-powered features.

## Getting Started

1.  Install dependencies: `npm install`
2.  Set up environment variables: Create a `.env` file and add your `GEMINI_API_KEY`.
3.  Run the development server: `npm run dev`

## Deployment via Firebase App Hosting

This app is optimized for **Firebase App Hosting**. Follow these steps to deploy:

1.  **Push to GitHub**: Push your local code to a GitHub repository.
2.  **Firebase Console**: Navigate to the [Firebase Console](https://console.firebase.google.com/).
3.  **Setup App Hosting**:
    -   Select your project.
    -   Go to **Build > App Hosting**.
    -   Click **Get Started** and link your GitHub repository.
4.  **Add Secrets**:
    -   Once the backend is created, go to the **App Hosting** dashboard.
    -   In the **Settings** tab, add your `GEMINI_API_KEY` as a **Secret**.
5.  **Build & Deploy**: Firebase will automatically trigger a build and provide you with a live URL.

## Tech Stack
-   **Framework**: Next.js (App Router)
-   **Styling**: Tailwind CSS + ShadCN UI
-   **AI**: Genkit (Google GenAI)
-   **Icons**: Lucide React
