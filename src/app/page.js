import ListProductsContainer from "@/components/ListProductContainer";
import ListProducts from "@/components/ListProducts";
import NewProduct from "@/components/NewProduct";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";



export default function Home() {

  return (

    <main>
      <section>
        <h1>Terméklista</h1>
        <div>
          <ListProductsContainer>
            <ListProducts />
          </ListProductsContainer>
          <NewProduct />
        </div>
      </section>
    </main>

  )
}
