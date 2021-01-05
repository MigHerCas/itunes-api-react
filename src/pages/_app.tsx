import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { useStore } from '../store';
import '../scss/styles.scss';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  // Initialize Store
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
