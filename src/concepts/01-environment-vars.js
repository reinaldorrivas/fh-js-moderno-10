/**
 *
 * @param {string} element
 */
export const environmentVarsComponent = (elementName) => {
  console.log(import.meta.env);
  const element = document.body.querySelector(elementName);
  const htmlTemplate = /* html */ `
      <section>
        <h2>Enviroment Variables</h2>
        <p>
          DEV: ${import.meta.env.DEV}
        </p>
        <p>
          PROD: ${import.meta.env.PROD}
        </p>
        <p>
          API key: ${import.meta.env.VITE_API_KEY}
        </p>
        <p>
          BASE URL: ${import.meta.env.VITE_BASE_URL}
        </p>
      </section>
    `;

  element.innerHTML = htmlTemplate;
};
