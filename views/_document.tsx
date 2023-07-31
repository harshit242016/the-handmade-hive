import React from 'react';
import {
  Document,
  Head,
  Main,
} from '@react-ssr/nestjs-express';

export default class extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
        <link href="/dist/output.css" rel="stylesheet"/>
 <title>react-ssr-nestjs-starter</title>
        </Head>
        <body>
          <Main />
        </body>
      </html>
    );
  }
};
