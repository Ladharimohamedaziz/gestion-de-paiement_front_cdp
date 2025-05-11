import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Nav from "../../components/navbar/navbar";
const Profile = ({ name, email, role, extraData = {} }) => {
  return (
    //
    <div>
      <Nav />
      <div className="flex justify-center mb-4">
        <h2 className="text-3xl font-bold text-gray-800">Profile</h2>
      </div>
      <div className="flex justify-center mb-4">
        <img
          src="https://i.pravatar.cc/100"
          alt="Profile"
          className="rounded-full w-24 h-24 mx-auto mb-4"
        />
      </div>

    </div>
  );
};
export default Profile;

{
  /* <div>
        <img
          src="https://i.pravatar.cc/100"
          alt="Profile"
          className="rounded-full w-24 h-24 mx-auto mb-4"
        />
      </div>
      <div className="flex justify-center mb-4">
        <h2 className="text-3xl font-bold text-gray-800">Name: {name}</h2>
      </div>
      <div className="flex justify-center mb-4">
        <p className="text-gray-600 text-lg">email: {email}</p>
      </div>
      <div className="flex justify-center mb-4">
        <p className="text-gray-500 text-lg">Role: {role}</p>
      </div>
      <div className="flex justify-center mb-4">
        {role === "admin" && (
          <div className="text-sm text-blue-700 space-y-1">
            <p>Users Managed: {extraData.usersManaged}</p>
          </div>
        )}

        {role === "student" && (
          <div className="text-sm text-green-700 space-y-1">
            <p>Grade: {extraData.grade}</p>
            <p>Courses: {extraData.courses?.join(", ") || "N/A"}</p>
          </div>
        )}

        {role === "teacher" && (
          <div className="text-sm text-purple-700 space-y-1">
            <p>Department: {extraData.department}</p>
            <p>Subjects: {extraData.subjects?.join(", ") || "N/A"}</p>
          </div>
        )}
      </div> */
}
