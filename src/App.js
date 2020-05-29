import React from "react";
import "./css/master.css";
import {
  Avatar,
  Articles,
  Doomont,
  Meray,
  Shike,
  Social,
} from "./img";

function App() {
  return (
    <div id="main">
      <button id="opn-btn" class="openbtn" onclick="openNav()">
        ☰ Menu
      </button>
      <div id="mySidebar" class="sidebar">
        <button class="closebtn" onclick="closeNav()">
          ×
        </button>
        <a class="nav-link" href="#Home">
          Home
        </a>
        <a href="#About">About</a>
      </div>

      <header id="Home" class="home-section col-lg-12">
        <div class="container h-100">
          <div class="row h-100 align-items-center">
            <div class="col-12 text-center">
              <img
                src={Avatar}
                class="rounded-circle avatar-img"
                alt="Profile"
              />
              <h1 class="name-header display-3">
                J. Pablo <span class="text-last-name">Gil</span>
              </h1>
              <h3 class="name-header">
                {" "}
                I'm a <span id="typed"></span>
              </h3>
              <div class="social">
                <a
                  class="twitter"
                  href="https://twitter.com/JuanPabloMG4"
                  target="_blank"
                  without
                  rel="noopener noreferrer"
                >
                  {" "}
                  <i class="fab fa-twitter fa-2x m-3 "> </i>
                </a>
                <a
                  class="github"
                  href="https://github.com/JuanPabloGil"
                  target="_blank"
                  without
                  rel="noopener noreferrer"
                >
                  <i class="fab fa-github fa-2x m-3"></i>
                </a>
                <a
                  class="linkedin"
                  href="https://www.linkedin.com/in/juan-pablo-gil-1321a515a/"
                  target="_blank"
                  without
                  rel="noopener noreferrer"
                >
                  {" "}
                  <i class="fab fa-linkedin-in fa-2x m-3 "></i>
                </a>
                <button class="link whatsapp">
                  {" "}
                  <i class="fab fa-whatsapp fa-2x m-3 whatsapp"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div id="About" class="container mt-5 mb-5 pb-5 pt-5 about-me">
        <div class="section-title mt-5 mb-5">
          <h1 class="display-4 pl-3">ABOUT ME</h1>
          <p class="pl-3">All information about</p>
        </div>

        <div class="row">
          <div class="col-lg-12 col-md-12">
            <h3>
              <strong>I'm J. Pablo Gil and FullStack Developer</strong>
            </h3>
            <p>
              Hello! My name is J. Pablo Gil. I am a Full stack Web Developer,
              and I'm very{" "}
              <strong class="poi"> passionate and dedicated </strong>to my work.
              With 3 years experience as a professional Web developer, I have
              acquired the skills and knowledge necessary to make your project a
              success. I{" "}
              <strong class="poi">enjoy every step of the design</strong>{" "}
              process, from{" "}
              <strong class="poi">discussion and collaboration</strong> to
              concept and execution, but I find the most satisfaction in seeing
              the finished product do everything for you that it was created to
              do.
            </p>
            <div class="row">
              <div class="col-sm-12 col-xl-6">
                <ul>
                  <li>
                    <span>
                      <label class="mr-1">
                        <strong>Birthday:</strong>
                      </label>
                      10.Feb.1997
                    </span>
                  </li>
                  <li>
                    <span>
                      <label class="mr-1">
                        <strong>City:</strong>
                      </label>
                      San Luis Potosi, Mexico
                    </span>
                  </li>
                  <li>
                    <span>
                      <label class="mr-1">
                        <strong>Web Site:</strong>
                      </label>
                      <a href="jpablogil.webcodelatino.com.mx">
                        jpablogil.webcodelatino.com.mx
                      </a>
                    </span>
                  </li>
                  <li>
                    <span>
                      <label class="mr-1">
                        <strong>Years of experience:</strong>
                      </label>
                      +3
                    </span>
                  </li>
                </ul>
              </div>

              <div class="col-sm-12 col-xl-6">
                <ul>
                  <li>
                    <span>
                      <label class="mr-1">
                        <strong>Age:</strong>
                      </label>
                      23
                    </span>
                  </li>
                  <li>
                    <span>
                      <label class="mr-1">
                        <strong>Interests:</strong>
                      </label>
                      Soccer
                    </span>
                  </li>
                  <li>
                    <span>
                      <label class="mr-1">
                        <strong>Mail:</strong>
                      </label>
                      <a href="mailto:jpablomgil@gmail.com">
                        jpablomgil@gmail.com
                      </a>
                    </span>
                  </li>

                  <li>
                    <span>
                      <label class="mr-1">
                        <strong>LinkedIn:</strong>
                      </label>
                      <a href="https://www.linkedin.com/in/juan-pablo-gil-1321a515a/">
                        @JuanPabloGil
                      </a>
                    </span>
                  </li>
                </ul>
              </div>
              <div class="mt-4 text-center">
                <a href="/assets/cv.pdf">
                  {" "}
                  <button
                    class="btn-orange mr-4 mb-2"
                    type="button"
                    name="button"
                  >
                    <strong>Download CV</strong>
                  </button>
                </a>
                <a href="#Contact">
                  {" "}
                  <button class="btn-orange mr-4" type="button" name="button">
                    <strong>Contact</strong>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid bg-light  pt-5 pb-5">
        <div class=" container pt-5 mb-5">
          <div class="row">
            <div class="col-lg-6">
              <h4>Some About my Abilities</h4>
              <p class="pt-5">
                This are my favorite tools to develop a project HTML5, CSS3,
                Bootstrap, Java Script, Ruby, Ruby on Rails, MySQL, PostgreSQL,
                Heroku, AWS, WordPress, Google Analytics, CMS Tools.
              </p>
            </div>
            <div class="col-lg-6">
              <div class="progress mb-4">
                <div
                  class="progress-bar progress-bar-striped"
                  role="progressbar"
                  style={{ width: "60%" }}
                  aria-valuenow="10"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <strong>React &nbsp /&nbsp Java Script</strong>
                </div>
              </div>
              <div class="progress mb-4">
                <div
                  class="progress-bar progress-bar-striped bg-danger"
                  role="progressbar"
                  style={{ width: "90%" }}
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <strong> Rails &nbsp /&nbsp Ruby</strong>
                </div>
              </div>
              <div class="progress mb-4">
                <div
                  class="progress-bar progress-bar-striped bg-success"
                  role="progressbar"
                  style={{ width: "95%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <strong> HTML &nbsp /&nbsp CSS </strong>
                </div>
              </div>
              <div class="progress mb-4">
                <div
                  class="progress-bar progress-bar-striped bg-info"
                  role="progressbar"
                  style={{ width: "100%" }}
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  {" "}
                  <strong>WordPress</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />
      <div class="container mt-5 mb-5">
        <div class="row m-0">
          <div class="gallery col-lg-12 col-md-12 col-sm-12 col-xs-12 m-0">
            <div class="mt-5 mb-5">
              <h1 class="display-4 pl-3 center">PortFolio</h1>
              <p class="pl-3 center">My recent projects </p>
            </div>
          </div>

          <div align="center">
            <button class="btn btn-default filter-button" data-filter="all">
              <strong>All</strong>
            </button>
            <button class="btn btn-default filter-button" data-filter="html">
              <strong>HTML / CSS</strong>
            </button>
            <button class="btn btn-default filter-button" data-filter="rails">
              {" "}
              <strong>Rails / Ruby</strong>
            </button>
          </div>
          <br />

          <div class="row">
            <div class="gallery_product col-12 col-sm-6  col-md-6 col-lg-4 col-xs-6 filter html m-0 mb-2">
              <a href="https://shikestudio.com/">
                {" "}
                <img src={Shike} class="img-fluid" alt="" />{" "}
              </a>
            </div>

            <div class="gallery_product col-12 col-sm-6  col-md-6 col-lg-4 col-xs-6 filter html m-0 mb-2">
              <a href="http://doomont.com/">
                {" "}
                <img src={Doomont} class="img-fluid" alt="" />{" "}
              </a>
            </div>

            <div class="gallery_product col-12 col-sm-6  col-md-6 col-lg-4 col-xs-6 filter html m-0 mb-2">
              <a href="http://meray.com.mx/">
                {" "}
                <img src={Meray} class="img-fluid" alt="" />{" "}
              </a>
            </div>

            <div class="gallery_product col-12 col-sm-6  col-md-6 col-lg-4 col-xs-6 filter rails m-0 mb-2">
              <a href="https://github.com/JuanPabloGil/Articles-Web-App/tree/dev">
                {" "}
                <img src={Articles} class="img-fluid" alt="" />{" "}
              </a>
            </div>

            <div class="gallery_product col-12 col-sm-6  col-md-6 col-lg-4 col-xs-6 filter rails m-0 mb-2">
              <a href="https://github.com/JuanPabloGil/Social-Network-Web-App/tree/dev">
                {" "}
                <img src={Social} class="img-fluid" alt="" />{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
