import React from "react";
import BrowserWindow from "../../../components/BrowserWindow";
import "../../../App.css";
import logo from "../../../logo.svg";

function BasicApp() {
  return (
    <div className="main-container">
      <div className="main-content">
        <div className="content">
          <h3>How To create a basic app</h3>
          <p className="ans">
            1. First, create a new directory for your app and navigate into it:
          </p>
          <p className="ans">
            2. Run the following commands to create a new React app:
          </p>
          <br />
          <code className="cmd">npx create-react-app my-app</code>
          <br /> <br />
          <p className="ans">3. Navigate into your new app’s directory:</p>
          <br />
          <code className="cmd">cd my-app</code>
          <br /> <br />
          <p className="ans">4. Start the app:</p>
          <br />
          <code className="cmd">npm start</code>
          <br /> <br />
          <p className="ans">
            5. Open your browser and navigate to{" "}
            <a href="http://localhost:3000">http://localhost:3000</a> to see
            your new app running.
          </p>
          <br />
          <div className="browser-window">
            <BrowserWindow>
              <div className="App">
                <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <p>
                    Edit <code>src/App.js</code> and save to reload.
                  </p>
                  <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn React
                  </a>
                </header>
              </div>
            </BrowserWindow>
          </div>
          <p className="ans">
            6. You can now open the my-app directory in your code editor and
            start building your app.
          </p>
          <p className="ans">
            7. To stop the app, press <code>Ctrl + C</code> in the terminal
            where the app is running.
          </p>
          <p>
            <b>
              Congratulations! You’ve successfully created a new React app. You
              can now start building your app by editing the files in the my-app
              directory.
            </b>
          </p>
          <p>
            <strong>Note:</strong> If you’re using npm 5.2.0 or higher, you can
            also create a new React app using <code>npx</code> by running:
          </p>
          <br />
          <code className="cmd">npx create-react-app my-app</code>
          <br /> <br />
          <p>
            <strong>What is npx?</strong> npx is a package runner tool that
            comes with npm 5.2.0 or higher. It’s used to execute packages
            without installing them globally. npx is also used to run the
            create-react-app package without installing it globally.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BasicApp;
