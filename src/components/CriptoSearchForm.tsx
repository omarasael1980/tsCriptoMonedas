import { currencies } from "../data";
export default function CriptoSearchForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Formulario enviado");
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full">
      <div className="p-4 flex">
        <label className=" " htmlFor="currency">
          Moneda:
        </label>
        <select
          className="bg-slate-200 px-4 mx-4 cursor-pointer rounded flex-1  border-2 border-transparent hover:border-2 hover:border-blue-500 "
          type="text"
          name="currency"
          id="currency"
        >
          <option value="">-- Seleccione -- </option>
          {currencies.map((currency) => (
            <option key={currency.code} value={currency.code}>
              {currency.name}
            </option>
          ))}
        </select>
      </div>
      <div className="p-4 flex">
        <label htmlFor="criptocurrency">CriptoMoneda: </label>
        <select
          className="bg-slate-200 px-4 mx-4 cursor-pointer rounded flex-1  border-2 border-transparent hover:border-2 hover:border-blue-500 "
          type="text"
          name="criptocurrency"
          id="criptocurrency"
        >
          <option value="">-- Seleccione -- </option>
        </select>
      </div>
      <div className="p-4 flex">
        <button className="w-full bg-emerald-400 text-bold uppercase text-white hover:bg-emerald-500 cursor-pointer m-2 p-2 rounded-lg transition-colors duration-300 ease-linear">
          Cotizar
        </button>
      </div>
    </form>
  );
}
