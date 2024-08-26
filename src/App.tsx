import MenuItem from "./components/MenuItem";
import OrderContents from "./components/OrderContents";
import OrderTotals from "./components/OrderTotals";
import TipPercentageForm from "./components/TipPercentageForm";
import { menuItems } from "./data/db";
import useOrder from "./hooks/useOrder";

function App() {
  const { order, tip, setTip, addItem, removItem, placeOrder } = useOrder();
  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black">
          Calculadora de propinas
        </h1>
      </header>

      <main className=" max-w-7xl mx-auto py-10 px-5 grid md:grid-cols-2">
        <div>
          <h2 className="text-4xl font-black text-center">Menú</h2>
          <div className=" space-y-3 mt-10">
            {menuItems.map((item) => (
              <MenuItem key={item.id} item={item} addItem={addItem} />
            ))}
          </div>
        </div>

        <div className="border border-dashed border-salte-300 px-5 rounded-lg space-y-10">
          {order.length > 0 ? (
            <>
              <OrderContents order={order} removeItem={removItem} />
              <TipPercentageForm setTip={setTip} tip={tip} />
              <OrderTotals order={order} tip={tip} placeOrder={placeOrder} />
            </>
          ) : (
            <div className=" flex flex-col items-center">
              <p className="text-center text-4xl font-black ">
                La orden esta vacía
              </p>
              <span className="italic text-gray-500 mt-2">
                Selecione un alimento del menú
              </span>
            </div>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
