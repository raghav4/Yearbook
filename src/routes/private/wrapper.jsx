import React from 'react';
import { PrivateProvider } from '../../contexts';

const WrapperContext = ({ children, value }) => {
  return <PrivateProvider value={value}>{children}</PrivateProvider>;
};

export default WrapperContext;
