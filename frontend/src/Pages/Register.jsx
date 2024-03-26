import { Link } from "react-router-dom";
import axios from "axios";
import RegisterPanelImage from "../assets/img2.webp";
import "../assets/css/styles.css";
import { useState } from "react";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [salutation, setSalutation] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("salutation", salutation);
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("email", email);
    formData.append("password", password);

    axios.defaults.withCredentials = true;
    axios
      .post("http://localhost:5000/register", formData, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        if (res.status === 200) {
          console.log("OK");
          Swal.fire({
            title: "Done",
            text: res.data,
            icon: "success",
          });
        }
      })
      .catch((error) => {
        if (err.response) {
          if (err.response.status === 400) {
            Swal.fire({
              title: "Oh no..",
              text: err.response.data,
              icon: "warning",
            });
          } else if (err.response.status === 500) {
            Swal.fire({
              title: "Oops.",
              text: err.response.data,
              icon: "error",
            });
          }
        }
      });
  };

  return (
    <div>
      <div className="container py-5 h-100 vh-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: "1rem" }}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src={RegisterPanelImage}
                    alt="login form"
                    className="img-fluid"
                    style={{ borderRadius: "1rem 0 0 1rem" }}
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form method="post" onSubmit={handleSubmit}>
                      <div className="d-flex align-items-center mb-3 pb-1"></div>

                      <h4
                        className="fw-normal mb-3 pb-3"
                        style={{ letterSpacing: "1px" }}
                      >
                        Register Now...
                      </h4>

                      <div className="row mb-4">
                        <div className="col">
                          <div className="form-outline mb-4">
                            <div className="form-floating mb-3">
                              <select
                                className="form-select"
                                id="floatingSelect"
                                aria-label="Floating label select example"
                                name="salutation"
                                defaultValue={"Dr."}
                                onChange={(e) => setSalutation(e.target.value)}
                              >
                                <option value="Dr.">Dr.</option>
                                <option value="Mr.">Mr.</option>
                                <option value="Mrs.">Mrs.</option>
                                <option value="Miss.">Miss.</option>
                              </select>
                              <label htmlFor="floatingSelect">
                                Select User Role
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div className="form-outline mb-4">
                            <div className="form-floating mb-3">
                              <input
                                type="text"
                                className="form-control"
                                id="floatingInput1"
                                name="firstName"
                                onChange={(e) => setFirstName(e.target.value)}
                              />
                              <label htmlFor="floatingInput1">First Name</label>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div className="form-outline mb-4">
                            <div className="form-floating mb-3">
                              <input
                                type="text"
                                className="form-control"
                                id="floatingInput2"
                                name="lastName"
                                onChange={(e) => setLastName(e.target.value)}
                              />
                              <label htmlFor="floatingInput2">Last Name</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-outline mb-4">
                        <div className="form-floating mb-3">
                          <input
                            type="email"
                            className="form-control"
                            id="floatingInput3"
                            name="email"
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          <label htmlFor="floatingInput3">Email address</label>
                        </div>
                      </div>

                      <div className="form-outline mb-4">
                        <div className="form-floating mb-3">
                          <input
                            type="password"
                            className="form-control"
                            id="floatingInput4"
                            name="password"
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          <label htmlFor="floatingInput4">Password</label>
                        </div>
                      </div>
                      <div className="pt-1 mb-4">
                        <input
                          type="submit"
                          value="Register"
                          name="register"
                          className="btn btn-dark btn-lg btn-block"
                        />
                      </div>
                      <Link to={"/login"}>I have an account</Link>
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

export default Register;
