/**
 *
 * @param {string} element
 */
export const generatorFunctions = (elementName) => {
  const element = document.body.querySelector(elementName);
  const uuid = idGenerator();

  const button = document.createElement("button");
  button.textContent = "Click me";
  element.append(button);

  button.addEventListener("click", () => {
    const { value } = uuid.next();
    button.textContent = `Click: ${value}`;
  });
};

function* idGenerator() {
  let currentID = 0;
  while (true) {
    yield ++currentID;
  }
}
