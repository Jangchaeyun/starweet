package com.starweet.model;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
public class Starweet {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne
    private User user;

    private String content;

    @OneToMany(mappedBy = "starweet", cascade = CascadeType.ALL)
    private List<Like> likes = new ArrayList<>();

    @OneToMany
    private List<Starweet> replyStarweet = new ArrayList<>();

    @ManyToMany
    private List<User> restarweetUser = new ArrayList<>();

    @ManyToOne
    private Starweet replyFor;

    private String image;
    private String video;

    private boolean isReply;
    private boolean isStarweet;

    private LocalDateTime createdAt;

}
