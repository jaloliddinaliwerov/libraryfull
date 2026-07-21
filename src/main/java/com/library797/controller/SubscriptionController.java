package com.library797.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/subscriptions")
public class SubscriptionController {

    @GetMapping("/plans")
    public ResponseEntity<?> getPlans() {
        List<Map<String, Object>> plans = List.of(
            Map.of("id", "free", "name", "Bepul", "price", 0, "features", List.of("5 ta elektron kitob", "Kuniga 3 ta AI savol")),
            Map.of("id", "pro", "name", "Pro Obuna", "price", 29000, "features", List.of("Cheksiz kitob va PDF yuklash", "Cheksiz Audio kitoblar", "Kuniga 50 ta AI savol")),
            Map.of("id", "vip", "name", "VIP Unlimited", "price", 49000, "features", List.of("Cheksiz BARCHASI", "Shaxsiy AI Repetitor", "VIP Telegram guruh"))
        );
        return ResponseEntity.ok(plans);
    }

    @PostMapping("/subscribe")
    public ResponseEntity<?> subscribe(@RequestBody Map<String, String> body) {
        String planId = body.getOrDefault("planId", "pro");
        return ResponseEntity.ok(Map.of("status", "SUCCESS", "message", planId + " tarifiga obuna muvaffaqiyatli qabul qilindi!"));
    }
}
