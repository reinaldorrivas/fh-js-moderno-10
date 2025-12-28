import { heroes } from "../data/heroes";

/**
 *
 * @param {string} id
 * @param {(hero) => void} callback
 */
const findHero = (id, callback) => {
  if (!id) throw new Error("An ID is required.");
  if (typeof callback !== "function")
    throw new Error("A callback is required.");

  const hero = heroes.find((hero) => hero.id === id);

  callback(hero);
};

/**
 *
 * @param {string} element
 */
export const callbacksComponent = (elementName) => {
  const id = "5d86371f1efebc31def272e2";

  const callback = (hero) => {
    const element = document.body.querySelector(elementName);
    element.innerHTML = hero.name;
  };

  findHero(id, callback);
};
