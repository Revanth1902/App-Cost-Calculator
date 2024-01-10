import { useState } from "react";
import "./mainscreen.css";

import "./test.css";

import Test from "./test.js";
import { ToastContainer, toast } from "react-toastify";

const MainScreen = ({ handleUseCss }) => {
  const [selectedScreen, setSelectedScreen] = useState("MainScreen");
  const [input2, setInput2] = useState("");
  const [input4, setInput4] = useState("");
  const [radio3, setRadio3] = useState("");
  const [radio5, setRadio5] = useState("");
  const [radio6, setRadio6] = useState("");
  const [radio7, setRadio7] = useState("");
  const [radio8, setRadio8] = useState("");
  const [radio9, setRadio9] = useState("");
  const [radio10, setRadio10] = useState("");
  const [radio11, setRadio11] = useState("");
  const [radio12, setRadio12] = useState("");
  const [radio13, setRadio13] = useState("");
  const [radio14, setRadio14] = useState("");
  const [input1, setInput1] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [totalSum, setTotalSum] = useState(0);

  const [selectedOptions, setSelectedOptions] = useState({});

  const [sphereVisible, setSphere] = useState(true);

  const areAllSelected = () => {
    if (input1 === "") {
      toast.error("Please Enter your Emaid ID", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else if (input2 === "") {
      toast.error("Enter Your Basic Details Of Your APP", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else if (input4 === "") {
      toast.error("Enter the Description of your APP", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else if (radio3 === "") {
      toast.error("Enter the Operating System of Your APP", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else if (radio5 === "") {
      toast.error("Please Selecet the UI do you like", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else if (radio6 === "") {
      toast.error("Please Selecet the User and Account", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else if (radio7 === "") {
      toast.error("Please Selecet the User Generated Content", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else if (radio8 === "") {
      toast.error("Please Select the Mobile Specific Feature", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else if (radio9 === "") {
      toast.error("Please Select the Dates and Location", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else if (radio10 === "") {
      toast.error("Please Select the Social and Engagement", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else if (radio11 === "") {
      toast.error("Please Select the Billing and E-Commerce ", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else if (radio12 === "") {
      toast.error("Please slecet the Admin Feedback & Analytics", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else if (radio13 === "") {
      toast.error("Please Selecet the Extended Api and Integrations", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else if (radio14 === "") {
      toast.error("Please Selecet the Security Type ", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      setSphere(false);
      setSubmitted(true);
      handleUseCss(true);
      setSelectedScreen("Test");
    }
  };

  const handleSphere = (value) => {
    setSphere(value);
  };

  const radioValues = {
    os: { a: 5, b: 5, c: 5 },
    ui: { a: 5, b: 5, c: 5 },
    log: { a: 5, b: 5, c: 5, d: 5, e: 5, f: 5 },
    content: { a: 5, b: 5, c: 5, d: 5 },
    feature: { a: 5, b: 5, c: 5, d: 5, e: 5 },
    loc: { a: 5, b: 5, c: 5, d: 5 },
    social: { a: 5, b: 5, c: 5 },
    bill: { a: 5, b: 5, c: 5, d: 5 },
    feedback: { a: 5, b: 5, c: 5, d: 5 },
    api: { a: 5, b: 5, c: 5 },
    security: { a: 5, b: 5, c: 5 },
  };

  const handleInputChange = (e) => {
    const email = e.target.value;
    setInput1(email);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(email));
  };

  const handleSubmit = () => {
    console.log("Form submitted!");
  };

  const handleRadioChange = (group, value) => {
    const newSelectedOptions = { ...selectedOptions };

    if (group === "os" || group === "ui") {
      newSelectedOptions[group] = value;
    } else {
      if (!newSelectedOptions[group]) {
        newSelectedOptions[group] = [value];
      } else {
        const currentOptions = newSelectedOptions[group];
        const index = currentOptions.indexOf(value);
        if (index === -1) {
          newSelectedOptions[group] = [...currentOptions, value];
        } else {
          newSelectedOptions[group] = currentOptions.filter(
            (item) => item !== value
          );
        }
      }
    }

    setSelectedOptions(newSelectedOptions);

    let sum = 0;
    for (const key in newSelectedOptions) {
      if (newSelectedOptions.hasOwnProperty(key)) {
        const selectedOption = newSelectedOptions[key];
        if (Array.isArray(selectedOption)) {
          selectedOption.forEach((option) => {
            if (radioValues[key] && radioValues[key][option]) {
              sum += radioValues[key][option];
            }
          });
        } else {
          const option = newSelectedOptions[key];
          if (radioValues[key] && radioValues[key][option]) {
            sum += radioValues[key][option];
          }
        }
      }
    }

    console.log("Total Sum:", sum);
    setTotalSum(sum);
  };

  console.log(selectedOptions);

  // ... Rest of your component code

  return (
    <>
      <ToastContainer />
      <div className="normal">
        <div
          className={
            submitted === false
              ? "main-screen-container"
              : "main-screen-container3"
          }
        >
          <div>
            {selectedScreen === "MainScreen" ? (
              <div className="main">
                <h1 id="appcaluclator">App Caluclator</h1>
                <div className="form">
                  <form onSubmit={handleSubmit}>
                    <div className="email">
                      <p>Email Address</p>
                      <input
                        type="text"
                        placeholder="Enter Email Address"
                        value={input1}
                        onChange={handleInputChange}
                        style={{
                          borderColor: isValidEmail ? "initial" : "red",
                        }}
                      />
                      {!isValidEmail && (
                        <p
                          style={{
                            color: "#ff5555",
                            fontSize: "14px",
                            margin: "5px 0",
                            fontStyle: "italic",
                            opacity: isValidEmail ? 0 : 1,
                            transition: "opacity 0.3s ease-in-out",
                          }}
                        >
                          Please enter a valid email address
                        </p>
                      )}
                    </div>
                    <div className="appdetails">
                      <p>Basic Details about Your Dream App</p>
                      <input
                        type="text"
                        placeholder="Enter few speciality Of your app"
                        value={input2}
                        onChange={(e) => setInput2(e.target.value)}
                      />
                    </div>
                    <div className="descriptions">
                      <p>Description</p>
                      <input
                        type="text"
                        placeholder="Type Description"
                        value={input4}
                        onChange={(e) => setInput4(e.target.value)}
                      />
                    </div>
                    <div className="os">
                      <p>1. Operating System of App</p>
                      <div className="radiobtn1">
                        <label>
                          <input
                            type="radio"
                            name="os"
                            value="a"
                            checked={selectedOptions["os"] === "a"}
                            onChange={() => {
                              setRadio3("a"); // Update the radio3 state
                              handleRadioChange("os", "a"); // Handle the change in selectedOptions
                            }}
                          />
                          <p>Android</p>
                        </label>
                        <label>
                          <input
                            type="radio"
                            name="os"
                            value="b"
                            checked={selectedOptions["os"] === "b"}
                            onChange={() => {
                              setRadio3("b"); // Update the radio3 state
                              handleRadioChange("os", "b"); // Handle the change in selectedOptions
                            }}
                          />
                          <p>IOS (Apple)</p>
                        </label>
                        <label>
                          <input
                            type="radio"
                            name="os"
                            value="c"
                            checked={selectedOptions["os"] === "c"}
                            onChange={() => {
                              setRadio3("c"); // Update the radio3 state
                              handleRadioChange("os", "c"); // Handle the change in selectedOptions
                            }}
                          />
                          <p>Both (Flutter)</p>
                        </label>
                      </div>
                    </div>
                    <div className="ui">
                      <p>2. What Level of UI do you like?</p>
                      <div className="radiobtn2">
                        <label>
                          <input
                            type="radio"
                            name="ui"
                            value="a"
                            checked={selectedOptions.ui === "a"}
                            onChange={() => {
                              setRadio5("a"); // Update the radio5 state
                              handleRadioChange("ui", "a"); // Handle the change in selectedOptions
                            }}
                          />
                          <p>Simple</p>
                        </label>
                        <label>
                          <input
                            type="radio"
                            name="ui"
                            value="b"
                            checked={selectedOptions["ui"] === "b"}
                            onChange={() => {
                              setRadio5("b"); // Update the radio5 state
                              handleRadioChange("ui", "b"); // Handle the change in selectedOptions
                            }}
                          />
                          <p>Standard</p>
                        </label>
                        <label>
                          <input
                            type="radio"
                            name="ui"
                            value="c"
                            checked={selectedOptions["ui"] === "c"}
                            onChange={() => {
                              setRadio5("c"); // Update the radio5 state
                              handleRadioChange("ui", "c"); // Handle the change in selectedOptions
                            }}
                          />
                          <p>Advanced</p>
                        </label>
                      </div>
                    </div>
                    <div className="users">
                      <p>3. Users & Accounts</p>
                      <div className="radiobtn3">
                        <label>
                          <input
                            type="checkbox"
                            name="log"
                            value="a"
                            checked={selectedOptions.log?.includes("a")}
                            onChange={() => {
                              setRadio6("a"); // Update the radio6 state
                              handleRadioChange("log", "a"); // Handle the change in selectedOptions
                            }}
                          />
                          <p>Github Sign Up</p>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            name="log"
                            value="b"
                            checked={selectedOptions?.log?.includes("b")}
                            onChange={() => {
                              setRadio6("b"); // Update the radio6 state
                              handleRadioChange("log", "b"); // Handle the change in selectedOptions
                            }}
                          />
                          <p>Google Sign Up</p>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            name="log"
                            value="c"
                            checked={selectedOptions?.log?.includes("c")}
                            onChange={() => {
                              setRadio6("c"); // Update the radio6 state
                              handleRadioChange("log", "c"); // Handle the change in selectedOptions
                            }}
                          />
                          <p>Email / Password Sign Up</p>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            name="log"
                            value="d"
                            checked={selectedOptions?.log?.includes("d")}
                            onChange={() => {
                              setRadio6("d"); // Update the radio6 state
                              handleRadioChange("log", "d"); // Handle the change in selectedOptions
                            }}
                          />
                          <p>LinkedIn Sign Up</p>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            name="log"
                            value="e"
                            checked={selectedOptions?.log?.includes("e")}
                            onChange={() => {
                              setRadio6("e"); // Update the radio6 state
                              handleRadioChange("log", "e"); // Handle the change in selectedOptions
                            }}
                          />
                          <p>Twitter Sign Up</p>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            name="log"
                            value="f"
                            checked={selectedOptions?.log?.includes("f")}
                            onChange={() => {
                              setRadio6("f"); // Update the radio6 state
                              handleRadioChange("log", "f"); // Handle the change in selectedOptions
                            }}
                          />
                          <p>Facebook Sign Up</p>
                        </label>
                      </div>
                    </div>
                    <div className="content">
                      <p>4. User Generated Content</p>
                      <div className="radiobtn4">
                        <label>
                          <input
                            type="checkbox"
                            name="content"
                            value="a"
                            checked={selectedOptions?.content?.includes("a")}
                            onChange={() => {
                              setRadio7("a"); // Update the radio7 state
                              handleRadioChange("content", "a"); // Handle the change in selectedOptions
                            }}
                          />
                          <p>Tags</p>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            name="content"
                            value="b"
                            checked={selectedOptions?.content?.includes("b")}
                            onChange={() => {
                              setRadio7("b"); // Update the radio7 state
                              handleRadioChange("content", "b"); // Handle the change in selectedOptions
                            }}
                          />
                          <p>Ratings or Reviews</p>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            name="content"
                            value="c"
                            checked={selectedOptions?.content?.includes("c")}
                            onChange={() => {
                              setRadio7("c"); // Update the radio7 state
                              handleRadioChange("content", "c"); // Handle the change in selectedOptions
                            }}
                          />
                          <p>Media Manipulation</p>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            name="content"
                            value="d"
                            checked={selectedOptions?.content?.includes("d")}
                            onChange={() => {
                              setRadio7("d"); // Update the radio7 state
                              handleRadioChange("content", "d"); // Handle the change in selectedOptions
                            }}
                          />
                          <p>Searching</p>
                        </label>
                      </div>
                    </div>
                    <div className="feature">
                      <p>5. Mobile specific feature</p>
                      <div className="radiobtn5">
                        <label>
                          <input
                            type="checkbox"
                            name="feature"
                            value="a"
                            checked={selectedOptions?.feature?.includes("a")}
                            onChange={() => {
                              setRadio8("a"); // Update the radio8 state
                              handleRadioChange("feature", "a"); // Handle the change in selectedOptions
                            }}
                          />
                          <p>App Icon Design</p>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            name="feature"
                            value="b"
                            checked={selectedOptions?.feature?.includes("b")}
                            onChange={() => {
                              setRadio8("b"); // Update the radio8 state
                              handleRadioChange("feature", "b"); // Handle the change in selectedOptions
                            }}
                          />
                          <p>Device Sensor Data</p>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            name="feature"
                            value="c"
                            checked={selectedOptions?.feature?.includes("c")}
                            onChange={() => {
                              setRadio8("c"); // Update the radio8 state
                              handleRadioChange("feature", "c"); // Handle the change in selectedOptions
                            }}
                          />
                          <p>Cloud Syncing</p>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            name="feature"
                            value="d"
                            checked={selectedOptions?.feature?.includes("d")}
                            onChange={() => {
                              setRadio8("d"); // Update the radio8 state
                              handleRadioChange("feature", "d"); // Handle the change in selectedOptions
                            }}
                          />
                          <p>Health Data</p>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            name="feature"
                            value="e"
                            checked={selectedOptions?.feature?.includes("e")}
                            onChange={() => {
                              setRadio8("e"); // Update the radio8 state
                              handleRadioChange("feature", "e"); // Handle the change in selectedOptions
                            }}
                          />
                          <p>Barcodes or QR Codes</p>
                        </label>
                      </div>
                    </div>
                    <div className="loc">
                      <p>6. Dates & Location</p>
                      <div className="radiobtn6">
                        <label>
                          <input
                            type="checkbox"
                            name="loc"
                            value="a"
                            checked={selectedOptions?.loc?.includes("a")}
                            onChange={() => {
                              setRadio9("a"); // Update the radio9 state
                              handleRadioChange("loc", "a"); // Handle the change in selectedOptions
                            }}
                          />
                          <p>Display of Map data / Geolocation</p>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            name="loc"
                            value="b"
                            checked={selectedOptions?.loc?.includes("b")}
                            onChange={() => {
                              setRadio9("b"); // Update the radio9 state
                              handleRadioChange("loc", "b"); // Handle the change in selectedOptions
                            }}
                          />
                          <p>Bookings</p>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            name="loc"
                            value="c"
                            checked={selectedOptions?.loc?.includes("c")}
                            onChange={() => {
                              setRadio9("c"); // Update the radio9 state
                              handleRadioChange("loc", "c"); // Handle the change in selectedOptions
                            }}
                          />
                          <p>Calendaring</p>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            name="loc"
                            value="d"
                            checked={selectedOptions?.loc?.includes("d")}
                            onChange={() => {
                              setRadio9("d"); // Update the radio9 state
                              handleRadioChange("loc", "d"); // Handle the change in selectedOptions
                            }}
                          />
                          <p>Display of custom map markers/regions</p>
                        </label>
                      </div>
                    </div>
                    <div className="social">
                      <p>7.Social & Engagement</p>
                      <div className="radiobtn7">
                        <label>
                          <input
                            type="checkbox"
                            name="social"
                            value="a"
                            checked={selectedOptions?.social?.includes("a")}
                            onChange={() => {
                              setRadio10("a");
                              handleRadioChange("social", "a");
                            }}
                          />
                          <p>Social Sharing</p>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            name="social"
                            value="b"
                            checked={selectedOptions?.social?.includes("b")}
                            onChange={() => {
                              setRadio10("b");
                              handleRadioChange("social", "b");
                            }}
                          />
                          <p>Push to Facebook Opengraph</p>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            name="social"
                            value="c"
                            checked={selectedOptions?.social?.includes("c")}
                            onChange={() => {
                              setRadio10("c");
                              handleRadioChange("social", "c");
                            }}
                          />
                          <p>Push Notifications</p>
                        </label>
                      </div>
                    </div>
                    <div className="bill">
                      <p>8.Billing & Ecommerce</p>
                      <div className="radiobtn8">
                        <label>
                          <input
                            type="checkbox"
                            name="bill"
                            value="a"
                            checked={selectedOptions?.bill?.includes("a")}
                            onChange={() => {
                              setRadio11("a");
                              handleRadioChange("bill", "a");
                            }}
                          />
                          <p>Payment Information Collection</p>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            name="bill"
                            value="b"
                            checked={selectedOptions?.bill?.includes("b")}
                            onChange={() => {
                              setRadio11("b");
                              handleRadioChange("bill", "b");
                            }}
                          />
                          <p>Shopping Cart</p>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            name="bill"
                            value="c"
                            checked={selectedOptions?.bill?.includes("c")}
                            onChange={() => {
                              setRadio11("c");
                              handleRadioChange("bill", "c");
                            }}
                          />
                          <p>Payment Processing</p>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            name="bill"
                            value="d"
                            checked={selectedOptions?.bill?.includes("d")}
                            onChange={() => {
                              setRadio11("d");
                              handleRadioChange("bill", "d");
                            }}
                          />
                          <p>In-App Purchasing</p>
                        </label>
                      </div>
                    </div>
                    <div className="feedback">
                      <p>9.Feedback & Analytics</p>
                      <div className="radiobtn9">
                        <label>
                          <input
                            type="checkbox"
                            name="feedback"
                            value="a"
                            checked={selectedOptions?.feedback?.includes("a")}
                            onChange={() => {
                              setRadio12("a");
                              handleRadioChange("feedback", "a");
                            }}
                          />
                          <p>Intercom</p>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            name="feedback"
                            value="b"
                            checked={selectedOptions?.feedback?.includes("b")}
                            onChange={() => {
                              setRadio12("b");
                              handleRadioChange("feedback", "b");
                            }}
                          />
                          <p>User Analytics</p>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            name="feedback"
                            value="c"
                            checked={selectedOptions?.feedback?.includes("c")}
                            onChange={() => {
                              setRadio12("c");
                              handleRadioChange("feedback", "c");
                            }}
                          />
                          <p>Crash Reporting</p>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            name="feedback"
                            value="d"
                            checked={selectedOptions?.feedback?.includes("d")}
                            onChange={() => {
                              setRadio12("d");
                              handleRadioChange("feedback", "d");
                            }}
                          />
                          <p>Multilingual Support</p>
                        </label>
                      </div>
                    </div>
                    <div className="api">
                      <p>10.External APIs & Integrations</p>
                      <div className="radiobtn10">
                        <label>
                          <input
                            type="checkbox"
                            name="api"
                            value="a"
                            checked={selectedOptions?.api?.includes("a")}
                            onChange={() => {
                              setRadio13("a");
                              handleRadioChange("api", "a");
                            }}
                          />
                          <p>SMS Messaging</p>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            name="api"
                            value="b"
                            checked={selectedOptions?.api?.includes("b")}
                            onChange={() => {
                              setRadio13("b");
                              handleRadioChange("api", "b");
                            }}
                          />
                          <p>Phone Number Masking</p>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            name="api"
                            value="c"
                            checked={selectedOptions?.api?.includes("c")}
                            onChange={() => {
                              setRadio13("c");
                              handleRadioChange("api", "c");
                            }}
                          />
                          <p>Connect to one or more third-party services</p>
                        </label>
                      </div>
                    </div>
                    <div className="security">
                      <p>11.Security</p>
                      <div className="radiobtn11">
                        <label>
                          <input
                            type="checkbox"
                            name="security"
                            value="a"
                            checked={selectedOptions?.security?.includes("a")}
                            onChange={() => {
                              setRadio14("a");
                              handleRadioChange("security", "a");
                            }}
                          />
                          <p>Two Factor Authentication</p>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            name="security"
                            value="b"
                            checked={selectedOptions?.security?.includes("b")}
                            onChange={() => {
                              setRadio14("b");
                              handleRadioChange("security", "b");
                            }}
                          />
                          <p>Mail OTP</p>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            name="security"
                            value="c"
                            checked={selectedOptions?.security?.includes("c")}
                            onChange={() => {
                              setRadio14("c");
                              handleRadioChange("security", "c");
                            }}
                          />
                          <p>Message OTP</p>
                        </label>
                      </div>
                    </div>

                    {/* ... more radio will come heres full ga */}

                    <button type="button" onClick={areAllSelected}>
                      Submit
                    </button>

                    {/* <button type="button" onClick={() => setSelectedScreen("Test")}>Submit</button> */}
                  </form>
                </div>
              </div>
            ) : (
              <Test handleSphere={handleSphere} totalSum={totalSum} />
            )}
          </div>

          <img className="spear2" src="/spear.png" alt="spear" />

          <img
            className={sphereVisible ? "spear5" : "spear8"}
            src="/spear.png"
            alt="spear"
          />
        </div>
      </div>
    </>
  );
};

export default MainScreen;
