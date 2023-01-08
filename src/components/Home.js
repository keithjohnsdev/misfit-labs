import React from "react";
import { useRef, useState } from "react";
import Container from "./Shared/Container";

const Home = () => {
  const platform = useRef(null);
  const formula = useRef(null);
  const home = useRef(null);
  const ingredients = useRef(null);
  const expertise = useRef(null);
  const team = useRef(null);
  const [showMenu, setShowMenu] = useState(false);

  function hamburgerToggle() {
    setShowMenu(!showMenu);
  }
  return (
    <div className="home" ref={home}>
      <div className="navbar">
        <div className="left">
          <div
            className="nav-logo"
            onClick={() => home.current?.scrollIntoView({ behavior: "smooth" })}
          >
            <svg
              width="52"
              height="52"
              viewBox="0 0 52 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.06753 6.24771H8.98438L8.97537 6.2544H42.6755C42.7868 6.2544 42.8337 6.1125 42.7444 6.0461L41.4867 5.1113C33.3723 -0.919988 22.5427 -1.61363 13.8038 3.03038L8.71436 2.39421C6.77792 2.15215 5.06753 3.66206 5.06753 5.61357V6.24771Z"
                fill="white"
              />
              <path
                d="M46.2989 4.97994H45.6647V8.88541L45.6585 8.87721V42.7769C45.6585 42.8879 45.7997 42.9351 45.8664 42.8464L46.7995 41.6061C52.9477 33.4327 53.6445 22.462 48.8897 13.6546L49.5182 8.62678C49.7603 6.69034 48.2504 4.97994 46.2989 4.97994Z"
                fill="white"
              />
              <path
                d="M6.34147 9.22305C6.34147 9.11209 6.20027 9.06491 6.13357 9.15359L5.20055 10.3939C-0.940014 18.5571 -1.64271 29.5106 3.09245 38.3123L2.48174 43.198C2.23969 45.1345 3.74959 46.8449 5.7011 46.8449H6.33524V43.1145L6.34147 43.1228L6.34147 9.22305Z"
                fill="white"
              />
              <path
                d="M43.2126 45.5771L43.22 45.5715L9.12256 45.5715C9.01193 45.5715 8.96454 45.712 9.05257 45.779L10.276 46.7102C18.4969 52.9678 29.5911 53.6735 38.4601 48.8274L43.2856 49.4306C45.222 49.6727 46.9324 48.1628 46.9324 46.2112V45.5771H43.2126Z"
                fill="white"
              />
              <path
                d="M20.3527 33.8384H17.695C17.3759 33.8384 17.1172 33.5797 17.1172 33.2606V18.9832C17.1172 18.4685 17.7395 18.2107 18.1035 18.5747L24.7655 25.2367L27.3005 22.7017V28.14L24.7655 30.675L20.9305 26.84V33.2606C20.9305 33.5797 20.6718 33.8384 20.3527 33.8384Z"
                fill="white"
              />
              <path
                d="M28.6005 21.4017L31.4275 18.5747C31.7915 18.2107 32.4139 18.4685 32.4139 18.9832V30.0251H34.3494C34.6685 30.0251 34.9272 30.2838 34.9272 30.6029V33.2607C34.9272 33.5798 34.6685 33.8384 34.3494 33.8384H31.1139V33.8384H29.1783C28.8592 33.8384 28.6005 33.5797 28.6005 33.2606V21.4017Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        <div className="right">
          <p
            className="nav"
            onClick={() =>
              platform.current?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Platform
          </p>
          <p
            className="nav"
            onClick={() =>
              formula.current?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Formula
          </p>
          <p
            className="nav"
            onClick={() =>
              ingredients.current?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Ingredients
          </p>
          <p
            className="nav"
            onClick={() =>
              expertise.current?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Expertise
          </p>
          <p
            className="nav"
            onClick={() => team.current?.scrollIntoView({ behavior: "smooth" })}
          >
            Team
          </p>
          <a
            className="nav email"
            href={"mailto:hello@misfitlabs.vc?subject=Hello%21"}
          >
            hello@misfitlabs.vc
          </a>
          <div className="hamburger" onClick={hamburgerToggle}>
            <svg
              width="36"
              height="12"
              viewBox="0 0 36 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line y1="1" x2="36" y2="1" stroke="white" strokeWidth="2" />
              <line y1="11" x2="36" y2="11" stroke="white" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className={showMenu ? "mobile-menu" : "mobile-menu hide"}>
          <p
            className="nav"
            onClick={() =>
              platform.current?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Platform
          </p>
          <p
            className="nav"
            onClick={() =>
              formula.current?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Formula
          </p>
          <p
            className="nav"
            onClick={() =>
              ingredients.current?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Ingredients
          </p>
          <p
            className="nav"
            onClick={() =>
              expertise.current?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Expertise
          </p>
          <p
            className="nav"
            onClick={() => team.current?.scrollIntoView({ behavior: "smooth" })}
          >
            Team
          </p>
          <p className="nav email">hello@misfitlabs.vc</p>
        </div>
      </div>
      <section className="hero">
        <Container>
          <h1 className="header fade-in">
            Here’s to the Misfits,{` `}
            <br className="break" />
            the troublemakers…
          </h1>
          <p className="hero-desc slide-up">
            <span className="first-line">
              Misfit Labs is a technology venture studio H.Q. in Miami, FL.
            </span>
            <br /> We develop, manage and scale products in partnership with{" "}
            <br className="break" />
            entrepreneurs, investors and innovative corporations.
          </p>
        </Container>
      </section>
      <section className="platform" ref={platform}>
        <Container>
          <p className="section-title slide-in">OUR PLATFORM</p>
          <div className="platform-boxes">
            <div className="platform-box">
              <div className="logo-wrapper">
                <img src={require("../theme/assets/startups.png")} />
              </div>
              <p className="platform-title">
                For
                <p>
                  <span className="accent-text">Startups</span>
                </p>
              </p>
              <p className="platform-desc one">
                We take products from concept to <br /> scalable companies.
              </p>
              <p className="platform-footer">
                DESIGN <span className="opacity05">•</span> INVEST{" "}
                <span className="opacity05">•</span> BUILD{" "}
                <span className="opacity05">•</span> SCALE
              </p>
            </div>
            <div className="platform-box">
              <div className="logo-wrapper">
                <img src={require("../theme/assets/corporations.png")} />
              </div>
              <p className="platform-title">
                For
                <br />
                <span className="accent-text">Corporations</span>
              </p>
              <p className="platform-desc">
                We design and build corporation innovation programs to foster
                the way of the future.
              </p>
              <p className="platform-footer">
                RESEARCH <span className="opacity05">•</span> STRATEGY{" "}
                <span className="opacity05">•</span> DESIGN{" "}
                <span className="opacity05">•</span>
                <br /> BUILD <span className="opacity05">•</span>{" "}
                COMMERCIALIZATION
              </p>
            </div>
            <div className="platform-box last">
              <div className="logo-wrapper">
                <img src={require("../theme/assets/investors.png")} />
              </div>
              <p className="platform-title">
                For
                <br />
                <span className="accent-text">Investors</span>
              </p>
              <p className="platform-desc three">
                We co-develop and build products under a shared vision that
                deliver exponential returns.
              </p>
              <p className="platform-footer three">
                TAILORED VC FUNDS {` `}
                <span className="opacity05">•</span>
                <p> VENTURE DEVELOPMENT</p>
              </p>
            </div>
          </div>
        </Container>
      </section>
      <section className="formula" ref={formula}>
        <Container>
          <p className="section-title gray slide-in">OUR FORMULA</p>
          <h1 className="header fade-in black">
            A technology lab
            <br /> for innovation
          </h1>
          <div className="serpentine">
            <div className="serpentine-row">
              <div className="img-div">
                <img src={require("../theme/assets/ideation.png")} />
              </div>
              <div className="text">
                <h3>Ideation</h3>
                <p>
                  Validating concepts, building business models, design thinking
                  and technology architecture.
                </p>
              </div>
            </div>
            <div className="serpentine-row">
              <div className="img-div mobile">
                <img src={require("../theme/assets/investing.png")} />
              </div>
              <div className="text">
                <h3>Investing</h3>
                <p>
                  Providing venture capital investment through resource
                  contribution and <br /> capital allocation.
                </p>
              </div>
              <div className="img-div right">
                <img src={require("../theme/assets/investing.png")} />
              </div>
            </div>
            <div className="serpentine-row">
              <div className="img-div">
                <img src={require("../theme/assets/building.png")} />
              </div>
              <div className="text">
                <h3>Building</h3>
                <p>
                  In-house technology and product development team experienced
                  building products from concept to unicorn.
                </p>
              </div>
            </div>
            <div className="serpentine-row last">
              <div className="img-div mobile">
                <img src={require("../theme/assets/scaling.png")} />
              </div>
              <div className="text">
                <h3>Scaling</h3>
                <p>
                  Supporting product growth through corporate development
                  initiatives and strategic network building.
                </p>
              </div>
              <div className="img-div right">
                <img src={require("../theme/assets/scaling.png")} />
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="ingredients desktop" ref={ingredients}>
        <Container>
          <p className="section-title gray slide-in">OUR INGREDIENTS</p>
          <h1 className="header fade-in">
            Ingredients for
            <br /> a winning recipe
          </h1>
          <div className="recipe desktop">
            <div className="ingredient-box">
              <img src={require("../theme/assets/tech.png")} />
              <h3>Guaranteed Tech</h3>
              <p>50 years of industry experience. No more do-overs.</p>
            </div>
            <div className="ingredient-box">
              <img src={require("../theme/assets/teams.png")} />
              <h3>Dedicated Teams</h3>
              <p>For operations support and growth.</p>
            </div>
            <div className="ingredient-box">
              <img src={require("../theme/assets/vested-interest.png")} />
              <h3>
                Vested
                <br /> Interest
              </h3>
              <p>Skin in the game with C-suite level roles.</p>
            </div>
          </div>
          <div className="recipe mobile">
            <div className="serpentine">
              <div className="serpentine-row">
                <div className="img-div">
                  <img src={require("../theme/assets/tech.png")} />
                </div>
                <div className="text">
                  <h3>Guaranteed Tech</h3>
                  <p>50 years of industry experience. No more do-overs.</p>
                </div>
              </div>
              <div className="serpentine-row">
                <div className="img-div mobile">
                  <img src={require("../theme/assets/teams.png")} />
                </div>
                <div className="text">
                  <h3>Dedicated Teams</h3>
                  <p>For operations support and growth.</p>
                </div>
                <div className="img-div right">
                  <img src={require("../theme/assets/teams.png")} />
                </div>
              </div>
              <div className="serpentine-row">
                <div className="img-div">
                  <img src={require("../theme/assets/vested-interest.png")} />
                </div>
                <div className="text">
                  <h3>Vested Interest</h3>
                  <p>Skin in the game with C-suite level roles.</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="expertise" ref={expertise}>
        <Container>
          <p className="section-title gray slide-in">OUR EXPERTISE</p>
          <h1 className="header fade-in">
            An extension of
            <br /> your team
          </h1>
          <div className="categories large">
            <div className="cat one left">
              <img src={require("../theme/assets/bg-1.png")} />
              <p>Ideation</p>
            </div>
            <div className="cat two dark">
              <img src={require("../theme/assets/bg-2.png")} />
              <p>Strategy</p>
            </div>
            <div className="cat three">
              <img src={require("../theme/assets/bg-3.png")} />
              <p>Branding</p>
            </div>
            <div className="cat four dark">
              <img src={require("../theme/assets/bg-4.png")} />
              <p>Design</p>
            </div>
            <div className="cat five dark desktop">
              <img src={require("../theme/assets/bg-5.png")} />
              <p>Development</p>
            </div>
            <div className="cat six desktop">
              <img src={require("../theme/assets/bg-6.png")} />
              <p>Venture Capital</p>
            </div>
            <div className="cat six mobile">
              <img src={require("../theme/assets/bg-6.png")} />
              <p>Venture Capital</p>
            </div>
            <div className="cat five dark mobile">
              <img src={require("../theme/assets/bg-5.png")} />
              <p>Development</p>
            </div>
            <div className="cat seven dark desktop">
              <img src={require("../theme/assets/bg-7.png")} />
              <p>Corporate Dev</p>
            </div>
            <div className="cat eight desktop">
              <img src={require("../theme/assets/bg-8.png")} />
              <p>Operations</p>
            </div>
            <div className="cat eight mobile">
              <img src={require("../theme/assets/bg-8.png")} />
              <p>Operations</p>
            </div>
            <div className="cat seven dark mobile">
              <img src={require("../theme/assets/bg-7.png")} />
              <p>Corporate Dev</p>
            </div>
          </div>
          <div className="categories small">
            <div className="cat one left">
              <img src={require("../theme/assets/bg-1.png")} />
              <p>Ideation</p>
            </div>
            <div className="cat two dark">
              <img src={require("../theme/assets/bg-2.png")} />
              <p>Strategy</p>
            </div>
            <div className="cat four dark">
              <img src={require("../theme/assets/bg-4.png")} />
              <p>Design</p>
            </div>
            <div className="cat three">
              <img src={require("../theme/assets/bg-3.png")} />
              <p>Branding</p>
            </div>
            <div className="cat five dark desktop">
              <img src={require("../theme/assets/bg-5.png")} />
              <p>Development</p>
            </div>
            <div className="cat six desktop">
              <img src={require("../theme/assets/bg-6.png")} />
              <p>Venture Capital</p>
            </div>
            <div className="cat six mobile">
              <img src={require("../theme/assets/bg-6.png")} />
              <p>Venture Capital</p>
            </div>
            <div className="cat five dark mobile">
              <img src={require("../theme/assets/bg-5.png")} />
              <p>Development</p>
            </div>
            <div className="cat seven dark">
              <img src={require("../theme/assets/bg-7.png")} />
              <p>Corporate Dev</p>
            </div>
            <div className="cat eight">
              <img src={require("../theme/assets/bg-8.png")} />
              <p>Operations</p>
            </div>
          </div>
        </Container>
      </section>
      <section className="team" ref={team}>
        <Container>
          <p className="section-title gray-opaque slide-in">OUR TEAM</p>
          <h1 className="header fade-in white">Founding Partners</h1>
        </Container>
        <div className="team-grid">
          <div className="team-img">
            <img src={require("../theme/assets/joey.png")} />
            <div className="team-img-hover" onClick={()=> window.open("https://www.linkedin.com/in/joey-gutierrez-7b281225/", "_blank")}>
              <h3>JOEY GUTIERREZ</h3>
              <p>
                Entrepreneur, corporate development executive leading day-to-day
                operations.
              </p>
              <div className="svg-wrapper">
                <svg
                  width="54"
                  height="54"
                  viewBox="0 0 54 54"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M27 54C41.9117 54 54 41.9117 54 27C54 12.0883 41.9117 0 27 0C12.0883 0 0 12.0883 0 27C0 41.9117 12.0883 54 27 54ZM14.85 37.8H20.3727V21.2318H14.85V37.8ZM14.85 16.2603C14.85 17.7845 16.0849 19.0227 17.6125 19.0227C19.1345 19.0227 20.3727 17.7845 20.3727 16.2603C20.3727 14.7382 19.1345 13.5 17.6125 13.5C16.0871 13.5 14.85 14.736 14.85 16.2603ZM34.945 37.8H40.2546V28.7063C40.2546 24.2417 39.2605 20.8077 33.8813 20.8077C31.2967 20.8077 29.5637 22.1817 28.8545 23.4851H28.7828V21.2197H23.6864V37.8H28.9948V29.5976C28.9948 27.4349 29.4201 25.3407 32.1847 25.3407C34.9086 25.3407 34.945 27.8138 34.945 29.7368V37.8Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="team-img">
            <img src={require("../theme/assets/kyle.png")} />
            <div className="team-img-hover" onClick={()=> window.open("https://www.linkedin.com/in/kylecarriedo/", "_blank")}>
              <h3>KYLE CARRIEDO</h3>
              <p>
                Technology leader, senior R&D at Apple (iTunes, Apple Watch,
                Apple TV, iTunesU)
              </p>
              <div className="svg-wrapper">
                <svg
                  width="54"
                  height="54"
                  viewBox="0 0 54 54"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M27 54C41.9117 54 54 41.9117 54 27C54 12.0883 41.9117 0 27 0C12.0883 0 0 12.0883 0 27C0 41.9117 12.0883 54 27 54ZM14.85 37.8H20.3727V21.2318H14.85V37.8ZM14.85 16.2603C14.85 17.7845 16.0849 19.0227 17.6125 19.0227C19.1345 19.0227 20.3727 17.7845 20.3727 16.2603C20.3727 14.7382 19.1345 13.5 17.6125 13.5C16.0871 13.5 14.85 14.736 14.85 16.2603ZM34.945 37.8H40.2546V28.7063C40.2546 24.2417 39.2605 20.8077 33.8813 20.8077C31.2967 20.8077 29.5637 22.1817 28.8545 23.4851H28.7828V21.2197H23.6864V37.8H28.9948V29.5976C28.9948 27.4349 29.4201 25.3407 32.1847 25.3407C34.9086 25.3407 34.945 27.8138 34.945 29.7368V37.8Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="team-img">
            <img src={require("../theme/assets/scott.png")} />
            <div className="team-img-hover" onClick={()=> window.open("https://www.linkedin.com/in/scottwjohns/", "_blank")}>
              <h3>SCOTT JOHNS</h3>
              <p>
                Viking warrior and UI/UX designer that has worked with with
                dozens of startups.
              </p>
              <div className="svg-wrapper">
                <svg
                  width="54"
                  height="54"
                  viewBox="0 0 54 54"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M27 54C41.9117 54 54 41.9117 54 27C54 12.0883 41.9117 0 27 0C12.0883 0 0 12.0883 0 27C0 41.9117 12.0883 54 27 54ZM14.85 37.8H20.3727V21.2318H14.85V37.8ZM14.85 16.2603C14.85 17.7845 16.0849 19.0227 17.6125 19.0227C19.1345 19.0227 20.3727 17.7845 20.3727 16.2603C20.3727 14.7382 19.1345 13.5 17.6125 13.5C16.0871 13.5 14.85 14.736 14.85 16.2603ZM34.945 37.8H40.2546V28.7063C40.2546 24.2417 39.2605 20.8077 33.8813 20.8077C31.2967 20.8077 29.5637 22.1817 28.8545 23.4851H28.7828V21.2197H23.6864V37.8H28.9948V29.5976C28.9948 27.4349 29.4201 25.3407 32.1847 25.3407C34.9086 25.3407 34.945 27.8138 34.945 29.7368V37.8Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="team-img">
            <img src={require("../theme/assets/ant.png")} />
            <div className="team-img-hover" onClick={()=> window.open("https://www.linkedin.com/in/anthony-alviz-a4048362/", "_blank")}>
              <h3>ANTHONY ALVIZ</h3>
              <p>
                Lead front-end engineer, manager and black belt jiu jitsu
                champion.
              </p>
              <div className="svg-wrapper">
                <svg
                  width="54"
                  height="54"
                  viewBox="0 0 54 54"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M27 54C41.9117 54 54 41.9117 54 27C54 12.0883 41.9117 0 27 0C12.0883 0 0 12.0883 0 27C0 41.9117 12.0883 54 27 54ZM14.85 37.8H20.3727V21.2318H14.85V37.8ZM14.85 16.2603C14.85 17.7845 16.0849 19.0227 17.6125 19.0227C19.1345 19.0227 20.3727 17.7845 20.3727 16.2603C20.3727 14.7382 19.1345 13.5 17.6125 13.5C16.0871 13.5 14.85 14.736 14.85 16.2603ZM34.945 37.8H40.2546V28.7063C40.2546 24.2417 39.2605 20.8077 33.8813 20.8077C31.2967 20.8077 29.5637 22.1817 28.8545 23.4851H28.7828V21.2197H23.6864V37.8H28.9948V29.5976C28.9948 27.4349 29.4201 25.3407 32.1847 25.3407C34.9086 25.3407 34.945 27.8138 34.945 29.7368V37.8Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="team-img">
            <img src={require("../theme/assets/ken.png")} />
            <div className="team-img-hover" onClick={()=> window.open("https://www.linkedin.com/in/kencheung/", "_blank")}>
              <h3>KEN CHEUNG</h3>
              <p>
                Non-Executive Partner. Investor, Tencent, BBC, Time Warner,
                Facebook, Instagram.
              </p>
              <div className="svg-wrapper">
                <svg
                  width="54"
                  height="54"
                  viewBox="0 0 54 54"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M27 54C41.9117 54 54 41.9117 54 27C54 12.0883 41.9117 0 27 0C12.0883 0 0 12.0883 0 27C0 41.9117 12.0883 54 27 54ZM14.85 37.8H20.3727V21.2318H14.85V37.8ZM14.85 16.2603C14.85 17.7845 16.0849 19.0227 17.6125 19.0227C19.1345 19.0227 20.3727 17.7845 20.3727 16.2603C20.3727 14.7382 19.1345 13.5 17.6125 13.5C16.0871 13.5 14.85 14.736 14.85 16.2603ZM34.945 37.8H40.2546V28.7063C40.2546 24.2417 39.2605 20.8077 33.8813 20.8077C31.2967 20.8077 29.5637 22.1817 28.8545 23.4851H28.7828V21.2197H23.6864V37.8H28.9948V29.5976C28.9948 27.4349 29.4201 25.3407 32.1847 25.3407C34.9086 25.3407 34.945 27.8138 34.945 29.7368V37.8Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="team-img">
            <img src={require("../theme/assets/ben.png")} />
            <div className="team-img-hover" onClick={()=> window.open("https://www.linkedin.com/in/bsharpe/", "_blank")}>
              <h3>BEN SHARPE</h3>
              <p>
                Head wizard, Apple & Microsoft Fellow with over 5 technology
                patents.
              </p>
              <div className="svg-wrapper">
                <svg
                  width="54"
                  height="54"
                  viewBox="0 0 54 54"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M27 54C41.9117 54 54 41.9117 54 27C54 12.0883 41.9117 0 27 0C12.0883 0 0 12.0883 0 27C0 41.9117 12.0883 54 27 54ZM14.85 37.8H20.3727V21.2318H14.85V37.8ZM14.85 16.2603C14.85 17.7845 16.0849 19.0227 17.6125 19.0227C19.1345 19.0227 20.3727 17.7845 20.3727 16.2603C20.3727 14.7382 19.1345 13.5 17.6125 13.5C16.0871 13.5 14.85 14.736 14.85 16.2603ZM34.945 37.8H40.2546V28.7063C40.2546 24.2417 39.2605 20.8077 33.8813 20.8077C31.2967 20.8077 29.5637 22.1817 28.8545 23.4851H28.7828V21.2197H23.6864V37.8H28.9948V29.5976C28.9948 27.4349 29.4201 25.3407 32.1847 25.3407C34.9086 25.3407 34.945 27.8138 34.945 29.7368V37.8Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="team-img">
            <img src={require("../theme/assets/mark.png")} />
            <div className="team-img-hover" onClick={()=> window.open("https://www.linkedin.com/in/markosenga/", "_blank")}>
              <h3>MARK OSENGA</h3>
              <p>
                Executive managing portfolio operations, training and
                back-office administration.
              </p>
              <div className="svg-wrapper">
                <svg
                  width="54"
                  height="54"
                  viewBox="0 0 54 54"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M27 54C41.9117 54 54 41.9117 54 27C54 12.0883 41.9117 0 27 0C12.0883 0 0 12.0883 0 27C0 41.9117 12.0883 54 27 54ZM14.85 37.8H20.3727V21.2318H14.85V37.8ZM14.85 16.2603C14.85 17.7845 16.0849 19.0227 17.6125 19.0227C19.1345 19.0227 20.3727 17.7845 20.3727 16.2603C20.3727 14.7382 19.1345 13.5 17.6125 13.5C16.0871 13.5 14.85 14.736 14.85 16.2603ZM34.945 37.8H40.2546V28.7063C40.2546 24.2417 39.2605 20.8077 33.8813 20.8077C31.2967 20.8077 29.5637 22.1817 28.8545 23.4851H28.7828V21.2197H23.6864V37.8H28.9948V29.5976C28.9948 27.4349 29.4201 25.3407 32.1847 25.3407C34.9086 25.3407 34.945 27.8138 34.945 29.7368V37.8Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="team-img join-gang">
            <a href={"mailto:hello@misfitlabs.vc?subject=I want to join the gang%21"}>
              <img src={require("../theme/assets/join-the-gang.png")} />
            </a>
          </div>
        </div>
      </section>
      <section className="contact">
        <Container>
          <p className="section-title gray-opaque slide-in">CONTACT US</p>
          <h1 className="header fade-in white">Have an idea?</h1>
          <button className="btn-transparent">
            <a href={"mailto:hello@misfitlabs.vc?subject=Hello%21"}>
              Co-Build with Us - hello@misfitlabs.vc
            </a>
          </button>
          <img src={require("../theme/assets/ml-logo-footer.png")} />
        </Container>
      </section>
    </div>
  );
};

export default Home;
