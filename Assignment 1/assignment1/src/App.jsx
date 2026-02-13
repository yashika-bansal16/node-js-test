import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [college, setCollege] = useState({});

  useEffect(() => {
    fetch("http://localhost:5000/college")
      .then((res) => res.json())
      .then((data) => setCollege(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {/* Menu Bar */}
      <nav className="navbar">
        <h3>Home</h3>
        <h3>About</h3>
        <h3>Contact</h3>
      </nav>

      {/* College Info */}
      <div className="container">
        <h1>{college.name}</h1>
        <p>Location: {college.location}</p>
        <p>Established: {college.established}</p>

        <img
  src="https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/dmzf8yle9vzdqyo2emwt"
          alt="College"
        />
      </div>
    </>
  );
}

export default App;
