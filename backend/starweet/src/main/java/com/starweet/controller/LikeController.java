package com.starweet.controller;

import com.starweet.dto.LikeDto;
import com.starweet.dto.mapper.LikeDtoMapper;
import com.starweet.exception.StarweetException;
import com.starweet.exception.UserException;
import com.starweet.model.Like;
import com.starweet.model.User;
import com.starweet.service.LikeService;
import com.starweet.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class LikeController {
    @Autowired
    private UserService userService;
    @Autowired
    private LikeService likeService;

    @PostMapping("/{starweetId}/likes")
    public ResponseEntity<LikeDto> likeStarweet(@PathVariable Long starweetId, @RequestHeader("Authorization") String jwt) throws UserException, StarweetException {
        User user = userService.findUserProfileByJwt(jwt);
        Like like = likeService.likeStarweet(starweetId, user);

        LikeDto likeDto = LikeDtoMapper.toLikeDto(like, user);

        return new ResponseEntity<LikeDto>(likeDto, HttpStatus.CREATED);
    }

    @PostMapping("/starweet/{starweetId}")
    public ResponseEntity<List<LikeDto>> getAllLikes(@PathVariable Long starweetId, @RequestHeader("Authorization") String jwt) throws UserException, StarweetException {
        User user = userService.findUserProfileByJwt(jwt);
        List<Like> likes = likeService.getAllLikes(starweetId);

        List<LikeDto> likeDtos = LikeDtoMapper.toLikeDtos(likes, user);

        return new ResponseEntity<>(likeDtos, HttpStatus.CREATED);
    }
}
