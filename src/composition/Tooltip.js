// Tooltips need to be inline so that they can be used within paragraph text, so a span element works.
// Also, add a className so that we can style the Tooltip

import React from "react";
import "./Tooltip.css";

function Tooltip(props) {
  return (
    <span className="Tooltip">
      <span className="Tooltip-content" style={{ color: props.color }}>
        {props.children}
      </span>
      <div className="Tooltip-message">{props.message}</div>
    </span>
  );
}

// One difference between render() and a function Component() is how props work.
// In a function component, props are a parameter, as we've seen. In a class, however, props aren't a parameter anymore,
// we need to access props using this.props.

// ends up with same result as above. The difference is now you are using this for the object below. And props seems to still exist

// Don't change tag in App.js to TooltipClass. This is not where it gets its name from. Not the name inside
// the file, but the name of the file.
// Automatically sets defaultProp(prop) object inside of the TooltipClass object.

// The rule for making default props is to create a defaultProps property for the class with static defaultProps and then assign an object to that property.
// The keys of that object are the props you want to have defaults for and the values are the default values you want to assign.

// The defaultProp will be used if no equivalent prop is supplied.
// In this case, it will make the props.color have a default value of #01A800 when no other value is supplied.

// With this in place, the default color should be back and working.
// Looking at the App.js, the tooltip that has no color specified is now showing up as the default green in the browser.

class TooltipClass extends React.Component {
  static defaultProps = {
    color: "#01A800" // green
  };
  render() {
    console.log("Using a class component!");
    console.log(this);
    return (
      <span className="Tooltip">
        <span className="Tooltip-content" style={{ color: this.props.color }}>
          {this.props.children}
        </span>
        <div className="Tooltip-message">{this.props.message}</div>
      </span>
    );
  }
}

// export default Tooltip;

export default TooltipClass;
// props.message saves the child/content put inbetween the <Tooltip> tags in App.js
// as prop objects' property message: child/content on App.js. Setting {props.children} or
// {props.message} in this function declaration is like doing {props.message = whatever is between}
// <Tooltip> tags on App.js. The dot notation is the same as creating/adding and setting a property
// for an object outside of the object.

// What is composition?

// Components are like branches on a tree.Each tree branch can contain 0 or more other branches branching off from it.
// Each component can also contain 0 or more other components.We can think of React applications like this.

// We could have one branch with pink flowers and another branch with blue flowers.
// If we graft them onto a third branch that has white flowers, we've effectively made one new bigger branch which has pink, blue and white flowers.

// In React, a component is like a branch, and the JSX elements inside it are also like branches off of it.***************
// We can give these branches(components) names and when we talk about a branch by its name, we're also talking about the branches contained within it too.**************

// You can even think of one branch starting a new tree from that point, a "sub" tree.************
// This could be a new component with its own internal tree of branches.

// Component composition is the approach of arranging components within or next to each other.
// Using composition, multiple components can be combined into one new component.

//function App() {
// return (
//   <div>
//     <h1 />
//     <p />
//     <CustomComponent />
//   </div>
// )
// }
// In this example we've composed a div, h1, p and CustomComponent to make a tree called App.
// The div, h1, p and CustomComponent can be thought of as branches.

// The custom component has it's own JSX:

// function CustomComponent() {
//   return (
//     <ul>
//       <li />
//       <li />
//     </ul>
//   )
// }

//App() is like root or base of trunk, div is the trunk, and the elements inside are branches, which have their own branches
// or they can be seen as more, smaller trees with their own branches/components. How these are arranged = component composition

// Component Composition example: (keys need to be preassigned, like using an array of numbers you created and mapping them to the components)
// Don't use array index, because those orders can change or items can be added deleted, which changes index

// function App(props) {
//   // use the array of contacts to make an `<li>` for each contact
//   const customLis = props.contacts.map(function (contact) {
//     return <CustomContactLi key={contact} />
//   });
//   return (
//     <div>
//       <CustomHeader />
//       <ul>
//         {customLis}
//       </ul>
//     </div>
//   )
// }

// WHY COMPOSITION?

//The ability to compose components helps us manage our app via smaller more reusable pieces. We can use and reuse one component as a child of many other components.
// We can also make complex components out of many simple ones that are much easier to reason about on their own. The possibilities are endless.

// RELATIONSHIPS:

// Be careful: a child component is different from the children prop.
// Props are actual values in code, while parent - child relationships are how we
// informally describe the ways in which different components are composed together.

// One parent can have multiple child components, child components can also be parents.
// Parents can also render the same child multiple times.

// Adjacent child components are called "siblings".

// LISTS OF COMPONENTS
// When building React applications, knowing how to build lists of components is essential.

// So far we've seen rendering JSX elements, composing them together in different ways. We can also render arrays.

// const someJsx = (
//   <ul>
//     {[
//       <li />,
//       <li />,
//       <li />,
//     ]}
//   </ul>
// )
// We had to wrap the array in curly braces, then the items inside the array are the JSX elements themselves.
// React understands this and it turns out to be very useful when building React applications.

// There is one problem with the above code.Imagine we have an application that supports drag - and - drop to re - order the list items.
// React will struggle to keep track of which list item is which.The same problem might occur if we add a new item to the list,
// how would React manage the items to only add what's needed?

// To solve this problem of tracking items in an array, React requires us to add a unique key prop to each element in the array.

// Yo ucan hardcode IDs, but rarely will you do this. Typically will take ID from some array that has been precreated.

// const validJsx = (
// <ul>
//   {[
//     <li key='uniqueKey' />,
//     <li key='anotherKey' />,
//     <li key='thirdUniqueKey' />,
//   ]}
// </ul>
// )
// It's quite common to use id attributes or simple numbers for keys as they are convenient when rendering arrays.

// Usually, we would have an array from an API response and want to generate elements from that array. We can use an array's map method.

// Imagine we had the following response from a server: Way to assign UNIQUE ID

// {
//   "items": [
//     { "id": "abc123", "name": "Foo" },
//     { "id": "def456", "name": "Bar" },
//     { "id": "ghi789", "name": "Herp" },
//     { "id": "jkl012", "name": "Derp" }
//   ]
// }
// We can make an array of elements like so:

// const arrayOfLis = apiResponse.items.map((item) =>
//   <li key={item.id}>
//     {item.name}
//   </li>
// )
// return (
//   <ul>
//     {arrayOfLis}
//   </ul>
// )
// We've generated an array of li elements, each with a unique key prop and displaying the item.name.

// NOTE:
// [null, null, null].map((_, i) => <Bubble key={i} num={i} />)
//_ underscore means you want to ignore the first argument. We don't care for the value, since it's null here.
