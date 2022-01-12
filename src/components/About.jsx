import React from "react";

function About() {
  return (
    <div class="middle-container" id="about">
      <div class="profile">
        <img
          src="https://pbs.twimg.com/profile_images/1422176803171360768/thGXaVP3_400x400.jpg"
          class="profile-img"
          alt="mohammed-profile-img"
        ></img>
        <h2>Hello.</h2>
        <p class="intro">
          I am an iOS and Web Developer. I'm the founder and CTO of The App
          Brewery. I ❤️ coffee .
        </p>
      </div>
      <hr></hr>
      <div class="skills">
        <h2>My Skills.</h2>
        <div class="skill-row">
          <img
            class="code-img"
            src="https://www.replinfosys.com/images/web-applications.png"
            alt="code-img"
          ></img>

          <h3>Design &amp; Development</h3>
          <p>
            I started learning to code when I was 12 years old because I wanted
            to make my own video games. Over time, I have gained a wealth of
            experience designing and developing mobile and web applications.
          </p>
        </div>
        <div class="skill-row">
          <img
            class="chilli-img"
            src="images/chillies.png"
            alt="chillies-img"
          ></img>

          <h3>Hot Wings Challenge</h3>
          <p>
            But my best skill is actually in eating hot wings. I am the
            undisputed of hot wing challenges. Ghost Peppers and Carolina
            Reapers are my favourite snacks.
          </p>
        </div>
      </div>
      <hr></hr>
      <div class="contact-me">
        <h2>Get In Touch</h2>
        <h3>If you love hot wings as much as I do.</h3>
        <p class="contact-message">
          Love hot wings as much as I do? Let's talk about how awesome they are!
          We can code while we eat hot wings!
        </p>
        {/* <a class="btn" href="mailto:programming812@gmail.com">
          CONTACT ME
        </a> */}
      </div>
      <p>Some Technologies I have work with</p>
      <div class="container">
        <div class="row align-items-start icon">
          <div class="fab fa-html5 htm col-sm">
            <p>Html</p>
          </div>
          <div class="fab fa-css3-alt css col-sm">
            <p>Css</p>
          </div>
          <div class="fab fa-js js align-self-end">
            <p>JavaScript</p>
          </div>
          <div class="fab fa-react react col-sm">
            <p>React</p>
          </div>
          <div class="fab fa-node node col-sm">
            <p>Node</p>
          </div>
          <div class="fas fa-database data align-self-end">
            <p>Database</p>
          </div>
          <div class="fab fa-android and col-sm">
            <p>Android</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
