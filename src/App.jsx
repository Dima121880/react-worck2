import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// function App() {
//   const [Firstname, setFirstname] = useState("");
//   const [lastname, setlastname] = useState("");

//   const clear = () => {
//     setFirstname("");
//     setlastname("");
//   };
//   return (
//     <>
//       <input
//         type="text"
//         value={Firstname}
//         placeholder="Firstname"
//         onChange={(e) => setFirstname(e.target.value)}
//       />
//       <br />
//       <input
//         type="text"
//         value={lastname}
//         placeholder="lastname"
//         onChange={(e) => setlastname(e.target.value)}
//       />
//       <br />
//       {Firstname} {lastname}
//       <br />
//       <button onClick={() => clear()}>clear</button>
//       <br />
//       <div>
//         <a href="" target="_blank">
//           <img
//             src={
//               "https://tse2.mm.bing.net/th?id=OIP.JDa_1X-NqdM1K-bZxp99DQHaEo&pid=Api&P=0&h=220"
//             }
//             className="logo"
//             alt="Vite logo"
//           />
//         </a>
//         <a href="" target="">
//           <img
//             src={
//               "https://tse4.mm.bing.net/th?id=OIP.HxV79tFMPfBAIo0BBF-sOgHaEy&pid=Api&P=0&h=220"
//             }
//             className="logo react"
//             alt="React logo"
//           />
//         </a>
//         <a href="" target="_blank">
//           <img
//             src={
//               "https://tse3.mm.bing.net/th?id=OIP.rt-pujAJJlfsYntGE4rRAgHaE7&pid=Api&P=0&h=220"
//             }
//             className="logo"
//             alt="Vite logo"
//           />
//         </a>
//         <a href="" target="_blank">
//           <img
//             src={
//               "https://tse3.mm.bing.net/th?id=OIP.0iqvqUM-_MntTZp4CMBaigHaEK&pid=Api&P=0&h=220"
//             }
//             className="logo react"
//             alt="React logo"
//           />
//         </a>
//         <a href="" target="_blank">
//           <img
//             src={
//               "https://tse4.mm.bing.net/th?id=OIP.C2jx84-6xaPAth9E4dkzGAHaHa&pid=Api&P=0&h=220"
//             }
//             className="logo"
//             alt="Vite logo"
//           />
//         </a>
//       </div>
//     </>
//   );

// }

function App() {
  const [value, setvalue] = useState();

  const Options = [
    { label: "მწარმოებელი" },
    { label: "all", value: ["subaru", "mersedecs"] },
    { label: "mersedec" },
    {
      label: "subaru",
    },
  ];

  const search = () => {
    setvalue(
      <div
        className="cardiv"
        style={{
          border: "2px solid black",
          backgroundColor: "#a3c1ad",
          width: "200px",
          height: "300px",
          marginTop: "50px",
        }}
      >
        <a href="https://www.myauto.ge/ka/s/iyideba-manqanebi?vehicleType=0&bargainType=0&mansNModels=&currId=3&mileageType=1&page=1&query=subaru&layoutId=1">
          <img
            className="subaru"
            style={{
              width: "150px",
              height: "100px",
            }}
            src={
              "https://static.my.ge/myauto/photos/3/9/0/7/2/large/111270939_1.jpg?v=5"
            }
            className="logo"
            alt="logo"
          />
          <p
            className="gt86"
            style={{
              fontSize: "10px",
              transform: "translatey(-30px)",
              color: "black",
            }}
          >
            2016 Subaru BRZ Scion FR-S, Toyota 86 GT
          </p>
          <ul>
            <li
              className="ul"
              style={{
                listStyle: "none",
                color: "black",
                fontSize: "10px",
                transform: "translate(-70px, -26px)",
              }}
            >
              2.0 ბენზინი
            </li>
            <li
              className="ul2"
              style={{
                listStyle: "none",
                color: "black",
                fontSize: "10px",
                transform: "translate(-70px, -16px)",
              }}
            >
              ტიპტრონიკი
            </li>
            <li
              className="ul3"
              style={{
                listStyle: "none",
                color: "black",
                fontSize: "10px",
                transform: "translate(40px, -55px)",
              }}
            >
              99200 კმ
            </li>
            <li
              className="ul4"
              style={{
                listStyle: "none",
                color: "black",
                fontSize: "10px",
                transform: "translate(40px, -40px)",
              }}
            >
              მარცხენა
            </li>
            <li
              className="ul5"
              style={{
                listStyle: "none",
                color: "black",
                fontSize: "20px",
                transform: "translatey( -20px)",
              }}
            >
              30,500 $
            </li>
          </ul>
        </a>
        {/* <div
          className="cls63"
          style={{
            border: "1px solid red",
            width: "600px",
            height: "200px",
          }}
        >
          <a href="https://www.myauto.ge/ka/pr/112011839/iyideba-manqanebi-sedani-mercedes-benz-cls-450-2019-benzini-tbilisi?offerType=basic&source=search">
            <img
              className="merso"
              style={{
                width: "120px",
                height: "100px",
              }}
              src="https://static.my.ge/myauto/photos/3/8/1/1/0/large/112011839_1.jpg?v=3"
              alt="cls63"
            />
            <p>2016 Mercedes-Benz CLS 400</p>
          </a>
        </div> */}
      </div>
    );
  };
  function handleselected(event) {
    setvalue(event.target.value);
  }
  return (
    <div
      className="display-flex justify-content-center mt-5 "
      style={{
        display: "flex",
        transform: "translatey(-20px)",
      }}
    >
      <a href="#" target="_blank" style={{ transform: "translatey(-30px)" }}>
        <img
          src={
            "https://tse2.mm.bing.net/th?id=OIP.VcnHDTUCO7k1D2X2Fm9LQgHaF7&pid=Api&P=0&h=220"
          }
          className="logo"
          alt="logo"
        />
      </a>
      <h5 className="h5">ავტომობილები</h5>
      <div className="w-50 p-3 border rounder ">
        <select
          className="formc-select"
          style={{
            transform: "translate(10px, 20px)",
          }}
          onChange={handleselected}
        >
          {Options.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
        <br />
        <p>{value}</p>
      </div>
      <button
        style={{
          color: "white",
          backgroundColor: "red",
          height: "50px",
          transform: "translate(20px, 10px)",
        }}
        onClick={() => search()}
      >
        ძებნა
      </button>
    </div>
  );
}

export default App;
