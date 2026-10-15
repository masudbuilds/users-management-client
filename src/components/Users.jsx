import React, { use } from 'react';

const Users = ({ UsersPromise }) => {

  const users = use(UsersPromise());
  return (
    <div>
      <h2>Total Users: {users.length}</h2>
        {users.map(user => 
          <p className='p-4' key={user.id}>{user.name} {user.email}</p>
          )}
    </div>
  );
};

export default Users;