import React from "react";
import UserDetails from "../../../../utils/UserManagement/userDetails";
import { faker } from "@faker-js/faker";

function AdminDetails () {
  return (
    <div>
      <UserDetails
        user={{

          name: "John Doe",
          email: "aaa@aaa.com",
          role: "Admin",
          phone: "1234567890",
          address: "123 Main St, City, Country",
          paymentType: "Credit Card",
          classes: [
            { name: "Class 1", price: "100" },
            { name: "Class 2", price: "200" },
          ],
          payments: [
            { date: "2023-01-01", amount: "100" },
            { date: "2023-02-01", amount: "200" },
          ],
        }}
      />
    </div>
  );
}

export default AdminDetails;