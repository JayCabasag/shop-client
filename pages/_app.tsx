import MainLayout from '@/layout/main/Layout'
import '@/styles/globals.css'
import '@/styles/swiper.css'
import type { AppProps } from 'next/app'
import { store } from '@/app/store'
import { Provider } from 'react-redux';
import 'nprogress/nprogress.css';
import NProgress from 'nprogress';
import Router from 'next/router';
import { useEffect } from 'react'
import { useAppDispatch } from '@/app/hooks'
import { fetchUserAsync } from '@/features/userSlice'

NProgress.configure({
  showSpinner: false,
  minimum: 0.1,
  easing: 'ease',
  speed: 800,
  trickle: false,
  trickleSpeed: 300,
  parent: '#__next',
  template: '<div class="bar" role="bar"></div>',
});

export default function App({ Component, pageProps }: AppProps) {

  const dispatch = store.dispatch;

  useEffect(() => {
    const start = () => NProgress.start();
    const end = () => NProgress.done();

    Router.events.on('routeChangeStart', start);
    Router.events.on('routeChangeComplete', end);
    Router.events.on('routeChangeError', end);

    return () => {
      Router.events.off('routeChangeStart', start);
      Router.events.off('routeChangeComplete', end);
      Router.events.off('routeChangeError', end);
    };
  }, []);

  useEffect(() => {
    const getUserDetails = async () => {
      const uid = localStorage.getItem('uid') as string
      const uidNumber = parseInt(uid, 10)
      if (isNaN(uidNumber)) return
      dispatch(fetchUserAsync(Number(uid)))
    }
    getUserDetails()
  }, [dispatch])
  

  return (
    <Provider store={store}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </Provider>
  )
}
