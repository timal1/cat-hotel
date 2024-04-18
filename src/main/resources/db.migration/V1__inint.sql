
create table if not exists booking_card (
    id                  bigserial primary key,
    username            varchar(255),
    petname             varchar(255),
    phone               varchar(255),
    email               varchar(255),
    date_from           timestamp,
    date_to             timestamp,
    room_id             bigint,
    created_at          timestamp default current_timestamp,
    updated_at          timestamp default current_timestamp
);







