package com.library797.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/leaderboard")
public class LeaderboardController {

    @GetMapping
    public ResponseEntity<?> getLeaderboard() {
        List<Map<String, Object>> leaderboard = List.of(
            Map.of("rank", 1, "name", "Ali Valiyev", "level", "Expert Reader", "points", 3200, "streak", 12),
            Map.of("rank", 2, "name", "Vali Jasurov", "level", "Intermediate", "points", 2800, "streak", 8),
            Map.of("rank", 3, "name", "Hasan Umarov", "level", "Pro Reader", "points", 2500, "streak", 15)
        );
        return ResponseEntity.ok(leaderboard);
    }
}
