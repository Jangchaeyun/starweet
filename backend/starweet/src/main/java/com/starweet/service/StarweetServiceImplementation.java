package com.starweet.service;

import com.starweet.exception.StarweetException;
import com.starweet.exception.UserException;
import com.starweet.model.Starweet;
import com.starweet.model.User;
import com.starweet.repository.StarweetRepository;
import com.starweet.request.StarweetReplyRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class StarweetServiceImplementation implements StarweetService{
    @Autowired
    private StarweetRepository starweetRepository;

    @Override
    public Starweet createStarweet(Starweet req, User user) throws UserException {
        Starweet starweet = new Starweet();
        starweet.setContent(req.getContent());
        starweet.setCreatedAt(LocalDateTime.now());
        starweet.setImage(req.getImage());
        starweet.setUser(user);
        starweet.setReply(false);
        starweet.setStarweet(true);
        starweet.setVideo(req.getVideo());

        return starweetRepository.save(starweet);
    }

    @Override
    public List<Starweet> findAllStarweet() {
        return starweetRepository.findAllByIsStarweetTrueOrderByCreatedAtDesc();
    }

    @Override
    public Starweet restarweet(Long starweetId, User user) throws UserException, StarweetException {
        Starweet starweet = findById(starweetId);
        if (starweet.getRestarweetUser().contains(user)) {
            starweet.getRestarweetUser().remove(user);
        } else {
            starweet.getRestarweetUser().add(user);
        }
        return starweetRepository.save(starweet);
    }

    @Override
    public Starweet findById(Long starweetId) throws StarweetException {
        return null;
    }

    @Override
    public void deleteTwitById(Long twitId, Long userId) throws StarweetException, UserException {

    }

    @Override
    public Starweet removeFromRestarweet(Long starweetId, User user) throws StarweetException, UserException {
        return null;
    }

    @Override
    public Starweet createdReply(StarweetReplyRequest req, User user) throws StarweetException {
        return null;
    }

    @Override
    public List<Starweet> getUserStarweet(User user) {
        return null;
    }

    @Override
    public List<Starweet> findByLikesContainsUser(User user) {
        return null;
    }
}
