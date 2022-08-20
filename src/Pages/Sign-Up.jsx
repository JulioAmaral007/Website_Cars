import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import Input from "../Components/Input";
import Button from "../Components/Button";

import { FaGithub, FaGoogle, FaFacebook } from "react-icons/fa";

import background from "../Images/offer.png";
import "../CSS/Sign-Up.css";

export default function SignUp() {
  const { signup } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleSignup = () => {
    if (!email | !name | !senha) {
      setError("Preencha todos os campos");
      return;
    }

    const res = signup(email, senha);

    if (res) {
      setError(res);
      return;
    }

    navigate("/");
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
          <label for="name">
            <span>Name</span>
            <Input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => [setName(e.target.value), setError("")]}
            />
          </label>

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

          <Button Text="Sign-Up" onClick={handleSignup} />

          <p>
            Already have an account: <Link to="/">Log-In</Link>
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
