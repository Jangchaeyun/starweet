package com.starweet.controller;

import com.starweet.dto.StarweetDto;
import com.starweet.service.StarweetService;
import com.starweet.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/starweets/")
public class StarweetController {
    @Autowired
    private StarweetService starweetService;

    @Autowired
    private UserService userService;

//    public ResponseEntity<StarweetDto>
}
