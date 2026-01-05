import { heroes } from "../data/heroes";

/**
 *
 * @param {string} id
 * @returns {string}
 */
const getHeroAsync = async (id) => {
  await new Promise((resolve) => {
    setTimeout(() => resolve(), 2000);
  });

  return heroes.find((hero) => hero.id === id);
};

/**
 *
 * @param {Array<string>} heroIds
 * @returns {Array<Promise<object>>}
 */
const getHeroesAsync = (heroIds) => {
  const heroPromises = [];

  heroIds.forEach((id) => {
    heroPromises.push(getHeroAsync(id));
  });

  return heroPromises;
};

/**
 *
 * @param {string} element
 */
export const ifAwaitAndForAwaitComponent = async (elementName) => {
  const element = document.body.querySelector(elementName);

  element.innerHTML = /* html */ `
    <h2>Loading...</h2>
  `;

  const id = "5d86371fd55e2e2a30fe1cc3";

  if (await getHeroAsync(id)) {
    element.innerHTML = /* html */ `
      <section>
        <h2>Si existe el héroe.</h2>
      </section>
    `;
  } else {
    element.innerHTML = /* html */ `
      <section>
        <h2>No existe el héroe.</h2>
      </section>
  `;
  }

  /*
 * Podemos usar este método cuando una promesa devuelve un arreglo
 * y necesitamos iterarlo directamente con un for...of:
  for (const hero of await getHeroesAsync()) { ... }
 */

  const heroesIDs = heroes.map((hero) => hero.id);
  const heroesPromises = getHeroesAsync(heroesIDs);

  const heroesListContainer = document.createElement("section");
  heroesListContainer.classList.add("heroes-list-container");

  const heroesListContainerTitle = document.createElement("h2");
  heroesListContainerTitle.textContent = "Heroes' List";

  heroesListContainer.append(heroesListContainerTitle);

  for await (const hero of heroesPromises) {
    const heroElement = document.createElement("p");
    heroElement.textContent = hero.name;
    heroesListContainer.append(heroElement);
  }

  element.append(heroesListContainer);
};
