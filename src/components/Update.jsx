/* eslint-disable no-unused-vars */
import React from "react";
import { useLoaderData } from "react-router-dom";

const Update = () => {
  const loaderData = useLoaderData();

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    console.log(name, email);
    const updatedUser = { name, email };

    fetch(`http://localhost:5000/users/${loaderData._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert("user update successfully");
        }
      });
  };

  return (
    <div>
      <h3>Update information of : {loaderData.name}</h3>
      <form onSubmit={handleUpdate}>
        <input type="text" name="name" defaultValue={loaderData?.name} id="" />
        <br />
        <input
          type="email"
          name="email"
          defaultValue={loaderData?.email}
          id=""
        />
        <br />
        <input type="submit" value="Add User" />
      </form>
    </div>
  );
};

export default Update;
