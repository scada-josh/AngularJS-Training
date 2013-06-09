describe("02-Working with angularJS : ", function() {
          it("show message", function() {
          	var scope = {},
          		ctrl = new TextController(scope);

              expect(messages.someText).toEqual("You have started your journey.");
          });
});