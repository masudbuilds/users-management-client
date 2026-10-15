import React from 'react';

const UsersPage = async() => {

  const data = await fetch("http://localhost:5000/users");
  const users = await data.json();
  return (
    <div>
      <h1>
        User Data Coming soon: {users.length}
      </h1>
    </div>
  );
};

export default UsersPage;