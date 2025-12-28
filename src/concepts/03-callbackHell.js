import { heroes } from "../data/heroes";

/**
 *
 * @param {string} id
 * @param {(error: string | null, hero: object) => void} callback
 */
const findHero = (id, callback) => {
  if (!id) throw new Error("An ID is required.");

  if (typeof callback !== "function")
    throw new Error("A callback function is required.");

  const hero = heroes.find((hero) => hero.id === id);

  if (!hero) {
    callback(`Hero with id ${id} not found.`);
  }

  callback(null, hero);
};

/**
 *
 * @param {string} element
 */
export const callbackHellComponent = (elementName) => {
  const ids = ["5d86371f1efebc31def272e2", "5d86371f2343e37870b91ef1"];
  const element = document.body.querySelector(elementName);

  const firstCallback = (error, firstHero) => {
    if (error) {
      element.innerHTML = error;
      return;
    }

    const secondCallback = (error, secondHero) => {
      if (error) {
        element.innerHTML = error;
        return;
      }

      element.innerHTML = `${firstHero.name} / ${secondHero.name}`;
    };

    findHero(ids[1], secondCallback)
  };

  findHero(ids[0], firstCallback);
};
