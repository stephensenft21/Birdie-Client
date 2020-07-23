const AuthApiUrl = "http://localhost:8000"

export default {
    registerUser(newUser) {
        return fetch(`${AuthApiUrl}/register`, {
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
        return fetch(`${authApiUrl}/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify(userCreds)
          })
            .then(response => response.json())
    }
}