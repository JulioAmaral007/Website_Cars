import React, { useContext } from 'react'
import { AuthGoogleContext } from '../Contexts/authGoogle'
import { Navigate } from 'react-router'

import { FaGithub, FaGoogle, FaFacebook } from "react-icons/fa"

import background from '../Images/offer.png'
import '../Styles/Sign-Up.css'

function SignUp(){

/**
 * If the user is not signed in, then the user will be presented with a form to sign up. If the user is
 * signed in, then the user will be redirected to the home page.
 */
    const { signInGoogle, signed } = useContext(AuthGoogleContext)

    async function loginGoogle(){
        await signInGoogle()
    }

    if(!signed){
        return(
        
            <div className='container'>
                <main>
                    <h1>Create Account</h1>
                    <div className="social-media">
        
                        <button onClick={() => signInGoogle()} className='google' id="google">
                            < FaGoogle />
                        </button>
        
                        <button id="facebook">
                            < FaFacebook />
                        </button>
        
                        <button id="github">
                            < FaGithub />
                        </button>
                        
                    </div>
        
                    <div className="alternative">
                        <span>OR</span>
                    </div>
        
                    <form action="">
                        <label for="name">
                            <span>Name</span>
                            <input type="text" id="name" name="name" />
                        </label>
        
                        <label for="email">
                            <span>E-mail</span>
                            <input type="email" id="email" name="email" />
                        </label>
        
                        <label for="password">
                            <span>Password</span>
                            <input type="password" id="password" name="password" />
                        </label>
        
                        <button>Sign Up</button>
                    </form>
                </main>
        
                <section className="images">
                    <img src={background} alt="Mobile" />
                    <div class="circle"></div>
                </section>
            </div>
            )
    } else {
        return <Navigate to="/home" />
    }

}

export default SignUp