import React, { useState } from "react";
import "../styles/ChangePassword.css";
interface ResetPasswordFormProps {
  onSubmit: (email: string, oldPassword: string, newPassword: string) => void;
}

const ResetPasswordForm: React.FC<ResetPasswordFormProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Perform any validation checks here
    onSubmit(email, oldPassword, newPassword);
    // Reset form after submission
    setEmail("");
    setOldPassword("");
    setNewPassword("");
  };

  return (
    <div className="mainsec">
      <div className="maindiv">
        <form onSubmit={handleSubmit}>
          <h2 className="maintext">Reset Password</h2>
          <div className="field">
            <label htmlFor="email">Email :-</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="field">
            <label htmlFor="oldPassword">Old Password :- </label>
            <input
              type="password"
              id="oldPassword"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
          </div>
          <div className="field">
            <label htmlFor="newPassword">New Password :-</label>
            <input
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <button className="resetbutton" type="submit">
            Reset
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordForm;
