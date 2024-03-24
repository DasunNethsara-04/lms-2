import { useState } from "react";
import { Link } from "react-router-dom";
import loginPanelImg from "../assets/img1.webp";
import '../assets/css/styles.css'

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = (event) => {
    event.preventDefaults();
  };

  return (
    <div>
      {/* "border-radius: 1rem 0 0 1rem;" */}
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: "1rem" }}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src={loginPanelImg}
                    alt="login form"
                    className="img-fluid"
                    style={{ borderRadius: "1rem 0 0 1rem" }}
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form action="" method="post" onSubmit={handleSubmit}>
                      <div className="d-flex align-items-center mb-3 pb-1"></div>
                      <h4
                        className="fw-normal mb-3 pb-3"
                        style={{ letterSpacing: "1px" }}
                      >
                        Sign into your account
                      </h4>

                      <div className="form-outline mb-4">
                        <div className="form-floating mb-3">
                          <input
                            type="email"
                            className="form-control"
                            id="floatingInput"
                            placeholder="name@example.com"
                            name="email"
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          <label htmlFor="floatingInput">Email address</label>
                        </div>
                      </div>

                      <div className="form-outline mb-4">
                        <div className="form-floating mb-3">
                          <input
                            type="password"
                            className="form-control"
                            id="floatingInput2"
                            placeholder="*******"
                            name="password"
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          <label htmlFor="floatingInput2">Password</label>
                        </div>
                      </div>

                      <div className="form-outline mb-4">
                        <div className="form-floating">
                          <select
                            className="form-select"
                            id="floatingSelect"
                            aria-label="Floating label select example"
                            name="role"
                            defaultValue={"Teacher"}
                            onChange={(e) => setRole(e.target.value)}
                          >
                            <option value="teacher">Teacher</option>
                            <option value="student">Student</option>
                          </select>
                          <label for="floatingSelect">Select User Role</label>
                        </div>
                      </div>

                      <div className="pt-1 mb-4">
                        <input
                          type="submit"
                          value="Login"
                          name="login"
                          className="btn btn-dark btn-lg btn-block"
                        />
                      </div>
                      <Link to="/register">I don't have an account</Link>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
