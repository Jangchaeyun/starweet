package com.starweet.dto;

import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Data
public class StarweetDto {
    private Long id;
    private String content;
    private String image;
    private String video;
    private UserDto user;
    private LocalDateTime createdAt;
    private int totalLikes;
    private int totalRelies;
    private int totalRestarweets;
    private boolean isLiked;
    private boolean isRestarweet;
    private List<Long> restarweetUsersId;
    private List<StarweetDto> replyStarweets;

}
