import { useDispatch, useSelector } from "react-redux";
import { email, name, userLogin, userLogout } from "../Actions";
import "./Style.css";

export default function Home() {
  const login = useSelector((state) => state.userState.isloged);
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.userState.username);
  const userEmail = useSelector((state) => state.userState.email);

  function onChangeUsername(e) {
    dispatch(name(e.target.value));
  }

  function onChangeEmail(e) {
    dispatch(email(e.target.value));
  }

  return (
    <div className="home">
      <div className="header">
        <h1>Home</h1>

        {!login && (
          <div>
            <p>Please Login to Access Profile Section</p>
            <form onSubmit={() => dispatch(userLogin())}>
              <label>
                Username :
                <input
                  type="text"
                  value={userName}
                  onChange={onChangeUsername}
                  required
                />{" "}
                <br />
                <br />
              </label>

              <label>
                {" "}
                Email:
                <input
                  type="email"
                  value={userEmail}
                  onChange={onChangeEmail}
                  required
                />{" "}
                <br />
                <br />
              </label>
              <button type="submit">Login</button>
            </form>
          </div>
        )}

        {login && (
          <div>
            <h3>Now ,You can view your detail in Profile Section </h3>
            <button onClick={() => dispatch(userLogout())}>Logout</button>
          </div>
        )}
      </div>
    </div>
  );
}
