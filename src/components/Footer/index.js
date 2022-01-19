import React from "react";

function Footer() {
  return (
    <footer className="contact" id="contact">
      <h2>Contact</h2>

      <nav>
        <ul>
          <li>
            <a
              href="https://twitter.com/intent/tweet?screen_name=jwbranch4&ref_src=twsrc%5Etfw"
              target="_blank"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/james-branch-6595b2218"
              target="_blank"
            >
              linkedin
            </a>
          </li>
          <li>
            <a href="https://github.com/Jwbranch4" target="_blank">
              github
            </a>
          </li>
          <li>
            <a href="mailto:jwbranch4@gmail.com" target="_blank">
              Email
            </a>
          </li>
          <li className="copyright">Copyright (c) 2021 Jwbranch4</li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
