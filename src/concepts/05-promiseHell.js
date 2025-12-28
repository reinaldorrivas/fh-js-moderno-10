import { heroes } from "../data/heroes";

/**
 *
 * @param {string} id
 * @returns {Promise<object>}
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
export const promiseHellComponent = (elementName) => {
  const element = document.body.querySelector(elementName);
  const ids = ["5d86371f1efebc31def272e2", "5d86371f2343e37870b91ef1"];

  const renderHeroes = (heroes) => {
    const container = document.createElement("section");
    const headingTitle = document.createElement("h2");

    headingTitle.textContent = "Heroes";
    container.append(headingTitle);

    heroes.forEach((hero) => {
      const paragraph = document.createElement("p");

      paragraph.textContent = hero.name;
      container.append(paragraph);
    });

    element.append(container);
  };

  const renderError = (error) => {
    element.innerHTML = /* html */ `
      <section>
        <h2>Error:</h2>
        <p>${error}</p>
      </section>
    `;
  };

  /*
   * Primera forma:
   ! Promise Hell
    const resolveFirstHero = (firstHero) => {
      const resolveSecondHero = (secondHero) => {
        renderHeroes([firstHero, secondHero]);
      };

      findHero(ids[1]).then(resolveSecondHero).catch(renderError);
    };

    findHero(ids[0]).then(resolveFirstHero).catch(renderError);
   */

  /*
   * Segunda forma:
   * Útil cuando cada promesa depende del resultado de la anterior.
    let heroes = [];

    findHero(ids[0])
    .then((hero) => {
      heroes.push(hero);
      return findHero(ids[1]);
    })
    .then((hero) => {
      heroes.push(hero);
      renderHeroes(heroes);
    })
    .catch(renderError);
   */

  /*
   * Tercera forma:
   * Ideal para ejecutar varias promesas en paralelo cuando no dependen unas de otras.
   */
  Promise.all([findHero(ids[0]), findHero(ids[1])])
    .then(renderHeroes)
    .catch(renderError);
};
