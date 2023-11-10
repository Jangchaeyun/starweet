import React from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";
import { Avatar } from "@mui/material";

const Profile = () => {
  const navigate = useNavigate();
  const handleBack = () => navigate(-1);
  return (
    <div>
      <section className={`z-50 flex items-center sticky top-0 bg-opactiy-95`}>
        <KeyboardBackspaceIcon
          className="cursor-pointer"
          onClick={handleBack}
        />
        <h1 className="py-5 text-xl font-bold opacity-90 ml-5">EVERYDAY6</h1>
      </section>

      <section>
        <img
          className="w-[100%] h-[15rem] object-cover"
          src="https://i.scdn.co/image/ab6761610000e5eb2fba28d51fc972ed9d8fbaaa"
          alt=""
        />
      </section>
      <section className="pl-6">
        <div className="flex justify-between items-start mt-5 h-[5rem]">
          <Avatar
            className="transform -translate-y-24"
            alt="EVERYDAY6"
            src="https://file3.instiz.net/data/cached_img/upload/2019/08/02/2/cbb5df1bafd0642bee1ce64289520108.jpg"
            sx={{ width: "10rem", height: "10rem", border: "4px solid white" }}
          />
        </div>
      </section>
    </div>
  );
};

export default Profile;
