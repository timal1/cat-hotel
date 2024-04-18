package ru.timal1.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.timal1.converter.BookingCardConverter;
import ru.timal1.entity.BookingCard;
import ru.timal1.model.BookingCardDto;
import ru.timal1.service.BookingCardService;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/booking_card")
@CrossOrigin(origins = "${cross.origin}")
public class BookingCardController {

    private final BookingCardService bookingCardService;
    private final BookingCardConverter bookingCardConverter;


    @CrossOrigin(origins = "${cross.origin}")
    @PostMapping
    public BookingCardDto saveNewBookingCard(@RequestBody BookingCardDto bookingCardDto) {
        BookingCard bookingCard = bookingCardConverter.dtoToEntity(bookingCardDto);
        bookingCard = bookingCardService.save(bookingCard);
        return bookingCardConverter.entityToDto(bookingCard);
    }
}
