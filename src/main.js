import { environmentVarsComponent } from "./concepts/01-environmentVars";
import { callbacksComponent } from "./concepts/02-callbacks";
import { callbackHellComponent } from "./concepts/03-callbackHell";
import { promisesComponent } from "./concepts/04-promises";
import { promiseHellComponent } from "./concepts/05-promiseHell";
import { promiseRaceComponent } from "./concepts/06-promiseRace";
import { asyncComponent } from "./concepts/07-async";
import { asyncAwaitComponent } from "./concepts/08-asyncAwait";
import { asyncAwaitOptimizationsComponent } from "./concepts/09-asyncAwaitOptimizations";
import { ifAwaitAndForAwaitComponent } from "./concepts/10-ifAwaitAndForAwait";
import { generatorsComponent } from "./concepts/11-generators";
import { elementHTML } from "./constants/globals";
import javascriptLogo from "./javascript.svg";
import "./style.css";
import viteLogo from "/vite.svg";

document.querySelector("#app").innerHTML = /* html */ `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
    </div>
  </div>
`;

// environmentVarsComponent(elementHTML);
// callbacksComponent(elementHTML);
// callbackHellComponent(elementHTML);
// promisesComponent(elementHTML);
// promiseHellComponent(elementHTML);
// promiseRaceComponent(elementHTML);
// asyncComponent(elementHTML);
// asyncAwaitComponent(elementHTML);
// asyncAwaitOptimizationsComponent(elementHTML);
// ifAwaitAndForAwaitComponent(elementHTML);
generatorsComponent();
