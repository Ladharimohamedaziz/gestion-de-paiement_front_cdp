import React from 'react'
import Nav from '../../../../components/navbar/navbar';
import AddUser from '../../../../utils/UserManagement/addUser/addUser';
import { faker } from '@faker-js/faker';
function AddAdmin() {
  return (
    <div>
      <Nav />
      <AddUser/>
    </div>
  )
}

export default AddAdmin
