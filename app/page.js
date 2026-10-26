
"use client";

import "./globals.css";

export default function Home() {
  return (
    <main>

      {/* =========================
          NAVBAR
      ========================= */}

      <nav className="navbar">

        <div className="logo">
          MARANUM FALLS
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#attractions">Experience</a>
          <a href="#gallery">Gallery</a>
          <a href="#location">Location</a>
        </div>

      </nav>


      {/* =========================
          HERO
      ========================= */}

      <section id="home" className="hero">

        <div className="hero-content">

          <p className="welcome">
            DISCOVER NATURE
          </p>

          <h1>
            MARANUM
            <br />
            FALLS
          </h1>

          <p className="hero-text">
            Discover a peaceful escape surrounded by refreshing
            waterfalls, lush landscapes, and the natural beauty
            of Pangasinan.
          </p>

          <a href="#about" className="hero-button">
            EXPLORE MARANUM
            <span>→</span>
          </a>

        </div>

      </section>


      {/* =========================
          ABOUT
      ========================= */}

      <section id="about" className="about section">

        <div className="about-image">

          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbkmGR1Ij0n_zEAXHMfKn4-xg5_zZ6EUp72acd1PJiMQ&s=10"
            alt="Waterfall surrounded by nature"
          />

        </div>


        <div className="about-content">

          <p className="small-title">
            ABOUT THE DESTINATION
          </p>

          <h2>
            A Quiet Escape Into Nature
          </h2>

          <p>
            Maranum Falls is a refreshing natural destination
            surrounded by lush greenery and peaceful landscapes.
            Its beautiful surroundings provide an opportunity
            to slow down and reconnect with nature.
          </p>

          <p>
            Whether you are searching for adventure, relaxation,
            photography, or quality time with family and friends,
            Maranum Falls offers a memorable outdoor experience.
          </p>

          <a
            href="#attractions"
            className="dark-button"
          >
            DISCOVER MORE →
          </a>

        </div>

      </section>


      {/* =========================
          EXPERIENCE
      ========================= */}

      <section
        id="attractions"
        className="attractions section"
      >

        <div className="heading">

          <p className="small-title">
            EXPERIENCE
          </p>

          <h2>
            Make Your Visit Memorable
          </h2>

          <p>
            From refreshing waterfalls to peaceful landscapes,
            discover the simple experiences that make Maranum
            Falls worth exploring.
          </p>

        </div>


        <div className="cards">


          {/* CARD 1 */}

          <div className="card">

            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSglphCkQEhTjGjtX1lJ9VN7J9kbWxrQhHEYkSq8FCLew&s=10"
              alt="Waterfall"
            />

            <div className="card-content">

              <h3>
                Waterfall Adventure
              </h3>

              <p>
                Enjoy the refreshing atmosphere of cascading
                water while surrounded by beautiful natural scenery.
              </p>

              <a href="#gallery">
                EXPLORE →
              </a>

            </div>

          </div>


          {/* CARD 2 */}

          <div className="card">

            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiHr2cclkZFKIzMcy76guVmLxpdn8kRCcby1YjdXve3w&s=10"
              alt="Forest"
            />

            <div className="card-content">

              <h3>
                Nature Escape
              </h3>

              <p>
                Take a break from busy surroundings and enjoy
                the peaceful atmosphere of the natural landscape.
              </p>

              <a href="#gallery">
                DISCOVER →
              </a>

            </div>

          </div>


          {/* CARD 3 */}

          <div className="card">

            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFlOrHFRvUTai7RcpFHtoDN-fjsIAhEBrNPIZIJ3XDXg&s=10"
              alt="Mountain landscape"
            />

            <div className="card-content">

              <h3>
                Scenic Views
              </h3>

              <p>
                Capture memorable moments while enjoying
                beautiful views and fresh outdoor surroundings.
              </p>

              <a href="#location">
                PLAN YOUR VISIT →
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          GALLERY
      ========================= */}

      <section
        id="gallery"
        className="gallery section"
      >

        <div className="heading">

          <p className="small-title">
            EXPLORE
          </p>

          <h2>
            Moments in Nature
          </h2>

          <p>
            Take a glimpse at the landscapes and natural
            beauty waiting to be explored.
          </p>

        </div>


        <div className="gallery-grid">

          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKWEnFHZV35Idkv2S463_c_Dvurynpq0-cfsPu_XN1Pw&s=10"
            alt="Waterfall landscape"
          />

          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBWIjlWkVFBlMDCaX38ZP5AG9tDySbOgxFEW8gVZn5aQ&s=10"
            alt="Forest landscape"
          />

          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7lrj-SXG0NdxBwW0atqwKnHhjaG2HsDfWBMqnwyAnbw&s=10"
            alt="Mountain landscape"
          />

          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1EGPRlqsWn9nbTbNn0lmY8ZjnTyeKIVRDblczLC0hsg&s=10"
            alt="Nature landscape"
          />

        </div>

      </section>


      {/* =========================
          LOCATION
      ========================= */}

      <section
        id="location"
        className="location section"
      >

        <div className="location-content">

          <p className="small-title">
            PLAN YOUR TRIP
          </p>

          <h2>
            Ready to Explore?
          </h2>

          <p>
            Prepare for an unforgettable nature experience
            at Maranum Falls. Enjoy the scenery, fresh air,
            and peaceful surroundings with the people you love.
          </p>


          <div className="location-box">

            <h3>
              📍 Maranum Falls
            </h3>

            <p>
              Pangasinan, Philippines
            </p>

          </div>


          <a
            href="https://www.google.com/maps/search/Maranum+Falls+Pangasinan"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-button"
          >
            OPEN GOOGLE MAPS →
          </a>

        </div>

      </section>


      {/* =========================
          FOOTER
      ========================= */}

      <footer>

        <h2>
          MARANUM FALLS
        </h2>

        <p>
          Discover. Explore. Experience.
        </p>

        <p>
          © 2026 Maranum Falls Tourism
        </p>

      </footer>

    </main>
  );
}

