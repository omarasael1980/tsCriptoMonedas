import { CryptoSchema } from "../schema/crypto-Schema";
import { z } from "zod";

export type Currency = z.infer<typeof CryptoSchema>;
