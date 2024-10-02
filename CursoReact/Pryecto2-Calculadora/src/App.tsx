import { useReducer } from "react";
import MenuItems from "./components/MenuItems";
import OrderContents from "./components/orderContents";
import OrderTotal from "./components/orderTotal";
import TipPorcentageForm from "./components/TipPorcentageForm";
import { menuItems } from "./data/db";
import { initialState, orderReducer } from "./reducers/order-reduce";

function App() {

  const [state, dispatch]=useReducer(orderReducer,initialState)
  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black">
          Calculadora de propinas y consumo
        </h1>
      </header>

      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-4xl font-black">Menú</h2>
          <div className="space-y-3 mt-10 ">
            {menuItems.map((item) => (
              <MenuItems key={item.id} item={item} dispatch={dispatch}/>
            ))}
          </div>
        </div>

        <div className=" border border-dashed border-slate-300 p-5 rounded-lg  space-y-10">
          {state.order.length ? (
            <>
            
            <OrderContents
            order={state.order}
            dispatch={dispatch}
            />
            <TipPorcentageForm
            dispatch={dispatch}
            tip={state.tip}
            />
            <OrderTotal
            order={state.order}
            tip={state.tip}
            dispatch={dispatch}
            />
            </>
          ): <p className="text-center">La orden esta vacia</p>}
        </div>
      </main>
    </>
  );
}

export default App;