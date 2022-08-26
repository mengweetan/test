import styled from "styled-components";

function GradeTracker(props) {
  const StudentBox = styled.div`
    height: 210px;
    border-radius: 10px;
    background-color: #ffffff;
    border: 2px solid #d9d9d9;
    margin: 10px;
    box-sizing: border-box;
    padding: 10px;
  `;

  const Title = styled.h1`
    font-size: 12px;
    text-align: left;
    margin: 0px;
  `;

  const Id_Title = styled.h1`
    font-size: 48px;
    margin: 0px;
    text-align: center;
  `;
  const Course_box = styled.div`
    font-size: 12px;
    margin: 0px;
    text-align: left;
  `;

  const GpaBox = styled.div`
    position: relative;
    top: 5px;
    text-align: right;
    font-size: 12px;
  `;

  const Grade_span = styled.span`
    font-size: 50px;
  `;
  const average = arr => arr.reduce((p, c) => p + c, 0) / arr.length;

  let grades = props.data.map(d => d.course_grade);
  let ave_grade = average(grades).toFixed(1);

  const lastelem = (index, length) => {
    if (index + 1 === length) return null;
    else return ",";
  };
  return (
    <div className="GradeTracker">
      <StudentBox>
        <Title>student</Title>
        <Id_Title>{props.id}</Id_Title>
        <Course_box>
          {props.data.map((d, i) => (
            <span>
              {d.course_id}
              {lastelem(i, props.data.length)}{" "}
            </span>
          ))}
        </Course_box>
        <br />

        <br />
        <GpaBox>
          GPA <Grade_span>{ave_grade}</Grade_span>
        </GpaBox>
      </StudentBox>
    </div>
  );
}

export default GradeTracker;
