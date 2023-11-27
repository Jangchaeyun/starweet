package com.starweet.request;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class StarweetReplyRequest {
    private String content;
    private Long starweetId;
    private LocalDateTime createdAt;
    private String image;
}