import { Api } from "../models/Api.js";

export class AuthenticateUserController {
  async handle(email, password) {
    const data = {
      email,
      password,
    };

    const response = await Api.login(data);

    return response;
  }
}
