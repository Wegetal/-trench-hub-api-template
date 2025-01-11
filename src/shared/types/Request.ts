import { FastifyRequest } from "fastify";
import { RequestRouteOptions } from "fastify/types/request";
import { CustomRouteConfig, PrivateRoute, PublicRoute } from "./Route";

export interface CustomFastifyRequest<Body = {}, Params = {}, Query = {}>
  extends FastifyRequest {
  headers: {
    "x-api-key": string;
    authorization?: string;
  };
  routeOptions: RequestRouteOptions<CustomRouteConfig>;
  body: Body;
  params: Params;
  query: Query;
}

export interface PrivateRequest<Body = {}, Params = {}, Query = {}>
  extends CustomFastifyRequest {
  headers: {
    "x-api-key": string;
    authorization: `Bearer ${string}`;
  };
  routeOptions: RequestRouteOptions<PrivateRoute>;
  body: Body;
  params: Params;
  query: Query;
}

export interface PublicRequest<Body = {}, Params = {}, Query = {}>
  extends CustomFastifyRequest {
  headers: {
    "x-api-key": string;
    authorization?: string;
  };
  routeOptions: RequestRouteOptions<PublicRoute>;
  body: Body;
  params: Params;
  query: Query;
}
