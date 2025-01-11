import { FastifyPluginCallback } from "fastify";
import { PrivateRequest, RouterConfig } from "../../shared/types";
import { GetTokenParams } from "./token.schema";
import { getTokenData } from "./token.service";
import { TokenViewModelSchema } from "./token.schema";

const plugin: FastifyPluginCallback = (app, opts, next) => {
  app.get(
    "/:token",
    {
      schema: {
        tags: ["Token"],
        response: {
          200: TokenViewModelSchema,
        },
      },
    },
    async (req: PrivateRequest<never, GetTokenParams>, res) => {
      return getTokenData(req.params.token);
    }
  );

  next();
};

export const tokenRouter: RouterConfig = [plugin, { prefix: "/v1/token" }];
