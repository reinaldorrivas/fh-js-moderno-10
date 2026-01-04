import { heroes } from "../data/heroes";

const slowPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Slow promise.");
    }, 2000);
  });

const mediumPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Medium promise.");
    }, 1500);
  });

const fastPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Fast promise.");
    }, 1000);
  });

/**
 *
 * @param {string} element
 */
export const asyncAwaitOptimizationsComponent = async (elementName) => {
  const element = document.body.querySelector(elementName);

  element.innerHTML = /* html */ `
    <h2>Loading...</h2>
  `;

  /*
   * En este enfoque las promesas se esperan de forma secuencial.
   * Cada await bloquea hasta que la promesa anterior termina,
   * por lo que el tiempo total es la suma de todas las demoras.
    const slowEndpoint = await slowPromise();
    const mediumEndpoint = await slowPromise();
    const fastEndpoint = await slowPromise();
   */

  /*
   * En este enfoque todas las promesas se inician al mismo tiempo.
   * Promise.all espera a que todas terminen, pero en paralelo.
   * El tiempo total será igual al de la promesa más lenta.
   */
  const [slowEndpoint, mediumEndpoint, fastEndpoint] = await Promise.all([
    slowPromise(),
    mediumPromise(),
    fastPromise(),
  ]);

  element.innerHTML = /* html */ `
    <section>
      <h2>Promises</h2>
      <p>${slowEndpoint}</p>
      <p>${mediumEndpoint}</p>
      <p>${fastEndpoint}</p>
    </section>
  `;
};
