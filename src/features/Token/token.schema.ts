import { z } from "zod";
import zodToJsonSchema from "zod-to-json-schema";

const GetTokenParams = z.object({
  token: z.string(),
});

export type GetTokenParams = z.infer<typeof GetTokenParams>;

export const GetTokenParamsSchema = zodToJsonSchema(GetTokenParams);

export const TokenViewModel = z.object({
  name: z.string(),
  symbol: z.string(),
  description: z.string(),
  image: z.string(),
  mcap: z.string(),
  createdOn: z.string().optional(),
  twitter: z.string().nullable().optional(),
  website: z.string().nullable().optional(),
  telegram: z.string().nullable().optional(),
});

export const TokenViewModelSchema = zodToJsonSchema(TokenViewModel);
