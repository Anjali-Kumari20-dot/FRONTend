import { useState } from "react";
export default function Form() {
  let [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    password: "",
  });

  // let handleNameChange = (event) => {
  //   setFullName(event.target.value);
  // };

  // let handleUserName = (event) => {
  //   setUserName(event.target.value);
  // };

  let handleInputChange = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);

    setFormData({
      fullName: "",
      userName: "",
      password: "",
    });
  };

  return (
    <form action="">
      <label htmlFor="fullName">Full Name</label>
      <input
        type="text"
        placeholder="Enter full name"
        value={formData.fullName}
        id="fullName"
        name="fullName"
        onChange={handleInputChange}
      />

      <br />
      <br />

      <label htmlFor="userName">User Name</label>
      <input
        type="text"
        placeholder="Enter user name"
        value={formData.userName}
        id="userName"
        name="userName"
        onChange={handleInputChange}
      />

      <br />
      <br />

      <label htmlFor="password">Password</label>
      <input
        type="text"
        placeholder="Enter user name"
        value={formData.password}
        id="password"
        name="password"
        onChange={handleInputChange}
      />

      <br />
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
}
