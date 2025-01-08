// Create button click stuff
const button = document.getElementById("my-cool-button");
if (button) {
  button.addEventListener("click", () => {
    console.log("Button clicked!");

    const newElement = document
      .createElement("div")
      .appendChild(document.createTextNode("Hello, world!"));

    const container = document.getElementById("container");
    container.appendChild(newElement);
    fetch("https://goweather.herokuapp.com/weather/Atlanta").then(
      async (response) => {
        const data = await response.json();
        console.log(data);
      }
    );
  });
}

// Get weather and log to console
// fetch("https://goweather.herokuapp.com/weather/Atlanta").then(
//   async (response) => {
//     const data = await response.json();
//     console.log(data);
//   }
// );
