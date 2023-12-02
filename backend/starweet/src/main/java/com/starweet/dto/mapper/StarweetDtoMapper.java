package com.starweet.dto.mapper;

import com.starweet.dto.StarweetDto;
import com.starweet.dto.UserDto;
import com.starweet.model.Starweet;
import com.starweet.model.User;
import com.starweet.util.StarweetUtil;

import java.util.ArrayList;
import java.util.List;

public class StarweetDtoMapper {
    public static StarweetDto toStarweetDto(Starweet starweet, User reqUser) {
        UserDto user = UserDtoMapper.toUserDto(starweet.getUser());
        boolean isLiked = StarweetUtil.isLikedByReqUser(reqUser, starweet);
        boolean isRestarweeted = StarweetUtil.isRestarweetByReqUser(reqUser, starweet);
        List<Long> restarweetUserId = new ArrayList<>();

        for (User user1 : starweet.getRestarweetUser()) {
            restarweetUserId.add(user1.getId());
        }

        StarweetDto starweetDto = new StarweetDto();
        starweetDto.setId(starweet.getId());
        starweetDto.setContent(starweet.getContent());
        starweetDto.setCreatedAt(starweet.getCreatedAt());
        starweetDto.setImage(starweet.getImage());
        starweetDto.setTotalLikes(starweet.getLikes().size());
        starweetDto.setTotalRelies(starweet.getReplyStarweet().size());
        starweetDto.setTotalRestarweets(starweet.getRestarweetUser().size());
        starweetDto.setUser(user);
        starweetDto.setLiked(isLiked);
        starweetDto.setRestarweet(isRestarweeted);
        starweetDto.setRestarweetUsersId(restarweetUserId);
        starweetDto.setReplyStarweets(toStarweetDtos(starweet.getReplyStarweet(), reqUser));
        starweetDto.setVideo(starweet.getVideo());
        return starweetDto;
    }

    public static List<StarweetDto> toStarweetDtos(List<Starweet> starweets, User reqUser) {
        List<StarweetDto> starweetDtos = new ArrayList<>();

        for (Starweet starweet : starweets) {
            StarweetDto starweetDto = toReplyStarweetDto(starweet, reqUser);
            starweetDtos.add(starweetDto);
        }
        return starweetDtos;
    }

    private static StarweetDto toReplyStarweetDto(Starweet starweet, User reqUser) {
        UserDto user = UserDtoMapper.toUserDto(starweet.getUser());
        boolean isLiked = StarweetUtil.isLikedByReqUser(reqUser, starweet);
        boolean isRestarweeted = StarweetUtil.isRestarweetByReqUser(reqUser, starweet);
        List<Long> restarweetUserId = new ArrayList<>();

        for (User user1 : starweet.getRestarweetUser()) {
            restarweetUserId.add(user1.getId());
        }

        StarweetDto starweetDto = new StarweetDto();
        starweetDto.setId(starweet.getId());
        starweetDto.setContent(starweet.getContent());
        starweetDto.setCreatedAt(starweet.getCreatedAt());
        starweetDto.setImage(starweet.getImage());
        starweetDto.setTotalLikes(starweet.getLikes().size());
        starweetDto.setTotalRelies(starweet.getReplyStarweet().size());
        starweetDto.setTotalRestarweets(starweet.getRestarweetUser().size());
        starweetDto.setUser(user);
        starweetDto.setLiked(isLiked);
        starweetDto.setRestarweet(isRestarweeted);
        starweetDto.setRestarweetUsersId(restarweetUserId);
        starweetDto.setVideo(starweet.getVideo());
        return starweetDto;
    }
}
