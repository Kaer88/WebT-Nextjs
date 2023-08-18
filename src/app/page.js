import ListProductsContainer from "@/components/QueryProvider";
import ListProducts from "@/components/products/ListProducts";
import NewProduct from "@/components/products/NewProduct";

export default function Home() {

  return (

    <main>
      <section className="flex justify-center p-4">
        <div className="border-slate-600 border-solid border-2 p-4">
          <h1 className="text-xl">Terméklista</h1>
          <div>
            <ListProductsContainer>
              <ListProducts />
            </ListProductsContainer>
            <NewProduct />
          </div>
        </div>
      </section>
    </main>

  )
}
