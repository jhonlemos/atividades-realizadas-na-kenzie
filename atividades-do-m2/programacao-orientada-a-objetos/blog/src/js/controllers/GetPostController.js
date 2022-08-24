import { Api } from "../models/Api.js";

export class GetPostController {
  async handle(token, page = 1) {
    const response = await Api.getPost(token, page);

    return response;
  }
}
