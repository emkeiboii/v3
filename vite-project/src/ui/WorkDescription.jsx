/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
function WorkDescription({ title, children, linkName, linkRed, imgUrl }) {
  return (
    <>
      <div className="work-section">
        <div className="description">
          <div>
            <h3>{title}</h3>
            {children}
          </div>
          {linkRed && (
            <span>
              <a href={linkRed} target="_blank">
                {linkName}
              </a>
            </span>
          )}
        </div>
        <div className="img-btns">
          <img src={imgUrl} alt="Isola" />
        </div>
      </div>
    </>
  );
}

export default WorkDescription;
