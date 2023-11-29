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
        Starweet starweet = starweetRepository.findById(starweetId)
                .orElseThrow(() -> new StarweetException("Starweet not found with id " + starweetId));
        return starweet;
    }

    @Override
    public void deleteTwitById(Long starweetId, Long userId) throws StarweetException, UserException {
        Starweet starweet = findById(starweetId);

        if (!userId.equals(starweet.getUser().getId())) {
            throw new UserException("you can't delete another user's starweet");
        }

        starweetRepository.deleteById(starweet.getId());
    }

    @Override
    public Starweet removeFromRestarweet(Long starweetId, User user) throws StarweetException, UserException {
        return null;
    }

    @Override
    public Starweet createdReply(StarweetReplyRequest req, User user) throws StarweetException {
       Starweet replyFor = findById(req.getStarweetId());

       Starweet starweet = new Starweet();
       starweet.setContent(req.getContent());
       starweet.setCreatedAt(LocalDateTime.now());
       starweet.setImage(req.getImage());
       starweet.setUser(user);
       starweet.setReply(true);
       starweet.setStarweet(false);
       starweet.setReplyFor(replyFor);

       Starweet savedReply = starweetRepository.save(starweet);

       starweet.getReplyStarweet().add(savedReply);
       starweetRepository.save(replyFor);

       return replyFor;
    }

    @Override
    public List<Starweet> getUserStarweet(User user) {
        return starweetRepository.findByRestarweetUserContainsOrUser_IdAndIsStarweetTrueOrderByCreatedAtDesc(user, user.getId());
    }

    @Override
    public List<Starweet> findByLikesContainsUser(User user) {
        return starweetRepository.findByLikesUser_id(user.getId());
    }
}
