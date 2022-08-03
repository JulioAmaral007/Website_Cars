import React, { useContext } from 'react'
import { AuthGoogleContext } from '../Contexts/authGoogle'

import { FaBolt, FaTemperatureLow, FaCloudscale, FaTachometerAlt, FaFacebook, FaTwitter, FaInstagram, FaExternalLinkAlt } from "react-icons/fa"

import favicon from '../Images/favicon.png'
import about from '../Images/about.png'
import featured1 from '../Images/featured1.png'
import featured2 from '../Images/featured2.png'
import featured3 from '../Images/featured3.png'
import featured4 from '../Images/featured4.png'
import featured5 from '../Images/featured5.png'
import features from '../Images/features.png'
import home from '../Images/home.png'
import logo1 from '../Images/logo1.png'
import logo2 from '../Images/logo2.png'
import logo3 from '../Images/logo3.png'
import logo4 from '../Images/logo4.png'
import logo5 from '../Images/logo5.png'
import logo6 from '../Images/logo6.png'
import map from '../Images/map.svg'
import offerbg from '../Images/offer-bg.png'
import offer from '../Images/offer.png'
import popular1 from '../Images/popular1.png'
import popular2 from '../Images/popular2.png'
import popular3 from '../Images/popular3.png'
import popular4 from '../Images/popular4.png'
import popular5 from '../Images/popular5.png'

import '../Styles/Home.css'

function Home(){

    const { signOut } = useContext(AuthGoogleContext)

    return(
        <div className='Home'>
            <header>
                <div class="logo">
                <a href="#home"><img src={favicon} /></a>
                <a href="#home" class="marca">Kira Cars</a>
                </div>
                <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#popular">Popular</a></li>
                    <li><a href="#featured">Featured</a></li>
                </ul>
                </nav>
                <button onClick={() => signOut()} className="sair"  >
                    < FaExternalLinkAlt />
                    Sair
                </button>
            </header>

            <section class="home" id="home">
                <h2>Choose The Best Car</h2>
                <div class="Porsche">
                <h3>Porsche Mission E</h3>
                <p>< FaBolt color="hsl(219, 69%, 56%)" margin= ".2rem" /> Eletric Car</p>
                <img src={home} /> 
                <div class="dados">
                    <div class="temperature">
                    < FaTemperatureLow padding='1rem' />
                    <p>24°</p>
                    <p>Temperature</p>
                    </div>
                    <div class="mileage">
                    < FaCloudscale padding='1rem' />
                    <p>873</p>
                    <p>Mileage</p>
                    </div>
                    <div class="battery">
                    < FaBolt padding='1rem' />
                    <p>94%</p>
                    <p>Battery</p>
                    </div>
                </div>
                <div class="start0">
                    <div class="start">
                    <span>Start</span>
                    </div>
                </div>
                </div>
            </section>

            <section class="about" id="about">
                <img src={about} />
                <div class="about-car">
                <h2>Machines With Future Technology</h2>
                <p>See the future with high-performance eletric cars produced by 
                    renowned brands. They feature futuristic builds and designs with new 
                    and innovative platforms that last a long time.
                </p>
                <button>Know More</button>
                </div>
            </section>

            <section class="popular" id="popular">
                <h2>Choose Your Eletric Car<br/>Of The Porsche Brand</h2>
                <div class="amostras">
                <div class="card">
                    <div class="card-img-wrapper">
                    <img src={popular1} />
                    </div>
                    <div class="card-info">
                    <h2>Porsche Turbo S</h2>
                    <p><FaCloudscale margin='1rem' /> 2.7 s  
                        < FaTachometerAlt margin='2rem' />  330 km/h <br/>
                        < FaBolt margin='1rem' /> Eletric</p>
                    </div>
                </div>

                <div class="card">
                    <div class="card-img-wrapper">
                    <img src={popular2} />
                    </div>
                    <div class="card-info">
                    <h2>Porsche Taycan</h2>
                    <p><FaCloudscale /> 2.8 s
                        < FaTachometerAlt /> 260 km/h <br/>
                        < FaBolt /> Eletric</p>
                    </div>
                </div>

                <div class="card">
                    <div class="card-img-wrapper">
                    <img src={popular3} />
                    </div>
                    <div class="card-info">
                    <h2>Porsche Turbo S Cross</h2>
                    <p><FaCloudscale /> 5.1 s
                        < FaTachometerAlt /> 220 km/h <br/>
                        < FaBolt /> Eletric</p>
                    </div>
                </div>

                <div class="card">
                    <div class="card-img-wrapper">
                    <img src={popular4} />
                    </div>
                    <div class="card-info">
                    <h2>Porsche Boxster 718</h2>
                    <p><FaCloudscale /> 4.9 s
                        < FaTachometerAlt /> 275 Km/h <br/>
                        < FaBolt /> Eletric</p>
                    </div>
                </div>

                <div class="card">
                    <div class="card-img-wrapper">
                    <img src={popular5} />
                    </div>
                    <div class="card-info">
                    <h2>Porsche Cayman</h2>
                    <p><FaCloudscale /> 4.0 s
                        < FaTachometerAlt /> 288 Km/h <br/>
                        < FaBolt /> Eletric</p>
                    </div>
                </div>
                </div>

                <div class="more-features">
                <h2>More Features</h2>
                <img class="mapa" src={map} />
                <img class="carro" src={features} />
                </div>
            </section>

            <section class="featured" id="featured">
                <h2>Featured Luxury Cars</h2>
                <div class="amostras">
                <div class="card">
                    <div class="card-img-wrapper">
                    <img src={featured1} />
                    </div>
                    <div class="card-info">
                    <h2>Tesla Model X</h2>
                    <p><FaCloudscale margin='2rem'/> 2.5 s
                        < FaTachometerAlt /> 250 Km/h <br/>
                        < FaBolt /> Eletric</p>
                    </div>
                </div>

                <div class="card">
                    <div class="card-img-wrapper">
                    <img src={featured2} />
                    </div>
                    <div class="card-info">
                    <h2>Tesla Model 3</h2>
                    <p><FaCloudscale /> 3.1 s
                        < FaTachometerAlt /> 230 Km/h <br/>
                        < FaBolt /> Eletric</p>
                    </div>
                </div>

                <div class="card">
                    <div class="card-img-wrapper">
                    <img src={featured3} />
                    </div>
                    <div class="card-info">
                    <h2>Audi E-Tron</h2>
                    <p><FaCloudscale /> 4.5 s
                        < FaTachometerAlt /> 210 Km/h <br/>
                        < FaBolt /> Eletric</p>
                    </div>
                </div>

                <div class="card">
                    <div class="card-img-wrapper">
                    <img src={featured4} />
                    </div>
                    <div class="card-info">
                    <h2>Porsche Boxster 987</h2>
                    <p><FaCloudscale /> 3.7 s
                        < FaTachometerAlt /> 302 Km/h <br/>
                        < FaBolt /> Eletric</p>
                    </div>
                </div>

                <div class="card">
                    <div class="card-img-wrapper">
                    <img src={featured5} />
                    </div>
                    <div class="card-info">
                    <h2>Porsche Panamera</h2>
                    <p><FaCloudscale /> 3.2 s
                        < FaTachometerAlt /> 315 Km/h <br/>
                        < FaBolt /> Eletric</p>
                    </div>
                </div>
                </div>

                <div class="sub-footer">
                <div class="offer">
                    <h2>Do You Want To Receive <br/> Special Offers?</h2>
                    <p>Be the first to receive all the information about our <br/>
                    products and new cars by email by subscribing to <br/>
                    our mailing list.
                    </p>
                    <button>Subscribe Now</button>
                </div>
                <img src={offer} />
                </div>

                <div class="marcas">
                <ul>
                    <li><a href="#"><img src={logo1} /></a></li>
                    <li><a href="#"><img src={logo2} /></a></li>
                    <li><a href="#"><img src={logo3} /></a></li>
                    <li><a href="#"><img src={logo4} /></a></li>
                    <li><a href="#"><img src={logo5} /></a></li>
                    <li><a href="#"><img src={logo6} /></a></li>
                </ul>
                </div>
            </section>

            <footer>
                <div class="Kira">
                <img src={favicon} />
                <h2>Kira Cars</h2>
                </div>

                <div class="company">
                <h2>Company</h2>
                <ul>
                    <li><a href="#">Company</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Cars</a></li>
                    <li><a href="#">History</a></li>
                    <li><a href="#">Shop</a></li>
                </ul>
                </div>

                <div class="information">
                <h2>Information</h2>
                <ul>
                    <li><a href="#">Request</a></li>
                    <li><a href="#">Find a dealer</a></li>
                    <li><a href="#">Contact us</a></li>
                    <li><a href="#">Services</a></li>
                </ul>
                </div>

                <div class="follow-us">
                    <h2>Follow Us</h2>
                    <li><a href="#"><FaFacebook fontSize="25px" /></a></li>
                    <li><a href="#"><FaTwitter fontSize="25px" /></a></li>
                    <li><a href="#"><FaInstagram fontSize="25px" padding="2rem" /></a></li> 
                </div>
            </footer>
        </div>
    )
}

export default Home