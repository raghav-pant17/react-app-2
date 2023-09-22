import React, { useEffect, useState } from 'react';
import './Profile.css';
import axios from "axios";
import { Stack } from '@mui/material';
import CustomerDetail from './CustomerDetail';
import Avatar from '@mui/material/Avatar';

const baseURL = "https://mocki.io/v1/6f33e629-3fb9-4e4c-ad96-9297a28ab35a";

const Profile = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(baseURL)
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
        setLoading(true);
      });
  }, []);



  const handleUserClick = (key) => {
    setSelectedUser(key);
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="profile-container">
          <div className="profiles">
          <div style={{display: "flex"}} >
          <Avatar 
          alt={users[selectedUser].name} 
          src={users[selectedUser].image} 
          sx={{ width: 90, height: 90, bgcolor: "white", border: "3px solid purple"}}
          />
       <Stack direction="row" spacing={-1} alignItems={'flex-end'}>
          {(()=>{
              const avatarList = [];
              for(var i = 0; i<users.length; i++){
                if(i!=selectedUser){  
                  
                  avatarList.push(<Avatar 
                    alt={i}
                    src={users[i].image} 
                    sx={{ bgcolor: "white", border: "2px solid gray"}} 
                    onClick={(event)=>{handleUserClick(event.target.alt)}}
                    />)
                }
              }
              return avatarList;
          })()}
        </Stack>

        </div>
          </div>
            <CustomerDetail selectedUser={users[selectedUser]}  />
        </div>
      )}
    </div>
  );
}

export default Profile;