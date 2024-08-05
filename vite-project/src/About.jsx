function About() {
  return (
    <div className="container half" id="about">
      <div className="about-container">
        <h2>About Me</h2>
        <p className="about-p">
          Hey! My name is Mark Lajom, after completing highschool as a graphic
          designer, I learned about the beautiful world of{" "}
          <span>web development</span>. Getting to know the basics of HTML, CSS
          and JavaScript thanks to free material on the internet such as{" "}
          <a href="https://www.theodinproject.com/" target="_blank">
            The Odin Project
          </a>{" "}
          and{" "}
          <a href="https://www.w3schools.com/" target="_blank">
            W3Schools
          </a>
          , i also dove deeper into React through a Udemy course.
          <br />
          <br />
          Web development is interesting but so is <span>web design</span>, as i
          also worked on Figma growing my knowledge on UI/UX and the platform
          itself.
        </p>
      </div>
    </div>
  );
}

export default About;
