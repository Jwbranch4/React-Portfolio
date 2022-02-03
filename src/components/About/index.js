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
            I am a web developer with experience primarily in JavaScript, but
            with an interest in the back-end of applications. In a previous
            career, I was a Pharmacy Technician. In my career as a Pharmacy
            Technician I learned how to work in a team environment, keep calm
            and excel in high stress situations, and have a professionalism
            while working in customer service. My passion for coding started in
            High School with going to state for Robotics club and being on the
            VICA web mastering team. I recently rekindled this passion by
            completing UT’s Coding Boot Camp. I am seeking a role as a web
            developer at a company where I can learn, grow, and continue to
            master the craft.
          </article>
        </div>
      </div>
    </div>
  );
}

export default About;
