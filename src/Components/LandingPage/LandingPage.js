import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <div className="landing-page-container">
      <main role="main">
        <header role="banner">
          <h1>HomeSchooled Logo</h1>
        </header>

        <section>
          <h2>Welcome to HomeSchooled</h2>
          <p>
            Our schools have closed for the rest of the year due to the
            coronavirus pandemic. As a parent, we are thrust into a new role as
            a teacher and have to balance work, school and life. This app will
            help organize our kids/students daily required activities so we can
            make sure they are meeting their school goals.{" "}
          </p>
        </section>

        <section>
          <Link to="all-logs">
            <button type="button">Get to work</button>
          </Link>
        </section>
      </main>
    </div>
  );
}
