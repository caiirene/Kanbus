
import axios from "axios";
import React, { useEffect, useState } from "react";


function WorkingWithObjects() {

    const [assignment, setAssignment] = useState({
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10",
        completed: true,
        score: 98,
    });
    const URL = "https://five610-node-caiirene.onrender.com/a5/assignment";
    const fetchAssignment = async () => {
        const response = await axios.get(`${URL}`);
        setAssignment(response.data);
        console.log("hhhhhhhh");
    };
    const updateTitle = async () => {
        const response = await axios
            .get(`${URL}/title/${assignment.title}`);
        setAssignment(response.data);
        console.log(response.data);
    };
    useEffect(() => {
        fetchAssignment();
    }, []);



    return (
        <div>
            <h1 style={{ color: "orange" }}>-------Working With Objects----</h1>
            <h4 style={{ color: "lightblue" }}> Retrieving Objects</h4>
            <a href="https://five610-node-caiirene.onrender.com/a5/assignment"
                className="btn btn-danger me-2">
                Get Assignment
            </a>
            <br />
            <h4 style={{ color: "lightblue" }}>Retrieving Properties</h4>
            <a
                href="https://five610-node-caiirene.onrender.com/a5/assignment/title"
                className="btn btn-danger me-2">
                Get Title
            </a>
            <br />

            <h4 style={{ color: "lightblue" }}>Modifying Properties</h4>
            <a
                href={`${URL}/title/${assignment.title}`}
                className="btn btn-danger me-2 "
            >
                Update Title
            </a>
            <br />
            <input
                onChange={(e) => setAssignment({
                    ...assignment,
                    title: e.target.value
                })}
                value={assignment.title}
                className="form-control mb-2 w-75"
                type="text"
            />

            <button onClick={updateTitle}
                className="w-100 btn btn-danger mb-2">
                Update Title to: {assignment.title}
            </button>
            <button onClick={fetchAssignment}
                className="w-100 btn btn-danger mb-2">
                Fetch Assignment
            </button>

            <a
                href={`${URL}/score/${assignment.score}`}
                className="btn btn-danger me-2 "
            >
                Update score
            </a>
            <br />
            <input
                onChange={(e) => setAssignment({
                    ...assignment,
                    score: e.target.value
                })}
                value={assignment.score}
                className="form-control mb-2 w-75"
                type="text"
            />

            <a
                href={`${URL}/completed/${assignment.completed}`}
                className="btn btn-danger me-2 "
            >
                Update completed
            </a>
            <br />
            <input
                onChange={(e) => setAssignment({
                    ...assignment,
                    completed: e.target.checked  // 使用 checked 而不是 value
                })}
                checked={assignment.completed}  // 使用 checked 属性而不是 value
                type="checkbox"  // 更改为 checkbox 类型
            />


        </div>
    );
}
export default WorkingWithObjects;