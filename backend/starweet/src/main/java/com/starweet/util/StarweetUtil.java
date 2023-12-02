package com.starweet.util;

import com.starweet.model.Like;
import com.starweet.model.Starweet;
import com.starweet.model.User;

public class StarweetUtil {
    public final static boolean isLikedByReqUser(User reqUser, Starweet starweet) {
        for (Like like : starweet.getLikes()) {
            if (like.getUser().getId().equals(reqUser.getId())) {
                return true;
            }
        }
        return false;
    }

    public final static boolean isRestarweetByReqUser(User reqUser, Starweet starweet) {
        for (User user : starweet.getRestarweetUser()) {
            if(user.getId().equals(reqUser.getId())) {
                return true;
            }
        }
        return false;
    }
}
