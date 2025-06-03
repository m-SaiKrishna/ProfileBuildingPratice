import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="myprofile.jpg" alt="Jonas Schmedtmann" />;
}

function Intro() {
  return (
    <div>
      <h1>Muppidi Sai Krishna</h1>
      <p>
        Computer Science undergraduate from KL University with a focus on Game
        Development and UX/UI Design. Skilled in Java, Spring Boot, Unity, and
        AWS Cloud. Certified in AWS Cloud Practitioner and Red Hat EA Developer.
        Experienced in building full-stack web apps and interactive games.
        Driven to create innovative, user-friendly tech solutions.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="💪" color="blue" />
      <Skill skill="HTML+CSS" emoji="💪" color="orange" />
      <Skill skill="AWSCloud" emoji="💪" color="yellow" />
      <Skill skill="Java" emoji="💪" color="orangered" />
      <Skill skill="Git-Github" emoji="💪" color="yellow" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
