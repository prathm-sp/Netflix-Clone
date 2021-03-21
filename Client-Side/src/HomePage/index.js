import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./style.css";

function Index() {
  const handleSvgClick = (index) => {
    var btn = document.getElementsByClassName("svg-icon svg-icon-thin-x");
    var para = document.getElementsByClassName("faq-answer");

    btn[index].classList.toggle("svg-closed");
    btn[index].classList.toggle("open");
    para[index].classList.toggle("closed");
    para[index].classList.toggle("open");

    console.log(btn[index]);
    console.log(para[index]);
  };
  const [show, handleShow] = useState();
  console.log("App Started");
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {
        return null;
      });
    };
  }, []);
  return (
    <div style={{ backgroundColor: "#000000", overflowX: "scroll" }}>
      <div className="loginScreen">
        <div
          className={`nav ${show && "nav_black"}`}
          style={{ position: "absolute" }}
        >
          <Link to="/">
            {" "}
            <img
              className="nav_logo"
              src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
              alt="Netflix Logo"
              style={{ position: "absolute" }}
            />
          </Link>
          <Link to="login">
            {/* <img
          className="nav_avatar"
          src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
          alt="Netflix Logo"
        /> */}
            <button
              className="loginScreen_button"
              style={{ position: "absolute" }}
            >
              Sign In
            </button>
          </Link>
        </div>
        <div className="loginScreen_gradient" />
        <div className="loginScreen_body">
          <h1>Unlimited films,TV programmers and more.</h1>
          <h2>Watch anywhere. Cancel at any time</h2>
          <h3>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>

          <div className="loginScreen_input">
            <form>
              <input type="email" placeholder="Email Address" />
              <button className="loginScreen_getStarted">Get Started</button>
            </form>
          </div>
        </div>
      </div>
      <hr />
      <div
        class="our-story-card animation-card watchOnTv"
        data-uia-our-story="watchOnTv"
        data-uia="our-story-card"
      >
        <div class="animation-card-container">
          <div class="our-story-card-text">
            <h1
              id=""
              class="our-story-card-title"
              data-uia="animation-card-title"
            >
              Enjoy on your TV.
            </h1>
            <h2
              id=""
              class="our-story-card-subtitle"
              data-uia="our-story-card-subtitle"
            >
              Watch on smart TVs, PlayStation , Xbox, Chromecast, Apple TV,
              Blu-ray players and more.
            </h2>
          </div>
          <div class="our-story-card-img-container">
            <div class="our-story-card-animation-container">
              <img
                alt=""
                class="our-story-card-img"
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
                data-uia="our-story-card-img"
              />
              <div class="our-story-card-animation">
                <video
                  class="our-story-card-video"
                  autoplay=""
                  playsinline=""
                  muted=""
                  loop=""
                >
                  <source
                    src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
                    type="video/mp4"
                  />
                </video>
                <div class="our-story-card-animation-text"></div>
              </div>
            </div>
          </div>
          <div class="center-pixel" style={{ position: "absolute" }}></div>
        </div>
      </div>
      <hr />
      <div
        class="our-story-card animation-card downloadAndWatch flipped"
        data-uia-our-story="downloadAndWatch"
        data-uia="our-story-card"
      >
        <div class="animation-card-container">
          <div class="our-story-card-text">
            <h1
              id=""
              class="our-story-card-title"
              data-uia="animation-card-title"
            >
              Download your shows to watch offline.
            </h1>
            <h2
              id=""
              class="our-story-card-subtitle"
              data-uia="our-story-card-subtitle"
            >
              Save your favourites easily and always have something to watch.
            </h2>
          </div>
          <div class="our-story-card-img-container">
            <div class="our-story-card-animation-container">
              <img
                alt=""
                class="our-story-card-img"
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
                data-uia="our-story-card-img"
              />
              <div class="our-story-card-animation">
                <div class="our-story-card-animation-image">
                  <img
                    alt=""
                    src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
                  />
                </div>
                <div class="our-story-card-animation-text">
                  <div id="" class="text-0" data-uia="">
                    Stranger Things
                  </div>
                  <div id="" class="text-1" data-uia="">
                    Downloading...
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="center-pixel" style={{ position: "absolute" }}></div>
        </div>
      </div>
      <hr />
      <div
        class="our-story-card animation-card watchOnTv"
        data-uia-our-story="watchOnTv"
        data-uia="our-story-card"
      >
        <div class="animation-card-container">
          <div class="our-story-card-text">
            <h1
              id=""
              class="our-story-card-title"
              data-uia="animation-card-title"
            >
              Watch everywhere.
            </h1>
            <h2
              id=""
              class="our-story-card-subtitle"
              data-uia="our-story-card-subtitle"
            >
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV.
            </h2>
          </div>
          <div class="our-story-card-img-container">
            <div class="our-story-card-animation-container">
              <img
                alt=""
                class="our-story-card-img"
                src="http://demo.streamhash.com/assets/img/all-device.png"
                data-uia="our-story-card-img"
              />
              <div
                class="our-story-card-animation"
                style={{ width: "60%", top: "28%" }}
              >
                <video
                  class="our-story-card-video"
                  autoplay=""
                  playsinline=""
                  muted=""
                  loop=""
                >
                  <source
                    src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
                    type="video/mp4"
                  />
                </video>
                <div class="our-story-card-animation-text"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div
        class="our-story-card faq-card"
        data-uia-our-story="faq"
        data-uia="our-story-card"
        id="faq"
      >
        <div class="our-story-card-text">
          <h1 id="" class="our-story-card-title" data-uia="faq-title">
            Frequently Asked Questions
          </h1>
          <ul class="faq-list">
            <li
              class="faq-list-item"
              data-uia-our-story="faq-list-item"
              data-uia-faq="what_is_netflix"
              onClick={() => {
                handleSvgClick(0);
              }}
            >
              <button class="faq-question">
                What is Netflix?
                <svg
                  id="thin-x"
                  viewBox="0 0 26 26"
                  class="svg-icon svg-icon-thin-x svg-closed"
                  focusable="true"
                >
                  <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
                </svg>
              </button>
              <div class="faq-answer closed">
                <span id="" data-uia="">
                  Netflix is a streaming service that offers a wide variety of
                  award-winning TV shows, movies, anime, documentaries and more
                  – on thousands of internet-connected devices.
                  <br />
                  <br />
                  You can watch as much as you want, whenever you want, without
                  a single ad – all for one low monthly price. There's always
                  something new to discover, and new TV shows and movies are
                  added every week!
                </span>
              </div>
            </li>
            <li
              class="faq-list-item"
              data-uia-our-story="faq-list-item"
              data-uia-faq="cost"
              onClick={() => {
                handleSvgClick(1);
              }}
            >
              <button class="faq-question">
                How much does Netflix cost?
                <svg
                  id="thin-x"
                  viewBox="0 0 26 26"
                  class="svg-icon svg-icon-thin-x svg-closed"
                  focusable="true"
                >
                  <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
                </svg>
              </button>
              <div class="faq-answer closed">
                <span id="" data-uia="">
                  Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
                  streaming device, all for one fixed monthly fee. Plans range
                  from ₹&nbsp;199 to ₹&nbsp;799 a month. No extra costs, no
                  contracts.
                </span>
              </div>
            </li>
            <li
              class="faq-list-item"
              data-uia-our-story="faq-list-item"
              data-uia-faq="where_to_watch"
              onClick={() => {
                handleSvgClick(2);
              }}
            >
              <button class="faq-question">
                Where can I watch?
                <svg
                  id="thin-x"
                  viewBox="0 0 26 26"
                  class="svg-icon svg-icon-thin-x svg-closed"
                  focusable="true"
                >
                  <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
                </svg>
              </button>
              <div class="faq-answer closed">
                <span id="" data-uia="">
                  Watch anywhere, anytime, on an unlimited number of devices.
                  Sign in with your Netflix account to watch instantly on the
                  web at netflix.com from your personal computer or on any
                  internet-connected device that offers the Netflix app,
                  including smart TVs, smartphones, tablets, streaming media
                  players and game consoles.
                  <br />
                  <br />
                  You can also download your favourite shows with the iOS,
                  Android, or Windows 10 app. Use downloads to watch while
                  you're on the go and without an internet connection. Take
                  Netflix with you anywhere.
                </span>
              </div>
            </li>
            <li
              class="faq-list-item"
              data-uia-our-story="faq-list-item"
              data-uia-faq="cancel"
              onClick={() => {
                handleSvgClick(3);
              }}
            >
              <button class="faq-question">
                How do I cancel?
                <svg
                  id="thin-x"
                  viewBox="0 0 26 26"
                  class="svg-icon svg-icon-thin-x svg-closed"
                  focusable="true"
                >
                  <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
                </svg>
              </button>
              <div class="faq-answer closed">
                <span id="" data-uia="">
                  Netflix is flexible. There are no annoying contracts and no
                  commitments. You can easily cancel your account online in two
                  clicks. There are no cancellation fees – start or stop your
                  account anytime.
                </span>
              </div>
            </li>
            <li
              class="faq-list-item"
              data-uia-our-story="faq-list-item"
              data-uia-faq="what_to_watch_nft"
              onClick={() => {
                handleSvgClick(4);
              }}
            >
              <button class="faq-question">
                What can I watch on Netflix?
                <svg
                  id="thin-x"
                  viewBox="0 0 26 26"
                  class="svg-icon svg-icon-thin-x svg-closed"
                  focusable="true"
                >
                  <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
                </svg>
              </button>
              <div class="faq-answer closed">
                <span id="" data-uia="">
                  Netflix has an extensive library of feature films,
                  documentaries, TV shows, anime, award-winning Netflix
                  originals, and more. Watch as much as you want, anytime you
                  want.
                </span>
              </div>
            </li>
          </ul>
        </div>
        <div class="center-pixel" style={{ position: "absolute" }}></div>
      </div>
    </div>
  );
}

export default Index;
