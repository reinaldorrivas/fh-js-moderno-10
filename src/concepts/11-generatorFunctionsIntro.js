function* myFirstGeneratorFunction() {
  yield "Primer valor.";
  yield "Segundo valor.";
  const element = yield "Tercer valor.";
  yield element;

  return "Ya no hay más valores.";
}

/**
 *
 * @param {string} element
 */
export const generatorFunctionsIntroComponent = (elementName) => {
  const element = document.body.querySelector(elementName);
  const myGenerator = myFirstGeneratorFunction();

  let { value, done } = myGenerator.next();
  let i = 0;

  while (!done) {
    const title = document.createElement("h2");
    title.innerHTML = value;
    element.append(title);

    if (i === 2) {
      ({ value, done } = myGenerator.next("Lalo."));
      i++;
      continue;
    }

    ({ value, done } = myGenerator.next());
    i++;
  }

  const title = document.createElement("h2");
  title.innerHTML = value;
  element.append(title);
};
