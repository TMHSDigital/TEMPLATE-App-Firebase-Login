# TEMPLATE-App-Firebase-Login

This template provides a starting point for creating a React application with Firebase Authentication, specifically using phone number authentication. The app is designed to work on both desktop and mobile devices.

## Features

- Phone number authentication using Firebase
- Responsive design for desktop and mobile
- React Router for navigation
- Protected routes (Dashboard accessible only after login)

## Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js and npm installed
- A Firebase account and project set up
- Basic knowledge of React and Firebase

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/TMHSDigital/TEMPLATE-App-Firebase-Login.git
   cd TEMPLATE-App-Firebase-Login
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory and add your Firebase configuration:
   ```
   REACT_APP_FIREBASE_API_KEY=your_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
   REACT_APP_FIREBASE_PROJECT_ID=your_project_id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   REACT_APP_FIREBASE_APP_ID=your_app_id
   ```

## Usage

To start the development server:

```
npm start
```

The application will be available at `http://localhost:3000`.

## Project Structure

- `public/`: Contains the HTML file and other static assets
- `src/`: Contains the React application code
  - `components/`: React components (Login, Dashboard)
  - `styles/`: CSS files
  - `utils/`: Utility functions (Firebase configuration)
  - `App.js`: Main application component
  - `index.js`: Entry point of the React application
- `firebase.json`: Firebase configuration file

## Customization

1. Update the Firebase configuration in `src/utils/firebase.js` with your project's details.
2. Modify the components in `src/components/` to fit your specific use case.
3. Adjust the styles in `src/styles/App.css` to match your desired look and feel.

## Deployment

To deploy the application to Firebase Hosting:

1. Install the Firebase CLI:
   ```
   npm install -g firebase-tools
   ```

2. Login to Firebase:
   ```
   firebase login
   ```

3. Initialize your project:
   ```
   firebase init
   ```

4. Build your project:
   ```
   npm run build
   ```

5. Deploy to Firebase:
   ```
   firebase deploy
   ```

## Contributing

Contributions to this template are welcome. Please follow these steps:

1. Fork the repository
2. Create a new branch: `git checkout -b feature-branch-name`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the original branch: `git push origin feature-branch-name`
5. Create the pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

If you have any questions or suggestions, please open an issue in this repository.
