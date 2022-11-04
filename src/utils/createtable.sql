-- ALTER USER 'won'@'%' IDENTIFIED WITH mysql_native_password BY 'Rhdqngkwk1!';
-- grant all privileges on won.* to 'won'@'%';
DROP TABLE  if exists weddings;
DROP TABLE  if exists chats;

CREATE TABLE `weddings` (
  `id` varchar(500) NOT NULL DEFAULT '',
  `password` varchar(500) NOT NULL DEFAULT '',
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `location` varchar(500) NOT NULL DEFAULT '',
  `geo` varchar(500) NOT NULL DEFAULT '',
  `desc` varchar(500) NOT NULL DEFAULT '',

  `boy_name` varchar(500) NOT NULL DEFAULT '',
  `boy_bank` varchar(500) NOT NULL DEFAULT '',
  `boy_tel` varchar(500) NOT NULL DEFAULT '',
  `boy_dad_name` varchar(500) NOT NULL DEFAULT '',
  `boy_dad_tel` varchar(500) NOT NULL DEFAULT '',
  `boy_mom_name` varchar(500) NOT NULL DEFAULT '',
  `boy_mom_tel` varchar(500) NOT NULL DEFAULT '',


  `girl_name` varchar(500) NOT NULL DEFAULT '',
  `girl_bank` varchar(500) NOT NULL DEFAULT '',
  `girl_tel` varchar(500) NOT NULL DEFAULT '',
  `girl_dad_name` varchar(500) NOT NULL DEFAULT '',
  `girl_dad_tel` varchar(500) NOT NULL DEFAULT '',
  `girl_mom_name` varchar(500) NOT NULL DEFAULT '',
  `girl_mom_tel` varchar(500) NOT NULL DEFAULT '',

  `status` tinyint NOT NULL DEFAULT '1',
  `update_dt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `chats` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `user` varchar(500) NOT NULL DEFAULT '',
  `room_name` varchar(500) NOT NULL DEFAULT '',
  `message` varchar(500) NOT NULL DEFAULT '',
  `update_dt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;



INSERT INTO weddings
VALUES (
  'seokhwan',-- id
  'qwer1234', -- password
  '2022-06-05 14:00:00',-- date
  '서울특별시 강남구 테헤란로 440',-- location
  '37.50601586122192, 127.05625558991849',-- geo
  'test',-- desc

  '원석환',-- boy_name
  '카카오뱅크 333304-27017-06',-- boy_bank
  '01030072436',-- boy_tel
  'null',-- boy_dad_name
  'null',-- boy_dad_tel
  'null',-- boy_mom_name
  'null',-- boy_mom_tel

  'null',-- girl_name
  'null',-- girl_bank
  'null',-- girl_tel
  'null',-- girl_dad_name
  'null',-- girl_dad_tel
  'null',-- girl_mom_name
  'null',-- girl_mom_tel
  1,
  now()
);

