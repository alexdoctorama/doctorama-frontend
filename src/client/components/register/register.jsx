import React, {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";
// import loginBanner from "../../assets/images/login-banner.png";
import loginBanner from "../../assets/images/login-banner.png";
import Header from "../header";
import Footer from "../footer";

const Register = (props) => {
  const location = useLocation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [notification, setNotification] = useState("");
  const [alert, setAlert] = useState("");
  // const history = useHistory();



  useEffect(() => {
    document.body.classList.add("account-page");

    return () => document.body.classList.remove("account-page");
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Extract form data
    const formData = {
      username,
      password,
      name,
      surname,
      email,
      dateOfBirth: null, // You can set this to null for now
      basicRole: "patient",
    };

    // Make an HTTP POST request to localhost:8080/users with form data
    fetch("http://localhost:8080/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
        .then((response) => {
          if (response.ok) {
            setNotification("User was created successfully.");
          } else {
            setAlert("User already exists.");
          }
          // Clear notifications after 5 seconds
          setTimeout(() => {
            setNotification("");
            setAlert("");
          }, 3000);
          response.json().then((data) => {
            localStorage.setItem("token", data["token"]);
            //Redirect to patient/dashboard

            if(location.state === undefined){
              //Redirect to patient/dashboard
              props.history.push("/patient/dashboard");
            }
            else{
              //console.log("maksmdlamsdlasmdamlsdmals");
              //Redirect to the previous URL
              console.log("klmsdlamlksamkldmasd");
              props.history.push(location.state.previous_url);
            }

            //props.history.push("/patient/dashboard");
              }
          );
        })
        .catch((error) => {
          console.error("Error:", error);
          setNotification("An error occurred. Please try again later.");
          setTimeout(() => {
            setNotification("");
          }, 3000);
        });
  };


  return (
      <>
        <Header {...props} />
        <div className="content top-space">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                <div className="account-content">
                  <div className="row align-items-center justify-content-center">
                    <div className="col-md-12 col-lg-6 login-right">
                      {/* Notification */}
                      {notification && (
                          <div className="alert alert-dismissible alert-success">
                            <button
                                type="button"
                                className="btn-close"
                            ></button>
                            {notification}
                          </div>
                      )}
                      {alert && (
                          <div className="alert alert-dismissible alert-danger">
                            <button
                                type="button"
                                className="btn-close"
                            ></button>
                            {alert}
                          </div>
                      )}
                      <form onSubmit={handleSubmit}>
                        <div className="form-group form-focus">
                          <input
                              type="text"
                              className="form-control floating"
                              value={username}
                              onChange={(e) => setUsername(e.target.value)}
                              placeholder="Username"
                              required
                          />
                          <label className="focus-label">Username</label>
                        </div>
                        <div className="form-group form-focus">
                          <input
                              type="password"
                              className="form-control floating"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              placeholder="Password"
                              required
                          />
                          <label className="focus-label">Password</label>
                        </div>
                        <div className="form-group form-focus">
                          <input
                              type="text"
                              className="form-control floating"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              placeholder="Name"
                              required
                          />
                          <label className="focus-label">Name</label>
                        </div>
                        <div className="form-group form-focus">
                          <input
                              type="text"
                              className="form-control floating"
                              value={surname}
                              onChange={(e) => setSurname(e.target.value)}
                              placeholder="Surname"
                              required
                          />
                          <label className="focus-label">Surname</label>
                        </div>
                        <div className="form-group form-focus">
                          <input
                              type="email"
                              className="form-control floating"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder="Email"
                              required
                          />
                          <label className="focus-label">Email</label>
                        </div>
                        <div className="text-end">
                          <Link className="forgot-link" to="/login">
                            Already have an account?
                          </Link>
                        </div>
                        <button
                            className="btn btn-primary w-100 btn-lg login-btn"
                            type="submit"
                        >
                          Signup
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer {...props} />
      </>
  );
};

export default Register;
