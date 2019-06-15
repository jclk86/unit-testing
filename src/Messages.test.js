import React from "react";
import ReactDOM from "react-dom";
import Messages from "./Messages";
import renderer from "react-test-renderer";

describe("Messages Component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Messages />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders the UI as expected", () => {
    const tree = renderer
      .create(<Messages name="Messages" unread={4} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders the UI as expected with no unreads", () => {
    const tree = renderer
      .create(<Messages name="Messages" unread={0} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

// Two methods of the renderer are used,
// first, the create() method takes the component to be rendered and
// performs a render on it then the toJSON() method creates the JSON file.
// After this test runs take a look at your project code and notice that a
// new folder was created named __snapshots__. Inside this folder,
// you will find a file named Messages.test.js.snap.
// Open that file and look at the contents.

// Jest
//SNAPSHOTS are needed so that other members of your team can see the original
// version and if anything is changes unexpectedly, it will compare it to
// the reference snapshot.
//Snaps shots must be commited to git repository for your teammates

// Updating the snapshot
// There are two reasons why the snapshot may fail:

// You deliberately update the way the component renders
// You unintentionally update the way the component renders
// In both cases, the snapshot tests will fail, but in the first case, you can update the snapshot to reflect the changed output from the component.In the second case, you need to revisit your code and determine why the change happened and most probably fix the problem.

// Update the component by say adding the class badge to the badge div.

// The output from the failed test is quite informative,
// it shows a diff comparing the snapshot to the actually rendered component.
// The green lines are what was expected and the red lines are the unexpected results.
// This is a valuable help to debugging unexpected changes to the component.

// Since this change was deliberate we can simply update the snapshot by pressing u.
