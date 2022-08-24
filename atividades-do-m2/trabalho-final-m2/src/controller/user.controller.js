export default class User {
    static url = "https://habits-kenzie.herokuapp.com/api/user"

    static async userLogin(user) {
        return await fetch(`${this.url}Login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            })
            .then(res => res.json())
            .catch(err => console.log(err))
    }

    static async userUpdate(img) {
        const token = JSON.parse(localStorage.getItem("@kenzie-habits:token"))
        return await fetch(`${this.url}/profile`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({
                    "usr_image": img
                })
            })
            .then(res => res.json())
            .catch(err => console.log(err))
    }
}