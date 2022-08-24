import { Api } from "../models/Api.js";

export class DeletePostController {
  async handle(id, token) {
    const response = await Api.deletePost(id, token);

    return response;
  }
}
