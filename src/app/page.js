import QueryProvider from "@/components/QueryProvider";
import Cart from "@/components/cart/Cart";
import ListProducts from "@/components/products/ListProducts";
import NewProduct from "@/components/products/NewProduct";

export default function Home() {

  return (
    <QueryProvider>
      <main>
        <section className="flex justify-center p-4">
          <div className="border-slate-600 border-solid border-2 p-4">
            <h1 className="text-xl">Kosár tartalma</h1>
            <Cart />
          </div>
        </section>
        <section className="flex justify-center p-4">
          <div className="border-slate-600 border-solid border-2 p-4">
            <h1 className="text-xl">Terméklista</h1>
            <div>
              <ListProducts />
              <NewProduct />
            </div>
          </div>
        </section>
      </main>
    </QueryProvider>
  )
}
