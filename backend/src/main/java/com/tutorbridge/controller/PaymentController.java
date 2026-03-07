package com.tutorbridge.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/payments")
@CrossOrigin(origins = "http://localhost:3000")
public class PaymentController {

    @PostMapping("/initiate")
    public ResponseEntity<?> initiatePayment(@RequestBody Map<String, Object> request) {
        // TODO: create payment order for booking (bookingId), return gateway order ID
        return ResponseEntity.ok(Map.of("message", "Payment initiated - to be implemented"));
    }

    @PostMapping("/webhook")
    public ResponseEntity<?> paymentWebhook(@RequestBody Map<String, Object> payload) {
        // TODO: handle payment gateway callback (Razorpay/Stripe webhook)
        return ResponseEntity.ok(Map.of("message", "Webhook received - to be implemented"));
    }

    @GetMapping("/booking/{bookingId}")
    public ResponseEntity<?> getPaymentStatus(@PathVariable Long bookingId) {
        // TODO: return payment status for a booking
        return ResponseEntity.ok(Map.of("message", "Payment status - to be implemented", "bookingId", bookingId));
    }

    @GetMapping("/history")
    public ResponseEntity<?> getPaymentHistory() {
        // TODO: return payment history for logged-in user
        return ResponseEntity.ok(Map.of("message", "Payment history - to be implemented"));
    }
}
