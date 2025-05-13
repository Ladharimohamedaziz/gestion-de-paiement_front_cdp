import React from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../../../components/navbar/navbar";
import UserManagement from "../../../utils/UserManagement/UserManagment";
import { faker } from "@faker-js/faker";

function AdminManagement() {
  const navigate = useNavigate();
  const className = "C1";

  const users = Array.from({ length: 6 }, () => ({
    name: faker.person.fullName(),
    email: faker.internet.email(),
    role: "Admin",
    class: className,
  }));

  const handleAddUserClick = () => {
    navigate("/addAdmin"); 
  };

  return (
    <div>
      <Nav />
      <UserManagement
        users={users}
        roles={["Admin"]}
        onAddUserClick={handleAddUserClick}
      />
    </div>
  );
}

export default AdminManagement;
