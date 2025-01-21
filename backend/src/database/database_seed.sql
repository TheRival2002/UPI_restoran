INSERT INTO Meal_Categories(Name) VALUES
('Appetizers'),
('Main Courses'),
('Desserts'),
('Drinks');


INSERT INTO meals (Name, Description, Price, Image, Meal_Category_Id)
VALUES
('Spring Rolls', 'Crispy rolls filled with vegetables and served with sweet chili sauce.', 4.99, 'spring_rolls.jpeg', 1),
('Bruschetta', 'Toasted bread topped with diced tomatoes, basil, and olive oil.', 5.49, 'bruschetta.jpg', 1),
('Caesar Salad', 'Classic Caesar salad with romaine lettuce, croutons, and Parmesan.', 6.99, 'cesar_salad.jpg', 1),
('Garlic Bread', 'Freshly baked bread topped with garlic butter and herbs.', 3.99, 'garlic_bread.jpg', 1),
('Stuffed Mushrooms', 'Mushrooms filled with a cheesy herb mixture.', 5.99, 'stuffed_mushrooms.jpg', 1),
('Mozzarella Sticks', 'Fried mozzarella sticks served with marinara sauce.', 4.99, 'mozzarela_sticks.jpg', 1),
('Chicken Wings', 'Spicy and tangy chicken wings served with ranch dip.', 7.99, 'chicken_wings.jpeg', 1),
('Tomato Soup', 'Rich and creamy tomato soup topped with croutons.', 4.49, 'tomato_soup.jpeg', 1),
('Onion Rings', 'Crispy golden onion rings with a zesty dipping sauce.', 3.99, 'onion_rings.jpeg', 1),
('Caprese Salad', 'Fresh mozzarella, tomatoes, and basil drizzled with balsamic.', 6.49, 'caprese_salad.jpeg', 1),
('Greek Salad', 'Salad with tomatoes, cucumber, olives, and feta cheese.', 6.99, 'greekSalad.jpeg', 1),
('Shrimp Cocktail', 'Chilled shrimp served with tangy cocktail sauce.', 7.99, 'shrimp_coctail.jpeg', 1),
('Mini Tacos', 'Small tacos with chicken, beef, or vegetarian fillings.', 6.49, 'miniTacos.jpeg', 1),
('Crab Cakes', 'Golden crab cakes served with remoulade sauce.', 8.99, 'crabCakes.jpeg', 1),
('Beef Sliders', 'Mini beef burgers with cheese and special sauce.', 7.49, 'beefSliders.jpeg', 1),
('Spinach Dip', 'Creamy spinach dip served with tortilla chips.', 5.49, 'spinachDip.jpeg', 1),
('Potato Skins', 'Baked potato skins topped with cheese and bacon.', 6.99, 'potatoSkin.jpeg', 1),
('Avocado Toast', 'Toasted bread topped with smashed avocado and seasoning.', 5.99, 'avocadoToast.jpeg', 1),
('Deviled Eggs', 'Classic deviled eggs with a touch of paprika.', 4.49, 'deviledEggs.jpeg', 1),
('Nachos', 'Tortilla chips loaded with cheese, beans, and jalapenos.', 6.99, 'nachos.jpg', 1),

('Grilled Chicken', 'Tender grilled chicken breast served with seasonal vegetables.', 12.99, 'grilledChicken.jpeg', 2),
('Spaghetti Bolognese', 'Classic Italian pasta with rich meat sauce.', 10.99, 'spagheti.jpeg', 2),
('Beef Steak', 'Juicy beef steak cooked to your preference.', 16.99, 'beefSteak.jpeg', 2),
('Salmon Fillet', 'Grilled salmon served with lemon butter sauce.', 14.99, 'salmonFilet.jpeg', 2),
('Vegetarian Pizza', 'Pizza topped with fresh vegetables and mozzarella.', 11.99, 'vegeteriana.jpeg', 2),
('Chicken Alfredo', 'Creamy pasta with chicken and Parmesan cheese.', 13.99, 'chickenAlfredo.jpeg', 2),
('Burger and Fries', 'Classic cheeseburger served with crispy fries.', 9.99, 'burgerAndFries.jpeg', 2),
('Lamb Chops', 'Grilled lamb chops with mint sauce.', 18.99, 'lambChops.jpg', 2),
('Vegetable Stir Fry', 'Stir-fried vegetables in a savory sauce.', 10.49, 'vegetablesStirFry.jpeg', 2),
('Seafood Paella', 'Spanish rice dish with shrimp, mussels, and calamari.', 15.99, 'seafoodPaella.jpeg', 2),
('Roast Beef', 'Slow-cooked roast beef with gravy and mashed potatoes.', 14.49, 'roastBeef.jpeg', 2),
('Chicken Tikka Masala', 'Indian-style chicken in a creamy tomato sauce.', 12.99, 'chickenTikkaMasala.jpeg', 2),
('Pork Chops', 'Juicy pork chops served with apple sauce.', 13.99, 'porkChops.jpg', 2),
('Vegetable Curry', 'Spiced vegetable curry served with steamed rice.', 11.49, 'vegetableCurry.jpeg', 2),
('Chicken Quesadilla', 'Grilled tortilla filled with chicken and cheese.', 9.99, 'chickenQuesadilla.jpeg', 2),
('Fettuccine Carbonara', 'Pasta with creamy sauce, pancetta, and Parmesan.', 12.99, 'carbonara.jpeg', 2),
('BBQ Ribs', 'Smoky barbecue ribs served with coleslaw.', 16.99, 'BBQRibs.jpeg', 2),
('Turkey Sandwich', 'Fresh turkey sandwich with lettuce and tomato.', 8.99, 'turkeySandwich.jpeg', 2),
('Fish and Chips', 'Crispy battered fish served with fries.', 10.99, 'fishAndChips.jpeg', 2),
('Eggplant Parmesan', 'Breaded eggplant with marinara and mozzarella.', 11.99, 'eggplantParmesan.jpeg', 2),

('Chocolate Cake', 'Decadent chocolate cake with a rich ganache.', 6.99, 'chocolateCake.jpeg', 3),
('Cheesecake', 'Creamy cheesecake with a graham cracker crust.', 7.49, 'chesseCake.jpeg', 3),
('Ice Cream Sundae', 'Vanilla ice cream with chocolate syrup and whipped cream.', 5.99, 'icecreamSundae.jpeg', 3),
('Fruit Tart', 'Pastry crust filled with custard and topped with fresh fruits.', 6.49, 'fruitTart.jpeg', 3),
('Apple Pie', 'Classic apple pie served with a scoop of vanilla ice cream.', 5.99, 'applePie.jpeg', 3),
('Brownies', 'Fudgy chocolate brownies with a hint of espresso.', 4.99, 'brownies.jpeg', 3),
('Tiramisu', 'Classic Italian dessert with coffee and mascarpone.', 7.99, 'tiramisu.jpeg', 3),
('Panna Cotta', 'Creamy Italian dessert with a berry sauce.', 6.49, 'pannaCota.jpeg', 3),
('Creme Brulee', 'Rich custard topped with caramelized sugar.', 7.49, 'cremeBrulee.jpeg', 3),
('Churros', 'Fried dough pastries served with chocolate sauce.', 5.99, 'churros.jpeg', 3),
('Macarons', 'Delicate French cookies in various flavors.', 8.49, 'maccarons.jpeg', 3),
('Lemon Meringue Pie', 'Tangy lemon pie topped with toasted meringue.', 6.99, 'lemonPie.jpeg', 3),
('Rice Pudding', 'Creamy rice pudding with cinnamon.', 5.49, 'ricePudding.jpeg', 3),
('Peach Cobbler', 'Baked peach dessert with a buttery crust.', 6.49, 'peachCobbler.jpeg', 3),
('Black Forest Cake', 'Chocolate cake layered with cherries and cream.', 7.99, 'blackForestCake.jpeg', 3),
('Carrot Cake', 'Moist carrot cake with cream cheese frosting.', 6.99, 'carrotCake.jpeg', 3),
('Banoffee Pie', 'Pie with bananas, cream, and toffee.', 7.49, 'bannofiePie.jpeg', 3),
('Custard Tart', 'Sweet custard in a flaky pastry shell.', 5.99, 'custradTart.jpeg', 3),
('Coconut Cake', 'Light and fluffy coconut cake with cream.', 6.49, 'coconutCake.jpeg', 3),

('Coca Cola', 'Refreshing carbonated soft drink.', 1.99, 'cola.jpeg', 4),
('Orange Juice', 'Freshly squeezed orange juice.', 2.99, 'orangeJuice.jpeg', 4),
('Iced Tea', 'Chilled tea served with a slice of lemon.', 2.49, 'icedTea.jpeg', 4),
('Latte', 'Creamy coffee with steamed milk.', 3.99, 'latte.jpeg', 4),
('Espresso', 'Strong and rich espresso shot.', 2.49, 'espresso.jpeg', 4),
('Smoothie', 'Blended drink with fruits and yogurt.', 4.99, 'smoothie.jpeg', 4),
('Mineral Water', 'Refreshing still or sparkling water.', 1.49, 'mineralWater.jpeg', 4),
('Hot Chocolate', 'Rich and creamy hot chocolate drink.', 3.49, 'hotChocolate.jpeg', 4),
('Milkshake', 'Thick milkshake in various flavors.', 4.49, 'milkShake.jpeg', 4),
('Mojito', 'Classic mint and lime mocktail.', 3.99, 'mojito.jpeg', 4),
('Pina Colada', 'Tropical drink with pineapple and coconut.', 4.99, 'pinaColada.jpeg', 4),
('Green Tea', 'Hot green tea with a soothing aroma.', 2.99, 'greenTea.jpeg', 4),
('Americano', 'Espresso diluted with hot water.', 2.99, 'americano.jpeg', 4),
('Lemonade', 'Freshly squeezed lemonade.', 2.49, 'lemonade.jpeg', 4),
('Chai Latte', 'Spiced tea with steamed milk.', 3.99, 'chaiLatte.jpeg', 4),
('Sparkling Lemonade', 'Bubbly lemonade with a hint of mint.', 2.99, 'sparklingLemonade.jpeg', 4),
('Berry Smoothie', 'Mixed berry smoothie with yogurt.', 4.49, 'burrySmoothie.jpeg', 4),
('Vanilla Shake', 'Classic vanilla milkshake.', 3.99, 'vanillaShake.jpeg', 4),
('Iced Coffee', 'Chilled coffee with milk and sugar.', 3.49, 'icedCoffe.jpeg', 4);

INSERT INTO daily_offers (Meal_Id, Daily_Offer_Date)
VALUES
(1, CURRENT_DATE + INTERVAL '0 day'),
(26, CURRENT_DATE + INTERVAL '0 day'),
(51, CURRENT_DATE + INTERVAL '0 day'),
(2, CURRENT_DATE + INTERVAL '1 day'),
(27, CURRENT_DATE + INTERVAL '1 day'),
(52, CURRENT_DATE + INTERVAL '1 day'),
(3, CURRENT_DATE + INTERVAL '2 day'),
(28, CURRENT_DATE + INTERVAL '2 day'),
(53, CURRENT_DATE + INTERVAL '2 day'),
(4, CURRENT_DATE + INTERVAL '3 day'),
(29, CURRENT_DATE + INTERVAL '3 day'),
(54, CURRENT_DATE + INTERVAL '3 day'),
(5, CURRENT_DATE + INTERVAL '4 day'),
(30, CURRENT_DATE + INTERVAL '4 day'),
(55, CURRENT_DATE + INTERVAL '4 day'),
(6, CURRENT_DATE + INTERVAL '5 day'),
(31, CURRENT_DATE + INTERVAL '5 day'),
(56, CURRENT_DATE + INTERVAL '5 day'),
(7, CURRENT_DATE + INTERVAL '6 day'),
(32, CURRENT_DATE + INTERVAL '6 day'),
(57, CURRENT_DATE + INTERVAL '6 day'),
(8, CURRENT_DATE + INTERVAL '7 day'),
(33, CURRENT_DATE + INTERVAL '7 day'),
(58, CURRENT_DATE + INTERVAL '7 day');

INSERT INTO Roles(Name) VALUES
('Admin'),
('User');

INSERT INTO users (name, surname, email, password, role_id, username)
VALUES
('Ivan', 'Horvat', 'ivan.horvat@gmail.com', 'password123', 1, 'IvanH'),
('Ana', 'Kovačić', 'ana.kovacic@gmail.com', 'securepass1', 1, 'AnaK_22'),
('Luka', 'Babić', 'luka.babic@gmail.com', 'mypassword', 1, 'Lukaa_123'),
('Maja', 'Marić', 'maja.maric@gmail.com', 'strongpass', 1, 'MajaM_77'),
('Karlo', 'Novak', 'karlo.novak@gmail.com', 'qwerty123', 1, 'KarN_2024'),
('Petra', 'Marković', 'petra.markovic2@gmail.com', 'letmein', 1, 'PetraM_99'),
('Josip', 'Bošnjak', 'josip.bosnjak@gmail.com', 'ilovecroatia', 1, 'Joso_88'),
('Ivana', 'Jurić', 'ivana.juric@gmail.com', 'password321', 1, 'IvaJ_1234'),
('Tomislav', 'Grgić', 'tomislav.grgic@gmail.com', 'croatia2023', 2, 'TommyG_101'),
('Martina', 'Vuković', 'martina.vukovic@gmail.com', 'simplepass', 2, 'MartyV_23'),
('Ante', 'Pavić', 'ante.pavic@gmail.com', 'pass12345', 2, 'AntoP_2024'),
('Tea', 'Petrović', 'tea.petrovic@gmail.com', 'croatian123', 2, 'TeaP_76'),
('Stjepan', 'Tomić', 'stjepan.tomic4@gmail.com', 'password987', 2, 'SjtTom_33'),
('Marija', 'Knežević', 'marija.knezevic@gmail.com', 'secure1234', 2, 'MaraKn_11'),
('Nikola', 'Krstić', 'nikola.krst1c@gmail.com', 'password111', 2, 'NikoK_999'),
('Ema', 'Račić', 'ema.racic@gmail.com', 'croatiapass', 2, 'EmaR_007'),
('Dario', 'Matić', 'dario.matic@gmail.com', 'mypassword2', 2, 'DariM_555'),
('Lucija', 'Filipović', 'lucija.filipovic@gmail.com', 'hello123', 2, 'LucF_2023'),
('Damir', 'Lovrić', 'damir.lovric@gmail.com', 'secureme', 2, 'DamiL_99');
insert into Users (name, surname, email, password, role_id, username) values ('Sidonia', 'Chadbourne', 'schadbourne0@utexas.edu', 'h8+_ncTg', 2, 'schadbourne0');
insert into Users (name, surname, email, password, role_id, username) values ('Thomasina', 'Crummie', 'tcrummie1@printfriendly.com', 'v0FQy!*7', 2, 'tcrummie1');
insert into Users (name, surname, email, password, role_id, username) values ('Kellen', 'Bonsall', 'kbonsall2@mit.edu', 'u9mcIDJ', 2, 'kbonsall2');
insert into Users (name, surname, email, password, role_id, username) values ('Keen', 'Catterell', 'kcatterell3@so-net.ne.jp', 'w6VK(Tz', 2, 'kcatterell3');
insert into Users (name, surname, email, password, role_id, username) values ('Felisha', 'McGowing', 'fmcgowing4@acquirethisname.com', 'u1"8_', 2, 'fmcgowing4');
insert into Users (name, surname, email, password, role_id, username) values ('Tommi', 'Fforde', 'tfforde5@youtu.be', 'l9Cwc', 2, 'tfforde5');
insert into Users (name, surname, email, password, role_id, username) values ('Eloisa', 'Stevenson', 'estevenson6@nps.gov', 'h3q_$&*', 2, 'estevenson6');
insert into Users (name, surname, email, password, role_id, username) values ('Myrilla', 'Grishmanov', 'mgrishmanov7@qq.com', 'a5<ZwD"%p|', 2, 'mgrishmanov7');
insert into Users (name, surname, email, password, role_id, username) values ('Wash', 'Wolford', 'wwolford8@hexun.com', 'p2rE|g\E', 2, 'wwolford8');
insert into Users (name, surname, email, password, role_id, username) values ('Karleen', 'Kenright', 'kkenright9@yolasite.com', 'v7b)/?Z', 2, 'kkenright9');
insert into Users (name, surname, email, password, role_id, username) values ('Lily', 'Coppin', 'lcoppina@yellowpages.com', 't7j|%''ID', 2, 'lcoppina');
insert into Users (name, surname, email, password, role_id, username) values ('Linoel', 'Overland', 'loverlandb@tinyurl.com', 's4).Azq@', 2, 'loverlandb');
insert into Users (name, surname, email, password, role_id, username) values ('Jayson', 'Kikke', 'jkikkec@marketwatch.com', 'a9d*''', 2, 'jkikkec');
insert into Users (name, surname, email, password, role_id, username) values ('Marylou', 'Sheryn', 'msherynd@sfgate.com', 'y1lEkrsi6', 2, 'msherynd');
insert into Users (name, surname, email, password, role_id, username) values ('Kirbie', 'Shadrack', 'kshadracke@shinystat.com', 's85EED', 2, 'kshadracke');
insert into Users (name, surname, email, password, role_id, username) values ('Tiertza', 'Grassett', 'tgrassettf@theguardian.com', 'v9+h?', 2, 'tgrassettf');
insert into Users (name, surname, email, password, role_id, username) values ('Marion', 'Gavrielly', 'mgavriellyg@newyorker.com', 'z85+T@WOc6', 2, 'mgavriellyg');
insert into Users (name, surname, email, password, role_id, username) values ('Jonathan', 'Choppen', 'jchoppenh@free.fr', 'p9S!H>a/3', 2, 'jchoppenh');
insert into Users (name, surname, email, password, role_id, username) values ('Gene', 'Sacher', 'gsacheri@blinklist.com', 'w8Lx\*GE=', 2, 'gsacheri');
insert into Users (name, surname, email, password, role_id, username) values ('Larry', 'Fromant', 'lfromantj@ebay.co.uk', 'm7o~8r4', 2, 'lfromantj');
insert into Users (name, surname, email, password, role_id, username) values ('Karia', 'Harsum', 'kharsumk@ox.ac.uk', 'm5KJ(ut', 2, 'kharsumk');
insert into Users (name, surname, email, password, role_id, username) values ('Torrie', 'Guildford', 'tguildfordl@1688.com', 'i20\nKbH', 2, 'tguildfordl');
insert into Users (name, surname, email, password, role_id, username) values ('Stacy', 'Delap', 'sdelapm@engadget.com', 'i2scV"', 2, 'sdelapm');
insert into Users (name, surname, email, password, role_id, username) values ('Marten', 'Hariot', 'mhariotn@archive.org', 'w3m&Dii~j!', 2, 'mhariotn');
insert into Users (name, surname, email, password, role_id, username) values ('Annelise', 'Wrightam', 'awrightamo@lycos.com', 'c2_4R}g', 2, 'awrightamo');
insert into Users (name, surname, email, password, role_id, username) values ('Luz', 'Kidby', 'lkidbyp@toplist.cz', 's4e($!a=#T', 2, 'lkidbyp');
insert into Users (name, surname, email, password, role_id, username) values ('Winnifred', 'Sawer', 'wsawerq@angelfire.com', 't3ie*W', 2, 'wsawerq');
insert into Users (name, surname, email, password, role_id, username) values ('Cory', 'O''Loughnan', 'coloughnanr@godaddy.com', 'c84&{`5x''', 2, 'coloughnanr');
insert into Users (name, surname, email, password, role_id, username) values ('Jo', 'Scamerden', 'jscamerdens@google.fr', 'r1BpB}.Pn', 2, 'jscamerdens');
insert into Users (name, surname, email, password, role_id, username) values ('Darill', 'Batteson', 'dbattesont@blog.com', 'k9pE_', 2, 'dbattesont');
insert into Users (name, surname, email, password, role_id, username) values ('Rozanne', 'Cahey', 'rcaheyu@t-online.de', 'k9to+', 2, 'rcaheyu');
insert into Users (name, surname, email, password, role_id, username) values ('Trent', 'Bousquet', 'tbousquetv@marketwatch.com', 'b1a(1', 2, 'tbousquetv');
insert into Users (name, surname, email, password, role_id, username) values ('Emyle', 'Hanretty', 'ehanrettyw@fc2.com', 'o6i8H', 2, 'ehanrettyw');
insert into Users (name, surname, email, password, role_id, username) values ('Ingeborg', 'Bartak', 'ibartakx@studiopress.com', 'h6?*O', 2, 'ibartakx');
insert into Users (name, surname, email, password, role_id, username) values ('Katie', 'Claisse', 'kclaissey@baidu.com', 'd1~tsZcZb', 2, 'kclaissey');
insert into Users (name, surname, email, password, role_id, username) values ('Clevie', 'Denizet', 'cdenizetz@flickr.com', 'u0ZZ"', 2, 'cdenizetz');
insert into Users (name, surname, email, password, role_id, username) values ('Jena', 'Tassell', 'jtassell10@wufoo.com', 'h8q"w24xv', 2, 'jtassell10');
insert into Users (name, surname, email, password, role_id, username) values ('Judy', 'Rittmeier', 'jrittmeier11@illinois.edu', 'a1Be>o', 2, 'jrittmeier11');
insert into Users (name, surname, email, password, role_id, username) values ('Bealle', 'Lezemore', 'blezemore12@hhs.gov', 'f9I|X$', 2, 'blezemore12');
insert into Users (name, surname, email, password, role_id, username) values ('Noland', 'Eddisford', 'neddisford13@fotki.com', 'l4&50', 2, 'neddisford13');
insert into Users (name, surname, email, password, role_id, username) values ('Felicio', 'Divisek', 'fdivisek14@yale.edu', 'u5?J},QJdi', 2, 'fdivisek14');
insert into Users (name, surname, email, password, role_id, username) values ('Cristian', 'Emerson', 'cemerson15@tmall.com', 'v8!7Z', 2, 'cemerson15');
insert into Users (name, surname, email, password, role_id, username) values ('Garvin', 'Cahalan', 'gcahalan16@technorati.com', 'k4./su', 2, 'gcahalan16');
insert into Users (name, surname, email, password, role_id, username) values ('Kory', 'Bridgestock', 'kbridgestock17@sfgate.com', 'm8bg.', 2, 'kbridgestock17');
insert into Users (name, surname, email, password, role_id, username) values ('Trumaine', 'Maxwale', 'tmaxwale18@oracle.com', 'g1l''agmt"S', 2, 'tmaxwale18');
insert into Users (name, surname, email, password, role_id, username) values ('Othilie', 'Cuttings', 'ocuttings19@dedecms.com', 'z7iPKe', 2, 'ocuttings19');
insert into Users (name, surname, email, password, role_id, username) values ('Emmaline', 'Coldbreath', 'ecoldbreath1a@pagesperso-orange.fr', 's0Q=W@g}M', 2, 'ecoldbreath1a');
insert into Users (name, surname, email, password, role_id, username) values ('Batsheva', 'Coburn', 'bcoburn1b@thetimes.co.uk', 'd0u#7~?|6', 2, 'bcoburn1b');
insert into Users (name, surname, email, password, role_id, username) values ('Phil', 'Janota', 'pjanota1c@so-net.ne.jp', 'v2zqjqO', 2, 'pjanota1c');
insert into Users (name, surname, email, password, role_id, username) values ('Clareta', 'Entissle', 'centissle1d@live.com', 's2g_9<<J$', 2, 'centissle1d');
insert into Users (name, surname, email, password, role_id, username) values ('Marta', 'Boone', 'mboone1e@thetimes.co.uk', 'o2A?C\D.', 2, 'mboone1e');
insert into Users (name, surname, email, password, role_id, username) values ('Abe', 'Gorick', 'agorick1f@mail.ru', 'q7PW#u\v<u', 2, 'agorick1f');
insert into Users (name, surname, email, password, role_id, username) values ('Minnaminnie', 'Helwig', 'mhelwig1g@github.io', 's1GOYRI', 2, 'mhelwig1g');
insert into Users (name, surname, email, password, role_id, username) values ('Caresa', 'Panton', 'cpanton1h@webs.com', 'v1K@b(@Pc', 2, 'cpanton1h');
insert into Users (name, surname, email, password, role_id, username) values ('Mata', 'Hansman', 'mhansman1i@nymag.com', 'r52uE{p', 2, 'mhansman1i');
insert into Users (name, surname, email, password, role_id, username) values ('Lianna', 'Jime', 'ljime1j@phoca.cz', 't2vPg?', 2, 'ljime1j');
insert into Users (name, surname, email, password, role_id, username) values ('Seka', 'Lynock', 'slynock1k@wisc.edu', 'l44j?n', 2, 'slynock1k');
insert into Users (name, surname, email, password, role_id, username) values ('Reilly', 'Mattia', 'rmattia1l@latimes.com', 'o5H9o}z*O', 2, 'rmattia1l');
insert into Users (name, surname, email, password, role_id, username) values ('Henriette', 'Empringham', 'hempringham1m@blogger.com', 'x4/bZyL%', 2, 'hempringham1m');
insert into Users (name, surname, email, password, role_id, username) values ('Thacher', 'Jeffrey', 'tjeffrey1n@house.gov', 'm8IG06Act4', 2, 'tjeffrey1n');
insert into Users (name, surname, email, password, role_id, username) values ('Corbie', 'Shore', 'cshore1o@hc360.com', 'g3E7/i1', 2, 'cshore1o');
insert into Users (name, surname, email, password, role_id, username) values ('Darb', 'Sprasen', 'dsprasen1p@opensource.org', 'b8I"Wx8}}', 2, 'dsprasen1p');
insert into Users (name, surname, email, password, role_id, username) values ('Ingelbert', 'Toomer', 'itoomer1q@ucsd.edu', 'j98Vlt`#N5', 2, 'itoomer1q');
insert into Users (name, surname, email, password, role_id, username) values ('Walton', 'Philliskirk', 'wphilliskirk1r@tmall.com', 'j9Ywt2(', 2, 'wphilliskirk1r');
insert into Users (name, surname, email, password, role_id, username) values ('Harriot', 'Grahl', 'hgrahl1s@amazon.co.jp', 'b4Hbb|', 2, 'hgrahl1s');
insert into Users (name, surname, email, password, role_id, username) values ('Filmore', 'Wiggett', 'fwiggett1t@tiny.cc', 'i92@leES', 2, 'fwiggett1t');
insert into Users (name, surname, email, password, role_id, username) values ('Torey', 'Lanchbury', 'tlanchbury1u@sfgate.com', 'r5IF''`GI', 2, 'tlanchbury1u');
insert into Users (name, surname, email, password, role_id, username) values ('Catlaina', 'Dalgetty', 'cdalgetty1v@utexas.edu', 'l3sLW', 2, 'cdalgetty1v');
insert into Users (name, surname, email, password, role_id, username) values ('Carolyn', 'Pechan', 'cpechan1w@surveymonkey.com', 'm2=)Aj1', 2, 'cpechan1w');
insert into Users (name, surname, email, password, role_id, username) values ('Aurel', 'Deerr', 'adeerr1x@huffingtonpost.com', 'q6oeV', 2, 'adeerr1x');


INSERT INTO orders (user_id, order_status, total_price)
VALUES
(15, 'in-progress', 35.50),
(16, 'delivered', 25.99),
(17, 'canceled', 18.75),
(18, 'in-progress', 40.00),
(19, 'delivered', 28.60),
(20, 'in-progress', 19.20),
(21, 'delivered', 42.30),
(22, 'canceled', 21.90),
(23, 'in-progress', 30.00),
(24, 'delivered', 35.50),
(25, 'in-progress', 22.75),
(26, 'delivered', 27.00),
(27, 'in-progress', 23.90),
(28, 'delivered', 29.99),
(29, 'in-progress', 24.25),
(30, 'canceled', 31.60),
(31, 'in-progress', 18.30),
(32, 'delivered', 22.60),
(33, 'canceled', 38.00),
(34, 'in-progress', 20.50),
(35, 'delivered', 26.75),
(36, 'in-progress', 33.00),
(37, 'delivered', 40.40),
(38, 'in-progress', 42.80),
(39, 'canceled', 20.25),
(40, 'delivered', 27.90),
(41, 'in-progress', 19.10),
(42, 'delivered', 41.00),
(43, 'in-progress', 29.50),
(44, 'delivered', 25.25),
(45, 'in-progress', 23.40),
(46, 'delivered', 39.70),
(47, 'in-progress', 32.50),
(48, 'canceled', 24.80),
(49, 'delivered', 27.50),
(50, 'in-progress', 34.00),
(51, 'delivered', 28.99),
(52, 'in-progress', 31.20),
(53, 'delivered', 29.90),
(54, 'canceled', 18.20),
(55, 'in-progress', 43.99),
(56, 'delivered', 39.50),
(57, 'in-progress', 22.00),
(58, 'delivered', 31.75),
(59, 'in-progress', 41.00),
(60, 'canceled', 18.50),
(61, 'delivered', 34.90),
(62, 'in-progress', 26.75),
(63, 'delivered', 27.20),
(64, 'in-progress', 32.40),
(65, 'delivered', 23.10),
(66, 'in-progress', 37.25),
(67, 'delivered', 30.00),
(68, 'in-progress', 22.50),
(69, 'delivered', 34.40),
(70, 'in-progress', 28.10),
(71, 'delivered', 21.50),
(72, 'canceled', 39.60),
(73, 'in-progress', 25.30),
(74, 'delivered', 22.75),
(75, 'in-progress', 42.00),
(76, 'delivered', 38.20),
(77, 'canceled', 25.80),
(78, 'in-progress', 19.99),
(79, 'delivered', 24.40),
(80, 'in-progress', 43.00);

INSERT INTO order_items (order_id, meal_id, amount, total_price)
VALUES
(15, 1, 2, 50.00),
(15, 2, 1, 20.50),
(16, 3, 1, 18.75),
(16, 4, 2, 25.24),
(17, 5, 1, 18.00),
(18, 6, 1, 19.20),
(18, 7, 2, 30.40),
(19, 8, 1, 23.00),
(19, 9, 2, 28.50),
(20, 10, 3, 63.00),
(21, 11, 2, 24.00),
(21, 12, 1, 12.00),
(22, 13, 3, 33.00),
(23, 14, 1, 18.75),
(24, 15, 2, 44.00),
(25, 16, 1, 21.50),
(25, 17, 2, 22.80),
(26, 18, 1, 22.50),
(27, 19, 2, 40.00),
(27, 20, 1, 12.00),
(28, 21, 2, 23.00),
(29, 22, 3, 50.25),
(30, 23, 1, 15.00),
(30, 24, 2, 27.30),
(31, 25, 2, 24.00),
(31, 26, 1, 22.50),
(32, 27, 1, 18.30),
(32, 28, 3, 52.50),
(33, 29, 2, 42.00),
(33, 30, 1, 23.80),
(34, 31, 1, 15.90),
(35, 32, 2, 40.50),
(35, 33, 1, 23.00),
(36, 34, 3, 44.25),
(37, 35, 2, 46.50),
(38, 36, 1, 22.50),
(38, 37, 2, 48.80),
(39, 38, 1, 19.90),
(39, 39, 2, 35.90),
(40, 40, 3, 49.20),
(41, 41, 1, 22.00),
(41, 42, 2, 33.00),
(42, 43, 2, 45.50),
(42, 44, 1, 19.20),
(43, 45, 3, 57.90),
(44, 46, 2, 39.00),
(45, 47, 1, 24.00),
(45, 48, 2, 30.30),
(46, 49, 1, 19.40),
(47, 50, 2, 41.60),
(47, 51, 1, 15.50),
(48, 52, 3, 58.80),
(49, 53, 2, 36.75),
(50, 54, 1, 21.00),
(50, 55, 2, 40.00),
(51, 56, 3, 67.50),
(52, 57, 1, 23.00),
(53, 58, 2, 34.80),
(54, 59, 1, 22.50),
(54, 60, 2, 30.00),
(55, 61, 1, 18.00),
(55, 62, 2, 28.00),
(56, 63, 1, 19.50),
(57, 64, 3, 61.50),
(58, 65, 1, 22.75),
(59, 66, 2, 37.60),
(60, 67, 1, 15.50),
(61, 68, 2, 33.00),
(62, 69, 1, 18.30),
(62, 70, 2, 45.60),
(63, 71, 2, 37.20),
(64, 72, 1, 21.00),
(65, 73, 2, 44.50),
(66, 74, 1, 19.10),
(40, 75, 2, 40.90),
(41, 76, 1, 22.00),
(42, 77, 2, 49.80),
(43, 78, 1, 20.40);
