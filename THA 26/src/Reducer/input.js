const initState = {
    username: "",
    email: "",
    isloged: false,
};
const inputData = (state = initState, action) => {
    switch (action.type) {
        case "username":
            return { ...state, username: action.payload };
        case "email":
            return { ...state, email: action.payload };
        case "Login":
            return { ...state, isloged: true };
        case "Logout":

            return { ...state, username: "", email: "", isloged: false };

        default:
            return state;
    }
};
export default inputData;
