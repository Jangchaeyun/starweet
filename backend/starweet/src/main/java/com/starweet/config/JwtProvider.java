package com.starweet.config;

import io.jsonwebtoken.security.Keys;

import javax.crypto.SecretKey;

public class JwtProvider {
    SecretKey key = Keys.hmacShaKeyFor(JwtConstant.SECRET_KEY.getBytes());


}
