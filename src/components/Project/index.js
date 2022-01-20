import React from "react";
import hero from "../../assets/images/Hero Plan my day.gif";
import justawear from "../../assets/images/JW-1.JPG";
import password from "../../assets/images/Password-Generator.png";
import work from "../../assets/images/work-day-scheduler.png";
import run from "../../assets/images/runBuddyScreenshot.png";
import horiseon from "../../assets/images/Screenshot.png";

function Project() {
  return (
    <div className="projects" id="projects">
      <h2>Projects</h2>
      <section className="cards">
        <article className="card firstCard">
          <h3>justAwear</h3>
          <a href="https://justawear-mern.herokuapp.com/" target="_blank">
            <img src={justawear} alt="landing page of justAwear website" />
          </a>
          <p>
            Just A Wear is proud to be the eCommerce provider of online clothing
            and apparel stores, selling all types of styles and accessories
            which are showcased on our website application with full product
            descriptions.
          </p>
        </article>
        <article className="card">
          <h3>Plan My Day</h3>
          <a href="https://rmartin1985.github.io/plan-my-day/" target="_blank">
            <img src={hero} alt="plan my day main logo" />
          </a>
          <p>
            We have created an application that will help get you out of your
            normal routine and get you out to explore something new. All you
            need to do is enter the name of the city you wish to search in and
            our app will give suggestions for popular museums, monuments, and
            restaurants along with some upcoming sporting events or concerts in
            the area. Each link is clickable to direct you to Google for more
            information about the site or to Ticketmaster to be able to buy
            tickets to that event.
          </p>
        </article>

        <article className="card">
          <h3>Javascript Random Generated Password</h3>
          <a
            href="https://jwbranch4.github.io/Password-Generator/"
            target="_blank"
          >
            <img
              src={password}
              alt="screenshot of Password Generating website"
            />
          </a>
          <p>
            This is a application that can be use to generate a random password
            based on criteria selected.
          </p>
        </article>

        <article className="card">
          <h3>Work-Day-Scheduler</h3>
          <a
            href="https://jwbranch4.github.io/Work-Day-Scheduler/"
            target="_blank"
          >
            <img src={work} alt="screen shot of work day scheduler" />
          </a>
          <p>
            A simple calendar application that allows a user to save events for
            each hour of the day. This app will run in the browser and feature
            dynamically updated HTML and CSS powered by jQuery.
          </p>
        </article>

        <article className="card">
          <h3>Run Buddy</h3>
          <a href="https://jwbranch4.github.io/run-buddy/" target="_blank">
            <img src={run} alt="screenshot of Run Buddy website" />
          </a>
          <p>
            Run Buddy is the first live project I completed. This showcases my
            use of html and css.
          </p>
        </article>
        <article className="card">
          <h3>Code Refactor</h3>
          <a href="https://jwbranch4.github.io/code-refactor/" target="_blank">
            <img src={horiseon} alt="screen shot of Horiseon website" />
          </a>
          <p>
            Horiseon was the first website I did code refactoring. This
            consisted of replacing source code with semantic HTML elements,
            updating HTML elements to follow a logical structure, adding alt
            attributes to image elements, and updating title elements to name of
            company
          </p>
        </article>
      </section>
    </div>
  );
}

export default Project;
