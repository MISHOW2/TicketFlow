import { useState } from "react";
import "./LoginPage.css";
import { signup, login } from "../api/authServices";

export default function LoginPage() {
  const [mode, setMode] = useState("signin"); // "signin" | "register"
  const isSignIn = mode === "signin";

  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    department: "",
    password: "",
    rePassword: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (isSignIn) {
      try {
        setLoading(true);
        const { user, token } = await login(form.email, form.password);
        localStorage.setItem("token", token);
        // TODO: redirect to dashboard, e.g. navigate("/dashboard")
        console.log("Logged in:", user);
      } catch (err) {
        setError(err.response?.data?.message || "Invalid email or password.");
      } finally {
        setLoading(false);
      }
      return;
    }

    if (form.password !== form.rePassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);
      await signup(
        form.name,
        form.email,
        form.department,
        form.password,
        form.rePassword
      );
      // TODO: redirect or switch to signin on success
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="tf-page">
      <div className="tf-wrapper">
        {/* Logo / Header */}
        <div className="tf-header">
          <div className="tf-logo">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
              <path d="M13 5v2M13 17v2M13 11v2" />
            </svg>
          </div>
          <h1 className="tf-title">TicketFlow</h1>
          <p className="tf-subtitle">Ticket management system</p>
        </div>

        {/* Card */}
        <div className="tf-card">
          {/* Tabs */}
          <div className="tf-tabs">
            <button
              type="button"
              onClick={() => setMode("signin")}
              className={`tf-tab ${isSignIn ? "tf-tab-active" : ""}`}
            >
              Sign in
            </button>
            <button
              type="button"
              onClick={() => setMode("register")}
              className={`tf-tab ${!isSignIn ? "tf-tab-active" : ""}`}
            >
              Register
            </button>
          </div>

          {/* Heading */}
          <h2 className="tf-heading">
            {isSignIn ? "Welcome back" : "Create your account"}
          </h2>
          <p className="tf-description">
            {isSignIn
              ? "Sign in to access your tickets and dashboard."
              : "Register to start tracking tickets."}
          </p>

          {error && <p className="tf-error">{error}</p>}

          {/* Form */}
          <form className="tf-form" onSubmit={handleSubmit}>
            {!isSignIn && (
              <div className="tf-field">
                <label htmlFor="name" className="tf-label">
                  Full name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Jane Doe"
                  value={form.name}
                  onChange={handleChange("name")}
                  className="tf-input"
                />
              </div>
            )}

            <div className="tf-field">
              <label htmlFor="email" className="tf-label">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@company.com"
                value={form.email}
                onChange={handleChange("email")}
                className="tf-input"
              />
            </div>

            {!isSignIn && (
              <div className="tf-field">
                <label htmlFor="department" className="tf-label">
                  Department
                </label>
                <select
                  id="department"
                  className="tf-input"
                  value={form.department}
                  onChange={handleChange("department")}
                >
                  <option value="">Select a department</option>
                  <option value="safety">Safety</option>
                  <option value="it">IT</option>
                  <option value="finance">Finance</option>
                  <option value="hr">HR</option>
                </select>
              </div>
            )}

            <div className="tf-field">
              <label htmlFor="password" className="tf-label">
                Password
              </label>
              <div className="tf-password-wrap">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={form.password}
                  onChange={handleChange("password")}
                  className="tf-input tf-input-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="tf-eye-btn"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
                      <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
                      <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
                      <line x1="2" y1="2" x2="22" y2="22" />
                    </svg>
                  ) : (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7Z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {!isSignIn && (
              <div className="tf-field">
                <label htmlFor="rePassword" className="tf-label">
                  Confirm password
                </label>
                <input
                  id="rePassword"
                  type={showPassword ? "text" : "password"}
                  placeholder="Re-enter your password"
                  value={form.rePassword}
                  onChange={handleChange("rePassword")}
                  className="tf-input"
                />
              </div>
            )}

            <button type="submit" className="tf-submit" disabled={loading}>
              {loading ? "Please wait..." : isSignIn ? "Sign in" : "Create account"}
            </button>
          </form>

          {/* Footer link */}
          <p className="tf-switch">
            {isSignIn ? (
              <>
                Don&apos;t have an account?{" "}
                <button
                  type="button"
                  onClick={() => setMode("register")}
                  className="tf-switch-link"
                >
                  Register
                </button>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={() => setMode("signin")}
                  className="tf-switch-link"
                >
                  Sign in
                </button>
              </>
            )}
          </p>
        </div>

        {/* Copyright */}
        <p className="tf-copyright">© 2026 TicketFlow. All rights reserved.</p>
      </div>
    </div>
  );
}