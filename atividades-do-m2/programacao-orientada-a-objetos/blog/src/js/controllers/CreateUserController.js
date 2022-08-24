import { Api } from "../models/Api.js";

export class CreateUserController {
  async handle(username, email, avatarUrl, password) {
    const data = {
      username,
      email,
      avatarUrl,
      password,
    };

    const response = await Api.createUser(data);

    return response;
  }
}
