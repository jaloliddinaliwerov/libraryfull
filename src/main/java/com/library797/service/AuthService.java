package com.library797.service;

import com.library797.dto.AuthResponseDTO;
import com.library797.dto.GoogleAuthDTO;
import com.library797.dto.LoginDTO;
import com.library797.dto.RegisterDTO;
import com.library797.entity.UserEntity;
import com.library797.repository.UserRepository;
import com.library797.security.JwtProvider;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtProvider jwtProvider;

    public AuthService(UserRepository userRepository, PasswordEncoder passwordEncoder, JwtProvider jwtProvider) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtProvider = jwtProvider;
    }

    public AuthResponseDTO register(RegisterDTO dto) {
        if (userRepository.existsByUsername(dto.getUsername())) {
            throw new RuntimeException("Ushbu username band!");
        }
        if (userRepository.existsByEmail(dto.getEmail())) {
            throw new RuntimeException("Ushbu email bilan ro'yxatdan o'tilgan!");
        }

        UserEntity user = new UserEntity(
                dto.getFullName(),
                dto.getUsername(),
                dto.getEmail(),
                passwordEncoder.encode(dto.getPassword()),
                "ROLE_USER"
        );

        UserEntity savedUser = userRepository.save(user);

        String token = jwtProvider.generateToken(savedUser.getUsername(), savedUser.getRole());
        AuthResponseDTO.UserResponseDTO userDTO = new AuthResponseDTO.UserResponseDTO(
                savedUser.getId(), savedUser.getFullName(), savedUser.getUsername(), savedUser.getEmail(), savedUser.getRole(),
                savedUser.getLevel(), savedUser.getHp(), savedUser.getXp(), savedUser.getStreak()
        );

        return new AuthResponseDTO(token, userDTO);
    }

    public AuthResponseDTO login(LoginDTO dto) {
        UserEntity user = userRepository.findByUsernameOrEmail(dto.getUsername(), dto.getUsername())
                .orElseThrow(() -> new RuntimeException("Username yoki parol noto'g'ri!"));

        if (!passwordEncoder.matches(dto.getPassword(), user.getPassword())) {
            throw new RuntimeException("Username yoki parol noto'g'ri!");
        }

        String token = jwtProvider.generateToken(user.getUsername(), user.getRole());
        AuthResponseDTO.UserResponseDTO userDTO = new AuthResponseDTO.UserResponseDTO(
                user.getId(), user.getFullName(), user.getUsername(), user.getEmail(), user.getRole(),
                user.getLevel(), user.getHp(), user.getXp(), user.getStreak()
        );

        return new AuthResponseDTO(token, userDTO);
    }

    public AuthResponseDTO googleLogin(GoogleAuthDTO dto) {
        UserEntity user = userRepository.findByEmail(dto.getEmail()).orElseGet(() -> {
            String randomUsername = "google_" + UUID.randomUUID().toString().substring(0, 8);
            UserEntity newUser = new UserEntity(
                    dto.getFullName() != null ? dto.getFullName() : "Google User",
                    randomUsername,
                    dto.getEmail(),
                    passwordEncoder.encode(UUID.randomUUID().toString()),
                    "ROLE_USER"
            );
            return userRepository.save(newUser);
        });

        String token = jwtProvider.generateToken(user.getUsername(), user.getRole());
        AuthResponseDTO.UserResponseDTO userDTO = new AuthResponseDTO.UserResponseDTO(
                user.getId(), user.getFullName(), user.getUsername(), user.getEmail(), user.getRole(),
                user.getLevel(), user.getHp(), user.getXp(), user.getStreak()
        );

        return new AuthResponseDTO(token, userDTO);
    }
}
