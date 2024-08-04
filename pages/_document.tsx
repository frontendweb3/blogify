import React, { ReactElement } from 'react';
import {
  Html, Head, Main, NextScript,
} from 'next/document';

const Document: React.FC = (): ReactElement => (
  <Html lang='en'>
    <Head />
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
