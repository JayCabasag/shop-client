import { useAppSelector } from "@/app/hooks";
import { ShopsList } from "@/containers/home";
import CategorizedProducts from "@/containers/home/CategorizedProducts";
import ShopSwiper from "@/containers/home/ShopSwiper";
import { Product } from "@/utils/types";
import Head from "next/head";
import { useSelector } from "react-redux";
interface Shop {
  id: number;
  name: string;
  slug: string;
  description: string;
  address: string;
  phone: string;
  email: string;
  logo: string;
  website: string;
  active: boolean;
  owner: string;
  totalProducts: number;
  createdAt: string;
  updatedAt: string;
}

interface HomeProps {
  shops: Shop[]
  products: Product[]
}

export default function Home({ shops, products } : HomeProps) {
  const userSelector = useAppSelector(state => state.user)
  return (
    <main className="w-full flex flex-col items-center  h-auto">
      <Head>
        <title>Buy gadgets</title>
        <meta property="og:home-title" content="My page title" key="home-title" />
      </Head>
      <section className="container flex mt-4 h-32 md:h-80 shadow-lg rounded-t-md shadow-slate-200">
        <ShopSwiper />
      </section>
      <section className="container flex px-2 md:px-0">
        <ShopsList shops={shops}/>
      </section>
      <section className="container flex px-2 md:px-0">
        <CategorizedProducts products={products}/>
      </section>
    </main>
  )
}

export async function getServerSideProps() {
  const shopListResponse = await fetch("http://localhost:8080/api/v1/shops")
  const shopListData = await shopListResponse.json()
  const productListResponse = await fetch(`http://localhost:8080/api/v1/all-products`)
  const productListData = await productListResponse.json()
  return { props: { shops: shopListData, products: productListData } }
}