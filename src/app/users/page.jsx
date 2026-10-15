import Users from "@/components/Users";
import React, { Suspense } from "react";

const UsersPromise = async () => {
  const data = await fetch("http://localhost:5000/users");
  const users = await data.json();
  return users;
};
const UsersPage =() => {
  return (
    <div>
      <h1>User Data</h1>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Users UsersPromise={UsersPromise} />
      </Suspense>
    </div>
  );
};

export default UsersPage;
