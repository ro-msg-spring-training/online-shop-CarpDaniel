insert into event values (1, 'Star Wars Party', 'Themed Party', true, timestamp '2020-09-17', timestamp '2020-09-17', 200,'Nerdiest party in Cluj',true, 'Best costume wins free drinks', 'creator',timestamp '2020-09-17 18:30:00.00',timestamp '2020-09-17 23:30:00.00',5);
insert into event values (2, 'msg Party', 'Intern Party', false, timestamp '2020-10-18', timestamp '2020-10-18', 30,'Boom schakalaka',true, 'BYOB', 'creator',timestamp '2020-10-18 20:30:00.00',timestamp '2020-10-18 23:30:00.00',5);
insert into event values (3, 'Chess Club Meeting', 'For Chess Lovers', true, timestamp '2020-06-17', timestamp '2020-06-17', 40,'Feel free to join',true, 'New competition will be announced', 'creator',timestamp '2020-06-17 12:30:00.00',timestamp '2020-06-17 16:30:00.00',15);
insert into event values (4, 'Boc Party', 'Election Winning Party', true, timestamp '2020-11-17', timestamp '2020-11-17', 500,'Free subway sandwiches',true, 'All are welcome', 'creator',timestamp '2020-11-17 18:30:00.00',timestamp '2020-11-17 23:30:00.00',8);
insert into event values (5, 'UBB vs UTCN contest', 'Hackathon', true, timestamp '2021-09-17', timestamp '2021-09-17', 120,'No python please',true, 'Free pizza for everyone', 'creator',timestamp '2021-09-17 09:30:00.00',timestamp '2021-09-17 23:30:00.00',5);
insert into event values (6, 'Most sarmale ever made', 'Breaking records', true, timestamp '2021-09-20', timestamp '2021-09-20', 200,'Breaking the record for most cabbage rolls made',true, 'Bring your friends and eat for free', 'creator',timestamp '2021-09-20 8:30:00.00',timestamp '2021-09-20 23:30:00.00',12);
insert into event values (7, 'Fruit Party', 'Nothing but fruits, for real', false, timestamp '2019-09-17', timestamp '2019-09-17', 200,'Healthiest party in Cluj',true, 'NO MEAT!!!', 'creator',timestamp '2019-09-17 18:30:00.00',timestamp '2019-09-17 23:30:00.00',2);
insert into event values (8, 'Star Trek Party', 'Themed Party', true, timestamp '2020-12-17', timestamp '2020-12-17', 200,'Nerdiest party in Cluj 2',true, 'Best costume wins free drinks', 'creator',timestamp '2020-12-17 18:30:00.00',timestamp '2020-12-17 23:30:00.00',5);
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
insert into ticket_category values(3, 'VIP','best', 50,'really good', 2, 2);
insert into ticket_category values(4, 'Medium','not so good', 100,'for you', 3,2);
insert into ticket_category values(5, 'Cheap','good deal', 10,'really good',4,2);
insert into `booking` values(1,timestamp '2020-09-17 18:47:52.69', 121,1);
insert into `ticket` values (1,'Andrew','a@yahoo.com',1,1);