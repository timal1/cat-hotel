package ru.timal1.reepositories;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;
import ru.timal1.entity.BookingCard;

@Repository
public interface BookingCardRepository extends JpaRepository<BookingCard, Long>, JpaSpecificationExecutor<BookingCard> {

}
