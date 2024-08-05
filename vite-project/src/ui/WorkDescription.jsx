/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
function WorkDescription({ title, paragraph, stack, imgUrl, code }) {
  console.log(code);
  return (
    <>
      <div className="work-section">
        <div className="description">
          <div>
            <h3>{title}</h3>
            <p>{paragraph}</p>
          </div>
          <span>{stack}</span>
        </div>
        <div className="img-btns">
          <img src={imgUrl} alt="Isola" />
        </div>
      </div>
    </>
  );
}

export default WorkDescription;
