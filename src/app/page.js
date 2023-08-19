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
            <h1 className="text-xl mb-2">Kosár tartalma</h1>
            <Cart />
          </div>
        </section>
        <section className="flex justify-center p-4">
          <div className="border-slate-600 border-solid border-2 p-4">
            <h1 className="text-xl mb-2">Terméklista</h1>
            <div>
              <ListProducts />
            </div>
          </div>
        </section>
        <section className="flex justify-center p-4">
          <div className="border-slate-600 border-solid border-2 p-4">
            <h1 className="text-xl mb-2">Új termék</h1>
            <NewProduct />
          </div>
        </section>
      </main>
    </QueryProvider>
  )
}
