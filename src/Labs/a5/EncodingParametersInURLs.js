import React, { useEffect, useState } from "react";
import axios from "axios";



function EncodingParametersInURLs() {
  const API = "https://five610-node-caiirene.onrender.com"
  const [a, setA] = useState(34);
  const [b, setB] = useState(23);

  const [result, setResult] = useState(0);

  const fetchSum = async (a, b) => {
    try {
      const response = await axios.get(`https://five610-node-caiirene.onrender.com/a5/add/${a}/${b}`);
      setResult(response.data);
    } catch (error) {
      console.error('Error fetching sum:', error);
    }
  };
  
  const fetchSubtraction = async (a, b) => {
    const response = await axios.get(
      `https://five610-node-caiirene.onrender.com/a5/subtract/${a}/${b}`);
    setResult(response.data);
  };


  const [welcome, setWelcome] = useState("");
  const fetchWelcome = async () => {
    const response = await axios.get("https://five610-node-caiirene.onrender.com/a5/welcome");
    setWelcome(response.data);
  };
  useEffect(() => {
    fetchWelcome();
  }, []);



  return (
    <div>
      <h1 style={{ color: "orange" }}>-----Encoding Parameters In URLs----</h1>
      <h4 style={{ color: "lightblue" }}>Calculator</h4>
      <input
        onChange={(e) => setA(e.target.value)}
        className="form-control" type="number" value={a} />
      <input
        onChange={(e) => setB(e.target.value)}
        className="form-control" type="number" value={b} />





      <input value={result}
        className="form-control mb-2" type="text" readOnly
      />
      <h3 style={{ color: "lightblue" }}>Fetch Result</h3>
      <button onClick={() => fetchSum(a, b)}
        className="btn btn-danger mb-2  w-100" >
        Fetch Summmm of {a} + {b}
      </button>
      <button onClick={() => fetchSubtraction(a, b)}
        className="btn btn-danger me-2 w-100" >
        Fetch Substraction of {a} - {b}
      </button>


      <h3 style={{ color: "lightblue" }}>Path Parameters</h3>
      <a
        href={`https://five610-node-caiirene.onrender.com/a5/add/${a}/${b}`}
        className="btn btn-danger">
        Add {a} + {b}
      </a>
      <a
        href={`https://five610-node-caiirene.onrender.com/a5/subtract/${a}/${b}`}
        className="btn btn-danger">
        Substract {a} - {b}
      </a>

      <hr />
      <h3 style={{ color: "lightblue" }}>Query Parameters</h3>
      <a
        href={`https://five610-node-caiirene.onrender.com/a5/calculator?operation=add&a=${a}&b=${b}`}
        className="btn btn-danger">
        Add {a} + {b}
      </a>
      <a
        href={`https://five610-node-caiirene.onrender.com/a5/calculator?operation=subtract&a=${a}&b=${b}`}
        className="btn btn-danger">
        Substract {a} - {b}
      </a>
      <br /><br />

      <h1 style={{ color: "orange" }}>-------Integrating React with APIs-----</h1>
      <h5 style={{ color: "lightblue" }}>Fetching Welcome</h5>
      <h6>{welcome}</h6>

    </div>
  );
}
export default EncodingParametersInURLs;