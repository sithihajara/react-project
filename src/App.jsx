import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <div className="container">
            <div className="logo">
                <h1>Dribbble</h1>
            </div>
            <nav>
                <ul>
                    <li><a href="#">Find designers▼</a>
                        <ul className="dropdown">
                            <li><a href="#">By Skill</a></li>
                            <li><a href="#">By Location</a></li>
                            <li><a href="#">By Agency</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Inspiration </a></li>
                    <li><a href="#">Courses</a></li>
                    <li><a href="#">Jobs</a></li>
                    <li><a href="#">Go Pro</a></li>
                </ul>
            </nav>
            <div className="auth-buttons">
                <input type="text" placeholder="Search..." />
                <button>Log in</button>
                <button>Sign up</button>
            </div>
        </div>
    </header>
    <main>
        <section className="hero">
            <div className="container">
                <div className="hero-text">
                    <h2>The world’s destination for design</h2>
                    <p>Get inspired by the work of millions of top-rated designers & agencies around the world.</p>
                    <button>Get started</button>
                </div>
            </div>
        </section>
        <section className="creatives">
            <div className="container">
                <h3>Explore inspiring designers</h3>
                <div className="shots">
                   
                    <div className="shot"><img src="im1.webp" alt="Shot 1"/><p>Gilles Warmoes</p></div>
                    <div className="shot"><img src="im2.jpg" alt="Shot 2"/><p>Deividas Bielskis</p></div>
                    <div className="shot"><img src="im3.jpg" alt="Shot 3"/><p>Alfrey Davilla</p></div>
                    <div className="shot"><img src="im4.jpg" alt="Shot 4"/><p>Afterglow</p></div>
                    <div className="shot"><img src="im12.jpg" alt="Shot 5"/><p>Placeholder 5</p></div>
                    <div className="shot"><img src="im7.jpg" alt="Shot 6"/><p>El Nariz</p></div>
                    <div className="shot"><img src="im11.jpg" alt="Shot 6"/><p>El Nariz</p></div>
                    <div className="shot"><img src="im9.avif" alt="Shot 6"/><p>El Nariz</p></div>
                    <div className="shot"><img src="im10.jpg" alt="Shot 6"/><p>El Nariz</p></div>
                    <div className="shot"><img src="im20.webp" alt="Shot 6"/><p>El Nariz</p></div>
                </div>
            </div>
            
             
        </section>
        <div className="container4">
            <h1 className="titlee">Explore Inspiring Designs</h1>
            <div className="grid2">
                <div className="card2">
                    <img src="c1.jpg" alt="Design 1"/>
                    <div className="info">
                        <h3>Gilles Warmoes</h3>
                        <p>42 likes • 5.2k views</p>
                    </div>
                </div>
                <div className="card2">
                    <img src="c2.jpg" alt="Design 2"/>
                    <div className="info">
                        <h3>Deividas Bielskis</h3>
                        <p>78 likes • 15.4k views</p>
                    </div>
                </div>
                <div className="card2">
                    <img src="c3.jpg" alt="Design 3"/>
                    <div className="info">
                        <h3>Alfrey Davilla</h3>
                        <p>35 likes • 4.5k views</p>
                    </div>
                </div>
                <div className="card2">
                    <img src="c4.jpg" alt="Design 4"/>
                    <div className="info">
                        <h3>Afterglow Team</h3>
                        <p>133 likes • 18.4k views</p>
                    </div>
                </div>
                <div className="card2">
                    <img src="c5.jpg" alt="Design 4"/>
                    <div className="info">
                        <h3>Afterglow Team</h3>
                        <p>133 likes • 18.4k views</p>
                    </div>
                </div>
                
            </div>
        </div>
    </main>
    <footer>
        <div className="container">
            <p>&copy; 2024 Dribbble Clone. All rights reserved.</p>
        </div>
    </footer>
    </>
  )
}

export default App
