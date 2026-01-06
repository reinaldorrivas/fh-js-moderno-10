import { heroes } from "../data/heroes";

const timelapse = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });

async function* getHeroGenerator() {
  for (const hero of heroes) {
    await timelapse();
    yield hero.name;
  }
}

/**
 *
 * @param {string} element
 */
export const asyncGeneratorFunctionsComponent = async (elementName) => {
  const element = document.body.querySelector(elementName);

  const heroGenerator = getHeroGenerator();

  let { value, done } = await heroGenerator.next();

  while (!done) {
    element.innerHTML = /* html */ `
      <h2>${value}</h2>
    `;

    ({ value, done } = await heroGenerator.next());
  }
};
