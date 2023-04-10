import { ShopsList } from "@/containers/home";
import { Navbar } from "@/containers/navbar";

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
      <section className="container flex ">
        <ShopsList shops={shops}/>
      </section>
    </main>
  )
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:8080/api/v1/shops")
  const data = await res.json()
  return { props: { shops: data } }
}