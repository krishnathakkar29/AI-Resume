import React, { useEffect, useState } from "react";
import AddResume from "./components/AddResume";
import { getResumes } from "../../service/globalApi";
import { useUser } from "@clerk/clerk-react";
import ResumeCardItem from "./components/ResumeCardItem";

function Dashboard() {
  const { user } = useUser();
  const [userList, setUserList] = useState([]);
  const getResumeList = async () => {
    const res = await getResumes(user?.primaryEmailAddress?.emailAddress);

    setUserList(res.data.data);
  };

  useEffect(() => {
    getResumeList();
  }, [user]);
  return (
    <div className="p-10 md:px-10 lg:px-32">
      <h2 className="font-bold text-3xl">My Resume</h2>
      <p>Start creating AI resume for your next job role</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-10 gap-5">
        <AddResume />
        {userList.length > 0 &&
          userList.map((resume, index) => (
            <ResumeCardItem key={index} resume={resume} />
          ))}
      </div>
    </div>
  );
}

export default Dashboard;
