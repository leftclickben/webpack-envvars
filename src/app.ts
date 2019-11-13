import { config } from 'dotenv';

// This is only needed to support loading from `.env` files, it is typically not needed (but harmless) in production.
config();

window.addEventListener('load', () => {
  const app = window.document.querySelector('#app');
  if (app) {
    console.info(`Starting application with process.env.WEBPACK_DEMO_FOO = "${process.env.WEBPACK_DEMO_FOO}`);
    app.innerHTML = `<p>The environment var is "${process.env.WEBPACK_DEMO_FOO}"</p>`; // Who needs React? XD
  } else {
    console.error('App element not found, application cannot start');
  }
});
