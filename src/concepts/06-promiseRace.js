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
export const promiseRaceComponent = (elementName) => {
  const element = document.body.querySelector(elementName);

  element.innerHTML = /* html */ `
    <h2>Loading...</h2>
  `;

  const renderValue = (value) => {
    element.innerHTML = /* html */ `
      <h2>${value}</h2>
    `;
  };

  Promise.race([slowPromise(), mediumPromise(), fastPromise()]).then(
    renderValue
  );
};
