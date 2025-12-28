import { heroes } from "../data/heroes";

/**
 *
 * @param {string} id
 * @returns {Promise<any>}
 */
const findHero = (id) => {
  return new Promise((resolve, reject) => {
    const hero = heroes.find((hero) => hero.id === id);

    if (hero) {
      resolve(hero);
      return;
    }

    reject(`Hero with id ${id} not found`);
  });
};

/**
 *
 * @param {string} element
 */
export const promisesComponent = (elementName) => {
  const element = document.body.querySelector(elementName);
  const id = "5d86371f25a058e5b1c8a65e";

  const renderHero = (hero) => {
    element.innerHTML = hero.name;
  };

  const renderError = (error) => {
    element.innerHTML = /* html */ `
      <section>
        <h2>Error:</h2>
        <p>${error}</p>
      </section>
    `;
  };

  findHero(id).then(renderHero).catch(renderError);
};
