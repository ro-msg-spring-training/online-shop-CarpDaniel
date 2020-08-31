insert into event values (1, 'Star Wars Party', 'Themed Party', true, '2019-09-17','2019-09-17', 200,'Nerdiest party in Cluj',true, 'Best costume wins free drinks', 'creator',timestamp '2020-09-17 18:30:00.00',timestamp '2020-09-17 23:30:00.00',5,'You can buy tickets exclusively online and we have a no return policy!');
insert into event values (2, 'msg Party', 'Intern Party', false, '2019-10-18', '2019-10-18', 50,'Boom schakalaka',true, 'BYOB', 'creator',timestamp '2020-10-18 20:30:00.00',timestamp '2020-10-18 23:30:00.00',50,'Best choices for your fun time!');
insert into event values (3, 'Chess Club Meeting', 'For Chess Lovers', true,  '2020-06-17',  '2020-06-19', 40,'Feel free to join',true, 'New competition will be announced', 'creator',timestamp '2020-06-17 12:30:00.00',timestamp '2020-06-17 16:30:00.00',15,'For every 2 tickets bought you get one for free!');
insert into event values (4, 'Boc Party', 'Election Winning Party', true,  '2020-11-17',  '2020-11-17', 500,'Free subway sandwiches',true, 'All are welcome', 'creator',timestamp '2020-11-17 18:30:00.00',timestamp '2020-11-17 23:30:00.00',8,'You can''t miss these ones!' );
insert into event values (5, 'UBB vs UTCN contest', 'Hackathon', true,  '2021-09-17', '2021-09-17', 120,'No python please',true, 'Free pizza for everyone', 'creator',timestamp '2021-09-17 09:30:00.00',timestamp '2021-09-17 23:30:00.00',5,'Best deal offer!');
insert into event values (6, 'Most sarmale ever made', 'Breaking records', true,  '2021-09-20',  '2021-09-20', 200,'Breaking the record for most cabbage rolls made',true, 'Bring your friends and eat for free', 'creator',timestamp '2021-09-20 8:30:00.00',timestamp '2021-09-20 23:30:00.00',12,'Tickets can also be bought from out partners and on www.ticketsforsale.com');
insert into event values (7, 'Fruit Party', 'Nothing but fruits, for real', false,  '2019-09-17',  '2019-09-17', 200,'Healthiest party in Cluj',true, 'NO MEAT!!!', 'creator',timestamp '2019-09-17 18:30:00.00',timestamp '2019-09-17 23:30:00.00',2,'You can buy tickets exclusively online and we have a no return policy!');
insert into event values (8, 'Star Trek Party', 'Themed Party', true,  '2020-12-17',  '2020-12-17', 200,'Nerdiest party in Cluj 2',true, 'Best costume wins free drinks', 'creator',timestamp '2020-12-17 18:30:00.00',timestamp '2020-12-17 23:30:00.00',5,'You get now 15% off for every ticket category if you buy 2 or more tickets!');
insert into event_sublocation values(1,1);
insert into event_sublocation values(2,2);
insert into event_sublocation values(5,3);
insert into event_sublocation values(1,4);
insert into event_sublocation values(3,5);
insert into event_sublocation values(2,6);
insert into event_sublocation values(4,7);
insert into event_sublocation values(2,8);
insert into ticket_category values(1, 'VIP','best', 50,'really good', 5, 1);
insert into ticket_category values(2, 'OK','ok', 40,'kind of ok', 10,1);
insert into ticket_category values(3, 'VIP','best', 50,'really good', 17, 2);
insert into ticket_category values(4, 'Medium','not so good', 100,'for you', 17,2);
insert into ticket_category values(5, 'Cheap','good deal', 10,'really good',16,2);
insert into `booking` values(1,timestamp '2020-09-17 18:47:52.69', '6011847a-94c0-4091-b301-ef839c7a10fa',1);
insert into `booking` values(2,timestamp '2020-09-17 18:47:52.69','6011847a-94c0-4091-b301-ef839c7a10fa',2);
insert into `booking` values(5,timestamp '2020-09-17 18:47:52.69','6011847a-94c0-4091-b301-ef839c7a10fa',7);
insert into `booking` values(3,timestamp '2020-09-17 18:47:52.69', '78323b75-15df-4aad-9451-8b987307077a',1);
insert into `booking` values(4,timestamp '2020-09-17 18:47:52.69','78323b75-15df-4aad-9451-8b987307077a',2);
insert into `booking` values(6,timestamp '2020-09-17 18:47:52.69','6011847a-94c0-4091-b301-ef839c7a10fa',5);
insert into `booking` values(7,timestamp '2020-09-17 18:47:52.69','6011847a-94c0-4091-b301-ef839c7a10fa',6);
insert into `booking` values(8,timestamp '2020-09-17 18:47:52.69','6011847a-94c0-4091-b301-ef839c7a10fa',8);
insert into `ticket` values (1,'Andrew','a@yahoo.com',1,1);
insert into `ticket` values (2,'AndrewC','aC@yahoo.com',1,1);
insert into `ticket` values (3,'AndrewM','aM@yahoo.com',2,3);
insert into `ticket` values (4,'AndrewS','aS@yahoo.com',2,3);
insert into `ticket` values (5,'AndrewM','aM@yahoo.com',3,1);
insert into `ticket` values (6,'AndrewS','aS@yahoo.com',4,3);

insert into picture values(1,'https://event-management-pictures.s3-eu-west-1.amazonaws.com/image-88200-1597822468303-pizza.jpg',1);
insert into picture values(2,'https://event-management-pictures.s3-eu-west-1.amazonaws.com/image-142400-1598019891841-typescript_print.png',2);
insert into picture values(3,'https://event-management-pictures.s3-eu-west-1.amazonaws.com/image-142400-1598019891841-typescript_print.png',3);
insert into picture values(4,'https://event-management-pictures.s3-eu-west-1.amazonaws.com/image-135725-1597848333216-tr30-June-Ibiza.jpg',4);
insert into picture values(5,'https://event-management-pictures.s3-eu-west-1.amazonaws.com/image-135725-1597848333216-tr30-June-Ibiza.jpg',5);
insert into picture values(6,'https://event-management-pictures.s3-eu-west-1.amazonaws.com/image-257420-1597822468246-MicrosoftTeams-image.png',6);
insert into picture values(7,'https://event-management-pictures.s3-eu-west-1.amazonaws.com/image-71686-1597835305734-untold.jpg',7);
insert into picture values(8,'https://event-management-pictures.s3-eu-west-1.amazonaws.com/image-85790-1597922834259-despicable_me_2_minions_wallpaper1_96776.jpg',8);
insert into picture values(9,'https://event-management-pictures.s3-eu-west-1.amazonaws.com/image-85790-1597922834259-despicable_me_2_minions_wallpaper1_96776.jpg',2);
insert into picture values(10,'https://event-management-pictures.s3-eu-west-1.amazonaws.com/image-85790-1597922834259-despicable_me_2_minions_wallpaper1_96776.jpg',7);
insert into picture values(11,'https://event-management-pictures.s3-eu-west-1.amazonaws.com/image-71686-1597835305734-untold.jpg',2);