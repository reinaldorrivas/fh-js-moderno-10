import { heroes } from "../data/heroes";

/**
 *
 * @param {string} id
 * @returns {Promise<string>}
 */
const findHero = async (id) => {
  const hero = heroes.find((hero) => hero.id === id);

  if (!hero) throw new Error(`Hero with id ${id} not found`);

  return hero.name;
};

/**
 *
 * @param {string} element
 */
export const asyncAwaitComponent = async (elementName) => {
  const element = document.body.querySelector(elementName);

  const firstID = "5d86371f97c29d020f1e1f6d";
  const secondID = "5d86371fd55e2e2a30fe1cc2b1";

  try {
    const firstHero = await findHero(firstID);
    const secondHero = await findHero(secondID);

    element.innerHTML = /* html */ `
      <h2>Heroes:</h2>
      <p>${firstHero} / ${secondHero}<p>
    `;
  } catch (error) {
    element.innerHTML = /* html */ `
      <h2>Heroes:</h2>
      <p>${error}<p>
    `;
  }
};
