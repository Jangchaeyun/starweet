package com.starweet.repository;

import com.starweet.model.Like;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface LikeRepository extends JpaRepository<Like, Long> {

    @Query("SELECT I FROM Like I WHERE I.user.id=:userId AND I.starweet.id=:starweetId")
    public Like isLikeExist(@Param("userId") Long userId, @Param("starweetId") Long starweetId);

    @Query("SELECT I FROM Like I WHERE I.starweet.id=:starweetId")
    public List<Like> findByStarwetId(@Param("starweetId") Long starweetId);
}
