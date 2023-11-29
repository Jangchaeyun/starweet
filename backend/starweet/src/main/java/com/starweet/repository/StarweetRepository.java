package com.starweet.repository;

import com.starweet.model.Starweet;
import com.starweet.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface StarweetRepository extends JpaRepository<Starweet, Long> {

    List<Starweet> findAllByIsStarweetTrueOrderByCreatedAtDesc();

    List<Starweet> findByRestarweetUserContainsOrUser_IdAndIsStarweetTrueOrderByCreatedAtDesc(User user, Long userId);

    List<Starweet> findByLikesContainingOrderByCreatedAtDesc(User user);

    @Query("SELECT t FROM Starweet t JOIN t.likes I WHERE I.user.id=:userId")
    List<Starweet> findByLikesUser_id(Long userId);
}
