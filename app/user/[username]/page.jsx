import React from 'react'

const UserProfile = ({ params }) => {
  console.log("PARAMS", params);

  return (
    <div>UserProfile: {params.username}</div>
  )
}

export default UserProfile;