import React, { useEffect } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate, useParams } from "react-router-dom";
import StarweetCard from "../HomeSection/StarweetCard";
import { Divider } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { findStarweetsById } from "../../Store/Starweet/Action";

const StarweetDetails = () => {
  const navigate = useNavigate();
  const handleBack = () => navigate(-1);
  const dispatch = useDispatch();
  const { id } = useParams();
  const { starweet } = useSelector((store) => store);

  useEffect(() => {
    if (id) {
      dispatch(findStarweetsById(id));
    }
  }, []);

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
        <StarweetCard item={starweet.starweet} />
        <Divider sx={{ margin: "2rem 0rem" }} />
      </section>

      <section>
        {starweet.starweet.replyStarweets.map((item) => (
          <StarweetCard item={item} />
        ))}
      </section>
    </React.Fragment>
  );
};

export default StarweetDetails;
