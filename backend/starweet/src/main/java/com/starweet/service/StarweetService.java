package com.starweet.service;

import com.starweet.exception.StarweetException;
import com.starweet.exception.UserException;
import com.starweet.model.Starweet;
import com.starweet.model.User;
import com.starweet.request.StarweetReplyRequest;

import java.util.List;

public interface StarweetService {
    public Starweet createStarweet(Starweet req, User user) throws UserException;
    public List<Starweet> findAllStarweet();
    public Starweet restarweet(Long starweetId, User user) throws UserException, StarweetException;
    public Starweet findById(Long starweetId) throws StarweetException;

    public void deleteTwitById(Long twitId, Long userId) throws StarweetException, UserException;

    public Starweet removeFromRestarweet(Long starweetId, User user) throws StarweetException, UserException;

    public Starweet createdReply(StarweetReplyRequest req, User user) throws StarweetException;
}
