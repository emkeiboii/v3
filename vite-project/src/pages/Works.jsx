import Footer from "../ui/Footer";
import NavBar from "../ui/NavBar";
import WorkDescription from "../ui/WorkDescription";

function Works() {
  return (
    <div className="page">
      <NavBar />
      <div className="container-vertical full" id="works">
        <h2>Works</h2>
        <div>
          <div className="works-container">
            <WorkDescription
              title={"Isola"}
              linkName={"Check it out!"}
              linkRed={
                "https://www.figma.com/proto/M3LxVomaqFahFxKZQtzDGt/Isola---Prototipo?page-id=611%3A3125&node-id=611-4770&node-type=canvas&viewport=1007%2C315%2C0.02&t=pZCJsAUNB8Bv4u5w-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=611%3A4770&show-proto-sidebar=1"
              }
              imgUrl={"/isolaSS.png"}
            >
              <p>
                Working in a pair, we dedicated ourselves to creating a simple
                and intuitive website that can be easily navigated by users of
                all age groups. Our goal was to ensure a welcoming,
                user-friendly experience that reflects the warmth and
                inclusivity of Isola&apos;s environment. Every design choice was
                made ensuring that no one would feel overwhelmed or confused,
                regardless of their familiarity with technology.
              </p>
            </WorkDescription>
            <WorkDescription title={"SealColor"} imgUrl={"/sealColorSS.png"}>
              <p>
                We created a clean and elegant logo by merging the letters C and
                S to represent the initials of SealColor. SealColor is a sealing
                wax company that distributes both in Italy and internationally.
                The design is straightforward and memorable, reflecting the
                company&apos;s identity and focus.
              </p>
            </WorkDescription>
            <WorkDescription
              title={"Personal Logo"}
              imgUrl={"/markLajomSS.png"}
            >
              <p>
                This is my personal logo—simple, compact, and designed to be
                easily recognizable at any size. It reflects my approach to
                creating things, standing out from typical combined-letter logos
                with its simple and thoughtful design.
              </p>
            </WorkDescription>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Works;
