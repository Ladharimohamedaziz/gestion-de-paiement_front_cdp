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


// import React from "react";
// import UserDetails from "../../utils/UserManagement/UserDetails";

// function AdminDetails() {
//   // توليد بيانات وهمية باستخدام faker
//   const admin = {
//     name: faker.person.fullName(),
//     email: faker.internet.email(),
//     role: "Admin",
//     phone: faker.phone.number(),
//     address: faker.location.streetAddress(),
//     paymentType: "Bank Transfer",
//     classes: Array.from({ length: 3 }, () => ({
//       module: faker.lorem.word(),
//       hours: faker.number.int({ min: 5, max: 20 }),
//       schedule: `${faker.date.weekday()} - ${faker.date.weekday()}`,
//       price: faker.commerce.price(50, 150, 0, ""),
//       selected: faker.datatype.boolean(),
//     })),
//     payments: Array.from({ length: 2 }, () => ({
//       date: faker.date.past().toLocaleDateString(),
//       amount: faker.commerce.price(100, 300, 0, ""),
//       status: faker.helpers.arrayElement(["paid", "pending"]),
//     })),
//   };

//   return <UserDetails user={admin} />;
// }

// export default AdminDetails;
