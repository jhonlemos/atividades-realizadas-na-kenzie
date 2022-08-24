export class Api {
  static async login(data) {
    const response = await fetch("https://blog-m2.herokuapp.com/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((resp) => resp.json())
      .then((data) => data)
      .catch((error) => error);

    if (response.token) {
      localStorage.setItem("@kenzie-blog:userId", response.userId);
      localStorage.setItem("@kenzie-blog:userToken", response.token);
    }

    return response;
  }

  static async createUser(data) {
    const response = await fetch("https://blog-m2.herokuapp.com/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((resp) => resp.json())
      .then((data) => data);

    return response;
  }

  static async getUser(id, token) {
    const response = await fetch(`https://blog-m2.herokuapp.com/users/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((resp) => resp.json())
      .then((data) => data)
      .catch((error) => error);

    return response;
  }

  static async getPost(token, page = 1) {
    const response = await fetch(`https://blog-m2.herokuapp.com/posts?page=${page}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((resp) => resp.json())
      .then((data) => data)
      .catch((error) => error);

    return response;
  }

  static async createPost(token, data) {
    const response = await fetch("https://blog-m2.herokuapp.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    })
      .then((resp) => resp.json())
      .then((data) => data)
      .catch((error) => error);

    return response;
  }

  static async updatePost(id, data, token) {
    const response = await fetch(`https://blog-m2.herokuapp.com/posts/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    })
      .then((resp) => resp.json())
      .then((data) => data)
      .catch((error) => error);

    return response;
  }

  static async deletePost(id, token) {
    const response = await fetch(`https://blog-m2.herokuapp.com/posts/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((resp) => resp.json())
      .then((data) => data)
      .catch((error) => error);

    return response;
  }
}
