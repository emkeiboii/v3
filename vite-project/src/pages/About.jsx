import Footer from "../ui/Footer";
import DateDesc from "../ui/DateDesc";
import NavBar from "../ui/NavBar";

function About() {
  return (
    <div className="page">
      <NavBar />
      <div className="container-vertical full" id="about">
        <div className="container">
          <h2>About</h2>
          <div>
            <DateDesc
              date={"2022"}
              role={"Intern"}
              job={"DoppioQuarto"}
              desc={`Created visually appealing graphic assets for the agency's website.`}
            />
            <hr />
            <DateDesc
              date={"2023"}
              role={"Intern"}
              job={"Deltahedge"}
              desc={`Worked on improving assets such as icons to align with the platform's overall visual identity.
`}
            />
            <hr />
            <DateDesc
              date={"2024"}
              role={"Graphic Designer"}
              job={"SealColor"}
              desc={`Created company logo to visually represent its elegant and traditional identity.
`}
            />

            <DateDesc
              role={"Web Designer"}
              job={"Centro Evangelico Isola"}
              desc={`Collaborated with the team on the Figma project prototype, enhancing the user interface and experience.`}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
