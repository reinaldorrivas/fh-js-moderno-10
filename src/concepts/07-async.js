import { heroes } from "../data/heroes";

/**
 *
 * @param {string} id
 * @returns {Promise<string>}
 */
const findHero = async (id) => {
  const hero = heroes.find((hero) => hero.id === id);

  if (!hero)
    throw new Error(`Hero with id ${id} not found`);


  return hero.name;
};

/**
 *
 * @param {string} element
 */
export const asyncComponent = (elementName) => {
  const element = document.body.querySelector(elementName);
  const id = "5d86371f233c9f2425f16916";

  const renderHTML = (content) => (element.innerHTML = /* html */ `
    <h2>Hero:</h2>
    <p>${content}</p>
  `);

  findHero(id).then(renderHTML).catch(renderHTML);
};
