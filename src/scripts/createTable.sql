drop table if exists weddings;

drop table if exists chats;

create table weddings (
    id varchar(100) not null,
    date datetime not null,
    location varchar(200) not null,
    geo varchar(200) not null,
    contents varchar(1000) not null,
    boy_name varchar(100) not null,
    boy_bank varchar(200) not null,
    boy_tel varchar(200) not null,
    boy_dad_name varchar(200) not null,
    boy_mom_name varchar(200) not null,
    boy_dad_tel varchar(200) not null,
    boy_mom_tel varchar(200) not null,
    girl_name varchar(200) not null,
    girl_bank varchar(200) not null,
    girl_tel varchar(200) not null,
    girl_dad_name varchar(200) not null,
    girl_mom_name varchar(200) not null,
    girl_dad_tel varchar(200) not null,
    girl_mom_tel varchar(200) not null
);

create table chats (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user varchar(100) not null,
    room_name varchar(100) not null,
    message varchar(2000) not null,
    enabled tinyint(1) not null,
    update_dt datetime not null
);

insert into
    weddings
values
    (
        'seokhwan', -- 아이디
        '2022-06-05 14:00:00', -- 날짜
        '선릉 포스코센터', -- 장소
        '37.50652836200622, 127.0563039730153', -- 장소 위도경도
        '상세내용입니다. 잘살게요',
        '원석환',-- boy_name
        '카카오뱅크 3333042701706',-- boy_bank
        '010-3007-2436',-- boy_tel
        '원허식',-- boy_dad_name
        '권점자',-- boy_mom_name
        '010-',-- boy_dad_tel
        '010-3059-1130',-- boy_mom_tel
        '김라연',-- girl_name
        '카카오 김라연',-- girl_bank
        '010-7913-6446',-- girl_tel
        '김종환',-- girl_dad_name
        '이옥희',-- girl_mom_name
        '010-',-- girl_dad_tel
        '010-'-- girl_mom_tel
    );