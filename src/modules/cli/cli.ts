import { Controller } from "../migrator/domain/ports/controller";

interface CLI {
  controller: Controller;

  ShowMenu(): Promise<void>;
  ShowHelp(): Promise<void>;
}

export class Commander implements CLI {
  controller: Controller;

  constructor(controller: Controller) {
    this.controller = controller;
  }

  async ShowMenu(): Promise<void> {
    console.log("ShowMenu");
  }

  async ShowHelp(): Promise<void> {
    console.log("ShowHelp");
  }
}
