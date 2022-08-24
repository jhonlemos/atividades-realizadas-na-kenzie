export default class Habit{
    static url = "https://habits-kenzie.herokuapp.com/api/habits"
    static token = JSON.parse(localStorage.getItem("@kenzie-habits:token"))

    static async createHabit(habit){
        return await fetch(`${this.url}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${this.token}`
            },
            body: JSON.stringify(habit)
        })
        .then(res => res.json())
        .catch(err => console.log(err))
    }

    static async allHabit(){
        return await fetch(`${this.url}`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${this.token}`
            } 
        })
        .then(res => res.json())
        .catch(err => console.log(err))
    }

    static async categoryHabit(category){
        return await fetch(`${this.url}/category/${category}`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${this.token}`
            }
        })
        .then(res => res.json())
        .catch(err => console.log(err))
    }

    static async updateHabit(habit, id){
        return await fetch(`${this.url}/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${this.token}`
            },
            body: JSON.stringify(habit)
        })
        .then(res => res.json())
        .catch(err => console.log(err))
    }

    static async completeHabit(id){
        return await fetch(`${this.url}/complete/${id}`, {
            method: "PATCH",
            headers: {
                "Authorization": `Bearer ${this.token}`
            }
        })
        .then(res => res.json())
        .catch(err => console.log(err))
    }

    static async deleteHabit(id){
        return await fetch(`${this.url}/${id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${this.token}`
            }
        })
        .then(res => res.json())
        .catch(err => console.log(err))
    }
    
}