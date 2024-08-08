import { z } from "zod";

export const CryptoSchema = z.object({
  code: z.string(),
  name: z.string(),
});

export const CryptoCurrencyResponseSchema = z.object({
  CoinInfo: z.object({
    FullName: z.string(),
    Internal: z.string(),
    ImageUrl: z.string(),
  }),
});

export const CryptoCurrenciesResponseSchema = z.array(
  CryptoCurrencyResponseSchema.pick({
    CoinInfo: z.object({
      FullName: z.string(),
      Internal: z.string(),
      ImageUrl: z.string(),
    }),
  })
);
