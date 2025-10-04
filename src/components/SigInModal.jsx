import React, { useState } from "react";

const SignInModal = ({ visible, onClose }) => {
  const [activeTab, setActiveTab] = useState("social"); // "social" | "login" | "register"

  if (!visible) return null;

  return (
    <div
      id="modal"
      className="popupContainer"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: 9999,
      }}
    >
      <div
        className="popupContent"
        style={{
          background: "#fff",
          borderRadius: "8px",
          width: "400px",
          maxWidth: "90%",
          overflow: "hidden",
          boxShadow: "0 5px 25px rgba(0,0,0,0.3)",
        }}
      >
        {/* Header */}
        <div
          className="popupHeader"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "1rem",
            borderBottom: "1px solid #ddd",
          }}
        >
          <span className="header_title" style={{ fontWeight: "bold" }}>
            {activeTab === "register"
              ? "Register"
              : activeTab === "login"
              ? "Login"
              : "Sign In"}
          </span>
          <span
            className="modal_close"
            style={{ cursor: "pointer", fontSize: "1.2rem" }}
            onClick={onClose}
          >
            <i className="fa fa-times" />
          </span>
        </div>

        {/* Body */}
        <section className="popupBody" style={{ padding: "1rem" }}>
          {/* --- Social Login --- */}
          {activeTab === "social" && (
            <div className="social_login">
              <div>
                <a href="#" className="social_box fb">
                  <span className="icon">
                    <i className="fab fa-facebook" />
                  </span>
                  <span className="icon_title">Connect with Facebook</span>
                </a>
                <a href="#" className="social_box google">
                  <span className="icon">
                    <i className="fab fa-google-plus" />
                  </span>
                  <span className="icon_title">Connect with Google</span>
                </a>
              </div>

              <div className="centeredText" style={{ margin: "1rem 0" }}>
                <span>Or use your Email address</span>
              </div>

              <div className="action_btns" style={{ display: "flex", gap: "1rem" }}>
                <button
                  className="btn"
                  onClick={() => setActiveTab("login")}
                  style={{ flex: 1 }}
                >
                  Login
                </button>
                <button
                  className="btn"
                  onClick={() => setActiveTab("register")}
                  style={{ flex: 1 }}
                >
                  Sign up
                </button>
              </div>
            </div>
          )}

          {/* --- Login Form --- */}
          {activeTab === "login" && (
            <div className="user_login">
              <form>
                <label>Email / Username</label>
                <input type="text" className="form-control" />
                <br />
                <label>Password</label>
                <input type="password" className="form-control" />
                <br />
                <div className="checkbox">
                  <input id="remember" type="checkbox" />
                  <label htmlFor="remember">Remember me</label>
                </div>
                <div className="action_btns" style={{ display: "flex", gap: "1rem" }}>
                  <button
                    type="button"
                    className="btn back_btn"
                    onClick={() => setActiveTab("social")}
                    style={{ flex: 1 }}
                  >
                    <i className="fa fa-angle-double-left" /> Back
                  </button>
                  <button type="submit" className="btn btn_red" style={{ flex: 1 }}>
                    Login
                  </button>
                </div>
              </form>
              <a href="#" className="forgot_password">
                Forgot password?
              </a>
            </div>
          )}

          {/* --- Register Form --- */}
          {activeTab === "register" && (
            <div className="user_register">
              <form>
                <label>Full Name</label>
                <input type="text" className="form-control" />
                <br />
                <label>Email Address</label>
                <input type="email" className="form-control" />
                <br />
                <label>Password</label>
                <input type="password" className="form-control" />
                <br />
                <div className="checkbox">
                  <input id="send_updates" type="checkbox" />
                  <label htmlFor="send_updates">
                    Send me occasional email updates
                  </label>
                </div>
                <div className="action_btns" style={{ display: "flex", gap: "1rem" }}>
                  <button
                    type="button"
                    className="btn back_btn"
                    onClick={() => setActiveTab("social")}
                    style={{ flex: 1 }}
                  >
                    <i className="fa fa-angle-double-left" /> Back
                  </button>
                  <button type="submit" className="btn btn_red" style={{ flex: 1 }}>
                    Register
                  </button>
                </div>
              </form>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default SignInModal;
