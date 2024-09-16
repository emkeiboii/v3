import WorkDescription from "./ui/WorkDescription";

function Works() {
  return (
    <div className="container-vertical full" id="works">
      <h2>Works</h2>

      <div className="works-container">
        <WorkDescription
          title={"Isola"}
          paragraph={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          }
          stack={"Figma  Webflow"}
          imgUrl={"/isolaSS.png"}
        />
      </div>

      <div className="works-container">
        <WorkDescription
          title={"SealColor"}
          paragraph={
            "Lorem ipsum dolor sit amet, cπonsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          }
          stack={"Illustrator"}
          imgUrl={"/sealColorSS.png"}
        />
        <WorkDescription
          title={"Personal Logo"}
          paragraph={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          }
          stack={"Illustrator"}
          imgUrl={"/markLajomSS.png"}
        />
      </div>
    </div>
  );
}

export default Works;
