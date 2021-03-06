import "reflect-metadata";

import { inject, injectable } from "inversify";
import { computed, makeObservable } from "mobx";

import { Router } from "../core/routing/Router";
import { RoutingState } from "../core/routing/RoutingState";

@injectable()
export class AppPresenter {
  loading: boolean = false;

  @inject(Router)
  router!: Router;

  @inject(RoutingState)
  routingState!: RoutingState;

  get currentRouteId() {
    return this.routingState.currentState.routeId;
  }

  constructor() {
    makeObservable(this, {
      currentRouteId: computed,
    });
  }

  bootstrap = async () => {
    this.router.registerRoutes();
    this.loading = false;
  };
}
