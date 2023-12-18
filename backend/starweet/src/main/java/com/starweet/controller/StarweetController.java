package com.starweet.controller;

import com.starweet.dto.StarweetDto;
import com.starweet.dto.mapper.StarweetDtoMapper;
import com.starweet.exception.StarweetException;
import com.starweet.exception.UserException;
import com.starweet.model.Starweet;
import com.starweet.model.User;
import com.starweet.request.StarweetReplyRequest;
import com.starweet.response.ApiResponse;
import com.starweet.service.StarweetService;
import com.starweet.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/starweets")
public class StarweetController {
    @Autowired
    private StarweetService starweetService;

    @Autowired
    private UserService userService;

    @PostMapping("/create")
    public ResponseEntity<StarweetDto> createStarweet(@RequestBody Starweet req, @RequestHeader("Authorization") String jwt) throws UserException, StarweetException {
        User user = userService.findUserProfileByJwt(jwt);
        Starweet starweet = starweetService.createStarweet(req, user);

        StarweetDto starweetDto = StarweetDtoMapper.toStarweetDto(starweet, user);
        return new ResponseEntity<>(starweetDto, HttpStatus.CREATED);
    }

    @PostMapping("/reply")
    public ResponseEntity<StarweetDto> replyStarweet(@RequestBody StarweetReplyRequest req, @RequestHeader("Authorization") String jwt) throws UserException, StarweetException {
        User user = userService.findUserProfileByJwt(jwt);
        Starweet starweet = starweetService.createdReply(req, user);

        StarweetDto starweetDto = StarweetDtoMapper.toStarweetDto(starweet, user);
        return new ResponseEntity<>(starweetDto, HttpStatus.CREATED);
    }

    @PutMapping("/{starweetId}/restarweet")
    public ResponseEntity<StarweetDto> replyStarweet(@PathVariable Long starweetId, @RequestHeader("Authorization") String jwt) throws UserException, StarweetException {
        User user = userService.findUserProfileByJwt(jwt);
        Starweet starweet = starweetService.restarweet(starweetId, user);

        StarweetDto starweetDto = StarweetDtoMapper.toStarweetDto(starweet, user);
        return new ResponseEntity<>(starweetDto, HttpStatus.OK);
    }

    @GetMapping("/{starweetId}")
    public ResponseEntity<StarweetDto> findStarweetById(@PathVariable Long starweetId, @RequestHeader("Authorization") String jwt) throws UserException, StarweetException {
        User user = userService.findUserProfileByJwt(jwt);
        Starweet starweet = starweetService.findById(starweetId);

        StarweetDto starweetDto = StarweetDtoMapper.toStarweetDto(starweet, user);
        return new ResponseEntity<>(starweetDto, HttpStatus.OK);
    }

    @DeleteMapping("/{starweetId}")
    public ResponseEntity<ApiResponse> deleteStarweet(@PathVariable Long starweetId, @RequestHeader("Authorization") String jwt) throws UserException, StarweetException {
        User user = userService.findUserProfileByJwt(jwt);
        starweetService.deleteTwitById(starweetId, user.getId());
        ApiResponse res = new ApiResponse();
        res.setMessage("Starweet deleted Successfully");
        res.setStatus(true);

        return new ResponseEntity<>(res, HttpStatus.OK);
    }
    @GetMapping("/")
    public ResponseEntity<List<StarweetDto>> getAllStarweets(@RequestHeader("Authorization") String jwt) throws UserException, StarweetException {
        User user = userService.findUserProfileByJwt(jwt);
        List<Starweet> starweets = starweetService.findAllStarweet();
        List<StarweetDto> starweetDtos = StarweetDtoMapper.toStarweetDtos(starweets, user);

        return new ResponseEntity<>(starweetDtos, HttpStatus.OK);
    }
    @GetMapping("/user/{userId}")
    public ResponseEntity<List<StarweetDto>> getUsersAllStarweets(@PathVariable Long userId, @RequestHeader("Authorization") String jwt) throws UserException, StarweetException {
        User user = userService.findUserProfileByJwt(jwt);
        List<Starweet> starweets = starweetService.getUserStarweet(user);
        List<StarweetDto> starweetDtos = StarweetDtoMapper.toStarweetDtos(starweets, user);

        return new ResponseEntity<>(starweetDtos, HttpStatus.OK);
    }
    @GetMapping("/user/{userId}/likes")
    public ResponseEntity<List<StarweetDto>> findStarweetByLikesContainesUser(@PathVariable Long userId, @RequestHeader("Authorization") String jwt) throws UserException, StarweetException {
        User user = userService.findUserProfileByJwt(jwt);
        List<Starweet> starweets = starweetService.findByLikesContainsUser(user);
        List<StarweetDto> starweetDtos = StarweetDtoMapper.toStarweetDtos(starweets, user);

        return new ResponseEntity<>(starweetDtos, HttpStatus.OK);
    }
}