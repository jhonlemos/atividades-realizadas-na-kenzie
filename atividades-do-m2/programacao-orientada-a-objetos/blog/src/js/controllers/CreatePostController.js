import { Api } from "../models/Api.js";

export class CreatePostController {
  async handle(token, content) {
    const data = {
      content,
    };

    const response = await Api.createPost(token, data);

    return response;
  }
}
