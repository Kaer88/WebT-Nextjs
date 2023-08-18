import ListProductsContainer from "@/components/QueryProvider";
import ListProducts from "@/components/ListProducts";
import NewProduct from "@/components/NewProduct";

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
