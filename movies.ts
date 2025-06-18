export interface Movie {
  id: number;
  title: string;
  originalTitle?: string;
  director: string;
  year: number;
  genre: string[];
  rating: number;
  description: string;
  category: 'domestic-films' | 'foreign-films' | 'domestic-series' | 'foreign-series';
  country?: string;
  seasons?: number;
  episodes?: number;
}

export const movies: Movie[] = [
  // STRANI FILMOVI
  {
    id: 1,
    title: "Početak",
    originalTitle: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    genre: ["Naučna fantastika", "Triler", "Akcija"],
    rating: 8.8,
    description: "Dom Cobb je lopov koji krade tajne iz podsvesti ljudi dok spavaju. Dobija zadatak da uradi suprotno - da usadi ideju umesto da je ukrade.",
    category: "foreign-films",
    country: "SAD"
  },
  {
    id: 2,
    title: "Mračni vitez",
    originalTitle: "The Dark Knight",
    director: "Christopher Nolan",
    year: 2008,
    genre: ["Akcija", "Kriminal", "Drama"],
    rating: 9.0,
    description: "Batman se suočava sa Jokerom koji želi da uvuče Gotham u anarhiju. Heath Ledger u nezaboravnoj ulozi.",
    category: "foreign-films",
    country: "SAD"
  },
  {
    id: 3,
    title: "Pulp Fiction",
    originalTitle: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: 1994,
    genre: ["Kriminal", "Drama"],
    rating: 8.9,
    description: "Kultni Tarantino film sa isprepletanim pričama o gangsterima, bokserima i filozofskim ubicama.",
    category: "foreign-films",
    country: "SAD"
  },
  {
    id: 4,
    title: "Interstellar",
    originalTitle: "Interstellar",
    director: "Christopher Nolan",
    year: 2014,
    genre: ["Naučna fantastika", "Drama", "Avantura"],
    rating: 8.6,
    description: "Grupa istraživača koristi crvu rupu da putuje kroz svemir u pokušaju da obezbedi opstanak čovečanstva.",
    category: "foreign-films",
    country: "SAD"
  },
  {
    id: 5,
    title: "Kum",
    originalTitle: "The Godfather",
    director: "Francis Ford Coppola",
    year: 1972,
    genre: ["Kriminal", "Drama"],
    rating: 9.2,
    description: "Saga o porodici Corleone, jednoj od najmoćnijih mafijskih familija u Americi.",
    category: "foreign-films",
    country: "SAD"
  },
  {
    id: 6,
    title: "Šindlerova lista",
    originalTitle: "Schindler's List",
    director: "Steven Spielberg",
    year: 1993,
    genre: ["Biografija", "Drama", "Istorijski"],
    rating: 8.9,
    description: "Istinita priča o Oskaru Šindleru koji je spasio preko hiljadu Jevreja tokom Holokausta.",
    category: "foreign-films",
    country: "SAD"
  },
  {
    id: 7,
    title: "Klub boraca",
    originalTitle: "Fight Club",
    director: "David Fincher",
    year: 1999,
    genre: ["Drama", "Triler"],
    rating: 8.8,
    description: "Nezadovoljni službenik osniva podzemni klub boraca sa harizmatičnim Tailerom Durdenom.",
    category: "foreign-films",
    country: "SAD"
  },
  {
    id: 8,
    title: "Matrix",
    originalTitle: "The Matrix",
    director: "Lana Wachowski, Lilly Wachowski",
    year: 1999,
    genre: ["Akcija", "Naučna fantastika"],
    rating: 8.7,
    description: "Programer Neo otkriva da je realnost simulacija i pridružuje se pobuni protiv mašina.",
    category: "foreign-films",
    country: "SAD"
  },
  {
    id: 9,
    title: "Dobri momci",
    originalTitle: "Goodfellas",
    director: "Martin Scorsese",
    year: 1990,
    genre: ["Biografija", "Kriminal", "Drama"],
    rating: 8.7,
    description: "Priča o Henriju Hilu i njegovom životu u mafiji kroz tri decenije.",
    category: "foreign-films",
    country: "SAD"
  },
  {
    id: 10,
    title: "Sedam",
    originalTitle: "Se7en",
    director: "David Fincher",
    year: 1995,
    genre: ["Kriminal", "Drama", "Misterija"],
    rating: 8.6,
    description: "Dva detektiva love serijskog ubicu koji ubija na osnovu sedam smrtnih grehova.",
    category: "foreign-films",
    country: "SAD"
  },

  // DOMAĆI FILMOVI
  {
    id: 11,
    title: "Ko to tamo peva",
    director: "Slobodan Šijan",
    year: 1980,
    genre: ["Komedija", "Drama"],
    rating: 8.9,
    description: "Kultni srpski film o putovanju autobusom uoči Drugog svetskog rata. Remek-delo domaće kinematografije.",
    category: "domestic-films",
    country: "Jugoslavija"
  },
  {
    id: 12,
    title: "Maratonci trče počasni krug",
    director: "Slobodan Šijan",
    year: 1982,
    genre: ["Komedija", "Drama"],
    rating: 8.7,
    description: "Priča o porodici Topalović tokom bombardovanja Beograda 1944. godine.",
    category: "domestic-films",
    country: "Jugoslavija"
  },
  {
    id: 13,
    title: "Emir Kusturica: Underground",
    originalTitle: "Underground",
    director: "Emir Kusturica",
    year: 1995,
    genre: ["Komedija", "Drama", "Fantazija"],
    rating: 8.1,
    description: "Surrealistička priča o Jugoslaviji kroz 50 godina istorije. Zlatna palma u Kanu.",
    category: "domestic-films",
    country: "Jugoslavija"
  },
  {
    id: 14,
    title: "Crni Gruja",
    director: "Marko Marinković",
    year: 2003,
    genre: ["Komedija", "Avantura"],
    rating: 7.8,
    description: "Filmska adaptacija kultne TV serije o avanturama Gruje i Fuke.",
    category: "domestic-films",
    country: "Srbija"
  },
  {
    id: 15,
    title: "Rane",
    director: "Srđan Dragojević",
    year: 1998,
    genre: ["Kriminal", "Drama"],
    rating: 8.5,
    description: "Brutalna priča o mladima u Beogradu devedesetih godina.",
    category: "domestic-films",
    country: "Jugoslavija"
  },

  // STRANE SERIJE
  {
    id: 16,
    title: "Breaking Bad",
    director: "Vince Gilligan",
    year: 2008,
    genre: ["Kriminal", "Drama", "Triler"],
    rating: 9.5,
    description: "Hemijski profesor postaje proizvođač metamfetamina nakon što sazna da ima rak.",
    category: "foreign-series",
    country: "SAD",
    seasons: 5,
    episodes: 62
  },
  {
    id: 17,
    title: "Igra prestola",
    originalTitle: "Game of Thrones",
    director: "David Benioff, D.B. Weiss",
    year: 2011,
    genre: ["Drama", "Fantazija", "Avantura"],
    rating: 9.3,
    description: "Epska fantazija o borbi za Gvozdeni presto u zemlji Vesteros.",
    category: "foreign-series",
    country: "SAD",
    seasons: 8,
    episodes: 73
  },
  {
    id: 18,
    title: "Sherlock",
    director: "Mark Gatiss, Steven Moffat",
    year: 2010,
    genre: ["Kriminal", "Drama", "Misterija"],
    rating: 9.1,
    description: "Moderna adaptacija priča o Sherlocku Holmesu u savremenom Londonu.",
    category: "foreign-series",
    country: "Velika Britanija",
    seasons: 4,
    episodes: 13
  },
  {
    id: 19,
    title: "Stranger Things",
    director: "Matt Duffer, Ross Duffer",
    year: 2016,
    genre: ["Drama", "Fantazija", "Horor"],
    rating: 8.7,
    description: "Grupa dece u malome gradu se suočava sa natprirodnim silama i vladinim eksperimentima.",
    category: "foreign-series",
    country: "SAD",
    seasons: 4,
    episodes: 42
  },
  {
    id: 20,
    title: "The Office",
    director: "Greg Daniels",
    year: 2005,
    genre: ["Komedija"],
    rating: 8.9,
    description: "Mockumentary o svakodnevnom životu zaposlenih u kancelariji prodaje papira.",
    category: "foreign-series",
    country: "SAD",
    seasons: 9,
    episodes: 201
  },

  // DOMAĆE SERIJE
  {
    id: 21,
    title: "Bolji život",
    director: "Aleksandar Đorđević",
    year: 1987,
    genre: ["Komedija", "Drama"],
    rating: 8.8,
    description: "Kultna domaća serija o porodici Popović i njihovom svakodnevnom životu.",
    category: "domestic-series",
    country: "Jugoslavija",
    seasons: 5,
    episodes: 81
  },
  {
    id: 22,
    title: "Miris kiše na Balkanu",
    director: "Aleksandar Đorđević",
    year: 2010,
    genre: ["Drama", "Istorijski"],
    rating: 8.6,
    description: "Saga o porodici Šević kroz burnu istoriju Balkana u 20. veku.",
    category: "domestic-series",
    country: "Srbija",
    seasons: 1,
    episodes: 14
  },
  {
    id: 23,
    title: "Vratiće se rode",
    director: "Goran Gajić",
    year: 2007,
    genre: ["Komedija", "Drama"],
    rating: 8.4,
    description: "Priča o porodici koja se vraća iz Nemačke u rodno selo.",
    category: "domestic-series",
    country: "Srbija",
    seasons: 10,
    episodes: 155
  },
  {
    id: 24,
    title: "Otvorena vrata",
    director: "Aleksandar Đorđević",
    year: 1994,
    genre: ["Komedija"],
    rating: 8.2,
    description: "Sitcom o životu u beogradskoj zgradi tokom devedesetih.",
    category: "domestic-series",
    country: "Jugoslavija",
    seasons: 7,
    episodes: 96
  },
  {
    id: 25,
    title: "Porodično blago",
    director: "Miloš Radović",
    year: 1998,
    genre: ["Komedija"],
    rating: 7.9,
    description: "Komedija o porodici Petrović i njihovim svakodnevnim avanturama.",
    category: "domestic-series",
    country: "Jugoslavija",
    seasons: 4,
    episodes: 52
  },

  // DODATNI STRANI FILMOVI
  {
    id: 26,
    title: "Forrest Gump",
    director: "Robert Zemeckis",
    year: 1994,
    genre: ["Drama", "Romansa"],
    rating: 8.8,
    description: "Priča o jednostavnom čoveku koji nesvesno utiče na ključne događaje u američkoj istoriji.",
    category: "foreign-films",
    country: "SAD"
  },
  {
    id: 27,
    title: "Krstotac",
    originalTitle: "The Godfather",
    director: "Francis Ford Coppola",
    year: 1972,
    genre: ["Kriminal", "Drama"],
    rating: 9.2,
    description: "Klasik o mafijskoj porodici Corleone i njihovoj borbi za moć.",
    category: "foreign-films",
    country: "SAD"
  },
  {
    id: 28,
    title: "12 ljutih ljudi",
    originalTitle: "12 Angry Men",
    director: "Sidney Lumet",
    year: 1957,
    genre: ["Drama"],
    rating: 9.0,
    description: "Porotnik pokušava da ubedi ostale da preispitaju svoju odluku o krivici optuženog.",
    category: "foreign-films",
    country: "SAD"
  },
  {
    id: 29,
    title: "Casablanca",
    director: "Michael Curtiz",
    year: 1942,
    genre: ["Drama", "Romansa"],
    rating: 8.5,
    description: "Klasična romansa smeštena u Casablancu tokom Drugog svetskog rata.",
    category: "foreign-films",
    country: "SAD"
  },
  {
    id: 30,
    title: "Citizen Kane",
    director: "Orson Welles",
    year: 1941,
    genre: ["Drama", "Misterija"],
    rating: 8.3,
    description: "Priča o usponu i padu medijskog magnata Charlesa Fostera Kanea.",
    category: "foreign-films",
    country: "SAD"
  }
];