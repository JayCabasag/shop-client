import MainLayout from '@/layout/main/Layout'
import '@/styles/globals.css'
import '@/styles/swiper.css'
import type { AppProps } from 'next/app'
import { store } from '@/app/store'
import { Provider } from 'react-redux';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </Provider>
  )
}
