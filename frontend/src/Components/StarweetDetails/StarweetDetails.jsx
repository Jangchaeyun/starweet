import React from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";

const StarweetDetails = () => {
  const navigate = useNavigate();
  const handleBack = () => navigate(-1);
  return (
    <React.Fragment>
      <section className={`z-50 flex items-center sticky top-0 bg-opactiy-95`}>
        <KeyboardBackspaceIcon
          className="cursor-pointer"
          onClick={handleBack}
        />
        <h1 className="py-5 text-xl font-bold opacity-90 ml-5">Starweet</h1>
      </section>
    </React.Fragment>
  );
};

export default StarweetDetails;
