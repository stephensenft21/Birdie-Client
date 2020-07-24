import { useState } from "react"
import AuthManager from "../../API/AuthManager"

const useSimpleAuth = () => {

    const [loggedIn, setIsLoggedIn] = useState(false)

    const isAuthenticated = () =>
        loggedIn || sessionStorage.getItem("birdie-token") !== null

    const register = registerInfo => {
        return AuthManager.registerUser(registerInfo)
            .then(parsedResponse => {
                if ("token" in parsedResponse) {
                    sessionStorage.setItem("birdie-token", parsedResponse.token)
                }
            })
    }

    const login = credentials => {
        return AuthManager.loginUser(credentials)
            .then(parsedResponse => {
                if ("valid" in parsedResponse && parsedResponse.valid && "token" in parsedResponse) {
                    sessionStorage.setItem("birdie-token", parsedResponse.token)
                    setIsLoggedIn(true)
                }
            })
    }

    const logout = () => {
        setIsLoggedIn(false)
        sessionStorage.removeItem("birdie-token")
    }

    return { isAuthenticated, logout, login, register}
}

export default useSimpleAuth