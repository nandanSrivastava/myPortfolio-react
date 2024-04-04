import { useState } from "react";
import nandan from "./assets/nandan.jpg";
import instagram from "./assets/instagram.png";
import github from "./assets/github.png";
import telegram from "./assets/telegram.png";
import gmail from "./assets/gmail.png";
import linkedin from "./assets/linkedin.png";
import weather from "./assets/weather.jpg";
import attendence from "./assets/attendence.jpg";
import flipkart from "./assets/flipkart.jpg";
import matrix from "./assets/matrix.png";
import boy from "./assets/boy.png";

import Typewriter from "typewriter-effect";
// import laptop from "./assets/laptop.jpg";
function App() {
  const [count, setCount] = useState(0);
  const skills = [
    { item: "HTML", value: 80 },
    { item: "CSS", value: 78 },
    { item: "JavaScript", value: 70 },
    { item: "ReactJS", value: 80 },
    { item: "Tailwind", value: 70 },
  ];
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [contactFormData, setContactFormData] = useState
  ({
    name: name,
    email: email,
    message: message,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { name, email, message });
    setContactFormData(name, email, message);
    setName("");
    setEmail("");
    setMessage("");
  };
  const projectData=[
    {
      name:'Attendence Monitor',
      img:{attendence},
      // description:"this project is a full stack application for management of attendence for schools/colleges",
    },
    {
      name:'PlayHub',
      img:{weather},
      // description:"project",
    },
    {
      name:'Netflix Clone',
      img:{flipkart},
      // description:"project",
    },
    {
      name:'Flipkart CLone',
      img:{matrix},
      // description:"project",
    },

  ]


  return (
    <>
      <navbar className="navbar">
        {/* <img className="logo-img" src={nandan} alt="nandan-logo" /> */}
        <ul className="navLinks">
          <li>
            <a href="#section1">Home</a>
          </li>
          <li>
            <a href="#section2">About</a>
          </li>
          <li>
            <a href="#section3">Skills</a>
          </li>
          <li>
            <a href="#section4">Projects</a>
          </li>
          <li>
            <a href="#section5">Contact</a>
          </li>
        </ul>
      </navbar>
      <div className="social-connects">
        <li>
          <img src={github} alt="" />
        </li>
        <li>
          <img src={linkedin} alt="" />
        </li>
        <li>
          <img src={telegram} alt="" />
        </li>
        <li>
          <img src={gmail} alt="" />
        </li>
        <li>
          <img src={instagram} alt="" />
        </li>
      </div>
      <div id='section1' className="section1-main">
        {/* <img className="laptop-img" src={laptop} alt="laptop img" /> */}
        <div className="text-displayed-front">
          <Typewriter
            className="typewriter"
            options={{
              strings: [
                "Hi I'm Nandan Shrivastava",
                "I am a Frontend Developer...",
              ],
              autoStart: true,
              loop: true,
            }}
          />
              <div className="boy-img">
                <img src={boy} alt="" />
            </div>
        </div>

      </div>

      <div id='section2' className="section2-main">
        <div className="section2-about-me">
          <span>A</span>bout <span>M</span>e
          </div>
        <p className="section2-text-box">
          Welcome to my portfolio website! <br />
          I'm Nandan Shrivastava, <br />a dedicated and enthusiastic student
          currently pursuing B.Tech in Computer Science. <br />
          With a profound passion for technology and its transformative
          potential, <br />I am on a journey to evolve into a skilled software
          developer.
          <br /> My educational pursuits have equipped me with a strong
          foundation in <br />
          programming, problem-solving, and critical thinking. I am committed to
          harnessing <br />
          these skills and continually expanding my knowledge to create
          innovative and impactful software solutions. <br />
          As I navigate through my academic and personal growth, <br />
          my ultimate goal remains crystal clear: <br />
          to contribute meaningfully to the world of software development <br />
          and make a lasting mark in the realm of technology.
        </p>
      </div>


      <div id='section3' className="section3-main">
        <div className="skills-contents">
          {skills.map((item, index) => {
            return (
              <div key={index} className="loader">
                <div style={{ width: `${item.value}%` }} className="loading">
                  {item.item}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div id='section4' className="section4-main">
        <p className="projects-title">My Projects</p>
        <div className="projects-thumbnail">
            {projectData.map((d) =>(
              <div>
                  <div className="projects-details"> 
                    <p className="projects-name">{d.name}</p>
                  </div>
                  <button className="project-btn">Know More</button>

              </div>

            ))}
          </div>
        </div>

      <div id='section5' className="section5-main">
        <p className="text-box-contact">
          Let's Collaborate
          <br /> Together
        </p>
        <form className="contact-info" onSubmit={handleSubmit}>
          <h2>Get In Touch</h2>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <textarea
            id="message"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />

          <button type="submit">Send Message</button>
        </form>
      </div>
    </>
  );
}

export default App;
