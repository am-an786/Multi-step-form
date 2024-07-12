# Multi-step-form

# Setup Instructions
  To run this project locally, follow these steps:

1. Clone the Repository:

       git clone <repository_url>
       cd multi-step-form-react

2. Install Dependencies:

       npm install
3.Run the Application:

       npm start
This will run the app in development mode. Open http://localhost:3000 to view it in the browser.

# Folder Structure
<pre>
  

multi-step-form-react/
│
├── public/            # Public assets and index.html
│
├── src/               # Source files
│   ├── components/    # React components
│   ├── App.js         # Main component
│   ├── index.js       # Entry point
│   └── ...
│
├── README.md          # Project README file
└── ...
  </pre>
# Assumptions and Decisions
Form Validation: Implemented basic client-side validation for required fields. Custom validation rules (e.g., email format) were added as per assignment specifications.

State Management: Utilized React hooks (useState, useEffect) for managing form state. Ensured state updates were synchronized with form navigation.

Local Storage: Implemented local storage to persist form data across steps. Data retrieval and pre-filling were handled using React lifecycle methods.

# Additional Notes
Technologies Used: React.js, HTML5, CSS3 (Flexbox/Grid for layout), JavaScript ES6+.
Libraries/Frameworks: Used Bootstrap/Material UI for responsive design and styling (if applicable).
