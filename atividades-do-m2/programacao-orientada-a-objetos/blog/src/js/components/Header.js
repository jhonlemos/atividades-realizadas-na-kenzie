export class Header {
    static update(headerImg, headerUsername, avatar, userName) {
      headerImg.src = avatar;
      headerUsername.innerText = userName;
    }
  }
  