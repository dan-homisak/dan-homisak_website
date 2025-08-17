// Create button click stuff
const button = document.getElementById("my-cool-button");
if (button) {
  button.addEventListener("click", () => {
    console.log("Button clicked!");

    // Create a new div element and append it to the container
    const container = document.getElementById("container");
    if (container) {
      const newElement = document.createElement("div");
      newElement.textContent = "Hello, world!";
      container.appendChild(newElement);
    }
  });
}
