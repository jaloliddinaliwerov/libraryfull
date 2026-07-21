package com.library797.dto;

public class AuthResponseDTO {
    private String token;
    private UserResponseDTO user;

    public AuthResponseDTO() {}

    public AuthResponseDTO(String token, UserResponseDTO user) {
        this.token = token;
        this.user = user;
    }

    public String getToken() { return token; }
    public void setToken(String token) { this.token = token; }

    public UserResponseDTO getUser() { return user; }
    public void setUser(UserResponseDTO user) { this.user = user; }

    public static class UserResponseDTO {
        private Long id;
        private String fullName;
        private String username;
        private String email;
        private String role;
        private Integer level;
        private Integer hp;
        private Integer xp;
        private Integer streak;

        public UserResponseDTO() {}

        public UserResponseDTO(Long id, String fullName, String username, String email, String role, Integer level, Integer hp, Integer xp, Integer streak) {
            this.id = id;
            this.fullName = fullName;
            this.username = username;
            this.email = email;
            this.role = role;
            this.level = level;
            this.hp = hp;
            this.xp = xp;
            this.streak = streak;
        }

        public Long getId() { return id; }
        public String getFullName() { return fullName; }
        public String getUsername() { return username; }
        public String getEmail() { return email; }
        public String getRole() { return role; }
        public Integer getLevel() { return level; }
        public Integer getHp() { return hp; }
        public Integer getXp() { return xp; }
        public Integer getStreak() { return streak; }
    }
}
