
const userLogin = () => {
    return {
        type: "Login"
    }
}
const userLogout = () => {
    return {
        type: "Logout"
    }
}

const name = (value) => {
    console.log(value);
    return {
        type: "username",
        payload: value

    }
}
const email = (value) => {
    return {
        type: "email",
        payload: value
    }
}
export { userLogin, userLogout, name, email }

