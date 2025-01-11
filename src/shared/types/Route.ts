export interface PublicRoute extends CustomRouteConfig {
  public: true;
}

export interface PrivateRoute extends CustomRouteConfig {
  public?: false;
}

export interface CustomRouteConfig {
  public?: boolean;
}
