package com.library797.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/v1/reservations")
public class BookReservationController {

    @PostMapping
    public ResponseEntity<?> reserveBook(@RequestBody Map<String, Object> body) {
        Object bookId = body.getOrDefault("bookId", 1);
        return ResponseEntity.ok(Map.of(
            "status", "SUCCESS",
            "message", "Kitob #" + bookId + " bo'yicha navbatga yozildingiz! Kitob bo'shaganda Telegram & Email orqali xabar beramiz.",
            "queuePosition", 2
        ));
    }
}
