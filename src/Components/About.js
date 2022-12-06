import Graph from "./Graph";
import { useState } from "react";
export default function About() {

  const [physics, setPhysics] = useState(0);
  const [chemistry, setChemistry] = useState(0);
  const [maths, setMaths] = useState(0);
  const [data, setData] = useState({});

  function phy(e) {
    // console.log(e.target.value);
    setPhysics(e.target.value);
  }
  function chm(e) {
    // console.log(e.target.value);
    setChemistry(e.target.value);
  }
  function mts(e) {
    // console.log(e.target.value);
    setMaths(e.target.value);
  }
  function myfunc() {
    var total = parseInt(physics) + parseInt(chemistry) + parseInt(maths);
    var percentage = (total / 300) * 100;
    console.log(percentage);
    console.log(total);
    // console.log('object');
    setData({ a: physics, b: chemistry, c: maths, d: total, e: percentage })
    console.log(data);



  }
  return (
    <div className="container">

      <input type="text" placeholder="Physics" className="form-control mb-2" onChange={phy} />
      <input type="text" placeholder="Chemistry" className="form-control mb-2" onChange={chm} />
      <input type="text" placeholder="Maths" className="form-control mb-2" onChange={mts} />
      <button className="btn btn-primary mt-2" onClick={myfunc}>Submit</button>
      {/* {physics}{chemistry}{maths} */}

      <Graph result={data} />
    </div>
  )
}
