import React from "react";
import { useNavigate } from "react-router-dom";
// import Nav from "../../../components/navbar/navbar";
import { faker } from "@faker-js/faker";
import UserManagement from "../../../../utils/userManagement/UserManagment";

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
    navigate("/admin/add-user"); 
  };

  return (
    <div>
      <UserManagement
        users={users}
        roles={["Admin"]}
        onAddUserClick={handleAddUserClick}
      />
    </div>
  );
}

export default AdminManagement;
