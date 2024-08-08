import { useEffect } from "react";
import CriptoSearchForm from "./components/CriptoSearchForm";
import { useCriptoStore } from "./store";

function App() {
  const fetchCyptos = useCriptoStore((state) => state.fetchCryptos);
  useEffect(() => {
    fetchCyptos();
  }, []);
  console.log(fetchCyptos);
  return (
    <>
      <div className="text-3xl bg-bg-fondo h-screen   bg-cover bg-center min-vh-100 flex flex-col justify-center items-center">
        <h1 className="text-5xl text-white  font-extrabold   p-20">
          Cotizador de{" "}
          <span className=" block  text-6xl  text-emerald-500">
            Criptomonedas
          </span>
        </h1>
        <div className="w-2/5 bg-white  m-4  rounded-lg p-8">
          <CriptoSearchForm />
        </div>
      </div>
    </>
  );
}

export default App;
