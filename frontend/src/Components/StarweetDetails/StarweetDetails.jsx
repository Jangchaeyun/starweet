import React from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";
import StarweetCard from "../HomeSection/StarweetCard";
import { Divider } from "@mui/material";

const StarweetDetails = () => {
  const navigate = useNavigate();
  const handleBack = () => navigate(-1);

  return (
    <React.Fragment>
      <section
        className={`bg-white  z-50 flex items-center sticky top-0 bg-opactiy-95`}
      >
        <KeyboardBackspaceIcon
          className="cursor-pointer"
          onClick={handleBack}
        />
        <h1 className="py-5 text-xl font-bold opacity-90 ml-5">Starweet</h1>
      </section>

      <section>
        <StarweetCard />
        <Divider sx={{ margin: "2rem 0rem" }} />
      </section>

      <section>
        {[1, 1, 1].map((item) => (
          <StarweetCard />
        ))}
      </section>
    </React.Fragment>
  );
};

export default StarweetDetails;
