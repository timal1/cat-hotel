package ru.timal1.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import ru.timal1.entity.BookingCard;

import ru.timal1.reepositories.BookingCardRepository;

@Service
@RequiredArgsConstructor
public class BookingCardService {

    private final BookingCardRepository productRepository;


    public BookingCard save(BookingCard bookingCard) {
        return productRepository.save(bookingCard);
    }

}
