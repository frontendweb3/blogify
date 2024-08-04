import React, { ReactElement } from 'react';

import type { AppProps } from 'next/app';
import Footer from 'components/Footer';
import 'styles/globals.css';

const App: React.FC<AppProps> = ({ Component, pageProps }): ReactElement => (
  <>
    <Component {...pageProps} />
    <Footer />
  </>
);

export default App;
