package ru.timal1.converter;

import org.springframework.stereotype.Component;
import ru.timal1.entity.BookingCard;
import ru.timal1.model.BookingCardDto;

@Component
public class BookingCardConverter {

    public BookingCard dtoToEntity(BookingCardDto bookingCardDto) {
        return BookingCard.builder()
                .id(bookingCardDto.id())
                .username(bookingCardDto.username())
                .petname(
                        bookingCardDto.petname())
                .phone(bookingCardDto.phone())
                .email(bookingCardDto.email())
                .dateFrom(bookingCardDto.dateFrom())
                .dateTo(bookingCardDto.dateTo())
                .roomId(bookingCardDto.roomId())
                .build();
    }

    public BookingCardDto entityToDto(BookingCard bookingCard) {
        return new BookingCardDto(
                bookingCard.getId(),
                bookingCard.getUsername(),
                bookingCard.getPetname(),
                bookingCard.getPhone(),
                bookingCard.getEmail(),
                bookingCard.getDateFrom(),
                bookingCard.getDateTo(),
                bookingCard.getRoomId()
        );
    }
}
