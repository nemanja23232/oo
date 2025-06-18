export interface Movie {
  id: number;
  title: string;
  year: number;
  director: string;
  cast: string[];
}

export const movies: Movie[] = [
  {
    "id": 1,
    "title": "The Godfather",
    "year": 1972,
    "director": "Francis Ford Coppola",
    "cast": [
      "Marlon Brando",
      "Al Pacino",
      "James Caan",
      "Robert Duvall",
      "Diane Keaton"
    ]
  },
  {
    "id": 2,
    "title": "Citizen Kane",
    "year": 1941,
    "director": "Orson Welles",
    "cast": [
      "Orson Welles",
      "Joseph Cotton",
      "Agnes Moorehead",
      "Dorothy Comingore"
    ]
  },
  {
    "id": 3,
    "title": "2001: A Space Odyssey",
    "year": 1968,
    "director": "Stanley Kubrick",
    "cast": [
      "Keir Dullea",
      "Gary Lockwood",
      "William Sylvester",
      "Daniel Richter"
    ]
  },
  {
    "id": 4,
    "title": "Seven Samurai",
    "year": 1954,
    "director": "Akira Kurosawa",
    "cast": [
      "Toshiro Mifune",
      "Takashi Shimura",
      "Daisuke Kato",
      "Isao Kimura",
      "Minoru Chiaki",
      "Seiji Miyaguchi",
      "Yoshio Inaba"
    ]
  },
  {
    "id": 5,
    "title": "Psycho",
    "year": 1960,
    "director": "Alfred Hitchcock",
    "cast": [
      "Anthony Perkins",
      "Janet Leigh",
      "Vera Miles",
      "Martin Balsam"
    ]
  },
  {
    "id": 6,
    "title": "Star Wars: Episode IV - A New Hope",
    "year": 1977,
    "director": "George Lucas",
    "cast": [
      "Mark Hamill",
      "Harrison Ford",
      "Carrie Fisher",
      "Alec Guinness",
      "Peter Cushing"
    ]
  },
  {
    "id": 7,
    "title": "Battleship Potemkin",
    "year": 1925,
    "director": "Sergei M. Eisenstein",
    "cast": [
      "Aleksandr Antonov",
      "Vladimir Barsky",
      "Grigori Aleksandrov"
    ]
  },
  {
    "id": 8,
    "title": "The Wizard of Oz",
    "year": 1939,
    "director": "Victor Fleming",
    "cast": [
      "Judy Garland",
      "Ray Bolger",
      "Bert Lahr",
      "Jack Haley",
      "Frank Morgan"
    ]
  },
  {
    "id": 9,
    "title": "Snow White and the Seven Dwarfs",
    "year": 1937,
    "director": "David Hand et al.",
    "cast": [
      "voices - Adriana Caselotti",
      "Lucille La Verne",
      "Harry Stockwell",
      "Eddie Collins"
    ]
  },
  {
    "id": 10,
    "title": "The Birth of a Nation",
    "year": 1915,
    "director": "D. W. Griffith",
    "cast": [
      "Lillian Gish",
      "Mae Marsh",
      "Henry B. Walthall",
      "Miriam Cooper"
    ]
  },
  {
    "id": 11,
    "title": "Casablanca",
    "year": 1942,
    "director": "Michael Curtiz",
    "cast": [
      "Humphrey Bogart",
      "Ingrid Bergman",
      "Peter Lorre",
      "Claude Rains"
    ]
  },
  {
    "id": 12,
    "title": "Vertigo",
    "year": 1958,
    "director": "Alfred Hitchcock",
    "cast": [
      "James Stewart",
      "Kim Novak",
      "Barbara Bel Geddes",
      "Tom Helmore"
    ]
  },
  {
    "id": 13,
    "title": "Gone with the Wind",
    "year": 1939,
    "director": "Victor Fleming",
    "cast": [
      "Clark Gable",
      "Vivien Leigh",
      "Leslie Howard",
      "Olivia de Havilland"
    ]
  },
  {
    "id": 14,
    "title": "Jaws",
    "year": 1975,
    "director": "Steven Spielberg",
    "cast": [
      "Roy Scheider",
      "Robert Shaw",
      "Richard Dreyfuss",
      "Lorraine Gary"
    ]
  },
  {
    "id": 15,
    "title": "A Trip to the Moon",
    "year": 1902,
    "director": "Georges Méliès",
    "cast": [
      "Georges Méliès",
      "Bleuette Bernon",
      "François Lallement",
      "Henri Delannoy"
    ]
  },
  {
    "id": 16,
    "title": "Singin' in the Rain",
    "year": 1952,
    "director": "Stanley Donen & Gene Kelly",
    "cast": [
      "Gene Kelly",
      "Donald O'Connor",
      "Debbie Reynolds",
      "Jean Hagen"
    ]
  },
  {
    "id": 17,
    "title": "Apocalypse Now",
    "year": 1979,
    "director": "Francis Ford Coppola",
    "cast": [
      "Martin Sheen",
      "Robert Duvall",
      "Marlon Brando"
    ]
  },
  {
    "id": 18,
    "title": "Lawrence of Arabia",
    "year": 1962,
    "director": "David Lean",
    "cast": [
      "Peter O'Toole",
      "Alec Guinness",
      "Anthony Quinn",
      "Omar Sharif"
    ]
  },
  {
    "id": 19,
    "title": "Pulp Fiction",
    "year": 1994,
    "director": "Quentin Tarantino",
    "cast": [
      "Samuel L. Jackson",
      "John Travolta",
      "Uma Thurman",
      "Bruce Willis"
    ]
  },
  {
    "id": 20,
    "title": "The Godfather Part II",
    "year": 1974,
    "director": "Francis Ford Coppola",
    "cast": [
      "Al Pacino",
      "Robert De Niro",
      "John Cazale"
    ]
  },
  {
    "id": 21,
    "title": "Metropolis",
    "year": 1927,
    "director": "Fritz Lang",
    "cast": [
      "Alfred Abel",
      "Brigitte Helm",
      "Gustav Fröhlich",
      "Rudolf Klein-Rogge"
    ]
  },
  {
    "id": 22,
    "title": "City Lights",
    "year": 1931,
    "director": "Charles Chaplin",
    "cast": [
      "Charles Chaplin",
      "Virginia Cherrill",
      "Florence Lee"
    ]
  },
  {
    "id": 23,
    "title": "Breathless",
    "year": 1960,
    "director": "Jean-Luc Godard",
    "cast": [
      "Jean-Paul Belmondo",
      "Jean Seberg",
      "Jean-Luc Godard"
    ]
  },
  {
    "id": 24,
    "title": "Bicycle Thieves",
    "year": 1948,
    "director": "Vittorio De Sica",
    "cast": [
      "Lamberto Maggiorani",
      "Enzo Staiola",
      "Lianella Carell"
    ]
  },
  {
    "id": 25,
    "title": "Taxi Driver",
    "year": 1976,
    "director": "Martin Scorsese",
    "cast": [
      "Robert De Niro",
      "Jodie Foster",
      "Cybill Shepherd",
      "Albert Brooks"
    ]
  },
  {
    "id": 26,
    "title": "M",
    "year": 1931,
    "director": "Fritz Lang",
    "cast": [
      "Peter Lorre",
      "Otto Wernicke",
      "Gustaf Gründgens"
    ]
  },
  {
    "id": 27,
    "title": "Sunrise: A Song of Two Humans",
    "year": 1927,
    "director": "F. W. Murnau",
    "cast": [
      "Janet Gaynor",
      "George O'Brien",
      "Margaret Livingston"
    ]
  },
  {
    "id": 28,
    "title": "Rear Window",
    "year": 1954,
    "director": "Alfred Hitchcock",
    "cast": [
      "James Stewart",
      "Grace Kelly",
      "Wendell Corey",
      "Thelma Ritter",
      "Raymond Burr"
    ]
  },
  {
    "id": 29,
    "title": "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
    "year": 1964,
    "director": "Stanley Kubrick",
    "cast": [
      "Peter Sellers",
      "George C. Scott",
      "Sterling Hayden",
      "Slim Pickens"
    ]
  },
  {
    "id": 30,
    "title": "Rashômon",
    "year": 1950,
    "director": "Akira Kurosawa",
    "cast": [
      "Toshiro Mifune",
      "Machiko Kyo",
      "Masayuki Mori",
      "Takashi Shimura"
    ]
  },
  {
    "id": 31,
    "title": "Raiders of the Lost Ark",
    "year": 1981,
    "director": "Steven Spielberg",
    "cast": [
      "Harrison Ford",
      "Paul Freeman",
      "Karen Allen",
      "Denholm Elliott",
      "John Rhys-Davies"
    ]
  },
  {
    "id": 32,
    "title": "The Good, the Bad and the Ugly",
    "year": 1966,
    "director": "Sergio Leone",
    "cast": [
      "Clint Eastwood",
      "Eli Wallach",
      "Lee Van Cleef"
    ]
  },
  {
    "id": 33,
    "title": "Modern Times",
    "year": 1936,
    "director": "Charles Chaplin",
    "cast": [
      "Charles Chaplin",
      "Paulette Goddard",
      "Henry Bergman"
    ]
  },
  {
    "id": 34,
    "title": "The Passion of Joan of Arc",
    "year": 1928,
    "director": "Carl Theodor Dreyer",
    "cast": [
      "Renée Jeanne Falconetti",
      "Eugène Silvain",
      "André Berley",
      "Maurice Schutz"
    ]
  },
  {
    "id": 35,
    "title": "The Searchers",
    "year": 1956,
    "director": "John Ford",
    "cast": [
      "John Wayne",
      "Jeffrey Hunter",
      "Vera Miles",
      "Natalie Wood",
      "Ward Bond",
      "Ken Curtis"
    ]
  },
  {
    "id": 36,
    "title": "8½",
    "year": 1963,
    "director": "Federico Fellini",
    "cast": [
      "Marcello Mastroianni",
      "Claudia Cardinale",
      "Anouk Aimée"
    ]
  },
  {
    "id": 37,
    "title": "12 Angry Men",
    "year": 1957,
    "director": "Sidney Lumet",
    "cast": [
      "Henry Fonda",
      "Lee J. Cobb",
      "Ed Begley",
      "E.G. Marshall",
      "Jack Klugman",
      "Martin Balsam"
    ]
  },
  {
    "id": 38,
    "title": "It's a Wonderful Life",
    "year": 1946,
    "director": "Frank Capra",
    "cast": [
      "James Stewart",
      "Donna Reed",
      "Lionel Barrymore"
    ]
  },
  {
    "id": 39,
    "title": "Stagecoach",
    "year": 1939,
    "director": "John Ford",
    "cast": [
      "Claire Trevor",
      "John Wayne",
      "Thomas Mitchell"
    ]
  },
  {
    "id": 40,
    "title": "Star Wars: Episode V - The Empire Strikes Back",
    "year": 1980,
    "director": "Irvin Kershner",
    "cast": [
      "Mark Hamill",
      "Harrison Ford",
      "Carrie Fisher",
      "Billy Dee Williams",
      "Alec Guinness"
    ]
  },
  {
    "id": 41,
    "title": "Some Like It Hot",
    "year": 1959,
    "director": "Billy Wilder",
    "cast": [
      "Marilyn Monroe",
      "Tony Curtis",
      "Jack Lemmon",
      "George Raft",
      "Pat O'Brien",
      "Joe E. Brown"
    ]
  },
  {
    "id": 42,
    "title": "North by Northwest",
    "year": 1959,
    "director": "Alfred Hitchcock",
    "cast": [
      "Cary Grant",
      "Eva Marie Saint",
      "James Mason"
    ]
  },
  {
    "id": 43,
    "title": "Toy Story",
    "year": 1995,
    "director": "John Lasseter",
    "cast": [
      "voices - Tom Hanks",
      "Tim Allen",
      "Don Rickles",
      "Jim Varney",
      "Annie Potts",
      "Wallace Shawn"
    ]
  },
  {
    "id": 44,
    "title": "The Exorcist",
    "year": 1973,
    "director": "William Friedkin",
    "cast": [
      "Ellen Burstyn",
      "Max von Sydow",
      "Linda Blair"
    ]
  },
  {
    "id": 45,
    "title": "Schindler's List",
    "year": 1993,
    "director": "Steven Spielberg",
    "cast": [
      "Liam Neeson",
      "Ralph Fiennes",
      "Ben Kingsley",
      "Caroline Goodall"
    ]
  },
  {
    "id": 46,
    "title": "Alien",
    "year": 1979,
    "director": "Ridley Scott",
    "cast": [
      "Sigouney Weaver",
      "Tom Skerritt",
      "Veronica Cartwright"
    ]
  },
  {
    "id": 47,
    "title": "The Gold Rush",
    "year": 1925,
    "director": "Charles Chaplin",
    "cast": [
      "Charles Chaplin",
      "Georgia Hale",
      "Mack Swain"
    ]
  },
  {
    "id": 48,
    "title": "Intolerance",
    "year": 1916,
    "director": "D. W. Griffith",
    "cast": [
      "Vera Lewis",
      "Ralph Lewis",
      "Mae Marsh",
      "Robert Harron",
      "Constance Talmadge",
      "Lillian Gish"
    ]
  },
  {
    "id": 49,
    "title": "E.T. the Extra-Terrestrial",
    "year": 1982,
    "director": "Steven Spielberg",
    "cast": [
      "Dee Wallace",
      "Peter Coyote",
      "Henry Thomas"
    ]
  },
  {
    "id": 50,
    "title": "The Graduate",
    "year": 1967,
    "director": "Mike Nichols",
    "cast": [
      "Anne Bancroft",
      "Dustin Hoffman",
      "Katharine Ross"
    ]
  },
  {
    "id": 51,
    "title": "The 400 Blows",
    "year": 1959,
    "director": "François Truffaut",
    "cast": [
      "Jean-Pierre Léaud",
      "Albert Rémy",
      "Claire Maurier"
    ]
  },
  {
    "id": 52,
    "title": "Tokyo Story",
    "year": 1953,
    "director": "Yasujirô Ozu",
    "cast": [
      "Chishu Ryu",
      "Chieko Higashiyama",
      "Setsuko Hara",
      "Haruko Sugimura"
    ]
  },
  {
    "id": 53,
    "title": "Bonnie and Clyde",
    "year": 1967,
    "director": "Arthur Penn",
    "cast": [
      "Warren Beatty",
      "Faye Dunaway",
      "Michael J. Pollard"
    ]
  },
  {
    "id": 54,
    "title": "The Rules of the Game",
    "year": 1939,
    "director": "Jean Renoir",
    "cast": [
      "Nora Gregor",
      "Roland Toutain",
      "Jean Renoir"
    ]
  },
  {
    "id": 55,
    "title": "The Terminator",
    "year": 1984,
    "director": "James Cameron",
    "cast": [
      "Linda Hamilton",
      "Arnold Schwarzenegger"
    ]
  },
  {
    "id": 56,
    "title": "GoodFellas",
    "year": 1990,
    "director": "Martin Scorsese",
    "cast": [
      "Ray Liotta",
      "Joe Pesci",
      "Robert De Niro"
    ]
  },
  {
    "id": 57,
    "title": "Sunset Boulevard",
    "year": 1950,
    "director": "Billy Wilder",
    "cast": [
      "William Holden",
      "Gloria Swanson",
      "Erich von Stroheim"
    ]
  },
  {
    "id": 58,
    "title": "Blade Runner",
    "year": 1982,
    "director": "Ridley Scott",
    "cast": [
      "Harrison Ford",
      "Rutger Hauer",
      "Sean Young"
    ]
  },
  {
    "id": 59,
    "title": "Raging Bull",
    "year": 1980,
    "director": "Martin Scorsese",
    "cast": [
      "Robert De Niro",
      "Cathy Moriarty",
      "Joe Pesci"
    ]
  },
  {
    "id": 60,
    "title": "A Clockwork Orange",
    "year": 1971,
    "director": "Stanley Kubrick",
    "cast": [
      "Malcolm McDowell",
      "Patrick Magee",
      "Adrienne Corri"
    ]
  },
  {
    "id": 61,
    "title": "Goldfinger",
    "year": 1964,
    "director": "Guy Hamilton",
    "cast": [
      "Sean Connery",
      "Honor Blackman",
      "Gert Fröbe"
    ]
  },
  {
    "id": 62,
    "title": "The Third Man",
    "year": 1949,
    "director": "Carol Reed",
    "cast": [
      "Joseph Cotten",
      "Alida Valli",
      "Orson Welles",
      "Trevor Howard"
    ]
  },
  {
    "id": 63,
    "title": "One Flew over the Cuckoo's Nest",
    "year": 1975,
    "director": "Milos Forman",
    "cast": [
      "Jack Nicholson",
      "Louise Fletcher",
      "Will Sampson"
    ]
  },
  {
    "id": 64,
    "title": "The Kid",
    "year": 1921,
    "director": "Charles Chaplin",
    "cast": [
      "Charles Chaplin",
      "Jackie Coogan",
      "Edna Purviance"
    ]
  },
  {
    "id": 65,
    "title": "Pather Panchali",
    "year": 1955,
    "director": "Satyajit Ray",
    "cast": [
      "Subir Banerjee",
      "Kanu Banerjee",
      "Karuna Banerjee"
    ]
  },
  {
    "id": 66,
    "title": "Do the Right Thing",
    "year": 1989,
    "director": "Spike Lee",
    "cast": [
      "Spike Lee",
      "Danny Aiello",
      "John Turturro"
    ]
  },
  {
    "id": 67,
    "title": "Lord of the Rings: The Return of the King",
    "year": 2003,
    "director": "Peter Jackson",
    "cast": [
      "Elijah Wood",
      "Sean Astin",
      "Viggo Mortensen",
      "Ian McKellen"
    ]
  },
  {
    "id": 68,
    "title": "Spirited Away",
    "year": 2001,
    "director": "Hayao Miyazaki",
    "cast": [
      "Rumi Hiiragi",
      "Miyu Irino"
    ]
  },
  {
    "id": 69,
    "title": "Double Indemnity",
    "year": 1944,
    "director": "Billy Wilder",
    "cast": [
      "Fred MacMurray",
      "Barbara Stanwyck",
      "Edward G. Robinson"
    ]
  },
  {
    "id": 70,
    "title": "Once Upon a Time in the West",
    "year": 1968,
    "director": "Sergio Leone",
    "cast": [
      "Henry Fonda",
      "Charles Bronson",
      "Claudia Cardinale"
    ]
  },
  {
    "id": 71,
    "title": "King Kong",
    "year": 1933,
    "director": "Merian C. Cooper & Ernest B. Schoedsack",
    "cast": [
      "Fay Wray",
      "Robert Armstrong",
      "Bruce Cabot"
    ]
  },
  {
    "id": 72,
    "title": "Persona",
    "year": 1966,
    "director": "Ingmar Bergman",
    "cast": [
      "Bibi Andersson",
      "Liv Ullmann",
      "Margaretha Krook"
    ]
  },
  {
    "id": 73,
    "title": "La dolce vita",
    "year": 1960,
    "director": "Federico Fellini",
    "cast": [
      "Marcello Mastroianni",
      "Anita Ekberg",
      "Anouk Aimée"
    ]
  },
  {
    "id": 74,
    "title": "Rome, Open City",
    "year": 1945,
    "director": "Roberto Rossellini",
    "cast": [
      "Aldo Fabrizi",
      "Anna Magnani",
      "Marcello Pagliero"
    ]
  },
  {
    "id": 75,
    "title": "The Matrix",
    "year": 1999,
    "director": "Lana & Lilly Wachowski",
    "cast": [
      "Keanu Reeves",
      "Laurence Fishburne",
      "Carrie-Anne Moss"
    ]
  },
  {
    "id": 76,
    "title": "On the Waterfront",
    "year": 1954,
    "director": "Elia Kazan",
    "cast": [
      "Marlon Brando",
      "Karl Malden",
      "Rod Steiger"
    ]
  },
  {
    "id": 77,
    "title": "Chinatown",
    "year": 1974,
    "director": "Roman Polanski",
    "cast": [
      "Jack Nicholson",
      "Faye Dunaway",
      "John Huston"
    ]
  },
  {
    "id": 78,
    "title": "The Silence of the Lambs",
    "year": 1991,
    "director": "Jonathan Demme",
    "cast": [
      "Anthony Hopkins",
      "Jodie Foster",
      "Scott Glenn",
      "Ted Levine"
    ]
  },
  {
    "id": 79,
    "title": "The Deer Hunter",
    "year": 1978,
    "director": "Michael Cimino",
    "cast": [
      "Robert De Niro",
      "Meryl Streep",
      "Christopher Walken"
    ]
  },
  {
    "id": 80,
    "title": "The Great Dictator",
    "year": 1940,
    "director": "Charles Chaplin",
    "cast": [
      "Charles Chaplin",
      "Paulette Goddard",
      "Jack Oakie"
    ]
  },
  {
    "id": 81,
    "title": "It Happened One Night",
    "year": 1934,
    "director": "Frank Capra",
    "cast": [
      "Clark Gable",
      "Claudette Colbert",
      "Walter Connolly"
    ]
  },
  {
    "id": 82,
    "title": "Lord of the Rings: The Fellowship of the Rings",
    "year": 2001,
    "director": "Peter Jackson",
    "cast": [
      "Elijah Wood",
      "Ian McKellen"
    ]
  },
  {
    "id": 83,
    "title": "Back to the Future",
    "year": 1985,
    "director": "Robert Zemeckis",
    "cast": [
      "Michael J. Fox",
      "Christopher Lloyd",
      "Lea Thompson",
      "Crispin Glover"
    ]
  },
  {
    "id": 84,
    "title": "Night of the Living Dead",
    "year": 1968,
    "director": "George A. Romero",
    "cast": [
      "Judith O'Dea",
      "Duane Jones",
      "Marilyn Eastman"
    ]
  },
  {
    "id": 85,
    "title": "The Bridge on the River Kwai",
    "year": 1957,
    "director": "David Lean",
    "cast": [
      "Alec Guinness",
      "William Holden",
      "Jack Hawkins",
      "Sessue Hayakawa"
    ]
  },
  {
    "id": 86,
    "title": "The Cabinet of Dr. Caligari",
    "year": 1920,
    "director": "Robert Wiene",
    "cast": [
      "Werner Krauss",
      "Conrad Veidt",
      "Friedrich Fehér"
    ]
  },
  {
    "id": 87,
    "title": "The Maltese Falcon",
    "year": 1941,
    "director": "John Huston",
    "cast": [
      "Humphrey Bogart",
      "Mary Astor",
      "Gladys George",
      "Peter Lorre"
    ]
  },
  {
    "id": 88,
    "title": "Fantasia",
    "year": 1940,
    "director": "Ben Sharpsteen et al.",
    "cast": [
      "Leopold Stokowski",
      "Deems Taylor"
    ]
  },
  {
    "id": 89,
    "title": "Midnight Cowboy",
    "year": 1969,
    "director": "John Schlesinger",
    "cast": [
      "Dustin Hoffman",
      "Jon Voight",
      "Sylvia Miles",
      "John McGiver"
    ]
  },
  {
    "id": 90,
    "title": "Ben-Hur",
    "year": 1959,
    "director": "William Wyler",
    "cast": [
      "Charlton Heston",
      "Jack Hawkins",
      "Haya Harareet",
      "Stephen Boyd"
    ]
  },
  {
    "id": 91,
    "title": "The Seventh Seal",
    "year": 1957,
    "director": "Ingmar Bergman",
    "cast": [
      "Max von Sydow",
      "Gunnar Björnstrand",
      "Bengt Ekerot"
    ]
  },
  {
    "id": 92,
    "title": "Man with a Movie Camera",
    "year": 1929,
    "director": "Dziga Vertov",
    "cast": [
      "Documentary"
    ]
  },
  {
    "id": 93,
    "title": "The Dark Knight",
    "year": 2008,
    "director": "Christopher Nolan",
    "cast": [
      "Christian Bale",
      "Heath Ledger",
      "Michael Caine",
      "Maggie Gyllenhaal"
    ]
  },
  {
    "id": 94,
    "title": "Rocky",
    "year": 1976,
    "director": "John G. Avildsen",
    "cast": [
      "Sylvester Stallone",
      "Talia Shire",
      "Burgess Meredith"
    ]
  },
  {
    "id": 95,
    "title": "Halloween",
    "year": 1978,
    "director": "John Carpenter",
    "cast": [
      "Donald Pleasence",
      "Jamie Lee Curtis",
      "Nick Castle"
    ]
  },
  {
    "id": 96,
    "title": "To Kill a Mockingbird",
    "year": 1962,
    "director": "Robert Mulligan",
    "cast": [
      "Gregory Peck",
      "Mary Badham",
      "Phillip Alford"
    ]
  },
  {
    "id": 97,
    "title": "Annie Hall",
    "year": 1977,
    "director": "Woody Allen",
    "cast": [
      "Diane Keaton",
      "Woody Allen",
      "Tony Roberts",
      "Carol Kane"
    ]
  },
  {
    "id": 98,
    "title": "The Apartment",
    "year": 1960,
    "director": "Billy Wilder",
    "cast": [
      "Jack Lemmon",
      "Shirley MacLaine",
      "Fred MacMurray"
    ]
  },
  {
    "id": 99,
    "title": "The Shawshank Redemption",
    "year": 1994,
    "director": "Frank Darabont",
    "cast": [
      "Tim Robbins",
      "Morgan Freeman",
      "Bob Gunton",
      "William Sadler"
    ]
  },
  {
    "id": 100,
    "title": "Forrest Gump",
    "year": 1994,
    "director": "Robert Zemeckis",
    "cast": [
      "Tom Hanks",
      "Gary Sinise",
      "Robin Wright",
      "Sally Field"
    ]
  },
  {
    "id": 101,
    "title": "Frankenstein",
    "year": 1931,
    "director": "James Whale",
    "cast": [
      "Colin Clive",
      "Mae Clarke",
      "John Boles",
      "Boris Karloff"
    ]
  },
  {
    "id": 102,
    "title": "All About Eve",
    "year": 1950,
    "director": "Joseph L. Mankiewicz",
    "cast": [
      "Bette Davis",
      "Anne Baxter",
      "George Sanders",
      "Celeste Holm"
    ]
  },
  {
    "id": 103,
    "title": "Die Hard",
    "year": 1988,
    "director": "John McTiernan",
    "cast": [
      "Bruce Willis",
      "Alan Rickman",
      "Bonnie Bedelia",
      "Reginald VelJohnson"
    ]
  },
  {
    "id": 104,
    "title": "The Grand Illusion",
    "year": 1937,
    "director": "Jean Renoir",
    "cast": [
      "Jean Gabin",
      "Dita Parlo",
      "Pierre Fresnay",
      "Erich von Stroheim"
    ]
  },
  {
    "id": 105,
    "title": "My Neighbour Totoro",
    "year": 1988,
    "director": "Hayao Miyazaki",
    "cast": [
      "Noriko Hidaka",
      "Chika Sakamoto",
      "Hitoshi Takagi"
    ]
  },
  {
    "id": 106,
    "title": "Nosferatu",
    "year": 1922,
    "director": "F.W. Murnau",
    "cast": [
      "Max Schreck",
      "Gustav von Wangenheim",
      "Greta Schröder"
    ]
  },
  {
    "id": 107,
    "title": "Mulholland Dr.",
    "year": 2001,
    "director": "David Lynch",
    "cast": [
      "Naomi Watts",
      "Laura Harring",
      "Justin Theroux",
      "Jeanne Bates"
    ]
  },
  {
    "id": 108,
    "title": "Blue Velvet",
    "year": 1986,
    "director": "David Lynch",
    "cast": [
      "Isabella Rossellini",
      "Kyle MacLachlan",
      "Dennis Hopper",
      "Laura Dern"
    ]
  },
  {
    "id": 109,
    "title": "High Noon",
    "year": 1952,
    "director": "Fred Zinnemann",
    "cast": [
      "Gary Cooper",
      "Thomas Mitchell",
      "Lloyd Bridges",
      "Katy Jurado",
      "Grace Kelly"
    ]
  },
  {
    "id": 110,
    "title": "The Sound of Music",
    "year": 1965,
    "director": "Robert Wise",
    "cast": [
      "Julie Andrews",
      "Christopher Plummer",
      "Richard Haydn"
    ]
  },
  {
    "id": 111,
    "title": "The Treasure of the Sierra Madre",
    "year": 1948,
    "director": "John Huston",
    "cast": [
      "Humphrey Bogart",
      "Walter Huston",
      "Tim Holt",
      "Bruce Bennett"
    ]
  },
  {
    "id": 112,
    "title": "The Best Years of Our Lives",
    "year": 1946,
    "director": "William Wyler",
    "cast": [
      "Myrna Loy",
      "Fredric March",
      "Dana Andrews",
      "Teresa Wright",
      "Virginia Mayo",
      "Harold Russell"
    ]
  },
  {
    "id": 113,
    "title": "The General",
    "year": 1926,
    "director": "Buster Keaton & Clyde Bruckman",
    "cast": [
      "Buster Keaton",
      "Marion Mack"
    ]
  },
  {
    "id": 114,
    "title": "West Side Story",
    "year": 1961,
    "director": "Robert Wise & Jerome Robbins",
    "cast": [
      "Natalie Wood",
      "Richard Beymer",
      "Rita Moreno"
    ]
  },
  {
    "id": 115,
    "title": "Touch of Evil",
    "year": 1958,
    "director": "Orson Welles",
    "cast": [
      "Charlton Heston",
      "Janet Leigh",
      "Orson Welles"
    ]
  },
  {
    "id": 116,
    "title": "A Streetcar Named Desire",
    "year": 1951,
    "director": "Elia Kazan",
    "cast": [
      "Vivien Leigh",
      "Marlon Brando",
      "Kim Hunter",
      "Karl Malden"
    ]
  },
  {
    "id": 117,
    "title": "Saving Private Ryan",
    "year": 1998,
    "director": "Steven Spielberg",
    "cast": [
      "Tom Hanks",
      "Matt Damon",
      "Tom Sizemore",
      "Edward Burns",
      "Paul Giamatti"
    ]
  },
  {
    "id": 118,
    "title": "Titanic",
    "year": 1997,
    "director": "James Cameron",
    "cast": [
      "Leonardo DiCaprio",
      "Kate Winslet",
      "Billy Zane",
      "Kathy Bates",
      "Bill Paxton"
    ]
  },
  {
    "id": 119,
    "title": "Un chien andalou",
    "year": 1929,
    "director": "Luis Buñuel",
    "cast": [
      "Pierre Batcheff",
      "Simone Mareuil",
      "Luis Buñuel",
      "Salvador Dalí"
    ]
  },
  {
    "id": 120,
    "title": "Children of Paradise",
    "year": 1945,
    "director": "Marcel Carné",
    "cast": [
      "Arletty",
      "Jean-Louis Barrault",
      "Pierre Brasseur",
      "Marcel Herrand",
      "Pierre Renoir"
    ]
  },
  {
    "id": 121,
    "title": "The Wild Bunch",
    "year": 1969,
    "director": "Sam Peckinpah",
    "cast": [
      "William Holden",
      "Ernest Borgnine",
      "Robert Ryan"
    ]
  },
  {
    "id": 122,
    "title": "La strada",
    "year": 1954,
    "director": "Federico Fellini",
    "cast": [
      "Giulietta Masina",
      "Anthony Quinn",
      "Richard Basehart"
    ]
  },
  {
    "id": 123,
    "title": "Close Encounters of the Third Kind",
    "year": 1977,
    "director": "Steven Spielberg",
    "cast": [
      "Richard Dreyfuss",
      "Teri Garr",
      "Melinda Dillon"
    ]
  },
  {
    "id": 124,
    "title": "Parasite",
    "year": 2019,
    "director": "Bong Joon-Ho",
    "cast": [
      "Song Kang-ho",
      "Lee Sun-kyun",
      "Cho Yeo-jeong"
    ]
  },
  {
    "id": 125,
    "title": "Jurassic Park",
    "year": 1993,
    "director": "Steven Spielberg",
    "cast": [
      "Sam Neil",
      "Laura Dern",
      "Jeff Goldblum",
      "Richard Attenborough"
    ]
  },
  {
    "id": 126,
    "title": "The Shining",
    "year": 1980,
    "director": "Stanley Kubrick",
    "cast": [
      "Jack Nicholson",
      "Shelley Duvall",
      "Scatman Crothers",
      "Danny Lloyd"
    ]
  },
  {
    "id": 127,
    "title": "Rebel Without a Cause",
    "year": 1955,
    "director": "Nicholas Ray",
    "cast": [
      "James Dean",
      "Natalie Wood",
      "Sal Mineo"
    ]
  },
  {
    "id": 128,
    "title": "Superman",
    "year": 1978,
    "director": "Richard Donner",
    "cast": [
      "Christopher Reeve",
      "Gene Hackman"
    ]
  },
  {
    "id": 129,
    "title": "L'arrivée d'un train en gare de La Ciotat",
    "year": 1896,
    "director": "Louis & Auguste Lumière",
    "cast": [
      "Madeleine Koehler",
      "Marcel Koehler",
      "Mrs. Auguste Lumiere",
      "Jeanne-Joséphine Lumière"
    ]
  },
  {
    "id": 130,
    "title": "Notorious",
    "year": 1946,
    "director": "Alfred Hitchcock",
    "cast": [
      "Cary Grant",
      "Ingrid Bergman",
      "Claude Rains"
    ]
  },
  {
    "id": 131,
    "title": "The French Connection",
    "year": 1971,
    "director": "William Friedkin",
    "cast": [
      "Gene Hackman",
      "Roy Scheider",
      "Fernando Rey"
    ]
  },
  {
    "id": 132,
    "title": "The Texas Chain Saw Massacre",
    "year": 1974,
    "director": "Tobe Hooper",
    "cast": [
      "Marilyn Burns",
      "Paul A. Partain",
      "Gunnar Hansen"
    ]
  },
  {
    "id": 133,
    "title": "Mr. Smith Goes to Washington",
    "year": 1939,
    "director": "Frank Capra",
    "cast": [
      "Jean Arthur",
      "James Stewart",
      "Claude Rains",
      "Edward Arnold"
    ]
  },
  {
    "id": 134,
    "title": "Dr. No",
    "year": 1962,
    "director": "Terence Young",
    "cast": [
      "Sean Connery",
      "Ursula Andress",
      "Joseph Wiseman"
    ]
  },
  {
    "id": 135,
    "title": "Blow-Up",
    "year": 1966,
    "director": "Michelangelo Antonioni",
    "cast": [
      "David Hemmings",
      "Vanessa Redgrave",
      "Sarah Miles"
    ]
  },
  {
    "id": 136,
    "title": "Paths of Glory",
    "year": 1957,
    "director": "Stanley Kubrick",
    "cast": [
      "Kirk Douglas",
      "Ralph Meeker",
      "Adolphe Menjou"
    ]
  },
  {
    "id": 137,
    "title": "Rio Bravo",
    "year": 1959,
    "director": "Howard Hawks",
    "cast": [
      "John Wayne",
      "Dean Martin",
      "Ricky Nelson",
      "Angie Dickinson",
      "Walter Brennan"
    ]
  },
  {
    "id": 138,
    "title": "The Grapes of Wrath",
    "year": 1940,
    "director": "John Ford",
    "cast": [
      "Henry Fonda",
      "Jane Darwell",
      "John Carradine"
    ]
  },
  {
    "id": 139,
    "title": "Fargo",
    "year": 1996,
    "director": "Joel & Ethan Coen",
    "cast": [
      "Frances McDormand",
      "William H. Macy",
      "Steve Buscemi"
    ]
  },
  {
    "id": 140,
    "title": "Terminator 2: Judgment Day",
    "year": 1991,
    "director": "James Cameron",
    "cast": [
      "Arnold Schwarzenegger",
      "Linda Hamilton",
      "Edward Furlong"
    ]
  },
  {
    "id": 141,
    "title": "Unforgiven",
    "year": 1992,
    "director": "Clint Eastwood",
    "cast": [
      "Clint Eastwood",
      "Gene Hackman"
    ]
  },
  {
    "id": 142,
    "title": "Rosemary's Baby",
    "year": 1968,
    "director": "Roman Polanski",
    "cast": [
      "Mia Farrow",
      "John Cassavetes",
      "Ruth Gordon"
    ]
  },
  {
    "id": 143,
    "title": "Avatar",
    "year": 2009,
    "director": "James Cameron",
    "cast": [
      "Sam Worthington",
      "Zoe Saldana",
      "Sigourney Weaver",
      "Stephen Lang",
      "Michelle Rodriguez"
    ]
  },
  {
    "id": 144,
    "title": "Aliens",
    "year": 1986,
    "director": "James Cameron",
    "cast": [
      "Sigourney Weaver",
      "Michael Biehn",
      "Carrie Henn"
    ]
  },
  {
    "id": 145,
    "title": "Sherlock Jr.",
    "year": 1924,
    "director": "Buster Keaton",
    "cast": [
      "Buster Keaton",
      "Kathryn McGuire",
      "Joe Keaton"
    ]
  },
  {
    "id": 146,
    "title": "Workers Leaving the Lumière Factory",
    "year": 1895,
    "director": "Louis Lumière",
    "cast": []
  },
  {
    "id": 147,
    "title": "Fight Club",
    "year": 1999,
    "director": "David Fincher",
    "cast": [
      "Brad Pitt",
      "Edward Norton",
      "Meat Loaf",
      "Helena Bonham Carter"
    ]
  },
  {
    "id": 148,
    "title": "There Will Be Blood",
    "year": 2007,
    "director": "Paul Thomas Anderson",
    "cast": [
      "Daniel Day-Lewis",
      "Paul Dano"
    ]
  },
  {
    "id": 149,
    "title": "Eternal Sunshine of the Spotless Mind",
    "year": 2004,
    "director": "Michael Gondry",
    "cast": [
      "Jim Carrey",
      "Kate Winslet"
    ]
  },
  {
    "id": 150,
    "title": "Duck Soup",
    "year": 1933,
    "director": "Leo McCarey",
    "cast": [
      "The Marx Brothers",
      "Margaret Dumont",
      "Louis Calhern"
    ]
  },
  {
    "id": 151,
    "title": "Amadeus",
    "year": 1984,
    "director": "Milos Forman",
    "cast": [
      "Tom Hulce",
      "F. Murray Abraham"
    ]
  },
  {
    "id": 152,
    "title": "The Birds",
    "year": 1963,
    "director": "Alfred Hitchcock",
    "cast": [
      "Tippi Hedren",
      "Rod Taylor",
      "Jessica Tandy"
    ]
  },
  {
    "id": 153,
    "title": "All Quiet on the Western Front",
    "year": 1930,
    "director": "Lewis Milestone",
    "cast": [
      "Lew Ayres",
      "Louis Wolheim",
      "John Wray"
    ]
  },
  {
    "id": 154,
    "title": "The Night of the Hunter",
    "year": 1955,
    "director": "Charles Laughton",
    "cast": [
      "Robert Mitchum",
      "Shelley Winters",
      "Lillian Gish",
      "Billy Chapin"
    ]
  },
  {
    "id": 155,
    "title": "Safety Last!",
    "year": 1923,
    "director": "Fred C. Newmeyer & Sam Taylor",
    "cast": [
      "Harold Lloyd",
      "Mildred Davis"
    ]
  },
  {
    "id": 156,
    "title": "Nanook of the North",
    "year": 1922,
    "director": "Robert J. Flaherty",
    "cast": [
      "Documentary"
    ]
  },
  {
    "id": 157,
    "title": "Who's Afraid of Virginia Woolf?",
    "year": 1966,
    "director": "Mike Nichols",
    "cast": [
      "Elizabeth Taylor",
      "Richard Burton",
      "George Segal",
      "Sandy Dennis"
    ]
  },
  {
    "id": 158,
    "title": "Scarface",
    "year": 1983,
    "director": "Brian De Palma",
    "cast": [
      "Al Pacino",
      "Steven Bauer",
      "Michelle Pfeiffer"
    ]
  },
  {
    "id": 159,
    "title": "Batman",
    "year": 1989,
    "director": "Tim Burton",
    "cast": [
      "Michael Keaton",
      "Jack Nicholson",
      "Kim Basinger"
    ]
  },
  {
    "id": 160,
    "title": "Reservoir Dogs",
    "year": 1992,
    "director": "Quentin Tarantino",
    "cast": [
      "Harvey Keitel",
      "Tim Roth",
      "Steve Buscemi",
      "Michael Madsen",
      "Chris Penn"
    ]
  },
  {
    "id": 161,
    "title": "Enter the Dragon",
    "year": 1973,
    "director": "Robert Clouse",
    "cast": [
      "Bruce Lee",
      "John Saxon",
      "Jim Kelly",
      "Shih Kien",
      "Geoffrey Weeks"
    ]
  },
  {
    "id": 162,
    "title": "Dawn of the Dead",
    "year": 1978,
    "director": "George A. Romero",
    "cast": [
      "David Emge",
      "Ken Foree",
      "Scott Reiniger"
    ]
  },
  {
    "id": 163,
    "title": "The Red Shoes",
    "year": 1948,
    "director": "Michael Powell & Emeric Pressburger",
    "cast": [
      "Anton Walbrook",
      "Marius Goring",
      "Moira Shearer"
    ]
  },
  {
    "id": 164,
    "title": "Stalker",
    "year": 1979,
    "director": "Andrei Tarkovsky",
    "cast": [
      "Alexander Kaidanovsky",
      "Anatoly Solonitsyn",
      "Nikolai Grinko"
    ]
  },
  {
    "id": 165,
    "title": "Pinocchio",
    "year": 1940,
    "director": "Hamilton Luske, Ben Sharpsteen et al.",
    "cast": [
      "voices - Dickie Jones",
      "Cliff Edwards",
      "Christian Rub",
      "Mel Blanc",
      "Don Brodie"
    ]
  },
  {
    "id": 166,
    "title": "Rebecca",
    "year": 1940,
    "director": "Alfred Hitchcock",
    "cast": [
      "Joan Fontaine",
      "Laurence Olivier",
      "Judith Anderson"
    ]
  },
  {
    "id": 167,
    "title": "Bride of Frankenstein",
    "year": 1935,
    "director": "James Whale",
    "cast": [
      "Boris Karloff",
      "Colin Clive",
      "Valerie Hobson",
      "Elsa Lanchester"
    ]
  },
  {
    "id": 168,
    "title": "Invasion of the Body Snatchers",
    "year": 1956,
    "director": "Don Siegel",
    "cast": [
      "Kevin McCarthy",
      "Dana Wynter",
      "Larry Gates"
    ]
  },
  {
    "id": 169,
    "title": "Wild Strawberries",
    "year": 1957,
    "director": "Ingmar Bergman",
    "cast": [
      "Victor Sjöström",
      "Bibi Andersson",
      "Gunnar Björnstrand"
    ]
  },
  {
    "id": 170,
    "title": "City of God",
    "year": 2002,
    "director": "Fernando Meirelles",
    "cast": [
      "Jonathan Haagensen",
      "Alexandre Rodrigues"
    ]
  },
  {
    "id": 171,
    "title": "Trainspotting",
    "year": 1996,
    "director": "Danny Boyle",
    "cast": [
      "Ewan McGregor",
      "Robert Carlyle",
      "Ewen Bremner",
      "Kevin McKidd"
    ]
  },
  {
    "id": 172,
    "title": "The Lion King",
    "year": 1994,
    "director": "Roger Allers & Rob Minkoff",
    "cast": [
      "voices - Matthew Broderick",
      "Jeremy Irons",
      "James Earl Jones",
      "Whoopi Goldberg"
    ]
  },
  {
    "id": 173,
    "title": "Barry Lyndon",
    "year": 1975,
    "director": "Stanley Kubrick",
    "cast": [
      "Ryan O'Neal",
      "Marisa Berenson",
      "Patrick Magee"
    ]
  },
  {
    "id": 174,
    "title": "Bringing Up Baby",
    "year": 1938,
    "director": "Howard Hawks",
    "cast": [
      "Katharine Hepburn",
      "Cary Grant",
      "Charles Ruggles",
      "Barry Fitzgerald"
    ]
  },
  {
    "id": 175,
    "title": "Aguirre: The Wrath of God",
    "year": 1972,
    "director": "Werner Herzog",
    "cast": [
      "Klaus Kinski",
      "Helena Rojo",
      "Ruy Guerra"
    ]
  },
  {
    "id": 176,
    "title": "Butch Cassidy and the Sundance Kid",
    "year": 1969,
    "director": "George Roy Hill",
    "cast": [
      "Paul Newman",
      "Robert Redford",
      "Katharine Ross",
      "Strother Martin",
      "Cloris Leachman"
    ]
  },
  {
    "id": 177,
    "title": "The Adventures of Robin Hood",
    "year": 1938,
    "director": "Michael Curtiz & William Keighley",
    "cast": [
      "Errol Flynn",
      "Olivia de Havilland",
      "Basil Rathbone",
      "Claude Rains"
    ]
  },
  {
    "id": 178,
    "title": "Monty Python and the Holy Grail",
    "year": 1975,
    "director": "Terry Gilliam and Terry Jones",
    "cast": [
      "Graham Chapman",
      "John Cleese",
      "Eric Idle",
      "Michael Palin",
      "Connie Booth"
    ]
  },
  {
    "id": 179,
    "title": "WALL·E",
    "year": 2008,
    "director": "Andrew Stanton",
    "cast": [
      "voices - Ben Burtt",
      "Elissa Knight",
      "Jeff Garlin",
      "Jennifer Hale"
    ]
  },
  {
    "id": 180,
    "title": "Inception",
    "year": 2010,
    "director": "Christopher Nolan",
    "cast": [
      "Leonardo DiCaprio",
      "Ken Watanabe",
      "Joseph Gordon-Levitt"
    ]
  },
  {
    "id": 181,
    "title": "Godzilla",
    "year": 1954,
    "director": "Ishirô Honda",
    "cast": [
      "Akira Takarada",
      "Momoko Kochi",
      "Akihiko Hirata",
      "Takashi Shimura"
    ]
  },
  {
    "id": 182,
    "title": "Mad Max: Fury Road",
    "year": 2015,
    "director": "George Miller",
    "cast": [
      "Tom Hardy",
      "Charlize Theron",
      "Nicholas Hoult"
    ]
  },
  {
    "id": 183,
    "title": "M*A*S*H",
    "year": 1970,
    "director": "Robert Altman",
    "cast": [
      "Donald Sutherland",
      "Elliott Gould",
      "Tom Skerritt"
    ]
  },
  {
    "id": 184,
    "title": "Mary Poppins",
    "year": 1964,
    "director": "Robert Stevenson",
    "cast": [
      "Julie Andrews",
      "Dick Van Dyke",
      "David Tomlinson"
    ]
  },
  {
    "id": 185,
    "title": "Ikiru",
    "year": 1952,
    "director": "Akira Kurosawa",
    "cast": [
      "Takashi Shimura",
      "Haruo Tanaka",
      "Miki Odagiri"
    ]
  },
  {
    "id": 186,
    "title": "The Social Network",
    "year": 2010,
    "director": "David Fincher",
    "cast": [
      "Jesse Eisenberg",
      "Andrew Garfield",
      "Justin Timberlake"
    ]
  },
  {
    "id": 187,
    "title": "The Big Parade",
    "year": 1925,
    "director": "King Vidor",
    "cast": [
      "John Gilbert",
      "Renée Adorée",
      "Hobart Bosworth"
    ]
  },
  {
    "id": 188,
    "title": "No Country for Old Men",
    "year": 2007,
    "director": "Ethan, Joel Coen",
    "cast": [
      "Tommy Lee Jones",
      "Javier Bardem",
      "Josh Brolin"
    ]
  },
  {
    "id": 189,
    "title": "American Graffiti",
    "year": 1973,
    "director": "George Lucas",
    "cast": [
      "Richard Dreyfuss",
      "Ron Howard",
      "Paul Le Mat"
    ]
  },
  {
    "id": 190,
    "title": "The Jazz Singer",
    "year": 1927,
    "director": "Alan Crosland",
    "cast": [
      "Al Jolson",
      "May McAvoy",
      "Warner Oland",
      "Yossele Rosenblatt"
    ]
  },
  {
    "id": 191,
    "title": "Dracula",
    "year": 1931,
    "director": "Tod Browning",
    "cast": [
      "Bela Lugosi",
      "David Manners",
      "Helen Chandler"
    ]
  },
  {
    "id": 192,
    "title": "His Girl Friday",
    "year": 1940,
    "director": "Howard Hawks",
    "cast": [
      "Cary Grant",
      "Rosalind Russell",
      "Ralph Bellamy",
      "Gene Lockhart"
    ]
  },
  {
    "id": 193,
    "title": "The Philadelphia Story",
    "year": 1940,
    "director": "George Cukor",
    "cast": [
      "Cary Grant",
      "Katharine Hepburn",
      "James Stewart"
    ]
  },
  {
    "id": 194,
    "title": "Ugetsu",
    "year": 1953,
    "director": "Kenji Mizoguchi",
    "cast": [
      "Machiko Kyo",
      "Mitsuko Mito",
      "Kinuyo Tanaka"
    ]
  },
  {
    "id": 195,
    "title": "Roman Holiday",
    "year": 1953,
    "director": "William Wyler",
    "cast": [
      "Gregory Peck",
      "Audrey Hepburn",
      "Eddie Albert"
    ]
  },
  {
    "id": 196,
    "title": "Crouching Tiger, Hidden Dragon",
    "year": 2000,
    "director": "Ang Lee",
    "cast": [
      "Chow Yun-Fat",
      "Michelle Yeoh"
    ]
  },
  {
    "id": 197,
    "title": "A Fistful of Dollars",
    "year": 1964,
    "director": "Sergio Leone",
    "cast": [
      "Clint Eastwood",
      "Gian Maria Volonté",
      "Marianne Koch"
    ]
  },
  {
    "id": 198,
    "title": "A Hard Day's Night",
    "year": 1964,
    "director": "Richard Lester",
    "cast": [
      "The Beatles",
      "Wilfrid Brambell",
      "Norman Rossington"
    ]
  },
  {
    "id": 199,
    "title": "Napoléon",
    "year": 1927,
    "director": "Abel Gance",
    "cast": [
      "Albert Dieudonné",
      "Gina Manès",
      "Antonin Artaud",
      "Edmond Van Daële"
    ]
  },
  {
    "id": 200,
    "title": "Greed",
    "year": 1924,
    "director": "Erich von Stroheim",
    "cast": [
      "Gibson Gowland",
      "ZaSu Pitts",
      "Jean Hersholt"
    ]
  },
  {
    "id": 201,
    "title": "In the Heat of the Night",
    "year": 1967,
    "director": "Norman Jewison",
    "cast": [
      "Sidney Poitier",
      "Rod Steiger",
      "Warren Oates"
    ]
  },
  {
    "id": 202,
    "title": "Easy Rider",
    "year": 1969,
    "director": "Dennis Hopper",
    "cast": [
      "Peter Fonda",
      "Dennis Hopper",
      "Jack Nicholson"
    ]
  },
  {
    "id": 203,
    "title": "The Crowd",
    "year": 1928,
    "director": "King Vidor",
    "cast": [
      "James Murray",
      "Eleanor Boardman",
      "Bert Roach"
    ]
  },
  {
    "id": 204,
    "title": "Steamboat Willie",
    "year": 1928,
    "director": "Walt Disney & Ub Iwerks",
    "cast": [
      "voice - Walt Disney"
    ]
  },
  {
    "id": 205,
    "title": "L'avventura",
    "year": 1960,
    "director": "Michaelangelo Antonioni",
    "cast": [
      "Gabriele Ferzetti",
      "Monica Vitti",
      "Lea Massari"
    ]
  },
  {
    "id": 206,
    "title": "Get Out",
    "year": 2017,
    "director": "Jordan Peele",
    "cast": [
      "Daniel Kaluuya",
      "Allison Williams",
      "Bradley Whitford"
    ]
  },
  {
    "id": 207,
    "title": "Scarface",
    "year": 1932,
    "director": "Howard Hawks",
    "cast": [
      "Paul Muni",
      "Ann Dvorak",
      "Osgood Perkins",
      "Karen Morley"
    ]
  },
  {
    "id": 208,
    "title": "The Avengers",
    "year": 2012,
    "director": "Joss Whedon",
    "cast": [
      "Robert Downey Jr.",
      "Chris Evans",
      "Mark Ruffalo"
    ]
  },
  {
    "id": 209,
    "title": "The Battle of Algiers",
    "year": 1966,
    "director": "Gillo Pontecorvo",
    "cast": [
      "Jean Martin",
      "Saadi Yacef",
      "Brahim Haggiag"
    ]
  },
  {
    "id": 210,
    "title": "The Wages of Fear",
    "year": 1953,
    "director": "Henri-Georges Clouzot",
    "cast": [
      "Yves Montand",
      "Charles Vanel",
      "Folco Lulli",
      "Peter Van Eyck"
    ]
  },
  {
    "id": 211,
    "title": "Dirty Harry",
    "year": 1971,
    "director": "Don Siegel",
    "cast": [
      "Clint Eastwood",
      "Andy Robinson",
      "Harry Guardino"
    ]
  },
  {
    "id": 212,
    "title": "Ghostbusters",
    "year": 1984,
    "director": "Ivan Reitman",
    "cast": [
      "Bill Murray",
      "Dan Aykroyd",
      "Sigourney Weaver",
      "Harold Ramis"
    ]
  },
  {
    "id": 213,
    "title": "American Beauty",
    "year": 1999,
    "director": "Sam Mendes",
    "cast": [
      "Kevin Spacey",
      "Annette Bening",
      "Thora Birch",
      "Allison Janney",
      "Wes Bentley"
    ]
  },
  {
    "id": 214,
    "title": "The Asphalt Jungle",
    "year": 1950,
    "director": "John Huston",
    "cast": [
      "Sterling Hayden",
      "Louis Calhern",
      "Jean Hagen"
    ]
  },
  {
    "id": 215,
    "title": "Network",
    "year": 1976,
    "director": "Sidney Lumet",
    "cast": [
      "Peter Finch",
      "Faye Dunaway",
      "William Holden",
      "Robert Duvall",
      "Ned Beatty"
    ]
  },
  {
    "id": 216,
    "title": "Breakfast at Tiffany's",
    "year": 1961,
    "director": "Blake Edwards",
    "cast": [
      "Audrey Hepburn",
      "George Peppard",
      "Patricia Neal"
    ]
  },
  {
    "id": 217,
    "title": "Pan's Labyrinth",
    "year": 2006,
    "director": "Guillermo del Toro",
    "cast": [
      "Ariadna Gil",
      "Ivana Baquero",
      "Sergi López",
      "Maribel Verdú"
    ]
  },
  {
    "id": 218,
    "title": "Cabaret",
    "year": 1972,
    "director": "Bob Fosse",
    "cast": [
      "Liza Minnelli",
      "Michael York",
      "Joel Grey",
      "Helmut Griem"
    ]
  },
  {
    "id": 219,
    "title": "Brief Encounter",
    "year": 1945,
    "director": "David Lean",
    "cast": [
      "Celia Johnson",
      "Trevor Howard",
      "Stanley Holloway"
    ]
  },
  {
    "id": 220,
    "title": "Out of the Past",
    "year": 1947,
    "director": "Jacques Tourneur",
    "cast": [
      "Robert Mitchum",
      "Jane Greer",
      "Kirk Douglas",
      "Rhonda Fleming"
    ]
  },
  {
    "id": 221,
    "title": "The Public Enemy",
    "year": 1931,
    "director": "William A. Wellman",
    "cast": [
      "James Cagney",
      "Jean Harlow",
      "Edward Woods",
      "Joan Blondell"
    ]
  },
  {
    "id": 222,
    "title": "Airplane!",
    "year": 1980,
    "director": "Jerry Zucker, Jim Abrahams, and David Zucker",
    "cast": [
      "Robert Hays",
      "Julie Hagerty",
      "Leslie Nielsen"
    ]
  },
  {
    "id": 223,
    "title": "Se7en",
    "year": 1995,
    "director": "David Fincher",
    "cast": [
      "Brad Pitt",
      "Morgan Freeman"
    ]
  },
  {
    "id": 224,
    "title": "Brokeback Mountain",
    "year": 2005,
    "director": "Ang Lee",
    "cast": [
      "Heath Ledger",
      "Jake Gyllenhaal",
      "Michelle Williams"
    ]
  },
  {
    "id": 225,
    "title": "Lord of the Rings: The Two Towers",
    "year": 2002,
    "director": "Peter Jackson",
    "cast": [
      "Elijah Wood",
      "Viggo Mortensen",
      "Ian McKellen",
      "Orlando Bloom",
      "Cate Blanchett"
    ]
  },
  {
    "id": 226,
    "title": "Andrei Rublev",
    "year": 1966,
    "director": "Andrei Tarkovsky",
    "cast": [
      "Anatoly Solonitsyn",
      "Ivan Lapikov",
      "Nikolai Grinko"
    ]
  },
  {
    "id": 227,
    "title": "Yojimbo",
    "year": 1961,
    "director": "Akira Kurosawa",
    "cast": [
      "Toshiro Mifune",
      "Tatsuya Nakadai",
      "Yoko Tsukasa"
    ]
  },
  {
    "id": 228,
    "title": "The Last Laugh",
    "year": 1924,
    "director": "F.W. Murnau",
    "cast": [
      "Emil Jannings",
      "Maly Delschaft",
      "Max Hiller"
    ]
  },
  {
    "id": 229,
    "title": "Hiroshima mon amour",
    "year": 1959,
    "director": "Alain Resnais",
    "cast": [
      "Emmanuelle Riva",
      "Eiji Okada"
    ]
  },
  {
    "id": 230,
    "title": "The Usual Suspects",
    "year": 1995,
    "director": "Bryan Singer",
    "cast": [
      "Kevin Spacey",
      "Gabriel Byrne",
      "Chazz Palminteri",
      "Benicio Del Toro"
    ]
  },
  {
    "id": 231,
    "title": "Finding Nemo",
    "year": 2003,
    "director": "Andrew Stanton",
    "cast": [
      "voices - Albert Brooks",
      "Ellen DeGeneres",
      "Alexander Gould",
      "Willem Dafoe",
      "Allison Janney",
      "Brad Garrett"
    ]
  },
  {
    "id": 232,
    "title": "The Thing",
    "year": 1982,
    "director": "John Carpenter",
    "cast": [
      "Kurt Russell",
      "Wilford Brimley",
      "Keith David"
    ]
  },
  {
    "id": 233,
    "title": "Manhattan",
    "year": 1979,
    "director": "Woody Allen",
    "cast": [
      "Woody Allen",
      "Diane Keaton",
      "Michael Murphy",
      "Mariel Hemingway"
    ]
  },
  {
    "id": 234,
    "title": "Boyhood",
    "year": 2014,
    "director": "Richard Linklater",
    "cast": [
      "Ellar Coltrane",
      "Patricia Arquette",
      "Ethan Hawke"
    ]
  },
  {
    "id": 235,
    "title": "Mean Streets",
    "year": 1973,
    "director": "Martin Scorsese",
    "cast": [
      "Harvey Keitel",
      "Robert De Niro",
      "David Proval",
      "Amy Robinson",
      "Richard Romanus"
    ]
  },
  {
    "id": 236,
    "title": "Carrie",
    "year": 1976,
    "director": "Brian De Palma",
    "cast": [
      "Sissy Spacek",
      "John Travolta",
      "Piper Laurie"
    ]
  },
  {
    "id": 237,
    "title": "Akira",
    "year": 1988,
    "director": "Katsuhiro Otomo",
    "cast": [
      "Mitsuo Iwata",
      "Nozomu Sasaki",
      "Mami Koyama"
    ]
  },
  {
    "id": 238,
    "title": "Gladiator",
    "year": 2000,
    "director": "Ridley Scott",
    "cast": [
      "Russell Crowe",
      "Joaquin Phoenix",
      "Richard Harris",
      "Oliver Reed",
      "Connie Nielsen"
    ]
  },
  {
    "id": 239,
    "title": "Ran",
    "year": 1985,
    "director": "Akira Kurosawa",
    "cast": [
      "Tatsuya Nakadai",
      "Akira Terao"
    ]
  },
  {
    "id": 240,
    "title": "Once Upon a Time in America",
    "year": 1984,
    "director": "Sergio Leone",
    "cast": [
      "Robert De Niro",
      "James Woods",
      "Elizabeth McGovern",
      "Treat Williams",
      "Joe Pesci"
    ]
  },
  {
    "id": 241,
    "title": "Beauty and the Beast",
    "year": 1946,
    "director": "Jean Cocteau",
    "cast": [
      "Jean Marais",
      "Josette Day",
      "Marcel André"
    ]
  },
  {
    "id": 242,
    "title": "Meet Me in St. Louis",
    "year": 1944,
    "director": "Vincente Minnelli",
    "cast": [
      "Judy Garland",
      "Margaret O'Brien",
      "Mary Astor"
    ]
  },
  {
    "id": 243,
    "title": "Beauty and the Beast",
    "year": 1991,
    "director": "Gary Trousdale & Kirk Wise",
    "cast": [
      "voices - Robby Benson",
      "Paige O'Hara",
      "Angela Lansbury",
      "Jesse Corti"
    ]
  },
  {
    "id": 244,
    "title": "To Be or Not to Be",
    "year": 1942,
    "director": "Ernst Lubitsch",
    "cast": [
      "Carole Lombard",
      "Jack Benny",
      "Robert Stack"
    ]
  },
  {
    "id": 245,
    "title": "Our Hospitality",
    "year": 1923,
    "director": "Buster Keaton & John G. Blystone",
    "cast": [
      "Buster Keayon",
      "Joe Roberts",
      "Natalie Talmadge"
    ]
  },
  {
    "id": 246,
    "title": "Freaks",
    "year": 1932,
    "director": "Tod Browning",
    "cast": [
      "Wallace Ford",
      "Leila Hyams",
      "Olga Baclanova",
      "Roscoe Ates"
    ]
  },
  {
    "id": 247,
    "title": "Memento",
    "year": 2000,
    "director": "Christopher Nolan",
    "cast": [
      "Guy Pearce",
      "Carrie-Anne Moss",
      "Joe Pantoliano",
      "Stephen Tobolowsky"
    ]
  },
  {
    "id": 248,
    "title": "The Manchurian Candidate",
    "year": 1962,
    "director": "John Frankenheimer",
    "cast": [
      "Frank Sinatra",
      "Laurence Harvey",
      "Janet Leigh"
    ]
  },
  {
    "id": 249,
    "title": "Nashville",
    "year": 1975,
    "director": "Robert Altman",
    "cast": [
      "Keith Carradine",
      "Ronee Blakley",
      "Lily Tomlin",
      "Karen Black",
      "Henry Gibson",
      "Shelley Duvall"
    ]
  },
  {
    "id": 250,
    "title": "The Ten Commandments",
    "year": 1956,
    "director": "Cecil B. DeMille",
    "cast": [
      "Charlton Heston",
      "Yul Brynner",
      "Anne Baxter",
      "Edward G. Robinson",
      "Yvonne De Carlo"
    ]
  },
  {
    "id": 251,
    "title": "Das Boot",
    "year": 1981,
    "director": "Wolfgang Petersen",
    "cast": [
      "Jurgen Prochnow",
      "Herbert Gronemeyer"
    ]
  },
  {
    "id": 252,
    "title": "Contempt",
    "year": 1963,
    "director": "Jean-Luc Godard",
    "cast": [
      "Brigitte Bardot",
      "Jack Palance",
      "Michel Piccoli"
    ]
  },
  {
    "id": 253,
    "title": "A Woman Under Influence",
    "year": 1974,
    "director": "John Cassavetes",
    "cast": [
      "Gena Rowlands",
      "Peter Falk",
      "Fred Draper",
      "Matthew Labyorteaux"
    ]
  },
  {
    "id": 254,
    "title": "Dog Day Afternoon",
    "year": 1975,
    "director": "Sidney Lumet",
    "cast": [
      "Al Pacino",
      "John Cazale",
      "James Broderick"
    ]
  },
  {
    "id": 255,
    "title": "Oldboy",
    "year": 2003,
    "director": "Chan-wook Park",
    "cast": [
      "Choi Min-sik",
      "Yoo Ji-tae",
      "Kang Hye-jeong",
      "Kim Byeong-Ok"
    ]
  },
  {
    "id": 256,
    "title": "Cool Hand Luke",
    "year": 1967,
    "director": "Stuart Rosenberg",
    "cast": [
      "Paul Newman",
      "George Kennedy",
      "Strother Martin",
      "J.D. Cannon",
      "Jo Van Fleet"
    ]
  },
  {
    "id": 257,
    "title": "The Thin Man",
    "year": 1934,
    "director": "W.S. Van Dyke",
    "cast": [
      "William Powell",
      "Myrna Loy",
      "Maureen O'Sullivan"
    ]
  },
  {
    "id": 258,
    "title": "This Is Spinal Tap",
    "year": 1984,
    "director": "Rob Reiner",
    "cast": [
      "Christopher Guest",
      "Michael McKean",
      "Harry Shearer"
    ]
  },
  {
    "id": 259,
    "title": "Shane",
    "year": 1953,
    "director": "George Stevens",
    "cast": [
      "Alan Ladd",
      "Jean Arthur",
      "Van Heflin",
      "Brandon deWilde",
      "Jack Palance"
    ]
  },
  {
    "id": 260,
    "title": "Laura",
    "year": 1944,
    "director": "Otto Preminger",
    "cast": [
      "Gene Tierney",
      "Dana Andrews",
      "Clifton Webb"
    ]
  },
  {
    "id": 261,
    "title": "Les diaboliques",
    "year": 1955,
    "director": "Henri-Georges Clouzot",
    "cast": [
      "Simone Signoret",
      "Véra Clouzot",
      "Paul Meurisse"
    ]
  },
  {
    "id": 262,
    "title": "Days of Heaven",
    "year": 1978,
    "director": "Terrence Malick",
    "cast": [
      "Richard Gere",
      "Brooke Adams",
      "Sam Shepard"
    ]
  },
  {
    "id": 263,
    "title": "All the President's Men",
    "year": 1976,
    "director": "Alan J. Pakula",
    "cast": [
      "Robert Redford",
      "Dustin Hoffman",
      "Jason Robards"
    ]
  },
  {
    "id": 264,
    "title": "Dr. Mabuse the Gambler Part 1: The Great Gambler",
    "year": 1922,
    "director": "Fritz Lang",
    "cast": [
      "Rudolf Klein-Rogge",
      "Aud Egede-Nissen",
      "Gertrude Welcker"
    ]
  },
  {
    "id": 265,
    "title": "Repulsion",
    "year": 1965,
    "director": "Roman Polanski",
    "cast": [
      "Catherine Deneuve",
      "Ian Hendry",
      "John Fraser"
    ]
  },
  {
    "id": 266,
    "title": "Doctor Zhivago",
    "year": 1965,
    "director": "David Lean",
    "cast": [
      "Omar Sharif",
      "Julie Christie",
      "Geraldine Chaplin"
    ]
  },
  {
    "id": 267,
    "title": "Gravity",
    "year": 2013,
    "director": "Alfonso Cuarón",
    "cast": [
      "Sandra Bullock",
      "George Clooney",
      "Ed Harris"
    ]
  },
  {
    "id": 268,
    "title": "Inglourious Basterds",
    "year": 2009,
    "director": "Quentin Tarantino",
    "cast": [
      "Brad Pitt",
      "Christoph Waltz",
      "Diane Kruger",
      "Michael Fassbender"
    ]
  },
  {
    "id": 269,
    "title": "In the Mood for Love",
    "year": 2000,
    "director": "Wong Kar-Wai",
    "cast": [
      "Maggie Cheung",
      "Tony Leung Chiu Wai"
    ]
  },
  {
    "id": 270,
    "title": "The Conformist",
    "year": 1970,
    "director": "Bernardo Bertolucci",
    "cast": [
      "Jean-Louis Trintignant",
      "Stefania Sandrelli",
      "Gastone Moschin"
    ]
  },
  {
    "id": 271,
    "title": "Raise the Red Lantern",
    "year": 1991,
    "director": "Zhang Yimou",
    "cast": [
      "Gong Li",
      "Jingwu Ma",
      "Saifei He",
      "Cuifen Cao"
    ]
  },
  {
    "id": 272,
    "title": "Jules and Jim",
    "year": 1962,
    "director": "François Truffaut",
    "cast": [
      "Jeanne Moreau",
      "Oskar Werner",
      "Henri Serre"
    ]
  },
  {
    "id": 273,
    "title": "Make Way for Tomorrow",
    "year": 1937,
    "director": "Leo McCarey",
    "cast": [
      "Victor Moore",
      "Beulah Bondi",
      "Fay Bainter",
      "Thomas Mitchell"
    ]
  },
  {
    "id": 274,
    "title": "The Man Who Shot Liberty Valance",
    "year": 1962,
    "director": "John Ford",
    "cast": [
      "John Wayne",
      "James Stewart",
      "Lee Marvin"
    ]
  },
  {
    "id": 275,
    "title": "Häxan",
    "year": 1922,
    "director": "Benjamin Christensen",
    "cast": [
      "Benjamin Christensen",
      "Clara Pontoppidan",
      "Oscar Stribolt"
    ]
  },
  {
    "id": 276,
    "title": "My Darling Clementine",
    "year": 1946,
    "director": "John Ford",
    "cast": [
      "Henry Fonda",
      "Victor Mature",
      "Linda Darnell"
    ]
  },
  {
    "id": 277,
    "title": "Top Hat",
    "year": 1935,
    "director": "Mark Sandrich",
    "cast": [
      "Fred Astaire",
      "Ginger Rogers",
      "Edward Everett Horton"
    ]
  },
  {
    "id": 278,
    "title": "Mad Max 2: The Road Warrior",
    "year": 1981,
    "director": "George Miller",
    "cast": [
      "Mel Gibson",
      "Syd Heylen"
    ]
  },
  {
    "id": 279,
    "title": "A Man Escaped",
    "year": 1956,
    "director": "Robert Bresson",
    "cast": [
      "François Leterrier",
      "Charles Le Clainche",
      "Maurice Beerblock"
    ]
  },
  {
    "id": 280,
    "title": "The Phantom Carriage",
    "year": 1921,
    "director": "Victor Sjöström",
    "cast": [
      "Victor Sjöström",
      "Hilda Borgström",
      "Tore Svennberg"
    ]
  },
  {
    "id": 281,
    "title": "Last Year at Marienbad",
    "year": 1961,
    "director": "Alain Resnais",
    "cast": [
      "Delphine Seyrig",
      "Giorgio Albertazzi",
      "Sacha Pitoëff"
    ]
  },
  {
    "id": 282,
    "title": "The Last Picture Show",
    "year": 1971,
    "director": "Peter Bogdanovich",
    "cast": [
      "Timothy Bottoms",
      "Jeff Bridges",
      "Ellen Burstyn"
    ]
  },
  {
    "id": 283,
    "title": "The Blue Angel",
    "year": 1930,
    "director": "Josef von Sternberg",
    "cast": [
      "Marlene Dietrich",
      "Emil Jannings",
      "Kurt Gerron"
    ]
  },
  {
    "id": 284,
    "title": "A Matter of Life and Death",
    "year": 1946,
    "director": "Michael Powell & Emeric Pressburger",
    "cast": [
      "David Niven",
      "Roger Livesey",
      "Raymond Massey"
    ]
  },
  {
    "id": 285,
    "title": "The Big Sleep",
    "year": 1946,
    "director": "Howard Hawks",
    "cast": [
      "Humphrey Bogart",
      "Lauren Bacall",
      "Martha Vickers",
      "Dorothy Malone"
    ]
  },
  {
    "id": 286,
    "title": "The Elephant Man",
    "year": 1980,
    "director": "David Lynch",
    "cast": [
      "Anthony Hopkins",
      "John Hurt",
      "Anne Bancroft"
    ]
  },
  {
    "id": 287,
    "title": "L.A. Confidential",
    "year": 1997,
    "director": "Curtis Hanson",
    "cast": [
      "Russell Crowe",
      "Kevin Spacey",
      "Guy Pearce",
      "Kim Basinger",
      "James Cromwell"
    ]
  },
  {
    "id": 288,
    "title": "Boyz n the Hood",
    "year": 1991,
    "director": "John Singleton",
    "cast": [
      "Ice Cube",
      "Cuba Gooding Jr.",
      "Laurence Fishburne",
      "Angela Bassett",
      "Lloyd Avery II"
    ]
  },
  {
    "id": 289,
    "title": "Anatomy of a Murder",
    "year": 1959,
    "director": "Otto Preminger",
    "cast": [
      "James Stewart",
      "Lee Remick",
      "Ben Gazzara",
      "George C. Scott"
    ]
  },
  {
    "id": 290,
    "title": "Sansho the Bailiff",
    "year": 1954,
    "director": "Kenji Mizoguchi",
    "cast": [
      "Kinuyo Tanaka",
      "Yoshiaki Hanayagi",
      "Kyoko Kagawa"
    ]
  },
  {
    "id": 291,
    "title": "The Sting",
    "year": 1973,
    "director": "George Roy Hill",
    "cast": [
      "Paul Newman",
      "Robert Redford",
      "Robert Shaw",
      "Charles Durning",
      "Ray Walston",
      "Eileen Brennan"
    ]
  },
  {
    "id": 292,
    "title": "Viridiana",
    "year": 1961,
    "director": "Luis Buñuel",
    "cast": [
      "Silvia Pinal",
      "Francisco Rabal",
      "Fernando Rey"
    ]
  },
  {
    "id": 293,
    "title": "Brazil",
    "year": 1985,
    "director": "Terry Gilliam",
    "cast": [
      "Jonathan Pryce",
      "Robert De Niro",
      "Kim Greist"
    ]
  },
  {
    "id": 294,
    "title": "The Truman Show",
    "year": 1998,
    "director": "Peter Weir",
    "cast": [
      "Jim Carrey",
      "Ed Harris",
      "Laura Linney",
      "Noah Emmerich"
    ]
  },
  {
    "id": 295,
    "title": "Heat",
    "year": 1995,
    "director": "Michael Mann",
    "cast": [
      "Al Pacino",
      "Robert De Niro",
      "Jon Voight",
      "Val Kilmer",
      "Ashley Judd"
    ]
  },
  {
    "id": 296,
    "title": "Jeanne Dielman, 23 quai du Commerce, 1080 Bruxelles",
    "year": 1975,
    "director": "Chantal Akerman",
    "cast": [
      "Delphine Seyrig",
      "Jan Decorte",
      "Henri Storck"
    ]
  },
  {
    "id": 297,
    "title": "Young Frankenstein",
    "year": 1974,
    "director": "Mel Brooks",
    "cast": [
      "Gene Wilder",
      "Peter Boyle",
      "Madeline Kahn",
      "Marty Feldman",
      "Teri Garr",
      "Cloris Leachman"
    ]
  },
  {
    "id": 298,
    "title": "Moonlight",
    "year": 2016,
    "director": "Barry Jenkins",
    "cast": [
      "Trevante Rhodes",
      "André Holland",
      "Janelle Monáe"
    ]
  },
  {
    "id": 299,
    "title": "A Separation",
    "year": 2011,
    "director": "Asghar Farhadi",
    "cast": [
      "Leila Hatami",
      "Payman Maadi",
      "Sareh Bayat",
      "Shahab Hosseini"
    ]
  },
  {
    "id": 300,
    "title": "Wings",
    "year": 1927,
    "director": "William A. Wellman",
    "cast": [
      "Clara Bow",
      "Charles \"Buddy\" Rogers",
      "Richard Arlen",
      "Gary Cooper"
    ]
  },
  {
    "id": 301,
    "title": "Red River",
    "year": 1948,
    "director": "Howard Hawks",
    "cast": [
      "John Wayne",
      "Montgomery Clift",
      "Walter Brennan",
      "Joanne Dru",
      "Noah Beery Jr."
    ]
  },
  {
    "id": 302,
    "title": "Spartacus",
    "year": 1960,
    "director": "Stanley Kubrick",
    "cast": [
      "Kirk Douglas",
      "Laurence Olivier",
      "Jean Simmons",
      "Peter Ustinov",
      "Charles Laughton"
    ]
  },
  {
    "id": 303,
    "title": "The Conversation",
    "year": 1974,
    "director": "Francis Ford Coppola",
    "cast": [
      "Gene Hackman",
      "John Cazale",
      "Allen Garfield"
    ]
  },
  {
    "id": 304,
    "title": "From Here to Eternity",
    "year": 1953,
    "director": "Fred Zinnemann",
    "cast": [
      "Burt Lancaster",
      "Montgomery Clift",
      "Deborah Kerr",
      "Donna Reed",
      "Frank Sinatra"
    ]
  },
  {
    "id": 305,
    "title": "Who Framed Roger Rabbit",
    "year": 1988,
    "director": "Robert Zemeckis",
    "cast": [
      "Bob Hoskins",
      "Christopher Lloyd",
      "Joanna Cassidy",
      "Stubby Kaye"
    ]
  },
  {
    "id": 306,
    "title": "Groundhog Day",
    "year": 1993,
    "director": "Harold Ramis",
    "cast": [
      "Bill Murrey",
      "Andie McDowell",
      "Chris Elliott",
      "Brian Doyle-Murray"
    ]
  },
  {
    "id": 307,
    "title": "The Invisible Man",
    "year": 1933,
    "director": "James Whale",
    "cast": [
      "Gloria Stuart",
      "Claude Rains",
      "William Harrigan"
    ]
  },
  {
    "id": 308,
    "title": "Patton",
    "year": 1970,
    "director": "Franklin J. Schaffner",
    "cast": [
      "George C. Scott",
      "Karl Malden",
      "Stephen Young",
      "Michael Strong"
    ]
  },
  {
    "id": 309,
    "title": "Planet of the Apes",
    "year": 1968,
    "director": "Franklin J. Schaffner",
    "cast": [
      "Charlton Heston",
      "Roddy McDowall",
      "Kim Hunter"
    ]
  },
  {
    "id": 310,
    "title": "L'Atalante",
    "year": 1934,
    "director": "Jean Vigo",
    "cast": [
      "Michel Simon",
      "Dita Parlo",
      "Jean Dasté"
    ]
  },
  {
    "id": 311,
    "title": "Cat on a Hot Tin Roof",
    "year": 1958,
    "director": "Richard Brooks",
    "cast": [
      "Elizabeth Taylor",
      "Paul Newman",
      "Burl Ives"
    ]
  },
  {
    "id": 312,
    "title": "Shoah",
    "year": 1985,
    "director": "Claude Lanzmann",
    "cast": [
      "Documentary"
    ]
  },
  {
    "id": 313,
    "title": "Cinema Paradiso",
    "year": 1988,
    "director": "Giuseppe Tornatore",
    "cast": [
      "Philippe Noiret",
      "Salvatore Cascio"
    ]
  },
  {
    "id": 314,
    "title": "Kind Hearts and Coronets",
    "year": 1949,
    "director": "Robert Hamer",
    "cast": [
      "Dennis Price",
      "Alec Guinness",
      "Valerie Hobson",
      "Joan Greenwood"
    ]
  },
  {
    "id": 315,
    "title": "Three Colours: Red",
    "year": 1994,
    "director": "Krzysztof Kieslowski",
    "cast": [
      "Irene Jacob",
      "Jean-Louis Trintignant"
    ]
  },
  {
    "id": 316,
    "title": "Le Samouraï",
    "year": 1967,
    "director": "Jean-Pierre Melville",
    "cast": [
      "Alain Delon",
      "Francois Perier",
      "Nathalie Delon"
    ]
  },
  {
    "id": 317,
    "title": "Trouble in Paradise",
    "year": 1932,
    "director": "Ernst Lubitsch",
    "cast": [
      "Miriam Hopkins",
      "Kay Francis",
      "Herbert Marshall"
    ]
  },
  {
    "id": 318,
    "title": "The Phantom of the Opera",
    "year": 1925,
    "director": "Rupert Julian",
    "cast": [
      "Lon Chaney",
      "Norman Kerry",
      "Mary Philbin"
    ]
  },
  {
    "id": 319,
    "title": "Last Tango in Paris",
    "year": 1972,
    "director": "Bernardo Bertolucci",
    "cast": [
      "Marlon Brando",
      "Maria Schneider",
      "Jean-Pierre Léaud"
    ]
  },
  {
    "id": 320,
    "title": "The African Queen",
    "year": 1951,
    "director": "John Huston",
    "cast": [
      "Humphrey Bogart",
      "Katharine Hepburn",
      "Robert Morley",
      "Peter Bull"
    ]
  },
  {
    "id": 321,
    "title": "The Great Train Robbery",
    "year": 1903,
    "director": "Edwin S. Porter",
    "cast": [
      "Justus D. Barnes",
      "G.M. Anderson",
      "Walter Cameron"
    ]
  },
  {
    "id": 322,
    "title": "Toy Story 3",
    "year": 2010,
    "director": "Lee Unkrich",
    "cast": [
      "voices - Tom Hanks",
      "Tim Allen",
      "Joan Cusack",
      "Ned Beatty",
      "Michael Keaton",
      "Don Rickles"
    ]
  },
  {
    "id": 323,
    "title": "Up",
    "year": 2009,
    "director": "Pete Docter",
    "cast": [
      "voices - Edward Asner",
      "Christopher Plummer",
      "Jordan Nagai",
      "John Ratzenberger"
    ]
  },
  {
    "id": 324,
    "title": "Platoon",
    "year": 1986,
    "director": "Oliver Stone",
    "cast": [
      "Tom Berenger",
      "Willem Dafoe",
      "Charlie Sheen",
      "Forest Whitaker",
      "Keith David"
    ]
  },
  {
    "id": 325,
    "title": "The Sixth Sense",
    "year": 1999,
    "director": "M. Night Shyamalan",
    "cast": [
      "Bruce Willis",
      "Harvey Joel Osment",
      "Toni Collette",
      "Olivia Williams"
    ]
  },
  {
    "id": 326,
    "title": "Au hasard Balthazar",
    "year": 1966,
    "director": "Robert Bresson",
    "cast": [
      "Anne Wiazemsky",
      "Walter Green",
      "Francois Lafarge"
    ]
  },
  {
    "id": 327,
    "title": "The Lives of Others",
    "year": 2006,
    "director": "Florian Henckel von Donnersmarck",
    "cast": [
      "Martina Gedeck",
      "Ulrich Mühe"
    ]
  },
  {
    "id": 328,
    "title": "The Pianist",
    "year": 2002,
    "director": "Roman Polanski",
    "cast": [
      "Adrien Brody",
      "Thomas Kretschmann",
      "Frank Finlay",
      "Emilia Fox"
    ]
  },
  {
    "id": 329,
    "title": "Life Is Beautiful",
    "year": 1997,
    "director": "Roberto Benigni",
    "cast": [
      "Roberto Benigni",
      "Nicoletta Braschi"
    ]
  },
  {
    "id": 330,
    "title": "Strangers on a Train",
    "year": 1951,
    "director": "Alfred Hitchcock",
    "cast": [
      "Farley Granger",
      "Ruth Roman",
      "Robert Walker"
    ]
  },
  {
    "id": 331,
    "title": "Wings of Desire",
    "year": 1987,
    "director": "Wim Wenders",
    "cast": [
      "Bruno Ganz",
      "Solveig Dommartin",
      "Otto Sander"
    ]
  },
  {
    "id": 332,
    "title": "Full Metal Jacket",
    "year": 1987,
    "director": "Stanley Kubrick",
    "cast": [
      "R. Lee Ermey",
      "Matthew Modine",
      "Adam Baldwin"
    ]
  },
  {
    "id": 333,
    "title": "Z",
    "year": 1969,
    "director": "Costa-Gavras",
    "cast": [
      "Jean-Louis Trintignant",
      "Yves Montand",
      "Irene Papas"
    ]
  },
  {
    "id": 334,
    "title": "Black Narcissus",
    "year": 1947,
    "director": "Michael Powell & Emeric Pressburger",
    "cast": [
      "Deborah Kerr",
      "Kathleen Byron",
      "Sabu",
      "David Farrar"
    ]
  },
  {
    "id": 335,
    "title": "Fanny and Alexander",
    "year": 1982,
    "director": "Ingmar Bergman",
    "cast": [
      "Pernilla Allwin",
      "Bertil Guve",
      "Kristina Adolphson"
    ]
  },
  {
    "id": 336,
    "title": "White Heat",
    "year": 1949,
    "director": "Raoul Walsh",
    "cast": [
      "James Cagney",
      "Virginia Mayo",
      "Edmond O'Brien"
    ]
  },
  {
    "id": 337,
    "title": "Late Spring",
    "year": 1949,
    "director": "Yasujirô Ozu",
    "cast": [
      "Chishu Ryu",
      "Setsuko Hara",
      "Haruko Sugimura"
    ]
  },
  {
    "id": 338,
    "title": "Paris, Texas",
    "year": 1984,
    "director": "Wim Wenders",
    "cast": [
      "Harry Dean Stanton",
      "Dean Stockwell",
      "Nastassja Kinski"
    ]
  },
  {
    "id": 339,
    "title": "Sweet Smell of Success",
    "year": 1957,
    "director": "Alexander Mackendrick",
    "cast": [
      "Burt Lancaster",
      "Tony Curtis",
      "Susan Harrison"
    ]
  },
  {
    "id": 340,
    "title": "Monty Python's Life of Brian",
    "year": 1979,
    "director": "Terry Jones",
    "cast": [
      "Kenneth Colley",
      "Graham Chapman",
      "John Cleese",
      "Michael Palin",
      "Eric Idle",
      "Terry Gilliam"
    ]
  },
  {
    "id": 341,
    "title": "Imitation of Life",
    "year": 1959,
    "director": "Douglas Sirk",
    "cast": [
      "Lana Turner",
      "Juanita Moore",
      "John Gavin"
    ]
  },
  {
    "id": 342,
    "title": "Solaris",
    "year": 1972,
    "director": "Andrei Tarkovsky",
    "cast": [
      "Donatas Banionis",
      "Natalya Bondarchuk",
      "Jüri Järvet"
    ]
  },
  {
    "id": 343,
    "title": "L'Âge d'or",
    "year": 1930,
    "director": "Luis Buñuel",
    "cast": [
      "Gaston Modot",
      "Lya Lys",
      "Caridad de Laberdesque"
    ]
  },
  {
    "id": 344,
    "title": "Ninotchka",
    "year": 1939,
    "director": "Ernst Lubitsch",
    "cast": [
      "Greta Garbo",
      "Melvyn Douglas",
      "Ina Claire"
    ]
  },
  {
    "id": 345,
    "title": "Badlands",
    "year": 1973,
    "director": "Terrence Malick",
    "cast": [
      "Martin Sheen",
      "Sissy Spacek",
      "Warren Oates",
      "Ramon Bieri"
    ]
  },
  {
    "id": 346,
    "title": "The Four Horsemen of the Apocalypse",
    "year": 1921,
    "director": "Rex Ingram",
    "cast": [
      "Pomeroy Cannon",
      "Josef Swickard",
      "Bridgetta Clark",
      "Rudolf Valentino"
    ]
  },
  {
    "id": 347,
    "title": "I Am a Fugitive from a Chain Gang",
    "year": 1932,
    "director": "Mervyn LeRoy",
    "cast": [
      "Paul Muni",
      "Glenda Farrell",
      "Helen Vinson",
      "Noel Francis"
    ]
  },
  {
    "id": 348,
    "title": "Love Me Tonight",
    "year": 1932,
    "director": "Rouben Mamoulian",
    "cast": [
      "Maurice Chevalier",
      "Jeanette MacDonald",
      "Charles Ruggles"
    ]
  },
  {
    "id": 349,
    "title": "Edward Scissorhands",
    "year": 1990,
    "director": "Tim Burton",
    "cast": [
      "Johnny Depp",
      "Winona Ryder",
      "Dianne Wiest",
      "Vincent Price",
      "Alan Arkin"
    ]
  },
  {
    "id": 350,
    "title": "Aladdin",
    "year": 1992,
    "director": "Ron Clements & John Musker",
    "cast": [
      "voices - Scott Weinger",
      "Robin Williams",
      "Linda Larkin",
      "Jonathan Freeman"
    ]
  },
  {
    "id": 351,
    "title": "My Fair Lady",
    "year": 1964,
    "director": "George Cukor",
    "cast": [
      "Audrey Hepburn",
      "Rex Harrison",
      "Stanley Holloway"
    ]
  },
  {
    "id": 352,
    "title": "Cabiria",
    "year": 1914,
    "director": "Giovanni Pastrone",
    "cast": [
      "Lidia Quaranta",
      "Dante Testa",
      "Bartolomeo Pagano"
    ]
  },
  {
    "id": 353,
    "title": "The Life and Death of Colonel Blimp",
    "year": 1943,
    "director": "Michael Powell & Emeric Pressburger",
    "cast": [
      "Roger Livesey",
      "Anton Walbrook",
      "Deborah Kerr"
    ]
  },
  {
    "id": 354,
    "title": "Bambi",
    "year": 1942,
    "director": "David Hand et al.",
    "cast": [
      "voices - Hardie Albright",
      "Stan Alexander",
      "Peter Behn",
      "Thelma Boardman"
    ]
  },
  {
    "id": 355,
    "title": "42nd Street",
    "year": 1933,
    "director": "Lloyd Bacon",
    "cast": [
      "Warner Baxter",
      "Bebe Daniels",
      "George Brent",
      "Ruby Keeler"
    ]
  },
  {
    "id": 356,
    "title": "Million Dollar Baby",
    "year": 2004,
    "director": "Clint Eastwood",
    "cast": [
      "Clint Eastwood",
      "Hilary Swank"
    ]
  },
  {
    "id": 357,
    "title": "Stranger than Paradise",
    "year": 1984,
    "director": "Jim Jarmusch",
    "cast": [
      "John Lurie",
      "Eszter Balint",
      "Richard Edson"
    ]
  },
  {
    "id": 358,
    "title": "Amélie",
    "year": 2001,
    "director": "Jean-Pierre Jeunet",
    "cast": [
      "Audrey Tautou",
      "Mathieu Kassovitz",
      "Rufus"
    ]
  },
  {
    "id": 359,
    "title": "Pandora's Box",
    "year": 1929,
    "director": "G.W. Pabst",
    "cast": [
      "Louise Brooks",
      "Fritz Kortner",
      "Francis Lederer"
    ]
  },
  {
    "id": 360,
    "title": "Los olvidados",
    "year": 1950,
    "director": "Luis Buñuel",
    "cast": [
      "Alfonso Mejía",
      "Stella Inda",
      "Miguel Inclán",
      "Roberto Cobo"
    ]
  },
  {
    "id": 361,
    "title": "Inside Out",
    "year": 2015,
    "director": "Pete Docter & Ronnie del Carmen",
    "cast": [
      "Amy Poehler",
      "Phyllis Smith",
      "Richard Kind"
    ]
  },
  {
    "id": 362,
    "title": "La La Land",
    "year": 2016,
    "director": "Damien Chazelle",
    "cast": [
      "Ryan Gosling",
      "Emma Stone",
      "Rosemarie DeWitt",
      "J.K. Simmons"
    ]
  },
  {
    "id": 363,
    "title": "Kramer vs. Kramer",
    "year": 1979,
    "director": "Robert Benton",
    "cast": [
      "Dustin Hoffman",
      "Meryl Streep",
      "Justin Henry"
    ]
  },
  {
    "id": 364,
    "title": "From Russia with Love",
    "year": 1963,
    "director": "Terence Young",
    "cast": [
      "Sean Connery",
      "Pedro Armendáriz",
      "Lotte Lenya"
    ]
  },
  {
    "id": 365,
    "title": "The Hustler",
    "year": 1961,
    "director": "Robert Rossen",
    "cast": [
      "Paul Newman",
      "Jackie Gleason",
      "Piper Laurie"
    ]
  },
  {
    "id": 366,
    "title": "The Quiet Man",
    "year": 1952,
    "director": "John Ford",
    "cast": [
      "John Wayne",
      "Maureen O'Hara",
      "Barry Fitzgerald"
    ]
  },
  {
    "id": 367,
    "title": "The 39 Steps",
    "year": 1935,
    "director": "Alfred Hitchcock",
    "cast": [
      "Robert Donat",
      "Madeleine Carroll",
      "Lucie Mannheim",
      "Godfrey Tearle"
    ]
  },
  {
    "id": 368,
    "title": "A Night at the Opera",
    "year": 1935,
    "director": "Sam Wood",
    "cast": [
      "The Marx Brothers",
      "Kitty Carlisle",
      "Allan Jones"
    ]
  },
  {
    "id": 369,
    "title": "The Thief of Bagdad",
    "year": 1940,
    "director": "Michael Powell, Ludwig Berger & Tim Whelan",
    "cast": [
      "Conrad Veidt",
      "Sabu",
      "John Justin"
    ]
  },
  {
    "id": 370,
    "title": "Ben-Hur: A Tale of the Christ",
    "year": 1925,
    "director": "Fred Niblo",
    "cast": [
      "Ramon Novarro",
      "May McAvoy",
      "Betty Bronson"
    ]
  },
  {
    "id": 371,
    "title": "Dances with Wolves",
    "year": 1990,
    "director": "Kevin Costner",
    "cast": [
      "Kevin Costner",
      "Mary McDonnell",
      "Graham Greene",
      "Rodney A. Grant"
    ]
  },
  {
    "id": 372,
    "title": "The Princess Bride",
    "year": 1987,
    "director": "Rob Reiner",
    "cast": [
      "Cary Elwes",
      "Robin Wright",
      "Mandy Patinkin"
    ]
  },
  {
    "id": 373,
    "title": "The Breakfast Club",
    "year": 1985,
    "director": "John Hughes",
    "cast": [
      "Emilio Estevez",
      "Judd Nelson",
      "Molly Ringwald",
      "Ally Sheedy",
      "Anthony Michael Hall"
    ]
  },
  {
    "id": 374,
    "title": "National Lampoon's Animal House",
    "year": 1978,
    "director": "John Landis",
    "cast": [
      "John Belushi",
      "Tim Matheson",
      "Karen Allen",
      "Mark Metcalf",
      "Kevin Bacon"
    ]
  },
  {
    "id": 375,
    "title": "12 Years a Slave",
    "year": 2013,
    "director": "Steve McQueen",
    "cast": [
      "Chiwetel Ejiofor",
      "Michael Fassbender",
      "Michael Kenneth Williams",
      "Brad Pitt"
    ]
  },
  {
    "id": 376,
    "title": "The Thief of Bagdad",
    "year": 1924,
    "director": "Raoul Walsh",
    "cast": [
      "Douglas Fairbanks",
      "Snitz Edwards",
      "Charles Belcher",
      "Anna May Wong"
    ]
  },
  {
    "id": 377,
    "title": "L'Arroseur Arrosé (aka: The Waterer Watered)",
    "year": 1895,
    "director": "Louis Lumière",
    "cast": [
      "François Clerc",
      "Benoît Duval"
    ]
  },
  {
    "id": 378,
    "title": "Saturday Night Fever",
    "year": 1977,
    "director": "John Badham",
    "cast": [
      "John Travolta",
      "Karen Gorney",
      "Joseph Cali",
      "Donna Pescow",
      "Barry Miller"
    ]
  },
  {
    "id": 379,
    "title": "Grave of the Fireflies",
    "year": 1988,
    "director": "Isao Takahata",
    "cast": [
      "Tsutomu Tatsumi",
      "Ayano Shiraishi"
    ]
  },
  {
    "id": 380,
    "title": "The Ox-Bow Incident",
    "year": 1942,
    "director": "William A. Wellman",
    "cast": [
      "Henry Fonda",
      "Dana Andrews",
      "Mary Beth Hughes"
    ]
  },
  {
    "id": 381,
    "title": "Close-Up",
    "year": 1990,
    "director": "Abbas Kiarostami",
    "cast": [
      "Hossain Sabzian",
      "Mohsen Makhmalbaf",
      "Abolfazl Ahankhah"
    ]
  },
  {
    "id": 382,
    "title": "Breaking the Waves",
    "year": 1996,
    "director": "Lars von Trier",
    "cast": [
      "Emily Watson",
      "Stellan Skarsgard",
      "Katrin Cartlidge"
    ]
  },
  {
    "id": 383,
    "title": "Lost in Translation",
    "year": 2003,
    "director": "Sofia Coppola",
    "cast": [
      "Bill Murray",
      "Scarlett Johnansson",
      "Anna Faris",
      "Giovanni Ribisi"
    ]
  },
  {
    "id": 384,
    "title": "Boogie Nights",
    "year": 1997,
    "director": "Paul Thomas Anderson",
    "cast": [
      "Mark Wahlberg",
      "Juluanne Moore",
      "Burt Reynolds",
      "John C. Reilly"
    ]
  },
  {
    "id": 385,
    "title": "Elevator to the Gallows",
    "year": 1958,
    "director": "Louis Malle",
    "cast": [
      "Jeanne Moreau",
      "Maurice Ronet",
      "Georges Poujouly"
    ]
  },
  {
    "id": 386,
    "title": "The Umbrellas of Cherbourg",
    "year": 1964,
    "director": "Jacques Demy",
    "cast": [
      "Catherine Deneuve",
      "Anne Vernon",
      "Nino Castelnuovo"
    ]
  },
  {
    "id": 387,
    "title": "Princess Mononoke",
    "year": 1997,
    "director": "Hayao Miyazaki",
    "cast": [
      "Yoji Matsuda",
      "Yuriko Ishida"
    ]
  },
  {
    "id": 388,
    "title": "The Lost Weekend",
    "year": 1945,
    "director": "Billy Wilder",
    "cast": [
      "Ray Milland",
      "Jane Wyman",
      "Howard Da Silva",
      "Phillip Terry"
    ]
  },
  {
    "id": 389,
    "title": "Cat People",
    "year": 1942,
    "director": "Jacques Tourneur",
    "cast": [
      "Simone Simon",
      "Kent Smith",
      "Tom Conway"
    ]
  },
  {
    "id": 390,
    "title": "The Incredibles",
    "year": 2004,
    "director": "Brad Bird",
    "cast": [
      "voices - Craig T. Nelson",
      "Samuel L. Jackson",
      "Holly Hunter",
      "Jason Lee",
      "Wallace Shawn"
    ]
  },
  {
    "id": 391,
    "title": "The Great Escape",
    "year": 1963,
    "director": "John Sturges",
    "cast": [
      "Steve McQueen",
      "James Garner",
      "Richard Attenborough"
    ]
  },
  {
    "id": 392,
    "title": "Bullitt",
    "year": 1968,
    "director": "Peter Yates",
    "cast": [
      "Steve McQueen",
      "Robert Vaughn",
      "Jacqueline Bisset",
      "Robert Duvall",
      "Norman Fell"
    ]
  },
  {
    "id": 393,
    "title": "An American in Paris",
    "year": 1951,
    "director": "Vincente Minnelli",
    "cast": [
      "Gene Kelly",
      "Leslie Caron",
      "Oscar Levant"
    ]
  },
  {
    "id": 394,
    "title": "The Day the Earth Stood Still",
    "year": 1951,
    "director": "Robert Wise",
    "cast": [
      "Michael Rennie",
      "Patricia Neal",
      "Hugh Marlowe"
    ]
  },
  {
    "id": 395,
    "title": "Dr. Mabuse the Gambler Part 2: Inferno",
    "year": 1922,
    "director": "Fritz Lang",
    "cast": [
      "Rudolf Klein-Rogge",
      "Alfred Abel",
      "Bernhard Goetzke"
    ]
  },
  {
    "id": 396,
    "title": "The Rocky Horror Picture Show",
    "year": 1975,
    "director": "Jim Sharman",
    "cast": [
      "Tim Curry",
      "Susan Sarandon",
      "Barry Bostwick",
      "Richard O'Brien"
    ]
  },
  {
    "id": 397,
    "title": "The Mirror",
    "year": 1975,
    "director": "Andrei Tarkovsky",
    "cast": [
      "Filipp Yankovsky",
      "Ignat Daniltsev",
      "Margarita Terekhova"
    ]
  },
  {
    "id": 398,
    "title": "My Man Godfrey",
    "year": 1936,
    "director": "Gregory La Cava",
    "cast": [
      "William Powell",
      "Carole Lombard",
      "Alice Brady"
    ]
  },
  {
    "id": 399,
    "title": "Pierrot le Fou",
    "year": 1965,
    "director": "Jean-Luc Godard",
    "cast": [
      "Jean-Paul Belmondo",
      "Anna Karina",
      "Graziella Galvani"
    ]
  },
  {
    "id": 400,
    "title": "The Jungle Book",
    "year": 1967,
    "director": "Wolfgang Reitherman",
    "cast": [
      "voices - Phil Harris",
      "Sebastian Cabot",
      "Louis Prima",
      "George Sanders",
      "Sterling Holloway"
    ]
  },
  {
    "id": 401,
    "title": "Gertie the Dinosaur",
    "year": 1914,
    "director": "Winsor McCay",
    "cast": []
  },
  {
    "id": 402,
    "title": "The Circus",
    "year": 1928,
    "director": "Charles Chaplin",
    "cast": [
      "Charles Chaplin",
      "Al Ernest Garcia",
      "Merna Kennedy",
      "Henry Bergman"
    ]
  },
  {
    "id": 403,
    "title": "Mildred Pierce",
    "year": 1945,
    "director": "Michael Curtiz",
    "cast": [
      "Joan Crawford",
      "Jack Carson",
      "Zachary Scott"
    ]
  },
  {
    "id": 404,
    "title": "Amarcord",
    "year": 1973,
    "director": "Federico Fellini",
    "cast": [
      "Bruno Zanin",
      "Magali Noël",
      "Pupella Maggio"
    ]
  },
  {
    "id": 405,
    "title": "Dracula",
    "year": 1958,
    "director": "Terence Fisher",
    "cast": [
      "Peter Cushing",
      "Christopher Lee",
      "Michael Gough"
    ]
  },
  {
    "id": 406,
    "title": "Throne of Blood",
    "year": 1957,
    "director": "Akira Kurosawa",
    "cast": [
      "Toshiro Mifune",
      "Isuzu Yamada",
      "Takashi Shimura"
    ]
  },
  {
    "id": 407,
    "title": "Don't Look Now",
    "year": 1973,
    "director": "Nicolas Roeg",
    "cast": [
      "Julie Christie",
      "Donald Sutherland"
    ]
  },
  {
    "id": 408,
    "title": "The Big Lebowski",
    "year": 1998,
    "director": "Joel & Ethan Coen",
    "cast": [
      "Jeff Bridges",
      "John Goodman"
    ]
  },
  {
    "id": 409,
    "title": "Come and See",
    "year": 1985,
    "director": "Elem Klimov",
    "cast": [
      "Aleksey Kravchenko",
      "Olga Mironova"
    ]
  },
  {
    "id": 410,
    "title": "Rope",
    "year": 1948,
    "director": "Alfred Hitchcock",
    "cast": [
      "James Stewart",
      "John Dall",
      "Farley Granger"
    ]
  },
  {
    "id": 411,
    "title": "Mutiny on the Bounty",
    "year": 1935,
    "director": "Frank Lloyd",
    "cast": [
      "Charles Laughton",
      "Clark Gable",
      "Franchot Tone"
    ]
  },
  {
    "id": 412,
    "title": "The Magnificent Ambersons",
    "year": 1942,
    "director": "Orson Welles",
    "cast": [
      "Joseph Cotten",
      "Dolores Costello",
      "Anne Baxter",
      "Tim Holt",
      "Agnes Moorehead"
    ]
  },
  {
    "id": 413,
    "title": "Gandhi",
    "year": 1982,
    "director": "Richard Attenborough",
    "cast": [
      "Ben Kingsley",
      "Rohini Hattangadi",
      "Roshan Seth"
    ]
  },
  {
    "id": 414,
    "title": "Three Colours: Blue",
    "year": 1993,
    "director": "Krzysztof Kieslowski",
    "cast": [
      "Juliette Binoche",
      "Benoit Régent"
    ]
  },
  {
    "id": 415,
    "title": "Chimes at Midnight",
    "year": 1965,
    "director": "Orson Welles",
    "cast": [
      "Orson Welles",
      "Keith Baxter",
      "John Gielgud"
    ]
  },
  {
    "id": 416,
    "title": "Nights of Cabiria",
    "year": 1957,
    "director": "Federico Fellini",
    "cast": [
      "Giulietta Masina",
      "François Périer",
      "Franca Marzi"
    ]
  },
  {
    "id": 417,
    "title": "The Producers",
    "year": 1967,
    "director": "Mel Brooks",
    "cast": [
      "Zero Mostel",
      "Gene Wilder",
      "Dick Shawn"
    ]
  },
  {
    "id": 418,
    "title": "The Leopard",
    "year": 1963,
    "director": "Luchino Visconti",
    "cast": [
      "Burt Lancaster",
      "Claudia Cardinale",
      "Alain Delon"
    ]
  },
  {
    "id": 419,
    "title": "Spider-Man: Into the Spider-Verse",
    "year": 2018,
    "director": "Bob Persichetti, Peter Ramsey, Rodney Rothman",
    "cast": [
      "Shameik Moore",
      "Jake Johnson",
      "Hailee Steinfeld"
    ]
  },
  {
    "id": 420,
    "title": "The Departed",
    "year": 2006,
    "director": "Martin Scorsese",
    "cast": [
      "Leonardo DiCaprio",
      "Matt Damon"
    ]
  },
  {
    "id": 421,
    "title": "The Tree of Life",
    "year": 2011,
    "director": "Terrence Malick",
    "cast": [
      "Brad Pitt",
      "Sean Penn",
      "Jessica Chastain"
    ]
  },
  {
    "id": 422,
    "title": "Caché",
    "year": 2005,
    "director": "Michael Haneke",
    "cast": [
      "Daniel Auteuil",
      "Juliette Binoche",
      "Maurice Bénichou"
    ]
  },
  {
    "id": 423,
    "title": "Talk to Her",
    "year": 2002,
    "director": "Pedro Almodóvar",
    "cast": [
      "Rosario Flores",
      "Javier Cámara",
      "Darío Grandinetti"
    ]
  },
  {
    "id": 424,
    "title": "The Piano",
    "year": 1993,
    "director": "Jane Campion",
    "cast": [
      "Holly Hunter",
      "Anna Paquin"
    ]
  },
  {
    "id": 425,
    "title": "Rififi",
    "year": 1955,
    "director": "Jules Dassin",
    "cast": [
      "Jean Servais",
      "Carl Möhner",
      "Robert Manuel"
    ]
  },
  {
    "id": 426,
    "title": "The Shop Around the Corner",
    "year": 1940,
    "director": "Ernst Lubitsch",
    "cast": [
      "Margaret Sullavan",
      "James Stewart",
      "Frank Morgan"
    ]
  },
  {
    "id": 427,
    "title": "The Lady Eve",
    "year": 1941,
    "director": "Preston Sturges",
    "cast": [
      "Barbara Stanwyck",
      "Henry Fonda",
      "Charles Coburn"
    ]
  },
  {
    "id": 428,
    "title": "Broken Blossoms",
    "year": 1919,
    "director": "D. W. Griffith",
    "cast": [
      "Lillian Gish",
      "Richard Barthelmess",
      "Donald Crisp"
    ]
  },
  {
    "id": 429,
    "title": "Grease",
    "year": 1978,
    "director": "Randal Kleiser",
    "cast": [
      "John Travolta",
      "Olivia Newton-John"
    ]
  },
  {
    "id": 430,
    "title": "Tootsie",
    "year": 1982,
    "director": "Sydney Pollack",
    "cast": [
      "Dustin Hoffman",
      "Jessica Lange",
      "Teri Garr"
    ]
  },
  {
    "id": 431,
    "title": "The Evil Dead",
    "year": 1981,
    "director": "Sam Raimi",
    "cast": [
      "Bruce Campbell",
      "Ellen Sandweiss",
      "Richard DeManincor"
    ]
  },
  {
    "id": 432,
    "title": "Peeping Tom",
    "year": 1960,
    "director": "Michael Powell",
    "cast": [
      "Carl Boehm",
      "Moira Shearer",
      "Anna Massey"
    ]
  },
  {
    "id": 433,
    "title": "Tillie's Punctured Romance",
    "year": 1914,
    "director": "Mack Sennett",
    "cast": [
      "Marie Dressler",
      "Mabel Normand",
      "Charles Chaplin",
      "The Keystone Cops"
    ]
  },
  {
    "id": 434,
    "title": "Night and Fog",
    "year": 1956,
    "director": "Alain Resnais",
    "cast": [
      "Documentary"
    ]
  },
  {
    "id": 435,
    "title": "Dr. Jekyll and Mr. Hyde",
    "year": 1931,
    "director": "Rouben Mamoulian",
    "cast": [
      "Fredric March",
      "Miriam Hopkins",
      "Rose Hobart"
    ]
  },
  {
    "id": 436,
    "title": "East of Eden",
    "year": 1955,
    "director": "Elia Kazan",
    "cast": [
      "Julie Harris",
      "James Dean",
      "Raymond Massey"
    ]
  },
  {
    "id": 437,
    "title": "Forbidden Planet",
    "year": 1956,
    "director": "Fred M. Wilcox",
    "cast": [
      "Walter Pidgeon",
      "Anne Francis",
      "Leslie Nielsen"
    ]
  },
  {
    "id": 438,
    "title": "Stand by Me",
    "year": 1986,
    "director": "Rob Reiner",
    "cast": [
      "Wil Wheaton",
      "River Phoenix",
      "Corey Feldman",
      "Jerry O'Connell",
      "Kiefer Sutherland"
    ]
  },
  {
    "id": 439,
    "title": "Amour",
    "year": 2012,
    "director": "Michael Haneke",
    "cast": [
      "Jean-Louis Trintignant",
      "Emmanuelle Riva",
      "Isabelle Huppert"
    ]
  },
  {
    "id": 440,
    "title": "Birdman or (The Unexpected Virtue of Ignorance)",
    "year": 2014,
    "director": "Alejandro González Iñárritu",
    "cast": [
      "Michael Keaton",
      "Zach Galifianakis",
      "Edward Norton"
    ]
  },
  {
    "id": 441,
    "title": "Mr. Deeds Goes to Town",
    "year": 1936,
    "director": "Frank Capra",
    "cast": [
      "Gary Cooper",
      "Jean Arthur",
      "George Bancroft"
    ]
  },
  {
    "id": 442,
    "title": "McCabe & Mrs. Miller",
    "year": 1971,
    "director": "Robert Altman",
    "cast": [
      "Warren Beatty",
      "Julie Christie"
    ]
  },
  {
    "id": 443,
    "title": "The Awful Truth",
    "year": 1937,
    "director": "Leo McCarey",
    "cast": [
      "Irene Dunne",
      "Cary Grant",
      "Ralph Bellamy"
    ]
  },
  {
    "id": 444,
    "title": "The Discreet Charm of the Bourgeoisie",
    "year": 1972,
    "director": "Luis Buñuel",
    "cast": [
      "Fernando Rey",
      "Paul Frankeur",
      "Delphine Seyrig"
    ]
  },
  {
    "id": 445,
    "title": "Cries and Whispers",
    "year": 1972,
    "director": "Ingmar Bergman",
    "cast": [
      "Harriet Andersson",
      "Kari Sylwan",
      "Ingrid Thulin",
      "Liv Ullmann"
    ]
  },
  {
    "id": 446,
    "title": "Roma",
    "year": 2018,
    "director": "Alfonso Cuarón",
    "cast": [
      "Yalitza Aparicio",
      "Marina de Tavira",
      "Jorge Antonio Guerrero"
    ]
  },
  {
    "id": 447,
    "title": "The Cameraman",
    "year": 1928,
    "director": "Buster Keaton & Edward Sedgwick",
    "cast": [
      "Buster Keaton",
      "Marceline Day"
    ]
  },
  {
    "id": 448,
    "title": "Dune",
    "year": 2021,
    "director": "Denis Villeneuve",
    "cast": [
      "Timothée Chalamet",
      "Rebecca Ferguson",
      "Oscar Isaac"
    ]
  },
  {
    "id": 449,
    "title": "The Hurt Locker",
    "year": 2009,
    "director": "Kathryn Bigelow",
    "cast": [
      "Jeremy Renner",
      "Anthony Mackie"
    ]
  },
  {
    "id": 450,
    "title": "Magnolia",
    "year": 1999,
    "director": "Paul Thomas Anderson",
    "cast": [
      "Jeremy Blackman",
      "Tom Cruise",
      "Philip Seymour Hoffman"
    ]
  },
  {
    "id": 451,
    "title": "Mad Max",
    "year": 1979,
    "director": "George Miller",
    "cast": [
      "Mel Gibson",
      "Joanne Samuel",
      "Hugh Keays-Byrne"
    ]
  },
  {
    "id": 452,
    "title": "Letter from an Unknown Woman",
    "year": 1948,
    "director": "Max Ophüls",
    "cast": [
      "Joan Fontaine",
      "Louis Jourdan"
    ]
  },
  {
    "id": 453,
    "title": "In a Lonely Place",
    "year": 1950,
    "director": "Nicholas Ray",
    "cast": [
      "Humphrey Bogart",
      "Gloria Grahame"
    ]
  },
  {
    "id": 454,
    "title": "Eraserhead",
    "year": 1977,
    "director": "David Lynch",
    "cast": [
      "Jack Nance",
      "Charlotte Stewart"
    ]
  },
  {
    "id": 455,
    "title": "Belle de Jour",
    "year": 1967,
    "director": "Luis Buñuel",
    "cast": [
      "Catherine Deneuve",
      "Jean Sorel",
      "Michel Piccoli"
    ]
  },
  {
    "id": 456,
    "title": "Kiss Me Deadly",
    "year": 1955,
    "director": "Robert Aldrich",
    "cast": [
      "Ralph Meeker",
      "Albert Dekker",
      "Paul Stewart"
    ]
  },
  {
    "id": 457,
    "title": "Suspiria",
    "year": 1977,
    "director": "Dario Argento",
    "cast": [
      "Jessica Harper",
      "Stefania Casini",
      "Flavio Bucci"
    ]
  },
  {
    "id": 458,
    "title": "Ordet",
    "year": 1955,
    "director": "Carl Theodor Dreyer",
    "cast": [
      "Henrik Malberg",
      "Emil Hass Christensen",
      "Birgitte Federspiel"
    ]
  },
  {
    "id": 459,
    "title": "Playtime",
    "year": 1967,
    "director": "Jacques Tati",
    "cast": [
      "Jacques Tati",
      "Barbara Dennek",
      "Jacqueline Lecomte"
    ]
  },
  {
    "id": 460,
    "title": "Pickpocket",
    "year": 1959,
    "director": "Robert Bresson",
    "cast": [
      "Martin LaSalle",
      "Marika Green",
      "Jean Pélégri"
    ]
  },
  {
    "id": 461,
    "title": "Ivan the Terrible, Part l",
    "year": 1944,
    "director": "Sergei M. Eisenstein",
    "cast": [
      "Nikolai Cherkasov",
      "Lyudmila Tselikovskaya",
      "Serafima Birman"
    ]
  },
  {
    "id": 462,
    "title": "Shadow of a Doubt",
    "year": 1943,
    "director": "Alfred Hitchcock",
    "cast": [
      "Teresa Wright",
      "Joseph Cotten",
      "Macdonald Carey"
    ]
  },
  {
    "id": 463,
    "title": "Harold and Maude",
    "year": 1971,
    "director": "Hal Ashby",
    "cast": [
      "Ruth Gordon",
      "Bud Cort"
    ]
  },
  {
    "id": 464,
    "title": "Dead Poets Society",
    "year": 1989,
    "director": "Peter Weir",
    "cast": [
      "Robin Williams",
      "Robert Sean Leonard",
      "Ethan Hawke"
    ]
  },
  {
    "id": 465,
    "title": "The Thin Red Line",
    "year": 1998,
    "director": "Terrence Malick",
    "cast": [
      "James Caviezel",
      "Sean Penn",
      "Nick Nolte"
    ]
  },
  {
    "id": 466,
    "title": "Ali: Fear Eats the Soul",
    "year": 1974,
    "director": "Rainer Werner Fassbinder",
    "cast": [
      "Brigitte Mira",
      "El Hedi ben Salem"
    ]
  },
  {
    "id": 467,
    "title": "All About My Mother",
    "year": 1999,
    "director": "Pedro Almodóvar",
    "cast": [
      "Cecilia Roth",
      "Marisa Paredes",
      "Candela Pena"
    ]
  },
  {
    "id": 468,
    "title": "To Have and Have Not",
    "year": 1944,
    "director": "Howard Hawks",
    "cast": [
      "Humphrey Bogart",
      "Walter Brennan",
      "Lauren Bacall"
    ]
  },
  {
    "id": 469,
    "title": "How Green Was My Valley",
    "year": 1941,
    "director": "John Ford",
    "cast": [
      "Walter Pidgeon",
      "Maureen O'Hara",
      "Donald Crisp",
      "Anna Lee",
      "Roddy McDowall"
    ]
  },
  {
    "id": 470,
    "title": "The Impossible Voyage",
    "year": 1904,
    "director": "Georges Méliès",
    "cast": [
      "Georges Méliès",
      "Fernande Albany",
      "Jehanne d'Alcy"
    ]
  },
  {
    "id": 471,
    "title": "When Harry Met Sally...",
    "year": 1989,
    "director": "Rob Reiner",
    "cast": [
      "Billy Crystal",
      "Meg Ryan"
    ]
  },
  {
    "id": 472,
    "title": "Meshes of the Afternoon",
    "year": 1943,
    "director": "Maya Deren & Alexander Hammid",
    "cast": [
      "Maya Deren",
      "Alexander Hammid"
    ]
  },
  {
    "id": 473,
    "title": "Requiem for a Dream",
    "year": 2000,
    "director": "Darren Aronofsky",
    "cast": [
      "Ellen Burstyn",
      "Jared Leto",
      "Jennifer Connelly"
    ]
  },
  {
    "id": 474,
    "title": "Everything Everywhere All at Once",
    "year": 2022,
    "director": "Daniel Kwan & Daniel Scheinert",
    "cast": [
      "Michelle Yeoh",
      "Stephanie Hsu",
      "Ke Huy Quan"
    ]
  },
  {
    "id": 475,
    "title": "Ferris Bueller's Day Off",
    "year": 1986,
    "director": "John Hughes",
    "cast": [
      "Matthew Broderick",
      "Alan Ruck"
    ]
  },
  {
    "id": 476,
    "title": "Blazing Saddles",
    "year": 1974,
    "director": "Mel Brooks",
    "cast": [
      "Cleavon Little",
      "Gene Wilder",
      "Madeline Kahn"
    ]
  },
  {
    "id": 477,
    "title": "Sullivan's Travels",
    "year": 1941,
    "director": "Preston Sturges",
    "cast": [
      "Joel McCrea",
      "Veronica Lake"
    ]
  },
  {
    "id": 478,
    "title": "The Grand Budapest Hotel",
    "year": 2014,
    "director": "Wes Anderson",
    "cast": [
      "Ralph Fiennes",
      "Tony Revolori",
      "Adrien Brody"
    ]
  },
  {
    "id": 479,
    "title": "Roundhay Garden Scene",
    "year": 1888,
    "director": "Louis Le Prince",
    "cast": [
      "Annie Hartley",
      "Adolphe Le Prince",
      "Joseph Whitley",
      "Sarah Whitley"
    ]
  },
  {
    "id": 480,
    "title": "Little Caesar",
    "year": 1931,
    "director": "Mervyn LeRoy",
    "cast": [
      "Edward G. Robinson",
      "Douglas Fairbanks Jr.",
      "Glenda Farrell"
    ]
  },
  {
    "id": 481,
    "title": "Django Unchained",
    "year": 2012,
    "director": "Quentin Tarantin",
    "cast": [
      "Jamie Foxx",
      "Christoph Waltz",
      "Leonardo DiCaprio"
    ]
  },
  {
    "id": 482,
    "title": "RoboCop",
    "year": 1987,
    "director": "Paul Verhoeven",
    "cast": [
      "Peter Weller",
      "Nancy Allen",
      "Kurtwood Smith"
    ]
  },
  {
    "id": 483,
    "title": "Nausicaä of the Valley of the Wind",
    "year": 1984,
    "director": "Hayao Miyazaki",
    "cast": [
      "Sumi Shimamoto",
      "Goro Naya"
    ]
  },
  {
    "id": 484,
    "title": "A Star Is Born",
    "year": 1954,
    "director": "George Cukor",
    "cast": [
      "Judy Garland",
      "James Mason",
      "Jack Carson"
    ]
  },
  {
    "id": 485,
    "title": "Mr. Hulot's Holiday",
    "year": 1953,
    "director": "Jacques Tati",
    "cast": [
      "Jacques Tati",
      "Nathalie Pascaud",
      "Micheline Rolla"
    ]
  },
  {
    "id": 486,
    "title": "Being John Malkovich",
    "year": 1999,
    "director": "Spike Jonze",
    "cast": [
      "John Cusack",
      "John Malkovich"
    ]
  },
  {
    "id": 487,
    "title": "Slumdog Millionaire",
    "year": 2008,
    "director": "Danny Boyle",
    "cast": [
      "Dev Patel",
      "Anil Kapoor"
    ]
  },
  {
    "id": 488,
    "title": "Braveheart",
    "year": 1995,
    "director": "Mel Gibson",
    "cast": [
      "Mel Gibson",
      "Sophie Marceau",
      "Patrick McGoohan"
    ]
  },
  {
    "id": 489,
    "title": "Amores Perros",
    "year": 2000,
    "director": "Alejandro González Iñárritu",
    "cast": [
      "Emilio Echavarrio",
      "Gael Garcia Bernal"
    ]
  },
  {
    "id": 490,
    "title": "A Nightmare on Elm Street",
    "year": 1984,
    "director": "Wes Craven",
    "cast": [
      "Heather Langenkamp",
      "John Saxon",
      "Robert Englund"
    ]
  },
  {
    "id": 491,
    "title": "Killer of the Sheep",
    "year": 1978,
    "director": "Charles Burnett",
    "cast": [
      "Henry G. Sanders",
      "Kaycee Moore",
      "Angela Burnett"
    ]
  },
  {
    "id": 492,
    "title": "Ratatouille",
    "year": 2007,
    "director": "Brad Bird",
    "cast": [
      "Patton Oswalt",
      "Ian Holm",
      "Lou Romano"
    ]
  },
  {
    "id": 493,
    "title": "Johnny Guitar",
    "year": 1954,
    "director": "Nicholas Ray",
    "cast": [
      "Joan Crawford",
      "Sterling Hayden",
      "Mercedes McCambridge"
    ]
  },
  {
    "id": 494,
    "title": "20,000 Leagues Under the Sea",
    "year": 1954,
    "director": "Richard Fleischer",
    "cast": [
      "Kirk Douglas",
      "James Mason",
      "Paul Lukas",
      "Peter Lorre"
    ]
  },
  {
    "id": 495,
    "title": "Alexander Nevsky",
    "year": 1938,
    "director": "Sergei M. Eisenstein & Dmitriy Vasilyev",
    "cast": [
      "Nikolay Cherkasov",
      "Nikolay Okhlopkov",
      "Andrei Abrikosov"
    ]
  },
  {
    "id": 496,
    "title": "Triumph of the Will",
    "year": 1935,
    "director": "Leni Riefenstahl",
    "cast": [
      "Documentary"
    ]
  },
  {
    "id": 497,
    "title": "On the Town",
    "year": 1949,
    "director": "Stanley Donen & Gene Kelly",
    "cast": [
      "Gene Kelly",
      "Frank Sinatra",
      "Betty Garrett",
      "Ann Miller"
    ]
  },
  {
    "id": 498,
    "title": "The Spirit of the Beehive",
    "year": 1973,
    "director": "Víctor Erice",
    "cast": [
      "Fernando Fernán Gómez",
      "Teresa Gimpera",
      "Ana Torrent"
    ]
  },
  {
    "id": 499,
    "title": "Rain Man",
    "year": 1988,
    "director": "Barry Levinson",
    "cast": [
      "Dustin Hoffman",
      "Tom Cruise",
      "Valeria Golino"
    ]
  },
  {
    "id": 500,
    "title": "Ashes and Diamonds",
    "year": 1958,
    "director": "Andrzej Wajda",
    "cast": [
      "Zbigniew Cybulski",
      "Ewa Krzyzewska",
      "Waclaw Zastrzezynski",
      "Adam Pawlikowski"
    ]
  }
];
