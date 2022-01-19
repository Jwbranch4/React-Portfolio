import React from "react";
import picture from "../../assets/images/picture.jpg";

function About() {
  return (
    <div className="aboutMe" id="about-me">
      <h2>About me</h2>
      <div className="aboutMeContainer">
        <div className="aboutMePicture">
          <img src={picture} alt="picture of James Branch" />
        </div>
        <div className="aboutMeArticle">
          <article>
            Hello, my name is James Branch and I am studying to be a full-stack
            developer at UT's Coding Boot Camp. Here I have a collection of
            projects that I have completed and plan to complete soon. If you
            have any questions or wish to talk you can contact me from the
            contact section of this website.
          </article>
        </div>
      </div>
    </div>
  );
}

export default About;
