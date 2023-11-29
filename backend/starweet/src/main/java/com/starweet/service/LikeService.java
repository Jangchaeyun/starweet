package com.starweet.service;

import com.starweet.exception.StarweetException;
import com.starweet.exception.UserException;
import com.starweet.model.Like;
import com.starweet.model.User;

import java.util.List;

public interface LikeService {
    public Like likeStarweet(Long starweetId, User user) throws UserException, StarweetException;

    public List<Like> getAllLikes(Long starweetId) throws StarweetException;

}
