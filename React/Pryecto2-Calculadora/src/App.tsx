import MenuItem from "./components/MenuItems";
import { menuItems } from "./data/db";

function App() {
  
  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black">
          Calculadora de propinas y consumo
        </h1>
      </header>

      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div>
          <h2>Menú</h2>
          {menuItems.map(item => (
            <MenuItem2
            key={item.id}
            item={item}
            />
          ))}
        </div>

        <div>
          <h2>Consumo</h2>
        </div>
      </main>
    </>
  );
}

export default App;
