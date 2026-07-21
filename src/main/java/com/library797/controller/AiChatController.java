package com.library797.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/v1/ai")
public class AiChatController {

    @PostMapping("/chat")
    public ResponseEntity<?> chat(@RequestBody Map<String, String> body) {
        String prompt = body.getOrDefault("prompt", "");
        String reply = "Siz so'ragan '" + prompt + "' mavzusi bo'yicha kutubxonamizdagi 'Clean Code' va 'Java Spring Boot Asoslari' kitoblarini o'qishni tavsiya qilaman! 🤖";
        return ResponseEntity.ok(Map.of("prompt", prompt, "reply", reply));
    }
}
