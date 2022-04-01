import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import { useRouter } from "next/router";
import { route } from "next/dist/server/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Home() {
  const router = useRouter();
  const [user, setUser] = useState("");
  const email = [
    "komalpugalia@ozeinnovations.com",
    "varsha.rani@ozeinnovations.com",
    "karthik.malyala@ozeinnovations.com",
    "lovely.gupta@ozeinnovations.com",
    "pavan.kumar@ozeinnovations.com",
    "sakshi.mahajan@ozeinnovations.com",
    "simran.helal@ozeinnovations.com",
    "dhaval.vira@ozeinnovations.com",
    "sarath.ts@ozeinnovations.com",
    "benhurimmanuel@ozeinnovations.com",
    "design@ozeinnovations.com",
  ];
  const updateInputValue = (evt) => {
    const val = evt.target.value;
    setUser(val);
  };
  console.log("user", user);
  const login = () => {
    if (email.indexOf(user) > -1) {
      router.push("/lol");
    } else {
      toast("Please use valid email!");
      console.log("no");
    }
  };

  return (
    <div style={{ margin: "300px" }}>
      <div>
        <h2 style={{ textAlign: "center" }}>FlipOze Aplha version 1.0</h2>
        <h3 style={{ textAlign: "center" }}>
          Confidential ! Do NOT share the website with public
        </h3>
        <h4 style={{ textAlign: "center" }}>
          Use you company credentials to signIn{" "}
        </h4>
      </div>
      <form>
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="form2Example1">
            Email address
          </label>
          <input
            type="email"
            id="form2Example1"
            className="form-control"
            value={user}
            onChange={(evt) => updateInputValue(evt)}
          />
          <label className="form-label" htmlFor="form2Example1">
            Password
          </label>
          <input type="email" id="form2Example1" className="form-control" />
        </div>
        <button
          type="button"
          className="btn btn-primary btn-block mb-4"
          onClick={login}
        >
          Sign in
        </button>
        <ToastContainer />
      </form>
    </div>
  );
}
