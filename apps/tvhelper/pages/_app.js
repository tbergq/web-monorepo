// @flow

import * as React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { withApp } from '@tbergq/nextjs-utils';
import { Toast } from '@tbergq/components';
import { RecoilRoot } from 'recoil';

class MyApp extends App {
  render() {
    const { Component, pageProps, isLoggedIn } = this.props;

    return (
      <RecoilRoot>
        <Head>
          <title>Tv helper</title>
        </Head>
        <Component {...pageProps} isLoggedIn={isLoggedIn} />
        <Toast />
      </RecoilRoot>
    );
  }
}

export default (withApp(MyApp): React.AbstractComponent<{ ... }>);
