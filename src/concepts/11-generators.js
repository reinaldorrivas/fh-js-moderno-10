/**
 *
 * @param {string} element
 */
export const generatorsComponent = () => {
  const myGenerator = myFirstGeneratorFunction();

  console.log(myGenerator.next());
  console.log(myGenerator.next());
  console.log(myGenerator.next());
  console.log(myGenerator.next("Lalo"));
  console.log(myGenerator.next());
};

function* myFirstGeneratorFunction() {
  yield "Primer valor.";
  yield "Segundo valor.";
  const element = yield "Tercer valor.";
  yield element;

  return "Ya no hay más valores.";
}
