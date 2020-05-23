import Raven from 'raven-js';

const init = () => {
  Raven.config(
    'https://61efe81346924b25a6564a943d8b71fa@o377410.ingest.sentry.io/5237286',
    {
      release: '0-1-0',
      environment: 'development-test',
    },
  ).install();
};

const log = (error) => {
  Raven.captureException(error);
};

export default {
  init,
  log,
};
