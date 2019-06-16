import React from "react";
import ReactDOM from "react-dom"; // On the left-hand side of the "from" we have named the variable App.
import App from "./App"; // Relative imports. Dot and forward slash tell JavaScript to look "relative" to the current file rather than looking inside the node_modules directory.
// Relative imports require us as developers to specify both the import and the export.
import "./index.css";
import HelloWorld from "./state-drills/HelloWorld";
import Bomb from "./state-drills/Bomb";
import RouletteGun from "./state-drills/RouletteGun";

// ReactDOM.render(<App />, document.getElementById("root"));
// ReactDOM.render(<HelloWorld />, document.getElementById("root"));
// ReactDOM.render(<Bomb />, document.getElementById("root"));
ReactDOM.render(<RouletteGun />, document.getElementById("root"));

// About JSX
// Whenever you create some JSX, Babel transforms it into a function call.
// Because JSX is really a function call, we can only return one JSX node from any function or method:

// const obj = {
//   valid() {
//     return (
//       <div> {/* This div is the only root node :) */}
//         <h1>Foo</h1>
//         <p>bar</p>
//       </div>
//     )
//   },
//   invalid() {
//     // this returns two root nodes!
//     return (
//       <h1>Foo</h1> {/* This h1 is a root node */}
//       <p>bar</p> {/* This p is also root node! */}
//     )
//   }
// }

// function Invalid() {
//   // multiple root nodes
//   return (
//     <div />
//     <div />
//     <div />
//   )
// }

// function Valid() {
//   // one root node
//   return (
//     <div>
//       <div />
//       <div />
//       <div />
//     </div>
//   )
// }

//Curly Braces - for PROPS - object prop added with whatever props you set will become key-value pair inside the <app numProp={123}/> {}
// When adding props to an element, we use curly braces for everything except string value props.

// Here are some examples of valid props usage:

// <Component stringProp="string" />;

// <Component numProp={123} />;

// <Component booleanProp={true} />;

// const obj = { foo: 'bar' };
// <Component objectProp={obj} />;

// const array = [ 'foo', 'bar' ];
// <Component arrayProp={array} />;

// const func = function() {};
// <Component functionProp={func} />;

// // This is invalid because it needs curly braces***
// let anyVariable = '123'
// <Component prop=anyVariable />;***

// Embedding Expressions
// We can put expressions inside JSX. Expressions can be variables, values, returns from functions, anything that can be equated to a value.
//Expressions must go inside curly braces.

// Using a value:

// <p>Hello, {'Beyoncé'}</p>;
// Using a variable:

// const name = 'Beyoncé';

// <p>Hello, {name}</p>;
// Using a function:

// const name = 'beyoncé';

// <p>Hello, {capitalize(name)}</p>;

// Using other JSX!
// const jsxName = <span>Beyoncé</span>;
// <p>Hello, {jsxName}</p>;

// JSX inside a condition
// We can put JSX inside if statements, loops, anywhere we would put a function call!

// let myJsx;

// if (something) {
//   myJsx = <p>Hello, Beyoncé</p>;
// }

// <div>{myJsx}</div>;

// Self-closing elements
// In JSX, every element needs to either have a closing part or be self-closing. Take the following HTML for a br tag, this is invalid JSX:

// <!-- valid HTML br, would be invalid JSX -->
// <br>
// To convert this to JSX, it must be closed, so we need to add a forward slash at the end:

// // valid JSX
// const validJSX = <br />;
// // INVALID JSX!
// const invalidJSX = <br>;

// Remember creating an App component? The same closing rules apply for the App too.

//  // valid:
//        <App />

// // also valid:
//        <App></App>

// // INVALID! Not closed!
//        <App></App>

// Common Mistakes
// Not using camelCase prop names
// Although not required, it's preferred to use camelCase names for props as they can be accessed more easily.

// props['prop-name'] // less convenient prop name
// props.propName // more convenient prop name

// Passing Numbers as Strings
// When passing a number to a component, it's an easy mistake to pass it as a string.

// <Comp num={123} /> // correct
// <Comp num="123" /> // incorrect
// This could lead to the consuming Component attempting to use the num prop as a number with unexpected results.

// // accidentally passing number as a string
// <Comp num="123" />

// // inside the component
// props.num + 1 === '1231'; // JavaScript quirk

// Adding multiple spaces
// Just like in HTML, when you put spaces inside the markup, they might get removed!

// If you want to add a space between components in JSX, be explicit. You can use a string with a space inside:

// {/* The spaces between these components will be removed */}
// <Component1 />    <Component2 />

// {/* The space between these components will be kept */}***
// <Component1 />{' '}<Component2 />

// {/* Using standard HTML entities is also ok! */}
// <Component1 />&nbsp;<Component2 />

// Props aren't Attributes
// Remember to check which props to use for standard HTML elements; here are some examples of the differences.

// In HTML:

// <div class="foo"></div>
// <label for="foo"></label>
// <span style="color: 'red';"></span>
// <input tabindex="-1" readonly></input>

// The equivalent JSX:

// <div className="foo" />
// <label htmlFor="foo" />
// <span style={{ color: 'red' }} /> {/* value _must_ be an object, properties _must_ be camelCased */}
// <input tabIndex="-1" readOnly />

// Custom components should be upper case
// When creating your own components, which we'll cover in more detail, start the component name with upper case.

// // Bad
// const myComponent = () => <div />
// // Good
// const MyComponent = () => <div />
