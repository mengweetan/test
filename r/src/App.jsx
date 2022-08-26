import "./App.css";
import GradeTracker from "./components/GradeTracker";
import {useState, useEffect} from "react";
import styled from "styled-components";
import error_img from "./error.png";
import repeat_img from "./retry.png";
function App() {
  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
  `;

  const StudentBoxContainer = styled.div`
    display: flex;
    text-align: center;
    flex-wrap: wrap;
  `;

  const ErrorBox = styled.div`
    height: 100vh;
    width: 100vw;
  `;

  const Button = styled.button`
    text-align: center;

    width: 210px;
    border-radius: 10px;
    background-color: #ffffff;
    border: 2px solid #d9d9d9;
    margin: 10px;

    padding: 10px 0px 5px 0px;
  `;
  const ButtonItem = styled.span`
    text-align: left;

    width: 50%;
  `;
  const ButtonItemLeft = styled.span`
    text-align: right;
    padding: 5px;

    width: 45%;
  `;
  const [loading, setLoading] = useState(true);
  const [loadingError, setError] = useState(false);
  const [groupedStudents, setgroupedStudents] = useState({});
  useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch("http://localhost:8000/students");

      const started = Date.now();
      response = await response.json();

      const elapsed = Date.now() - started;
    const delayFurther = 3000 - elapsed;
    if (delayFurther > 0) {
        await new Promise(r => setTimeout(r, delayFurther));
    }


      let group_students = await response.reduce((group, response) => {
        const {student_id} = response;
        group[student_id] = group[student_id] ?? [];
        group[student_id].push(response);
        return group;
      }, {});

      setgroupedStudents(group_students);
      setLoading(false);
    }

    try {
      fetchMyAPI();
    } catch (e) {
      console.log("error");
      setError(true);
    }
  }, []);

  const try_again = () => {
    window.location.reload(false);
  };

  return (
    <div className="App">
      <Title>Students</Title>

      <StudentBoxContainer>
        {loadingError ? (
          <ErrorBox>
            <img src={error_img} className="App-logo" alt="logo" />
            <br />
            <br />
            <br />

            <Button onClick={try_again}>
              <img src={repeat_img} />
            </Button>
          </ErrorBox>
        ) : (
          Object.keys(groupedStudents).map(d => (
            <GradeTracker key={d} id={d} data={groupedStudents[d]} />
          ))
        )}
      </StudentBoxContainer>
      <div>{loading ? "Loading...." : ""} </div>
    </div>
  );
}

export default App;
