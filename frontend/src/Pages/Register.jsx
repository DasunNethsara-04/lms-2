import { Link } from "react-router-dom";
import RegisterPanelImage from "../assets/img2.webp";
import '../assets/css/styles.css'

function Register() {
    return (
        <div>
            <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col col-xl-10">
                    <div className="card" style={{borderRadius: "1rem"}}>
                        <div className="row g-0">
                            <div className="col-md-6 col-lg-5 d-none d-md-block">
                                <img src={RegisterPanelImage} alt="login form" className="img-fluid"
                                    style={{borderRadius: "1rem 0 0 1rem"}} />
                            </div>
                            <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                <div className="card-body p-4 p-lg-5 text-black">
                                    <form action="./data/register-data.php" method="post">

                                        <div className="d-flex align-items-center mb-3 pb-1">
                                        </div>

                                        <h4 className="fw-normal mb-3 pb-3" style={{letterSpacing: "1px"}}>Register Now...
                                        </h4>

                                        <div className="row mb-4">
                                            <div className="col">
                                                <div data-mdb-input-init className="form-outline">
                                                    <label className="form-label" for="form3Example1">First name</label>
                                                    <input type="text" id="form3Example1" className="form-control"
                                                        name="fname" required />
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div data-mdb-input-init className="form-outline">
                                                    <label className="form-label" for="form3Example2">Last name</label>
                                                    <input type="text" id="form3Example2" className="form-control"
                                                        name="lname" required />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-outline mb-4">
                                            <label className="form-label" for="form2Example17">Email address</label>
                                            <input type="email" id="form2Example17" className="form-control" name="email"
                                                required />
                                        </div>

                                        <div className="form-outline mb-4">
                                            <label className="form-label" for="form2Example27">Password</label>
                                            <input type="password" id="form2Example27" className="form-control"
                                                name="password" required />
                                        </div>
                                        <div className="pt-1 mb-4">
                                            <input type="submit" value="Register" name="register"
                                                className="btn btn-dark btn-lg btn-block" />
                                        </div>
                                        <Link to={"/login"} >I have an account</Link>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Register