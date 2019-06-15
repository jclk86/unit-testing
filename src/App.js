import React from "react";
import Split from "./composition/Split"; // relative import
import "./App.css";
import Tooltip from "./composition/Tooltip";
import Messages from "./Messages";

// so the functions are here (global) and you pass color and message and then insert it into App() and Split below
// the title of the tags are the title of the files.*******
// Overrides default prop from Tooltip.js
const firstTooltip = (
  <Tooltip color="hotpink" message="tooltip message">
    ipsum
  </Tooltip>
);
const secondTooltip = (
  <Tooltip color="#126BCC" message="another tooltip message">
    officiis
  </Tooltip>
);

// className here are props passed into Split() component
// whatever is inside of split becomes its branches.
// the Split tag is also a call and the className is the prop passed in.
// note: Split(className="left"); in reference to Split.js's
// Split(prop){
// const combinedClassName = `split ${props.className}`;
// return <div className={combinedClassName}>{props.children}</div>; <Split className="left"></Split> is really <div className="split left"></div>
// it sets the props.className: 'left' in first class
//second call is props.className: "right"
//}

// MAIN CODE
function App() {
  return (
    <main className="App">
      <Split className="left" flexBasis={2}>
        This is the content for the left `Split`. Lorem {firstTooltip} ipsum
        dolor sit amet consectetur, adipisicing elit. Incidunt ex velit suscipit
        facere officia?
        <Tooltip message="one more tooltip message">Necessitatibus?</Tooltip>
      </Split>
      <Split className="right">
        This is the content for the right `Split`. Inventore aliquid cupiditate
        suscipit repellat. Quaerat quis {secondTooltip} officiis quam fuga.
        Aliquid quo possimus id soluta aspernatur.
      </Split>
      <Messages name="Messages" unread={0} />
      <Messages name="Notifications" unread={10} />
    </main>
  );
}

// Below if for App.test.js

// class App extends React.Component {
//   render() {
//     return (
//       <div className="App">
//         <h1>YOUR APPLICATION NAME!</h1>
//         <div>Hello!</div>
//       </div>
//       <div>This does not belong here</div>
//     );
//   }
// }

export default App;

// It's worth noting here, that when we read props inside a component, we shouldn't alter them!
// Props are read-only. You might be able to see text stating "read-only" inside the React dev tools,
// you can't change props directly.

// Implementing if-else in JSX

// If a ternary expression isn't robust enough, you can use if statements outside of your JSX to determine which components should be used:

// var loginButton; // the if-else determines the value of this variable.
// if (loggedIn) {
//   loginButton = <LogoutButton />;
// } else {
//   loginButton = <LoginButton />;
// }

// return (
//   <nav>
//     <Home />
//     {loginButton}
//   </nav>
// );
