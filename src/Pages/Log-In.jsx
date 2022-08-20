import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import Button from "../Components/Button";
import Input from "../Components/Input";

import { FaGithub, FaGoogle, FaFacebook } from "react-icons/fa";

import background from "../Images/offer.png";

import "../CSS/Sign-Up.css";

export default function LogIn() {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email | !senha) {
      setError("Preencha todos os campos");
      return;
    }

    const res = signin(email, senha);

    if (res) {
      setError(res);
      return;
    }

    navigate("/home");
  };

  return (
    <div className="container">
      <main>
        <h1>Create Account</h1>
        <div className="social-media">
          <button id="google">
            <FaGoogle />
          </button>

          <button id="facebook">
            <FaFacebook />
          </button>

          <button id="github">
            <FaGithub />
          </button>
        </div>

        <div className="alternative">
          <span>OR</span>
        </div>

        <form action="">
          <label for="email">
            <span>E-mail</span>
            <Input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => [setEmail(e.target.value), setError("")]}
            />
          </label>

          <label for="password">
            <span>Password</span>
            <Input
              type="password"
              id="password"
              name="password"
              value={senha}
              onChange={(e) => [setSenha(e.target.value), setError("")]}
            />
          </label>

          <Button Text="Log-In" onClick={handleLogin} />

          <p>
            Don't have an account: <Link to="/signup">Register</Link>
          </p>
        </form>
      </main>

      <section className="images">
        <img src={background} alt="Mobile" />
        <div class="circle"></div>
      </section>
    </div>
  );
}
