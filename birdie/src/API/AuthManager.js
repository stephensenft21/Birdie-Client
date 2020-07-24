const AuthApiUrl = "http://localhost:8088"

export default {
    registerUser(newUser) {
        return fetch(`${AuthApiUrl}/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(newUser)
        })
        .then(response => response.json())
    },
    loginUser(newCreds) {
        return fetch(`${AuthApiUrl}/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify(newCreds)
          })
            .then(response => response.json())
    }
}