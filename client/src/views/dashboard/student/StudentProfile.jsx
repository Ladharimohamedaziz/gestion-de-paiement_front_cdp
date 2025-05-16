import React from "react";
import Profile from "../../../utils/profile/Profile";
import { faker } from "@faker-js/faker";

function ProfileStudent() {
  const profile = "Student";
  const name = faker.person.fullName();
  const email = faker.internet.email();
  const address = faker.location.streetAddress();
  const phone = faker.phone.number();
  const ripNumber = faker.string.numeric(12);
  const countryName = faker.location.country();
  const countryCode = "CA"; 
  const avatar = faker.image.avatar();
  const role = "Student";

  return (
    <div>
      <Profile
        profile={profile}
        name={name}
        email={email}
        phone={phone}
        role={role}
        address={address}
        ripNumber={ripNumber}
        countryCode={countryCode}
        countryName={"Canada"}
        avatar={avatar}
      />
    </div>
  );
}

export default ProfileStudent;
