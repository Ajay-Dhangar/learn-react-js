import React from "react";

function Intro() {
  return (
    <div>
      <div className="main-container">
        <div className="main-heading">
          <h1>Introduction To React</h1>
        </div>
        <div className="main-content">
          <div className="content">
            <p className="que">What is React?</p>
            <p className="ans">
              React is a JavaScript library for building user interfaces. It is
              maintained by Facebook and a community of individual developers
              and companies. React can be used as a base in the development of
              single-page or mobile applications. However, React is only
              concerned with rendering data to the DOM, and so creating React
              applications usually requires the use of additional libraries for
              state management and routing.
            </p>
            <p className="ans">
              React allows developers to create large web applications that can
              change data, without reloading the page. The main purpose of React
              is to be fast, scalable, and simple. It works only on user
              interfaces in the application. This corresponds to the view in the
              MVC template. It can be used with a combination of other
              JavaScript libraries or frameworks, such as Angular JS in MVC
              (Model View Controller).
            </p>
            <p className="que">Why React?</p>
            <p className="ans">
              React allows developers to create large web applications that can
              change data, without reloading the page. The main purpose of React
              is to be fast, scalable, and simple. It works only on user
              interfaces in the application. This corresponds to the view in the
              MVC template. It can be used with a combination of other
              JavaScript libraries or frameworks, such as Angular JS in MVC
              (Model View Controller).
            </p>
            <p className="ans">
              There are following reasons to choose React for your project:

              <ul>
                <li>
                  <b>Virtual DOM:</b> React creates an in-memory data structure cache, computes the resulting differences, and then updates the browser's displayed DOM efficiently. This allows the programmer to write code as if the entire page is rendered on each change, while the React libraries only render subcomponents that actually change. This selective rendering provides a major performance boost.                    
                </li>
                <li>
                  <b>JSX:</b> JSX is a simple JavaScript syntax extension that allows the HTML quoting and uses these HTML tag syntax to render subcomponents. It makes the code more readable and convenient. 
                </li>
                <li>
                  <b>Components:</b> React is all about components. You need to think of everything as a component. This will help you maintain the code when working on larger scale projects.
                </li>
                <li>
                  <b>Performance:</b> The biggest advantage of React is that it is fast. It works on the concept of Virtual DOM that helps in increasing the performance of the web application.
                </li>
                <li>
                  <b>Testability:</b> React is easy to test. It encourages writing test cases. You can use Jest, Enzyme, and React Testing Library for testing your app.
                </li>                                
              </ul>
            </p>
            <p className="que">React Features</p>
            <p className="ans">
              There are following features of React:
              <ul>
                <li>
                  <b>JSX:</b> JSX is a simple JavaScript syntax extension that allows the HTML quoting and uses these HTML tag syntax to render subcomponents. It makes the code more readable and convenient. 
                </li>
                <li>
                  <b>Components:</b> React is all about components. You need to think of everything as a component. This will help you maintain the code when working on larger scale projects.
                </li>
                <li>
                  <b>Performance:</b> The biggest advantage of React is that it is fast. It works on the concept of Virtual DOM that helps in increasing the performance of the web application.
                </li>
                <li>
                  <b>Testability:</b> React is easy to test. It encourages writing test cases. You can use Jest, Enzyme, and React Testing Library for testing your app.
                </li>
                <li>
                  <b>One-way Data Binding:</b> React implements one-way data binding which reduces boilerplate and is easier to debug.
                </li>
                <li>
                  <b>Simplicity:</b> React is very easy to learn, and it is very easy to use. It is developer friendly and flexible.
                </li>
                <li>
                  <b>Community:</b> React has a great community and enjoys massive popularity. There are a lot of resources available online.
                </li>
              </ul>
            </p>
            <p className="que">React Limitations</p>
            <p className="ans">
              In React, Limitations is that it is only a library for the view layer of the application. Although it can be used with other libraries, it is often used with Redux, which is a predictable state container for JavaScript apps. It is not a full framework. This is the reason why React is very easy to learn and easy to use. But it can be a limitation for the developers who want to use React for the complete development of the application.
              <br /><br />
              React is a library for building composable user interfaces. It encourages the creation of reusable UI components, which present data that changes over time. Lots of people use React as the V in MVC. React abstracts away the DOM from you, offering a simpler programming model and better performance. React can also render on the server using Node, and it can power native apps using React Native.
              <br /><br />
              React implements one-way reactive data flow which reduces boilerplate and is easier to reason about than traditional data binding.
              <br /><br />
              React is a library for building composable user interfaces. It encourages the creation of reusable UI components, which present data that changes over time. Lots of people use React as the V in MVC. React abstracts away the DOM from you, offering a simpler programming model and better performance. React can also render on the server using Node, and it can power native apps using React Native.
              <br /><br />
              React implements one-way reactive data flow which reduces boilerplate and is easier to reason about than traditional data binding.
              <br /><br />
              React is a library for building composable user interfaces. It encourages the creation of reusable UI components, which present data that changes over time. Lots of people use React as the V in MVC. React abstracts away the DOM from you, offering a simpler programming model and better performance. React can also render on the server using Node, and it can power native apps using React Native.
                
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
