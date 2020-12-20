import React from 'react';

const PrivateContext = React.createContext();
const PrivateProvider = PrivateContext.Provider;
const PrivateConsumer = PrivateContext.Consumer;

export { PrivateContext, PrivateProvider, PrivateConsumer };
