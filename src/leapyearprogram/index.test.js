//use this line to import the function, made possible by
//the export default line in the other file
import leapYear from "./index";

// "it" function invoked by jest

// it("should NOT be a leap year if divisible by 100, not 400", () => {
//   const input = 1900;
//   const expectedOutput = false;
//   expect(leapYear(input)).toBe(expectedOutput);
// });

// "it" takes two parameters, a String describing the test and the test function itself.
// The description of the test should be short but clear and unambiguous.When you run the test this description helps to identify which tests are passing.

// The test function

// () => {
//   const input = 1900;
//   const expectedOutput = false;
//   const actualOutput = leapYear(input);
//   expect(actualOutput).toBe(expectedOutput);
// }

// simply invokes the function to be tested with the input for which you know the output then compares the actual output to the expected output.
// If they match then the test passed, otherwise the test failed.In Jest, the expect function provides several matchers such as toBe()
// for you to check your output. Checkout the docs to learn more about Jest matchers.

// The simplest way to test a value is with exact equality.

// test('two plus two is four', () => {
//   expect(2 + 2).toBe(4);
// });

// Also, a good descriptive statement might tell you what to look at in the function.
// In this case, we know that the "divisible by 100 but not 400" rule is broken. So maybe we have a bug in that bit of the function.

// it("should be a leap year if divisible by 4, not 100", () => {
//   const input = 1900;
//   const expectedOutput = true;
//   const actualOutput = leapYear(input);
//   expect(actualOutput).toBe(expectedOutput);
// });

it("should NOT be a leap year if divisible by 100, not 400", () => {
  expect(leapYear(1900)).toBe(false);
});

it("should be a leap year if divisible by 4, not 100", () => {
  expect(leapYear(1984)).toBe(true);
});

it("should NOT be a leap year if not divisible by 4", () => {
  expect(leapYear(1983)).toBe(false);
});

it("should be a leap year if divisible by 400", () => {
  expect(leapYear(2000)).toBe(true);
});

it("should throw an error for years before 1582", () => {
  expect(() => {
    leapYear(1568);
  }).toThrow();
});

// .toThrow(error ?)
// Also under the alias: .toThrowError(error ?)

// Use .toThrow to test that a function throws when it is called. For example, if we want to test that drinkFlavor('octopus') throws, because octopus flavor is too disgusting to drink, we could write:

// test('throws on octopus', () => {
//   expect(() => {
//     drinkFlavor('octopus');
//   }).toThrow();
// });
// Note: You must wrap the code in a function, otherwise the error will not be caught and the assertion will fail.

// You can provide an optional argument to test that a specific error is thrown:

// regular expression: error message matches the pattern
// string: error message includes the substring
// error object: error message is equal to the message property of the object
// error class: error object is instance of class
//   For example, let's say that drinkFlavor is coded like this:

// function drinkFlavor(flavor) {**************************
//   if (flavor == 'octopus') {
//     throw new DisgustingFlavorError('yuck, octopus flavor');
//   }
//   // Do some other stuff
// }
// We could test this error gets thrown in several ways:

// test('throws on octopus', () => {
//   function drinkOctopus() { // declaring a callback here to run drinkflavor
//     drinkFlavor('octopus');
//   }

//   // Test that the error message says "yuck" somewhere: these are equivalent
//   expect(drinkOctopus).toThrowError(/yuck/);
//   expect(drinkOctopus).toThrowError('yuck');

//   // Test the exact error message
//   expect(drinkOctopus).toThrowError(/^yuck, octopus flavor$/);
//   expect(drinkOctopus).toThrowError(new Error('yuck, octopus flavor'));

//   // Test that we get a DisgustingFlavorError
//   expect(drinkOctopus).toThrowError(DisgustingFlavorError);
// });

// The objective is to have tests that fail on any change to the logic.This way if a developer on your team makes some accidental change to the code your tests will pick it up.
// The degree to which your code is protected by tests in this way is called test coverage.Most software teams aim for a very high level of test coverage.

// Suppose that some deeply nested component breaks the code? This type of test is known as a smoke test.
// The second type of testing we will look at here is also fairly simple to implement but provides a useful benefit.
// This is called snapshot testing. Snapshot testing compares the UI to a saved version of the UI and informs you if the UI changes at all.
// If you did not intend to update the UI at all this might indicate that something is wrong.

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
