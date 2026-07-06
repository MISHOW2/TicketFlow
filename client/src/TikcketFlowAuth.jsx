import { useState } from "react";
import "./TicketFlowAuth.css";

export default function TicketFlowAuth() {
  const [mode, setMode] = useState("signin"); // "signin" | "register"
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const isSignIn = mode === "signin";

  const handleChange = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: connect to your backend auth endpoint
    // e.g. fetch('/api/auth/signin', { method: 'POST', body: JSON.stringify(form) })
    console.log(isSignIn ? "Signing in..." : "Registering...", form);
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

          {/* Form */}
          <form onSubmit={handleSubmit} className="tf-form">
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
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
                      <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
                      <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
                      <line x1="2" y1="2" x2="22" y2="22" />
                    </svg>
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7Z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {!isSignIn && (
              <div className="tf-field">
                <label htmlFor="confirmPassword" className="tf-label">
                  Confirm password
                </label>
                <input
                  id="confirmPassword"
                  type={showPassword ? "text" : "password"}
                  placeholder="Re-enter your password"
                  value={form.confirmPassword}
                  onChange={handleChange("confirmPassword")}
                  className="tf-input"
                />
              </div>
            )}

            <button type="submit" className="tf-submit">
              {isSignIn ? "Sign in" : "Create account"}
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