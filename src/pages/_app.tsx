import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import store from '../store/store';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Provider store={store}>
      {' '}
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
