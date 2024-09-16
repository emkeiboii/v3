/* eslint-disable react/prop-types */
function DateDesc({ date, role, job, desc }) {
  return (
    <div className="date-desc">
      <p className="date">{date}</p>
      <div className={date ? "date-desc-job" : "date-desc-job no-date"}>
        <span>
          {role} at {job}
        </span>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default DateDesc;
