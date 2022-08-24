import { Api } from "../models/Api.js";

export class UpdatePostController {
  async handle(idPost, content, token) {
    const data = {
      content,
    };

    const response = await Api.updatePost(idPost, data, token);

    return response;
  }
}
