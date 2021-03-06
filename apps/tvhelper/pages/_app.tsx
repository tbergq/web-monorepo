import Head from 'next/head';
import { AppProps } from 'next/app';
import { Toast, MediaContextProvider, ToastProvider } from '@tbergq/components';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '@tbergq/theme';
import Navbar from 'components/Navbar';
import GlobalStyle from 'components/GlobalStyle';
import { EnvironmentProvider } from 'services/relay';
import useNprogress from 'components/hooks/useNprogress';
import '@tbergq/components/dist/es/index.css';
import '@tbergq/formik-wrapper/dist/es/index.css';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const { records, token } = pageProps;
  useNprogress();
  return (
    <ThemeProvider theme={defaultTheme}>
      <MediaContextProvider>
        <EnvironmentProvider records={records} token={token}>
          <ToastProvider>
            <Head>
              <title>Tv helper | {pageProps.pageName ?? ''}</title>
            </Head>
            <GlobalStyle />
            <header>
              <Navbar token={token} />
            </header>
            <main>
              <Component {...pageProps} />
            </main>
            <Toast />
          </ToastProvider>
        </EnvironmentProvider>
      </MediaContextProvider>
    </ThemeProvider>
  );
}
