import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <div className="container">
      <main>
        <section className="hero">
          <h1 className="logo">Home School'd</h1>
          <p>
            Our schools have closed for the rest of the year due to the
            coronavirus pandemic. As a parent, we are thrust into a new role as
            a teacher and have to balance work, school and life. This app will
            help organize our kids/students daily required activities so we can
            make sure they are meeting their school goals.{" "}
          </p>
          <img
            src={require("../../Images/pngwave.png")}
            alt="apple and books"
          />
        </section>

        <section className="school-button">
          <Link to="school-logs">
            <button className="landing-button" type="button">
              Let's get started
            </button>
          </Link>
        </section>
      </main>
    </div>
  );
}
