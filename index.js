// Create button click stuff
const button = document.getElementById("my-cool-button");
if (button) {
  button.addEventListener("click", () => {
    console.log("Button clicked!");

    const newElement = document
      .createElement("div")
      .appendChild(document.createTextNode("Hello, world!"));
  });
}
