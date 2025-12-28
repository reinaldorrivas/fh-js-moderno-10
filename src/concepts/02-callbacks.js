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
export const callbacksComponent = (elementName) => {
  const id = "5d86371f1efebc31def272e2";

  const callback = (error, hero) => {
    const element = document.body.querySelector(elementName);

    if (error) {
      element.innerHTML = error;
      return;
    }

    /*
     * Ejemplo manejo de errores:
     * element.innerHTML = hero?.name || "Hero not found."
     */
    element.innerHTML = hero.name;
  };

  findHero(id, callback);
};
