package com.starweet.service;

import com.starweet.exception.StarweetException;
import com.starweet.exception.UserException;
import com.starweet.model.Like;
import com.starweet.model.Starweet;
import com.starweet.model.User;
import com.starweet.repository.LikeRepository;
import com.starweet.repository.StarweetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LikeServiceImplementation implements LikeService{

    @Autowired
    private LikeRepository likeRepository;

    @Autowired
    private StarweetService starweetService;

    @Autowired
    private StarweetRepository starweetRepository;

    @Override
    public Like likeStarweet(Long starweetId, User user) throws UserException, StarweetException {
        Like isLikeExist = likeRepository.isLikeExist(user.getId(), starweetId);

        if (isLikeExist != null) {
            likeRepository.deleteById(isLikeExist.getId());
            return isLikeExist;
        }

        Starweet starweet = starweetService.findById(starweetId);

        Like like = new Like();
        like.setStarweet(starweet);
        like.setUser(user);

        Like savedLike = likeRepository.save(like);

        starweet.getLikes().add(savedLike);
        starweetRepository.save(starweet);

        return savedLike;
    }

    @Override
    public List<Like> getAllLikes(Long starweetId) throws StarweetException {
        Starweet starweet = starweetService.findById(starweetId);

        List<Like> likes = likeRepository.findByStarwetId(starweetId);
        return likes;
    }
}
