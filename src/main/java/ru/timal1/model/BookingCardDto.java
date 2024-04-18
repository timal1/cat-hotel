package ru.timal1.model;


import java.time.LocalDate;

public record BookingCardDto(long id,
                             String username,
                             String petname,
                             String phone,
                             String email,
                             LocalDate dateFrom,
                             LocalDate dateTo,
                             long roomId) {
}
