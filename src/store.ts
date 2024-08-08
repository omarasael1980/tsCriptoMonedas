import { create } from "zustand";
import axios from "axios";
import { CryptoCurrenciesResponseSchema } from "./schema/crypto-Schema";
import { set } from "zod";
async function getCryptos() {
  const url =
    "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD";
  const response = await axios.get(url);
  //console.log(response);
  const result = CryptoCurrenciesResponseSchema.safeParse(response.data.Data);
  // console.log(result);
  if (result.success) {
    return result.data;
  } else {
    throw new Error("Error al obtener las criptomonedas");
  }
}
export const useCriptoStore = create(() => ({
  fetchCryptos: async () => {
    const cryptocurrancies = await getCryptos();
    set(() => ({ cryptocurrancies }));
  },
}));
