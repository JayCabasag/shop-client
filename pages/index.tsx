import { ShopsList } from "@/containers/home";
import CategorizedProducts from "@/containers/home/CategorizedProducts";
import ShopSwiper from "@/containers/home/ShopSwiper";
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
  shops: Shop[];
}

export default function Home({ shops } : HomeProps) {
  return (
    <main className="w-full flex flex-col items-center  h-auto">
      <section className="container flex mt-4 h-32 md:h-80 shadow-lg rounded-t-md shadow-slate-200">
        <ShopSwiper />
      </section>
      <section className="container flex px-2 md:px-0">
        <ShopsList shops={shops}/>
      </section>
      <section className="container flex px-2 md:px-0">
        <CategorizedProducts />
      </section>
    </main>
  )
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:8080/api/v1/shops")
  const data = await res.json()
  return { props: { shops: data } }
}