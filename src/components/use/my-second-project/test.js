import React from "react";
import "./test.css";
import { useState } from "react";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import OpenAI from "openai";

const Test = ({ handleSphere, totalSum }) => {
  // variables
  const [formData, setFormData] = useState({
    option1: "",
    option2: [],
    option3: "",
    option4: "",
    option5: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [option2Choices, setOption2Choices] = useState([]);
  const [obtainedData, setObtainedData] = useState("");

  const [total, setTotal] = useState(totalSum);

  const [finalprice, setFinalPrice] = useState(0);

  const option1Labels = {
    "Option A": "E-commerce Apps",
    "Option B": "Social Networking Apps",
    "Option C": "Messaging Apps",
    "Option D": "Fitness and Health Apps",
    "Option E": "Education Apps",
    "Option F": "Travel and Navigation Apps",
    "Option G": "News and Magazines Apps",
    "Option H": "Entertainment Apps",
    "Option I": "Productivity Apps",
    "Option J": "Gaming Apps",
    "Option K": "Utilities Apps",
    "Option L": "Food and Drink Apps",
    "Option M": "Weather Apps",
    "Option N": "Finance Apps",
    "Option O": "Business Apps",
    "Option P": "Augmented Reality (AR) Apps",
    "Option Q": "Dating Apps",
    "Option R": "Photo and Video Editing Apps",
    "Option S": "E-learning Apps",
    "Option T": "Home Automation Apps",
    "Option U": "Government and Public Service Apps",
  };

  const option1LabelsValues = {
    "E-commerce Apps": 1,
    "Social Networking Apps": 2,
    "Messaging Apps": 3,
    "Fitness and Health Apps": 4,
    "Education Apps": 5,
    "Travel and Navigation Apps": 6,
    "News and Magazines Apps": 7,
    "Entertainment Apps": 8,
    "Productivity Apps": 9,
    "Gaming Apps": 10,
    "Utilities Apps": 11,
    "Food and Drink Apps": 12,
    "Weather Apps": 13,
    "Finance Apps": 14,
    "Business Apps": 15,
    "Augmented Reality (AR) Apps": 16,
    "Dating Apps": 17,
    "Photo and Video Editing Apps": 18,
    "E-learning Apps": 19,
    "Home Automation Apps": 20,
    "Government and Public Service Apps": 21,
  };

  const option3LabelsValues = {
    Simple: 1,
    Standard: 2,
    Advanced: 3,
  };
  const option45LabelsValues = {
    Basic: 1,
    Standard: 2,
    Advanced: 3,
  };

  // const search = `${formData.option1},have,${formData.option2.join(', ')},${formData.option3},Complexity,${formData.option4},Design,${formData.option5},Testing"`
  const search = `${formData.option1} appliction has ,${formData.option2.join(
    ", "
  )}these are the features ,${formData.option3} Complexity ,${
    formData.option4
  } design ,${formData.option5} Testing `;

  const option2ChoicesMap = {
    "Option A": {
      "Product Catalog": 5,
      "Shopping Cart": 5,
      "Secure Checkout": 5,
      "User Accounts": 5,
      "Order History": 5,
      "Product Reviews and Ratings": 5,
      "Payment Gateway Integration": 5,
      Wishlists: 5,
      "Discounts and Promotions": 5,
      "Product Recommendations": 5,
    },
    "Option B": {
      "User Profiles": 5,
      "News Feed": 5,
      "Friends/Followers System": 5,
      "Posts and Updates": 5,
      "Messaging/Chat": 5,
      Notifications: 5,
      "Groups/Communities": 5,
      "Photo/Video Sharing": 5,
      Events: 5,
      "Privacy Settings": 5,
    },
    "Option C": {
      "Instant Messaging": 5,
      "Multimedia Messaging": 5,
      "Group Chats": 5,
      "Voice and Video Calls": 5,
      "Push Notifications": 5,
      "Stickers and Emojis": 5,
      "Read Receipts": 5,
      "Status Updates": 5,
      "Contact Sync": 5,
      "End-to-End Encryption": 5,
    },
    "Option D": {
      "Workout Plans": 5,
      "Activity Tracking": 5,
      "Nutrition Tracking": 5,
      "Goal Setting": 5,
      "Progress Charts": 5,
      "Social Sharing": 5,
      "Coaching and Guidance": 5,
      "Integration with Wearable Devices": 5,
      "Challenges and Competitions": 5,
      "Health Reminders": 5,
    },
    "Option E": {
      "Courses and Lessons": 5,
      "Quizzes and Assessments": 5,
      "Progress Tracking": 5,
      "Discussion Forums": 5,
      "Offline Access to Content": 5,
      "Certificates and Badges": 5,
      "In-App Messaging with Instructors": 5,
      "Collaborative Learning": 5,
      "Live Sessions": 5,
      "Resource Libraries": 5,
    },
    "Option F": {
      "Maps and Navigation": 5,
      "Trip Planning": 5,
      "Hotel and Flight Booking": 5,
      "Reviews and Ratings": 5,
      "Offline Maps": 5,
      "Weather Updates": 5,
      "Local Guides and Recommendations": 5,
      "Real-time Transport Information": 5,
      "Currency Converter": 5,
      "Travel Itineraries": 5,
    },
    "Option G": {
      "Articles and News Stories": 5,
      "Personalized News Feeds": 5,
      "Breaking News Alerts": 5,
      "Offline Reading": 5,
      Bookmarking: 5,
      "Categories and Topics": 5,
      "User Comments and Discussions": 5,
      "Multimedia Content (Images, Videos)": 5,
      "Shareable Content": 5,
      "Trending Stories": 5,
    },
    "Option H": {
      "Streaming (Video, Music, Podcasts)": 5,
      "User Playlists": 5,
      Recommendations: 5,
      "Offline Playback": 5,
      "Ratings and Reviews": 5,
      "Social Sharing": 5,
      "Personalized Content Suggestions": 5,
      "In-App Communities": 5,
      "Live Streaming (if applicable)": 5,
      "Interactive Content": 5,
    },
    "Option I": {
      "To-Do Lists": 5,
      "Calendar and Events": 5,
      "Notes and Document Storage": 5,
      "Task Reminders": 5,
      "Collaboration and Sharing": 5,
      "Time Tracking": 5,
      "File Management": 5,
      "Goal Setting and Tracking": 5,
      "Password Manager": 5,
      "Offline Access to Documents": 5,
    },
    "Option J": {
      "Game Levels and Challenges": 5,
      "Multiplayer Modes": 5,
      "In-App Purchases": 5,
      "Achievements and Leaderboards": 5,
      "Social Integration": 5,
      "Push Notifications for Updates": 5,
      "Virtual Goods and Currency": 5,
      "Customizable Avatars": 5,
      "Storyline and Quests": 5,
      "Tutorials and Help Guides": 5,
    },
    "Option K": {
      "Tools (Flashlight, Calculator, etc.)": 5,
      "QR Code Scanner": 5,
      "Unit Converters": 5,
      "Language Translators": 5,
      "Barcode Scanner": 5,
      "Note-Taking": 5,
      "Compass and GPS Tools": 5,
      "Battery Optimization": 5,
      "System Cleaner": 5,
      "Accessibility Features": 5,
    },
    "Option L": {
      "Menu and Item Listings": 5,
      "Online Ordering": 5,
      "Reservation System": 5,
      "Reviews and Ratings": 5,
      "Loyalty Programs": 5,
      "Customizable Orders": 5,
      "Delivery Tracking": 5,
      "Nutrition Information": 5,
      "Special Offers and Discounts": 5,
      "Cooking Recipes (if applicable)": 5,
    },
    "Option M": {
      "Real-Time Weather Updates": 5,
      "Hourly and Daily Forecasts": 5,
      "Severe Weather Alerts": 5,
      "Interactive Maps": 5,
      "Historical Weather Data": 5,
      "Multiple Location Tracking": 5,
      "Customizable Units": 5,
      "Sunrise and Sunset Times": 5,
      "Weather Radar": 5,
      "Widget Support": 5,
    },
    "Option N": {
      "Account Management": 5,
      "Transaction History": 5,
      "Budget Tracking": 5,
      "Bill Payments": 5,
      "Investment Tracking": 5,
      "Alerts for Low Balances": 5,
      "Savings Goals": 5,
      "Financial Calculators": 5,
      "Credit Score Monitoring": 5,
      "Receipt Scanning": 5,
    },
    "Option O": {
      "Team Collaboration": 5,
      "File Sharing": 5,
      "Project Management": 5,
      "Video Conferencing": 5,
      "Document Editing and Collaboration": 5,
      "Calendar and Scheduling": 5,
      "CRM Integration": 5,
      "Employee Directory": 5,
      "Analytics and Reporting": 5,
      "In-App Chat and Messaging": 5,
    },
    "Option P": {
      "AR Overlays": 5,
      "Object Recognition": 5,
      "Interactive 3D Models": 5,
      "Location-Based AR": 5,
      "Augmented Product Visualization": 5,
      "Games and Simulations": 5,
      "AR Navigation": 5,
      "Educational AR Experiences": 5,
      "Virtual Try-Ons (for retail)": 5,
      "Social AR Experiences": 5,
    },
    "Option Q": {
      "User Profiles": 5,
      "Matchmaking Algorithms": 5,
      "Messaging and Chat": 5,
      "Profile Verification": 5,
      Geolocation: 5,
      "Privacy Controls": 5,
      "Virtual Gifts": 5,
      "Swipe Features (if applicable)": 5,
      "Video Profiles": 5,
      "Date Planning Tools": 5,
    },
    "Option R": {
      "Filters and Effects": 5,
      "Cropping and Resizing": 5,
      "Text Overlays": 5,
      "Collage Maker": 5,
      "Stickers and Emojis": 5,
      "Drawing Tools": 5,
      "Blur and Focus Effects": 5,
      "Background Removal": 5,
      "Beauty Filters": 5,
      "Video Trimming and Editing": 5,
    },
    "Option S": {
      "Course Enrollment": 5,
      "Video Lectures": 5,
      "Interactive Quizzes": 5,
      "Assignments and Assessments": 5,
      "Progress Tracking": 5,
      "Discussion Forums": 5,
      "Certificates and Diplomas": 5,
      "In-App Communication with Instructors": 5,
      "Peer Reviews (if applicable)": 5,
      "Offline Learning Materials": 5,
    },
    "Option T": {
      "Device Control (Lights, Thermostats, etc.)": 5,
      "Automation Rules": 5,
      "Security Camera Integration": 5,
      "Energy Usage Monitoring": 5,
      "Voice Control": 5,
      "Remote Access": 5,
      "Notifications for Events": 5,
      "Scene Creation": 5,
      "Smart Lock Integration": 5,
      "Integration with IoT Devices": 5,
    },
    "Option U": {
      "Public Service Information": 5,
      "Notifications and Alerts": 5,
      "Access to Government Services": 5,
      "Interactive Maps": 5,
      "Reporting Tools (for civic issues)": 5,
      "Voting Information": 5,
      "Emergency Contacts": 5,
      "Document Submission": 5,
      "Event Calendars": 5,
      "Accessibility Features": 5,
    },
  };

  const calculatePrice = () => {
    if (total > 0) {
      setFinalPrice(0);
      if (total >= 1 && total <= 10) {
        setFinalPrice(100);
      } else if (total >= 11 && total <= 20) {
        setFinalPrice(200);
      } else if (total >= 21 && total <= 30) {
        setFinalPrice(300);
      } else if (total >= 31 && total <= 40) {
        setFinalPrice(400);
      } else if (total >= 41 && total <= 50) {
        setFinalPrice(500);
      } else if (total >= 51 && total <= 60) {
        setFinalPrice(600);
      } else if (total >= 61 && total <= 70) {
        setFinalPrice(700);
      } else if (total >= 71 && total <= 80) {
        setFinalPrice(800);
      } else if (total >= 81 && total <= 90) {
        setFinalPrice(900);
      } else if (total >= 91 && total <= 100) {
        setFinalPrice(1000);
      }
    }
  };

  useEffect(() => {
    if (formData.option1 !== "" && formData.option1 !== "default") {
      setTotal(0);

      option1LabelsValues[formData.option1] !== undefined &&
        setTotal(
          (prevTotal) => prevTotal + option1LabelsValues[formData.option1]
        );

      option3LabelsValues[formData.option3] !== undefined &&
        setTotal(
          (prevTotal) => prevTotal + option3LabelsValues[formData.option3]
        );

      option45LabelsValues[formData.option4] !== undefined &&
        setTotal(
          (prevTotal) => prevTotal + option45LabelsValues[formData.option4]
        );

      option45LabelsValues[formData.option5] !== undefined &&
        setTotal(
          (prevTotal) => prevTotal + option45LabelsValues[formData.option5]
        );

      const foundKey = Object.entries(option1Labels).find(
        ([key, value]) => value === formData.option1
      );

      const obtainedArray = option2ChoicesMap[foundKey[0]];

      for (let each of formData.option2) {
        Object.entries(obtainedArray).find(
          ([key, value]) =>
            key === each && setTotal((prevTotal) => prevTotal + value)
        );
      }
    }
  }, [formData]);

  useEffect(() => {
    if (total > 0) {
      calculatePrice();
    }
  }, [total]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // console.log(value)

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    // setFormData({
    //   ...formData, name : value
    // });

    setSubmitted(false);

    const selectedOption = e.target.value;

    if (selectedOption === "default") {
      toast.error("Please select an option", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }

    const updatedOption2ChoicesMap = {};
    for (const key in option2ChoicesMap) {
      const value = option1Labels[key];
      if (value) {
        console.log(value);
        updatedOption2ChoicesMap[value] = option2ChoicesMap[key];
      }
    }

    if (name === "option1") {
      // Set choices for Option 2 based on Option 1 selection
      const selectedOption2Choices = updatedOption2ChoicesMap[value] || [];
      setOption2Choices(selectedOption2Choices);
    }
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    const updatedOptions = checked
      ? [...formData.option2, value]
      : formData.option2.filter((option) => option !== value);

    setFormData({
      ...formData,
      option2: updatedOptions,
    });
    setSubmitted(false);
    // ... (existing logic for checkbox change)
  };

  const handleSubmit = (e) => {
    setSubmitted(true);
  };

  // const fetchData = async () => {
  //   try {
  //     const openai = new OpenAI({
  //       apiKey: "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",
  //     });
  //     const chatCompletion = await openai.chat.completions.create({
  //       messages: [{ role: "user", content: search }],
  //       model: "gpt-3.5-turbo",
  //     });
  //     console.log(chatCompletion);
  //   } catch (error) {
  //     console.log("network error", error);
  //   }
  // };

  const fetchData = async () => {
    const apiKey = "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";
    const apiEndpoint =
      "https://api.openai.com/v1/engines/gpt-3.5-turbo-instruct/completions";

    try {
      const reqConfigure = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          prompt:
            search +
            "  give me scope of the project based on the input i shared",
          max_tokens: 100,
        }),
      };

      const response = await fetch(`${apiEndpoint}`, reqConfigure);

      if (!response.ok) {
        setObtainedData("Network response was not ok");
        throw new Error("Network response was not ok");
      } else {
        const data = await response.json();

        setObtainedData(data.choices[0].text.trim());
        return data.choices[0].text.trim();
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setObtainedData(error);
      return null;
    }
  };

  useEffect(() => {
    const fetchDataOnSubmit = async () => {
      const { option1 } = formData;
      if (submitted) {
        await fetchData(option1);
      }
    };

    fetchDataOnSubmit();
  }, [formData, submitted]);

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div className="test-main-container">
        <h2>App Cost Caluclator</h2>

        <div className="main1">
          <div className="page-container section">
            <form class="styled-form" onSubmit={handleSubmit}>
              <div className="content1">
                <div className="dropbox1">
                  <p> APP Type</p>

                  <select
                    id="option1"
                    name="option1"
                    value={formData.option1}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="default">Click on your preference</option>
                    <option>E-commerce Apps</option>
                    <option>Social Networking Apps</option>
                    <option>Messaging Apps</option>
                    <option>Fitness and Health Apps</option>
                    <option>Education Apps</option>
                    <option>Travel and Navigation Apps</option>
                    <option>News and Magazines Apps</option>
                    <option>Entertainment Apps</option>
                    <option>Productivity Apps</option>
                    <option>Gaming Apps</option>
                    <option>Utilities Apps</option>
                    <option>Food and Drink Apps</option>
                    <option>Weather Apps</option>
                    <option>Finance Apps</option>
                    <option>Business Apps</option>
                    <option>Augmented Reality (AR) Apps</option>
                    <option>Dating Apps</option>
                    <option>Photo and Video Editing Apps</option>
                    <option>E-learning Apps</option>
                    <option>Home Automation Apps</option>
                    <option>Government and Public Service Apps</option>
                  </select>
                </div>
              </div>

              {/* Option 2 */}
              <div className="checkbox">
                {Object.keys(option2Choices).map((option, index) => (
                  <div key={index}>
                    <label>
                      <input
                        type="checkbox"
                        name="option2"
                        value={option}
                        onChange={handleCheckboxChange}
                      />
                      {option}
                    </label>
                  </div>
                ))}

                {/* {option2Choices.map((choice, index) => (
              <div key={index}>
                <label>
                  <input
                    type="checkbox"
                    name="option2"
                    value={choice}
                    checked={formData.option2.includes(choice)}
                    onChange={handleCheckboxChange}
                  />
                  {choice}
                </label>
              </div>
            ))} */}
              </div>
              <div className="content2">
                <div className="optioninit">
                  {/* Dropdown for option 3 */}
                  <div class="dropbox3">
                    <p>Complexity</p>
                    {formData.option1 !== "" && formData.option2.length > 0 ? (
                      <select
                        id="option3"
                        name="option3"
                        value={formData.option3}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Click on your preference</option>
                        <option>Simple</option>
                        <option>Standard</option>
                        <option>Advanced</option>
                      </select>
                    ) : (
                      <select>
                        <option>Please Select Option1 & 2</option>
                      </select>
                    )}
                  </div>

                  {/* Dropdown for option 4 */}
                  <div class="dropbox4">
                    <p>DESIGN</p>
                    {formData.option1 !== "" &&
                    formData.option2.length > 0 &&
                    formData.option3 !== "" ? (
                      <select
                        id="option4"
                        name="option4"
                        value={formData.option4}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Click on your preference</option>
                        <option>Basic</option>
                        <option>Standard</option>
                        <option>Advanced</option>
                      </select>
                    ) : (
                      <select>
                        <option>Please Select Option1,2,3.</option>
                      </select>
                    )}
                  </div>

                  {/* Dropdown for option 5 */}
                  <div class="dropbox5">
                    <p>TESTING</p>
                    {formData.option1 !== "" &&
                    formData.option2.length > 0 &&
                    formData.option3 !== "" &&
                    formData.option4 !== "" ? (
                      <select
                        id="option5"
                        name="option5"
                        value={formData.option5}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Click on your preference</option>
                        <option>Basic</option>
                        <option>Standard</option>
                        <option>Advanced</option>
                      </select>
                    ) : (
                      <select>
                        <option>Please Select Option1,2,3,4</option>
                      </select>
                    )}
                  </div>
                </div>
                <div className="summary2">
                  <h3>Product Detais Description</h3>

                  <p> {search}</p>
                </div>
              </div>
            </form>
          </div>

          <div className="buttondiv">
            <button
              onClick={() => {
                if (formData.option1 === "") {
                  toast.error("Please select an option1", {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                  });
                } else if (!formData.option2.length > 0) {
                  toast.error("Please select at least one option", {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                  });
                } else if (formData.option3 === "") {
                  toast.error("Please select an option3", {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                  });
                } else if (formData.option4 === "") {
                  toast.error("Please select an option4", {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                  });
                } else if (formData.option5 === "") {
                  toast.error("Please select an option5", {
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
                  fetchData();
                  handleSubmit();
                  handleSphere(true);
                }
              }}
            >
              Confirm
            </button>
          </div>

          {submitted && (
            <div className="boxes">
              <div className="summary">
                <div>
                  <h3>Selected Options</h3>
                  <p>Option 1: {formData.option1}</p>
                  <p>
                    Option 2:{" "}
                    {formData.option2.length > 0
                      ? formData.option2.join(", ")
                      : "None selected"}
                  </p>
                  <p>Option 3: {formData.option3}</p>
                  <p>Option 4: {formData.option4}</p>
                  <p>Option 5: {formData.option5}</p>
                </div>
              </div>

              <div className="amount">
                <div className="amountlogo">
                  <h3 className="logoforh3">Andriod App</h3>
                  {/* <img src="/andriod.png" alt="Android" /> */}
                </div>

                <p>15 Designer Days (3 Weeks)</p>
                <p>34 Developer Days (6.8 Weeks)</p>

                <h2> ₹ {finalprice + totalSum} </h2>
              </div>
            </div>
          )}
        </div>

        {obtainedData !== "" && (
          <div className="summarygpt">
            <h3>Product Details Description</h3>
            <p>{obtainedData}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Test;
