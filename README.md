# Getting Started with React App from Scratch

## Introduction 

### Who is this for?

This is for anyone who wants to learn how to build a React app from scratch. 

### What will you learn?

You will learn how to set up a React app from scratch, and how to build a simple app with React.

### What do you need to know?

You should have a basic understanding of HTML, CSS, and JavaScript.

### Prerequisites

- Node.js: You should have Node.js installed on your computer. You can download it from [nodejs.org](https://nodejs.org/).
- Text Editor: You should have a text editor installed on your computer. I recommend using [Visual Studio Code](https://code.visualstudio.com/).
- Web Browser: You should have a web browser installed on your computer. I recommend using [Google Chrome](https://www.google.com/chrome/).

### Setting Up a React App 

- **Step 1**: Create a new directory for your React app. Open your terminal and run the following command:

```bash
mkdir learn-react-js
```

- **Step 2**: Navigate to the new directory. Run the following command:

```bash
cd learn-react-js
```

- **Step 3**: Run the following command to create a new React app:

```bash
npx create-react-app ./
```

- **Step 4**: Run the following command to start the development server:

```bash
npm start
```

- **Step 5**: Open your web browser and go to [http://localhost:3000](http://localhost:3000) to see your React app.
- **Step 6**: Open the `learn-react-js` directory in your text editor to start building your React app.

### Building a Simple React App

- **Step 1**: Open the `src` directory in your text editor.
- **Step 2**: Open the `App.js` file and replace the existing code with the following code:

```jsx
import React from 'react';

function App() {
  return (
    <div>
      <h1>Hello, React!</h1>
    </div>
  );
}

export default App;
```

- **Step 3**: Open your web browser and go to [http://localhost:3000](http://localhost:3000) to see your updated React app.


### Conclusion

Congratulations! You have successfully set up a React app from scratch and built a simple app with React. You can now start building more complex apps and learning more about React.