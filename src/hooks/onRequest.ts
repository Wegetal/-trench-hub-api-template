import { DoneFuncWithErrOrRes, FastifyReply } from "fastify";

import { CustomFastifyRequest } from "../shared/types/Request";

export const verifyAuthAndRole = (
  request: CustomFastifyRequest,
  reply: FastifyReply,
  done: DoneFuncWithErrOrRes
) => {
  const { headers, routeOptions } = request;
  const { authorization, "x-api-key": xApiKey } = headers;

  // do your validation logic here, sample: apiKey on the header {x-api-key: apikey }
  // if (xApiKey !== env.API_KEY) {
  //   return reply.code(403).send({ error: "Invalid API KEY" });
  // }

  done();
};
