import React, { useEffect, useState } from 'react';
import { BsFillPersonFill, BsFillTelephoneFill } from "react-icons/bs"
import { BiHomeAlt, BiMessageAlt } from "react-icons/bi"
import './CustomerDetail.css';

const CustomerDetail = ({ selectedUser }) => {

  return (
    <div className="profile-details">
      <h2>
        {selectedUser.name}
      </h2>
      <p>
        Customer ID: {selectedUser.customerID}</p>
      <p>
        Account Owner | Since {selectedUser.accountOwnerDuration}
      </p>
      <p>
        <BsFillPersonFill /> {selectedUser.userid}
      </p>
      <p>
        <BiMessageAlt />  {selectedUser.email}
      </p>
      <p>
        <BiHomeAlt /> {selectedUser.address}
      </p>
    </div>
  )
}

export default CustomerDetail;