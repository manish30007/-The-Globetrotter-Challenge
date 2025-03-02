let destination = [
    {
      "city": "Paris",
      "country": "France",
      "clues": [
        "This city is home to a famous tower that sparkles every night.",
        "Known as the 'City of Love' and a hub for fashion and art."
      ],
      "fun_fact": [
        "The Eiffel Tower was supposed to be dismantled after 20 years but was saved because it was useful for radio transmissions!",
        "Paris has only one stop sign in the entire city—most intersections rely on priority-to-the-right rules."
      ],
      "trivia": [
        "This city is famous for its croissants and macarons. Bon appétit!",
        "Paris was originally a Roman city called Lutetia."
      ]
    },
    {
      "city": "Tokyo",
      "country": "Japan",
      "clues": [
        "This city has the busiest pedestrian crossing in the world.",
        "You can visit an entire district dedicated to anime, manga, and gaming."
      ],
      "fun_fact": [
        "Tokyo was originally a small fishing village called Edo before becoming the bustling capital it is today!",
        "More than 14 million people live in Tokyo, making it one of the most populous cities in the world."
      ],
      "trivia": [
        "The city has over 160,000 restaurants, more than any other city in the world.",
        "Tokyo’s subway system is so efficient that train delays of just a few minutes come with formal apologies."
      ]
    },
    {
      "city": "New York",
      "country": "USA",
      "clues": [
        "Home to a green statue gifted by France in the 1800s.",
        "Nicknamed 'The Big Apple' and known for its Broadway theaters."
      ],
      "fun_fact": [
        "The Statue of Liberty was originally a copper color before oxidizing to its iconic green patina.",
        "Times Square was once called Longacre Square before being renamed in 1904."
      ],
      "trivia": [
        "New York City has 468 subway stations, making it one of the most complex transit systems in the world.",
        "The Empire State Building has its own zip code: 10118."
      ]
    },
    {
      "city": "Abu Dhabi",
      "country": "UAE",
      "clues": [
        "Capital of the United Arab Emirates.",
        "Home to the stunning Sheikh Zayed Grand Mosque."
      ],
      "fun_fact": [
        "It’s on an island less than 250 meters from the mainland.",
        "Holds some of the world’s highest-valued art in the Louvre Abu Dhabi."
      ],
      "trivia": [
        "Has a focus on cultural heritage and modern development.",
        "Oil discovery in the 1950s transformed it from a fishing village."
      ]
    },
    {
      "city": "Amsterdam",
      "country": "Netherlands",
      "clues": [
        "Famous for its canals and historic narrow houses.",
        "Known for cycling culture and vibrant tulip markets."
      ],
      "fun_fact": [
        "Built on millions of wooden poles due to marshy ground.",
        "Has more bikes than residents."
      ],
      "trivia": [
        "Anne Frank House is a major historical site here.",
        "The city has over 100 kilometers of canals."
      ]
    },
    {
      "city": "Athens",
      "country": "Greece",
      "clues": [
        "Birthplace of democracy and Western philosophy.",
        "Home to the ancient Acropolis and Parthenon."
      ],
      "fun_fact": [
        "One of the oldest named cities in the world.",
        "First modern Olympic Games were held here in 1896."
      ],
      "trivia": [
        "Athena is the city’s patron goddess.",
        "The Olympic flame is lit at the Temple of Hera in Olympia, then travels here."
      ]
    },
    {
      "city": "Bangkok",
      "country": "Thailand",
      "clues": [
        "Known for its vibrant street life and ornate shrines.",
        "Famous for tuk-tuks and bustling night markets."
      ],
      "fun_fact": [
        "Has the longest city name in the world in Thai.",
        "Popular location for floating markets on canals."
      ],
      "trivia": [
        "Hosts the Grand Palace and Wat Phra Kaew.",
        "Street food culture is a major attraction."
      ]
    },
    {
      "city": "Barcelona",
      "country": "Spain",
      "clues": [
        "Famous for Gaudí’s Sagrada Família.",
        "Has a celebrated soccer team and Las Ramblas."
      ],
      "fun_fact": [
        "Architect Gaudí's work adorns the city with unique mosaics.",
        "Locals speak both Spanish and Catalan."
      ],
      "trivia": [
        "Las Ramblas is a famous pedestrian street.",
        "The city’s beaches were developed for the 1992 Olympics."
      ]
    },
    {
      "city": "Beijing",
      "country": "China",
      "clues": [
        "Home to the Forbidden City and Tiananmen Square.",
        "Not far from sections of the Great Wall."
      ],
      "fun_fact": [
        "Has six UNESCO World Heritage Sites.",
        "Commonly experiences Beijing’s bicycle culture."
      ],
      "trivia": [
        "Hosted the 2008 Summer Olympics and 2022 Winter Olympics.",
        "Traces its history back over 3,000 years."
      ]
    },
    {
      "city": "Berlin",
      "country": "Germany",
      "clues": [
        "Known for its World War II history and the Berlin Wall.",
        "Famous for vibrant art scene and techno music."
      ],
      "fun_fact": [
        "Has more bridges than Venice.",
        "The East Side Gallery is a large open-air mural collection."
      ],
      "trivia": [
        "Checkpoint Charlie was a key crossing point during the Cold War.",
        "Hosts a major film festival called the Berlinale."
      ]
    },
    {
      "city": "Buenos Aires",
      "country": "Argentina",
      "clues": [
        "Known for tango dancing and European-inspired architecture.",
        "Hosts the famous Casa Rosada government building."
      ],
      "fun_fact": [
        "Often called the 'Paris of South America.'",
        "Birthplace of the tango music style."
      ],
      "trivia": [
        "Recoleta Cemetery is a renowned historical site.",
        "Football is a huge part of local culture."
      ]
    },
    {
      "city": "Cairo",
      "country": "Egypt",
      "clues": [
        "Features grand pyramids nearby in Giza.",
        "Nicknamed 'Mother of the World.'"
      ],
      "fun_fact": [
        "Home to Al-Azhar University, one of the oldest in the world.",
        "Largest city in the Arab world."
      ],
      "trivia": [
        "Cairo is over 1,000 years old.",
        "Historic Tahrir Square is a key landmark."
      ]
    },
    {
      "city": "Cape Town",
      "country": "South Africa",
      "clues": [
        "Known for Table Mountain and stunning coastal views.",
        "Famous for the colorful Bo-Kaap neighborhood."
      ],
      "fun_fact": [
        "Robben Island, where Nelson Mandela was imprisoned, is just offshore.",
        "The city’s nickname is the 'Mother City.'"
      ],
      "trivia": [
        "Cape of Good Hope is nearby.",
        "Has a rich mix of cultural influences."
      ]
    },
    {
      "city": "Chicago",
      "country": "USA",
      "clues": [
        "Famous for deep-dish pizza and tall skyscrapers.",
        "Home to the 'Bean' sculpture in Millennium Park."
      ],
      "fun_fact": [
        "The first skyscraper was built here in 1885.",
        "Known as 'The Windy City,' but it's more about politics than breezes."
      ],
      "trivia": [
        "Wrigley Field is one of MLB’s oldest ballparks.",
        "Route 66 starts in Chicago."
      ]
    },
    {
      "city": "Delhi",
      "country": "India",
      "clues": [
        "Houses the Red Fort and Jama Masjid.",
        "Bustling city with a blend of Old and New areas."
      ],
      "fun_fact": [
        "Has the largest spice market in Asia.",
        "India Gate is a memorial located here."
      ],
      "trivia": [
        "The city spans multiple historical eras.",
        "Rashtrapati Bhavan is the official residence of India’s President."
      ]
    },
    {
      "city": "Dubai",
      "country": "UAE",
      "clues": [
        "Known for the Burj Khalifa, the tallest building in the world.",
        "Famous for luxury shopping and futuristic skyline."
      ],
      "fun_fact": [
        "The police force uses luxury sports cars.",
        "Palm Jumeirah is an artificial archipelago shaped like a palm."
      ],
      "trivia": [
        "Has an indoor ski resort despite desert climate.",
        "Weekend is Friday-Saturday here."
      ]
    },
    {
      "city": "Dublin",
      "country": "Ireland",
      "clues": [
        "The capital on the River Liffey.",
        "Renowned for its literary heritage (James Joyce)."
      ],
      "fun_fact": [
        "Home to the oldest pub in Ireland, the Brazen Head.",
        "Trinity College Library houses the Book of Kells."
      ],
      "trivia": [
        "Famous for its St. Patrick’s Day celebrations.",
        "Known for Guinness beer, brewed since 1759."
      ]
    },
    {
      "city": "Edinburgh",
      "country": "Scotland",
      "clues": [
        "Dominated by a historic castle on a volcanic rock.",
        "Hosts the world-famous Fringe Festival."
      ],
      "fun_fact": [
        "Inspiration for Harry Potter’s Hogwarts can be found here.",
        "The Royal Mile connects Edinburgh Castle to Holyrood Palace."
      ],
      "trivia": [
        "Home to Arthur’s Seat, an ancient volcano.",
        "Known for Hogmanay New Year celebrations."
      ]
    },
    {
      "city": "Florence",
      "country": "Italy",
      "clues": [
        "Birthplace of the Renaissance.",
        "Famous for the Duomo and the Uffizi Gallery."
      ],
      "fun_fact": [
        "Michelangelo’s David is displayed at the Galleria dell’Accademia.",
        "The Ponte Vecchio has medieval shops lining the bridge."
      ],
      "trivia": [
        "Was a wealthy medieval trading and banking hub.",
        "Its historic center is a UNESCO World Heritage Site."
      ]
    },
    {
      "city": "Geneva",
      "country": "Switzerland",
      "clues": [
        "Situated on a lake that shares its name.",
        "Known for world diplomacy (UN Headquarters)."
      ],
      "fun_fact": [
        "Jet d’Eau is one of the tallest fountains in the world.",
        "Famous for luxury watchmaking and chocolate."
      ],
      "trivia": [
        "Often ranks highly for quality of life.",
        "Located near the Jura Mountains and the Alps."
      ]
    },
    {
      "city": "Hong Kong",
      "country": "China",
      "clues": [
        "Densely populated metropolis known for its skyline.",
        "Famous for Victoria Harbour and Star Ferry."
      ],
      "fun_fact": [
        "Has more skyscrapers than any other city.",
        "Uses double-decker trams called “ding dings.”"
      ],
      "trivia": [
        "A hub for Cantonese cuisine like dim sum.",
        "Was a British colony until 1997 transfer."
      ]
    },
    {
      "city": "Honolulu",
      "country": "USA",
      "clues": [
        "Capital of Hawaii with iconic Waikiki Beach.",
        "Famous for Diamond Head volcanic cone."
      ],
      "fun_fact": [
        "Iolani Palace is the only royal palace in the US.",
        "Surfing is deeply rooted in Hawaiian culture."
      ],
      "trivia": [
        "Pearl Harbor memorial sites are nearby.",
        "Hula dance is a symbol of Hawaiian heritage."
      ]
    },
    {
      "city": "Istanbul",
      "country": "Turkey",
      "clues": [
        "Straddles Europe and Asia across the Bosphorus.",
        "Home to Hagia Sophia and the Blue Mosque."
      ],
      "fun_fact": [
        "Formerly known as Byzantium and Constantinople.",
        "Grand Bazaar is one of the oldest covered markets."
      ],
      "trivia": [
        "Historic center is a UNESCO World Heritage Site.",
        "The city has been the capital of multiple empires."
      ]
    },
    {
      "city": "Jerusalem",
      "country": "Israel",
      "clues": [
        "Sacred city to Judaism, Christianity, and Islam.",
        "Home to the Western Wall and Church of the Holy Sepulchre."
      ],
      "fun_fact": [
        "Has been destroyed and rebuilt multiple times.",
        "The Old City walls date back to the 16th century."
      ],
      "trivia": [
        "Temple Mount is a major religious site.",
        "City of David is an ongoing archaeological dig."
      ]
    },
    {
      "city": "Johannesburg",
      "country": "South Africa",
      "clues": [
        "Largest city in South Africa by population.",
        "Close to Soweto, a township known for anti-apartheid history."
      ],
      "fun_fact": [
        "Built on a gold rush in the late 19th century.",
        "Nicknamed 'Joburg' or 'Jozi.'"
      ],
      "trivia": [
        "Constitution Hill is a former prison turned museum.",
        "The Apartheid Museum is a key historical site."
      ]
    },
    {
      "city": "Kuala Lumpur",
      "country": "Malaysia",
      "clues": [
        "Famous for the Petronas Twin Towers.",
        "A cultural melting pot with Malaysian, Chinese, and Indian influences."
      ],
      "fun_fact": [
        "KL Tower is another iconic landmark with a revolving restaurant.",
        "Chinatown at Petaling Street is a vibrant market area."
      ],
      "trivia": [
        "Batu Caves, a major Hindu shrine, is just north of the city.",
        "Name means 'muddy confluence' in Malay."
      ]
    },
    {
      "city": "Las Vegas",
      "country": "USA",
      "clues": [
        "Famous for casinos and vibrant nightlife.",
        "Nicknamed 'Sin City.'"
      ],
      "fun_fact": [
        "Located in the Mojave Desert.",
        "Has over 150,000 hotel rooms."
      ],
      "trivia": [
        "The Strip is actually outside city limits in Paradise, NV.",
        "Hosts some of the world’s largest resorts."
      ]
    },
    {
      "city": "Lisbon",
      "country": "Portugal",
      "clues": [
        "Built on seven hills near the Atlantic coast.",
        "Famous for pastel de nata and historic trams."
      ],
      "fun_fact": [
        "Europe’s second-oldest capital after Athens.",
        "The city was devastated by an earthquake in 1755."
      ],
      "trivia": [
        "Belém Tower is a UNESCO World Heritage Site.",
        "Fado music originated here."
      ]
    },
    {
      "city": "London",
      "country": "UK",
      "clues": [
        "Home to Big Ben and the Houses of Parliament.",
        "The River Thames flows through its center."
      ],
      "fun_fact": [
        "Buckingham Palace is the monarch's official residence.",
        "The London Eye is Europe’s tallest Ferris wheel."
      ],
      "trivia": [
        "Was called Londinium during Roman times.",
        "The Tube is the world’s oldest underground railway."
      ]
    },
    {
      "city": "Los Angeles",
      "country": "USA",
      "clues": [
        "Known for Hollywood, the center of the film industry.",
        "Famous for sunny beaches and sprawling cityscape."
      ],
      "fun_fact": [
        "The iconic Hollywood Sign was once an advertisement for real estate.",
        "Nicknamed 'the City of Angels.'"
      ],
      "trivia": [
        "Has one of the busiest seaports in the nation.",
        "The Walk of Fame honors celebrities with star plaques."
      ]
    },
    {
      "city": "Madrid",
      "country": "Spain",
      "clues": [
        "Capital of Spain, famous for Prado Museum.",
        "Known for lively nightlife and tapas culture."
      ],
      "fun_fact": [
        "Home to the oldest restaurant in the world, Sobrino de Botín.",
        "Puerta del Sol is a major public square and meeting spot."
      ],
      "trivia": [
        "Real Madrid is one of the world’s most famous soccer clubs.",
        "Plaza Mayor is a historic rectangular plaza in the city center."
      ]
    },
    {
      "city": "Manila",
      "country": "Philippines",
      "clues": [
        "Capital city on the island of Luzon.",
        "Known for its walled city called Intramuros."
      ],
      "fun_fact": [
        "Founded by the Spanish in 1571.",
        "Rizal Park commemorates national hero José Rizal."
      ],
      "trivia": [
        "One of the most densely populated cities in the world.",
        "Jeepneys are a common mode of transportation."
      ]
    },
    {
      "city": "Mexico City",
      "country": "Mexico",
      "clues": [
        "Built on the ruins of Tenochtitlan.",
        "Famous for Zócalo, one of the world’s largest city squares."
      ],
      "fun_fact": [
        "Sinks a few inches each year due to groundwater extraction.",
        "Has over 150 museums."
      ],
      "trivia": [
        "The Basilica of Our Lady of Guadalupe is a major pilgrimage site.",
        "Chapultepec Park is one of the world’s largest urban parks."
      ]
    },
    {
      "city": "Miami",
      "country": "USA",
      "clues": [
        "Known for its Art Deco Historic District in South Beach.",
        "Major center of Latin American culture and finance."
      ],
      "fun_fact": [
        "Has the largest cruise ship port in the world.",
        "Nickname is the “Cruise Capital of the World.”"
      ],
      "trivia": [
        "Calle Ocho Festival celebrates Cuban culture.",
        "Became culturally diverse after waves of immigration."
      ]
    },
    {
      "city": "Milan",
      "country": "Italy",
      "clues": [
        "Renowned as a fashion and design capital.",
        "Home to the Gothic Duomo di Milano."
      ],
      "fun_fact": [
        "La Scala Opera House is world-famous.",
        "Leonardo da Vinci’s 'The Last Supper' is in Santa Maria delle Grazie."
      ],
      "trivia": [
        "Galleria Vittorio Emanuele II is one of the oldest shopping malls.",
        "The city was heavily bombed in WWII but rebuilt successfully."
      ]
    },
    {
      "city": "Montreal",
      "country": "Canada",
      "clues": [
        "Largest city in Québec, known for French influence.",
        "Famous for its annual Jazz Festival."
      ],
      "fun_fact": [
        "Has an extensive underground city for winter months.",
        "Mount Royal Park inspired by NYC’s Central Park designer."
      ],
      "trivia": [
        "Hosted the 1976 Summer Olympics.",
        "Old Montreal preserves much of the city’s historic colonial architecture."
      ]
    },
    {
      "city": "Moscow",
      "country": "Russia",
      "clues": [
        "Home to Red Square and the Kremlin.",
        "Has onion-domed St. Basil’s Cathedral."
      ],
      "fun_fact": [
        "The Moscow Metro stations are known for their ornate designs.",
        "Once served as the capital of the Soviet Union."
      ],
      "trivia": [
        "Lenin’s Mausoleum is a major tourist spot in Red Square.",
        "The Bolshoi Theatre is famous for ballet and opera."
      ]
    },
    {
      "city": "Mumbai",
      "country": "India",
      "clues": [
        "Home to Bollywood, India’s huge film industry.",
        "Gateway of India stands on its waterfront."
      ],
      "fun_fact": [
        "Formerly called Bombay until 1995.",
        "One of the world’s most populous cities."
      ],
      "trivia": [
        "Marine Drive is nicknamed the 'Queen’s Necklace.'",
        "Dabbawalas deliver thousands of lunchboxes daily."
      ]
    },
    {
      "city": "Munich",
      "country": "Germany",
      "clues": [
        "Famous for Oktoberfest celebrations.",
        "Capital of Bavaria, known for beer halls."
      ],
      "fun_fact": [
        "Marienplatz has the famous Glockenspiel show.",
        "BMW headquarters and museum are located here."
      ],
      "trivia": [
        "The English Garden is larger than Central Park.",
        "Neuschwanstein Castle is near Munich (though not in the city)."
      ]
    },
    {
      "city": "Nairobi",
      "country": "Kenya",
      "clues": [
        "Capital city often called the 'Safari Capital of the World.'",
        "Home to Nairobi National Park."
      ],
      "fun_fact": [
        "Has a skyline backdrop with wildlife roaming in the park.",
        "Established in 1899 as a rail depot."
      ],
      "trivia": [
        "Maasai Market is a popular spot for crafts.",
        "The name comes from the Maasai phrase meaning 'cool water.'"
      ]
    },
    {
      "city": "New Delhi",
      "country": "India",
      "clues": [
        "Capital territory designed by Edwin Lutyens.",
        "Includes India Gate and Rashtrapati Bhavan."
      ],
      "fun_fact": [
        "Part of the larger city of Delhi.",
        "Rajpath is a ceremonial boulevard."
      ],
      "trivia": [
        "Known for broad avenues and government buildings.",
        "Gained prominence when British transferred the capital from Calcutta."
      ]
    },
    {
      "city": "Osaka",
      "country": "Japan",
      "clues": [
        "Known for its modern architecture and vibrant street food (takoyaki).",
        "Home to the historic Osaka Castle."
      ],
      "fun_fact": [
        "Often called 'Japan’s Kitchen.'",
        "Universal Studios Japan is located here."
      ],
      "trivia": [
        "Dōtonbori is a famous nightlife and entertainment area.",
        "The castle was originally built in the 16th century."
      ]
    },
    {
      "city": "Oslo",
      "country": "Norway",
      "clues": [
        "Viking history and fjords nearby.",
        "The Nobel Peace Prize is awarded here."
      ],
      "fun_fact": [
        "One of Europe’s fastest-growing cities.",
        "Has a vibrant waterfront called Aker Brygge."
      ],
      "trivia": [
        "The Holmenkollbakken ski jump is a big attraction.",
        "Known for eco-friendly and sustainable urban development."
      ]
    },
    {
      "city": "Ottawa",
      "country": "Canada",
      "clues": [
        "Canada’s capital with Parliament Hill.",
        "Located at the confluence of three rivers."
      ],
      "fun_fact": [
        "Rideau Canal turns into a huge skating rink in winter.",
        "Has bilingual English-French signage."
      ],
      "trivia": [
        "The name comes from the Algonquin word for 'trade.'",
        "Hosts the Canadian Tulip Festival each spring."
      ]
    },
    {
      "city": "Philadelphia",
      "country": "USA",
      "clues": [
        "Known for the Liberty Bell and Independence Hall.",
        "Famous for Philly cheesesteaks."
      ],
      "fun_fact": [
        "Once served as the nation’s capital (1790–1800).",
        "Has more public art and murals than any other US city."
      ],
      "trivia": [
        "Rocky’s iconic run took place at the Philadelphia Museum of Art steps.",
        "Ben Franklin was a notable resident."
      ]
    },
    {
      "city": "Prague",
      "country": "Czech Republic",
      "clues": [
        "Known for its Old Town Square with the Astronomical Clock.",
        "Famed for its Gothic churches and baroque buildings."
      ],
      "fun_fact": [
        "Charles Bridge is lined with statues of saints.",
        "Nicknamed 'the City of a Hundred Spires.'"
      ],
      "trivia": [
        "Prague Castle is the largest ancient castle complex in the world.",
        "Historic center is a UNESCO World Heritage Site."
      ]
    },
    {
      "city": "Reykjavik",
      "country": "Iceland",
      "clues": [
        "Northernmost capital of a sovereign state.",
        "Famous for geothermal pools and colorful houses."
      ],
      "fun_fact": [
        "Runs almost entirely on renewable energy.",
        "Named 'Smoky Bay' due to steam from hot springs."
      ],
      "trivia": [
        "Hallgrímskirkja dominates the skyline.",
        "Near the Blue Lagoon, a famous geothermal spa."
      ]
    },
    {
      "city": "Rio de Janeiro",
      "country": "Brazil",
      "clues": [
        "Famous for Copacabana Beach and Christ the Redeemer.",
        "Known for its Carnival festival."
      ],
      "fun_fact": [
        "Sugarloaf Mountain offers panoramic city views.",
        "Nickname is 'Cidade Maravilhosa' (Marvelous City)."
      ],
      "trivia": [
        "Hosted the 2016 Summer Olympics.",
        "Soccer is a passionate pastime; Maracanã Stadium is iconic."
      ]
    },
    {
      "city": "Rome",
      "country": "Italy",
      "clues": [
        "Called the 'Eternal City,' home to the Colosseum.",
        "The Vatican City sits within it."
      ],
      "fun_fact": [
        "Has nearly 3,000 years of history visible in ruins.",
        "Trevi Fountain is a popular coin-tossing site."
      ],
      "trivia": [
        "Birthplace of the Roman Empire Republic era.",
        "The Sistine Chapel ceiling was painted by Michelangelo."
      ]
    },
    {
      "city": "San Francisco",
      "country": "USA",
      "clues": [
        "Famous for the Golden Gate Bridge and cable cars.",
        "Steep hills and Victorian houses define its landscape."
      ],
      "fun_fact": [
        "Alcatraz Island was once a notorious prison.",
        "Summer is often foggy, called 'Karl the Fog' by locals."
      ],
      "trivia": [
        "Lombard Street is labeled the 'crookedest' street in the world.",
        "Chinatown here is the oldest in North America."
      ]
    },
    {
      "city": "São Paulo",
      "country": "Brazil",
      "clues": [
        "Largest city in Brazil by population.",
        "Major cultural, financial, and entertainment hub."
      ],
      "fun_fact": [
        "Has the largest Japanese community outside Japan.",
        "Known for heavy traffic yet robust public transit."
      ],
      "trivia": [
        "Hosts the São Paulo Art Biennial.",
        "Avenida Paulista is one of its most vital avenues."
      ]
    },
    {
      "city": "Seoul",
      "country": "South Korea",
      "clues": [
        "Known for K-pop and high-tech lifestyle.",
        "Historic palaces like Gyeongbokgung dot the city."
      ],
      "fun_fact": [
        "Has one of the world’s fastest internet speeds.",
        "COEX Mall is one of Asia’s largest underground malls."
      ],
      "trivia": [
        "N Seoul Tower offers panoramic city views.",
        "Gangnam style popularized local pop culture globally."
      ]
    },
    {
      "city": "Shanghai",
      "country": "China",
      "clues": [
        "Famous Bund waterfront with colonial-era buildings.",
        "Modern skyline in Pudong with the Oriental Pearl Tower."
      ],
      "fun_fact": [
        "One of the world’s busiest container ports.",
        "Was a key trading post in the 19th century."
      ],
      "trivia": [
        "Known for its soup dumplings (xiaolongbao).",
        "The Maglev train connects to Pudong Airport."
      ]
    },
    {
      "city": "Singapore",
      "country": "Singapore",
      "clues": [
        "City-state known for cleanliness and strict laws.",
        "Famous for Marina Bay Sands and Gardens by the Bay."
      ],
      "fun_fact": [
        "Merlion statue is a symbol of the city.",
        "Chili crab is one of the national dishes."
      ],
      "trivia": [
        "Gained independence in 1965.",
        "A major financial hub with many international banks."
      ]
    },
    {
      "city": "Stockholm",
      "country": "Sweden",
      "clues": [
        "Built on 14 islands connected by 50+ bridges.",
        "Known for ABBA, Nobel Prizes, and old Gamla Stan."
      ],
      "fun_fact": [
        "City Hall hosts the Nobel banquet.",
        "Vasa Museum houses a salvaged 17th-century warship."
      ],
      "trivia": [
        "One of Europe’s best-preserved medieval city centers.",
        "Fika, a coffee break, is central to local culture."
      ]
    },
    {
      "city": "Sydney",
      "country": "Australia",
      "clues": [
        "Home to the Opera House and Harbour Bridge.",
        "Famous for Bondi Beach and a laid-back lifestyle."
      ],
      "fun_fact": [
        "Originally a British penal colony.",
        "Hosted the 2000 Summer Olympics."
      ],
      "trivia": [
        "Darling Harbour is a popular tourist precinct.",
        "The Opera House design was chosen from an international competition."
      ]
    },
    {
      "city": "Taipei",
      "country": "Taiwan",
      "clues": [
        "Known for Taipei 101 skyscraper.",
        "Famous for night markets, like Shilin Night Market."
      ],
      "fun_fact": [
        "Bubble tea originated in Taiwan.",
        "Taipei 101 was once the tallest building in the world."
      ],
      "trivia": [
        "National Palace Museum houses imperial Chinese artifacts.",
        "City name means 'North Taiwan city.'"
      ]
    },
    {
      "city": "Tehran",
      "country": "Iran",
      "clues": [
        "Capital city at the foot of the Alborz Mountains.",
        "Famous for Milad Tower and Azadi Tower."
      ],
      "fun_fact": [
        "Has busy bazaars and modern districts side by side.",
        "Its metro is one of the largest in the Middle East."
      ],
      "trivia": [
        "Hosted the 1974 Asian Games.",
        "Golestan Palace is a UNESCO World Heritage Site."
      ]
    }
]

const express = require('express');
const router = express.Router();
const dbService = require('../common/dbService');

router.post('/createDest',createDestinations)
const driver = dbService.getDriver();

async function createDestinations(req, res) {
    const session = driver.session();
    const txc = session.beginTransaction(); // Start a transaction

    try {
        for (let i = 0; i < destination.length; i++) {
            let query = `
                MERGE (d:Destination {
                    destinationId: randomUUID(),
                    city: $city, 
                    country: $country, 
                    clues:$clues,
                    fun_fact: $fun_fact, 
                    trivia: $trivia
                }) 
                RETURN properties(d) as data`;

            await txc.run(query, {
                city: destination[i].city,
                country: destination[i].country,
                clues:destination[i].clues,
                fun_fact: destination[i].fun_fact,
                trivia: destination[i].trivia
            });
        }

        let response = await txc.commit(); // Commit transaction if all succeed
        console.log("All destinations successfully created!");
        res.status(200).send(response);

    } catch (error) {
        await txc.rollback(); // Rollback in case of failure
        console.error("Transaction failed:", error);

    } finally {
        await session.close(); // Close session
    }
}




module.exports = router;