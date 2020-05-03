import React from 'react';

const PublicContext = React.createContext();
const PublicProvider = PublicContext.Provider;
const PublicConsumer = PublicContext.Consumer;

export { PublicContext, PublicProvider, PublicConsumer };
