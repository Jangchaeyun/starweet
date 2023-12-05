package com.starweet.dto.mapper;

import com.starweet.dto.LikeDto;
import com.starweet.dto.StarweetDto;
import com.starweet.dto.UserDto;
import com.starweet.model.Like;
import com.starweet.model.User;

import java.util.ArrayList;
import java.util.List;

public class LikeDtoMapper {
    public static LikeDto toLikeDto(Like like, User reqUser) {
        UserDto user = UserDtoMapper.toUserDto(like.getUser());
        UserDto reqUserDto = UserDtoMapper.toUserDto(reqUser);
        StarweetDto starweet = StarweetDtoMapper.toStarweetDto(like.getStarweet(), reqUser);

        LikeDto likeDto = new LikeDto();
        likeDto.setId(like.getId());
        likeDto.setStarweet(starweet);
        likeDto.setUser(user);

        return likeDto;
    }

    public static List<LikeDto> toLikeDtos(List<Like> likes, User reqUser) {
        List<LikeDto> likeDtos = new ArrayList<>();

        for (Like like : likes) {
            UserDto user = UserDtoMapper.toUserDto(like.getUser());
            StarweetDto starweet = StarweetDtoMapper.toStarweetDto(like.getStarweet(), reqUser);

            LikeDto likeDto = new LikeDto();
            likeDto.setId(like.getId());
            likeDto.setStarweet(starweet);
            likeDto.setUser(user);
            likeDtos.add(likeDto);
        }
        return likeDtos;
    }


}