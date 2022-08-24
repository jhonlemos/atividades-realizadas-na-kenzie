import { Api } from "../models/Api.js";

export class GetUserController {
  async handle(id, token) {
    const response = await Api.getUser(id, token);

    return response;
  }
}
