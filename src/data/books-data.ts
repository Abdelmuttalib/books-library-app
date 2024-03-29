export interface GenreT {
  genre: string;
  id: string;
}

export interface BookT {
  id: string;
  book_title: string;
  author: string;
  publication: string;
  publisher: string;
  image_url_s: string;
  image_url_m: string;
  image_url_l: string;
  genre_id: string;
  is_available: string;
}

export const publications = [
  2004, 2003, 2003, 2002, 2001, 2000, 1999, 1998, 1996, 1995, 1994, 1991, 1988,
  1979,
];

export const genres: GenreT[] = [
  {
    genre: "Action & Adventure",
    id: "1",
  },
  {
    genre: "Fantasy",
    id: "2",
  },
  {
    genre: "Science Fiction",
    id: "3",
  },
  {
    genre: "Mystery",
    id: "4",
  },
  {
    genre: "Horror",
    id: "5",
  },
  {
    genre: "Historical Fiction",
    id: "6",
  },
  {
    genre: "Classic",
    id: "7",
  },
  {
    genre: "Poetry",
    id: "8",
  },
  {
    genre: "History",
    id: "9",
  },
];

export const booksData: BookT[] = [
  {
    id: "2005018",
    book_title: "Clara Callan",
    author: "Richard Bruce Wright",
    publication: "2001",
    publisher: "HarperFlamingo Canada",
    image_url_s: "http://images.amazon.com/images/P/0002005018.01.THUMBZZZ.jpg",
    image_url_m: "http://images.amazon.com/images/P/0002005018.01.MZZZZZZZ.jpg",
    image_url_l: "http://images.amazon.com/images/P/0002005018.01.LZZZZZZZ.jpg",
    genre_id: "4",
    is_available: "true",
  },
  {
    id: "374157065",
    book_title:
      "Flu: The Story of the Great Influenza Pandemic of 1918 and the Search for the Virus That Caused It",
    author: "Gina Bari Kolata",
    publication: "1999",
    publisher: "Farrar Straus Giroux",
    image_url_s: "http://images.amazon.com/images/P/0374157065.01.THUMBZZZ.jpg",
    image_url_m: "http://images.amazon.com/images/P/0374157065.01.MZZZZZZZ.jpg",
    image_url_l: "http://images.amazon.com/images/P/0374157065.01.LZZZZZZZ.jpg",
    genre_id: "5",
    is_available: "true",
  },
  {
    id: "609804618",
    book_title:
      "Our Dumb Century: The Onion Presents 100 Years of Headlines from America's Finest News Source",
    author: "The Onion",
    publication: "1999",
    publisher: "Three Rivers Press",
    image_url_s: "http://images.amazon.com/images/P/0609804618.01.THUMBZZZ.jpg",
    image_url_m: "http://images.amazon.com/images/P/0609804618.01.MZZZZZZZ.jpg",
    image_url_l: "http://images.amazon.com/images/P/0609804618.01.LZZZZZZZ.jpg",
    genre_id: "7",
    is_available: "true",
  },
  {
    id: "074322678X",
    book_title: "Where You'll Find Me: And Other Stories",
    author: "Ann Beattie",
    publication: "2002",
    publisher: "Scribner",
    image_url_s: "http://images.amazon.com/images/P/074322678X.01.THUMBZZZ.jpg",
    image_url_m: "http://images.amazon.com/images/P/074322678X.01.MZZZZZZZ.jpg",
    image_url_l: "http://images.amazon.com/images/P/074322678X.01.LZZZZZZZ.jpg",
    genre_id: "2",
    is_available: "true",
  },
  {
    id: "771074670",
    book_title: "Nights Below Station Street",
    author: "David Adams Richards",
    publication: "1988",
    publisher: "Emblem Editions",
    image_url_s: "http://images.amazon.com/images/P/0771074670.01.THUMBZZZ.jpg",
    image_url_m: "http://images.amazon.com/images/P/0771074670.01.MZZZZZZZ.jpg",
    image_url_l: "http://images.amazon.com/images/P/0771074670.01.LZZZZZZZ.jpg",
    genre_id: "1",
    is_available: "true",
  },
  {
    id: "425176428",
    book_title:
      "What If?: The World's Foremost Military Historians Imagine What Might Have Been",
    author: "Robert Cowley",
    publication: "2000",
    publisher: "Berkley Publishing Group",
    image_url_s: "http://images.amazon.com/images/P/0425176428.01.THUMBZZZ.jpg",
    image_url_m: "http://images.amazon.com/images/P/0425176428.01.MZZZZZZZ.jpg",
    image_url_l: "http://images.amazon.com/images/P/0425176428.01.LZZZZZZZ.jpg",
    genre_id: "3",
    is_available: "true",
  },
  {
    id: "393045218",
    book_title: "The Mummies of Urumchi",
    author: "E. J. W. Barber",
    publication: "1999",
    publisher: "W. W. Norton &amp; Company",
    image_url_s: "http://images.amazon.com/images/P/0393045218.01.THUMBZZZ.jpg",
    image_url_m: "http://images.amazon.com/images/P/0393045218.01.MZZZZZZZ.jpg",
    image_url_l: "http://images.amazon.com/images/P/0393045218.01.LZZZZZZZ.jpg",
    genre_id: "7",
    is_available: "true",
  },
  {
    id: "1558746218",
    book_title:
      "A Second Chicken Soup for the Woman's Soul (Chicken Soup for the Soul Series)",
    author: "Jack Canfield",
    publication: "1998",
    publisher: "Health Communications",
    image_url_s: "http://images.amazon.com/images/P/1558746218.01.THUMBZZZ.jpg",
    image_url_m: "http://images.amazon.com/images/P/1558746218.01.MZZZZZZZ.jpg",
    image_url_l: "http://images.amazon.com/images/P/1558746218.01.LZZZZZZZ.jpg",
    genre_id: "2",
    is_available: "true",
  },
  {
    id: "1552041778",
    book_title: "Jane Doe",
    author: "R. J. Kaiser",
    publication: "1999",
    publisher: "Mira Books",
    image_url_s: "http://images.amazon.com/images/P/1552041778.01.THUMBZZZ.jpg",
    image_url_m: "http://images.amazon.com/images/P/1552041778.01.MZZZZZZZ.jpg",
    image_url_l: "http://images.amazon.com/images/P/1552041778.01.LZZZZZZZ.jpg",
    genre_id: "2",
    is_available: "true",
  },
  {
    id: "080652121X",
    book_title:
      "Hitler's Secret Bankers: The Myth of Swiss Neutrality During the Holocaust",
    author: "Adam Lebor",
    publication: "2000",
    publisher: "Citadel Press",
    image_url_s: "http://images.amazon.com/images/P/080652121X.01.THUMBZZZ.jpg",
    image_url_m: "http://images.amazon.com/images/P/080652121X.01.MZZZZZZZ.jpg",
    image_url_l: "http://images.amazon.com/images/P/080652121X.01.LZZZZZZZ.jpg",
    genre_id: "2",
    is_available: "true",
  },
  {
    id: "440234743",
    book_title: "The Testament",
    author: "John Grisham",
    publication: "1999",
    publisher: "Dell",
    image_url_s: "http://images.amazon.com/images/P/0440234743.01.THUMBZZZ.jpg",
    image_url_m: "http://images.amazon.com/images/P/0440234743.01.MZZZZZZZ.jpg",
    image_url_l: "http://images.amazon.com/images/P/0440234743.01.LZZZZZZZ.jpg",
    genre_id: "1",
    is_available: "true",
  },
  {
    id: "887841740",
    book_title: "The Middle Stories",
    author: "Sheila Heti",
    publication: "2004",
    publisher: "House of Anansi Press",
    image_url_s: "http://images.amazon.com/images/P/0887841740.01.THUMBZZZ.jpg",
    image_url_m: "http://images.amazon.com/images/P/0887841740.01.MZZZZZZZ.jpg",
    image_url_l: "http://images.amazon.com/images/P/0887841740.01.LZZZZZZZ.jpg",
    genre_id: "9",
    is_available: "false",
  },
  {
    id: "1879384493",
    book_title:
      "If I'd Known Then What I Know Now: Why Not Learn from the Mistakes of Others? : You Can't Afford to Make Them All Yourself",
    author: "J. R. Parrish",
    publication: "2003",
    publisher: "Cypress House",
    image_url_s: "http://images.amazon.com/images/P/1879384493.01.THUMBZZZ.jpg",
    image_url_m: "http://images.amazon.com/images/P/1879384493.01.MZZZZZZZ.jpg",
    image_url_l: "http://images.amazon.com/images/P/1879384493.01.LZZZZZZZ.jpg",
    genre_id: "9",
    is_available: "true",
  },
  {
    id: "61076031",
    book_title:
      "Mary-Kate &amp; Ashley Switching Goals (Mary-Kate and Ashley Starring in)",
    author: "Mary-Kate &amp; Ashley Olsen",
    publication: "2000",
    publisher: "HarperEntertainment",
    image_url_s: "http://images.amazon.com/images/P/0061076031.01.THUMBZZZ.jpg",
    image_url_m: "http://images.amazon.com/images/P/0061076031.01.MZZZZZZZ.jpg",
    image_url_l: "http://images.amazon.com/images/P/0061076031.01.LZZZZZZZ.jpg",
    genre_id: "9",
    is_available: "true",
  },
  {
    id: "439095026",
    book_title: "Tell Me This Isn't Happening",
    author: "Robynn Clairday",
    publication: "1999",
    publisher: "Scholastic",
    image_url_s: "http://images.amazon.com/images/P/0439095026.01.THUMBZZZ.jpg",
    image_url_m: "http://images.amazon.com/images/P/0439095026.01.MZZZZZZZ.jpg",
    image_url_l: "http://images.amazon.com/images/P/0439095026.01.LZZZZZZZ.jpg",
    genre_id: "5",
    is_available: "true",
  },
  {
    id: "452264464",
    book_title: "Beloved (Plume Contemporary Fiction)",
    author: "Toni Morrison",
    publication: "1994",
    publisher: "Plume",
    image_url_s: "http://images.amazon.com/images/P/0452264464.01.THUMBZZZ.jpg",
    image_url_m: "http://images.amazon.com/images/P/0452264464.01.MZZZZZZZ.jpg",
    image_url_l: "http://images.amazon.com/images/P/0452264464.01.LZZZZZZZ.jpg",
    genre_id: "2",
    is_available: "true",
  },
  {
    id: "1575663937",
    book_title: "More Cunning Than Man: A Social History of Rats and Man",
    author: "Robert Hendrickson",
    publication: "1999",
    publisher: "Kensington Publishing Corp.",
    image_url_s: "http://images.amazon.com/images/P/1575663937.01.THUMBZZZ.jpg",
    image_url_m: "http://images.amazon.com/images/P/1575663937.01.MZZZZZZZ.jpg",
    image_url_l: "http://images.amazon.com/images/P/1575663937.01.LZZZZZZZ.jpg",
    genre_id: "7",
    is_available: "true",
  },
  {
    id: "042518630X",
    book_title: "Purity in Death",
    author: "J.D. Robb",
    publication: "2002",
    publisher: "Berkley Publishing Group",
    image_url_s: "http://images.amazon.com/images/P/042518630X.01.THUMBZZZ.jpg",
    image_url_m: "http://images.amazon.com/images/P/042518630X.01.MZZZZZZZ.jpg",
    image_url_l: "http://images.amazon.com/images/P/042518630X.01.LZZZZZZZ.jpg",
    genre_id: "8",
    is_available: "true",
  },
  {
    id: "375759778",
    book_title: "Prague : A Novel",
    author: "ARTHUR PHILLIPS",
    publication: "2003",
    publisher: "Random House Trade Paperbacks",
    image_url_s: "http://images.amazon.com/images/P/0375759778.01.THUMBZZZ.jpg",
    image_url_m: "http://images.amazon.com/images/P/0375759778.01.MZZZZZZZ.jpg",
    image_url_l: "http://images.amazon.com/images/P/0375759778.01.LZZZZZZZ.jpg",
    genre_id: "8",
    is_available: "true",
  },
  {
    id: "425182908",
    book_title: "Isle of Dogs",
    author: "Patricia Cornwell",
    publication: "2002",
    publisher: "Berkley Publishing Group",
    image_url_s: "http://images.amazon.com/images/P/0425182908.01.THUMBZZZ.jpg",
    image_url_m: "http://images.amazon.com/images/P/0425182908.01.MZZZZZZZ.jpg",
    image_url_l: "http://images.amazon.com/images/P/0425182908.01.LZZZZZZZ.jpg",
    genre_id: "5",
    is_available: "true",
  },
  {
    id: "553582747",
    book_title: "From the Corner of His Eye",
    author: "Dean Koontz",
    publication: "2001",
    publisher: "Bantam Books",
    image_url_s: "http://images.amazon.com/images/P/0553582747.01.THUMBZZZ.jpg",
    image_url_m: "http://images.amazon.com/images/P/0553582747.01.MZZZZZZZ.jpg",
    image_url_l: "http://images.amazon.com/images/P/0553582747.01.LZZZZZZZ.jpg",
    genre_id: "1",
    is_available: "true",
  },
  {
    id: "684823802",
    book_title: "OUT OF THE SILENT PLANET",
    author: "C.S. Lewis",
    publication: "1996",
    publisher: "Scribner",
    image_url_s: "http://images.amazon.com/images/P/0684823802.01.THUMBZZZ.jpg",
    image_url_m: "http://images.amazon.com/images/P/0684823802.01.MZZZZZZZ.jpg",
    image_url_l: "http://images.amazon.com/images/P/0684823802.01.LZZZZZZZ.jpg",
    genre_id: "7",
    is_available: "true",
  },
  {
    id: "375406328",
    book_title: "Lying Awake",
    author: "Mark Salzman",
    publication: "2000",
    publisher: "Alfred A. Knopf",
    image_url_s: "http://images.amazon.com/images/P/0375406328.01.THUMBZZZ.jpg",
    image_url_m: "http://images.amazon.com/images/P/0375406328.01.MZZZZZZZ.jpg",
    image_url_l: "http://images.amazon.com/images/P/0375406328.01.LZZZZZZZ.jpg",
    genre_id: "5",
    is_available: "true",
  },
  {
    id: "446310786",
    book_title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publication: "1988",
    publisher: "Little Brown &amp; Company",
    image_url_s: "http://images.amazon.com/images/P/0446310786.01.THUMBZZZ.jpg",
    image_url_m: "http://images.amazon.com/images/P/0446310786.01.MZZZZZZZ.jpg",
    image_url_l: "http://images.amazon.com/images/P/0446310786.01.LZZZZZZZ.jpg",
    genre_id: "5",
    is_available: "true",
  },
  {
    id: "067176537X",
    book_title:
      "The Therapeutic Touch: How to Use Your Hands to Help or to Heal",
    author: "Dolores Krieger",
    publication: "1979",
    publisher: "Fireside",
    image_url_s: "http://images.amazon.com/images/P/067176537X.01.THUMBZZZ.jpg",
    image_url_m: "http://images.amazon.com/images/P/067176537X.01.MZZZZZZZ.jpg",
    image_url_l: "http://images.amazon.com/images/P/067176537X.01.LZZZZZZZ.jpg",
    genre_id: "2",
    is_available: "false",
  },
  {
    id: "449005615",
    book_title: "Seabiscuit: An American Legend",
    author: "LAURA HILLENBRAND",
    publication: "2002",
    publisher: "Ballantine Books",
    image_url_s: "http://images.amazon.com/images/P/0449005615.01.THUMBZZZ.jpg",
    image_url_m: "http://images.amazon.com/images/P/0449005615.01.MZZZZZZZ.jpg",
    image_url_l: "http://images.amazon.com/images/P/0449005615.01.LZZZZZZZ.jpg",
    genre_id: "4",
    is_available: "false",
  },
  {
    id: "689821166",
    book_title: "Flood : Mississippi 1927",
    author: "Kathleen Duey",
    publication: "1998",
    publisher: "Aladdin",
    image_url_s: "http://images.amazon.com/images/P/0689821166.01.THUMBZZZ.jpg",
    image_url_m: "http://images.amazon.com/images/P/0689821166.01.MZZZZZZZ.jpg",
    image_url_l: "http://images.amazon.com/images/P/0689821166.01.LZZZZZZZ.jpg",
    genre_id: "7",
    is_available: "false",
  },
  {
    id: "671888587",
    book_title: "I'll Be Seeing You",
    author: "Mary Higgins Clark",
    publication: "1994",
    publisher: "Pocket",
    image_url_s: "http://images.amazon.com/images/P/0671888587.01.THUMBZZZ.jpg",
    image_url_m: "http://images.amazon.com/images/P/0671888587.01.MZZZZZZZ.jpg",
    image_url_l: "http://images.amazon.com/images/P/0671888587.01.LZZZZZZZ.jpg",
    genre_id: "2",
    is_available: "true",
  },
  {
    id: "553582909",
    book_title: "Icebound",
    author: "Dean R. Koontz",
    publication: "2000",
    publisher: "Bantam Books",
    image_url_s: "http://images.amazon.com/images/P/0553582909.01.THUMBZZZ.jpg",
    image_url_m: "http://images.amazon.com/images/P/0553582909.01.MZZZZZZZ.jpg",
    image_url_l: "http://images.amazon.com/images/P/0553582909.01.LZZZZZZZ.jpg",
    genre_id: "7",
    is_available: "true",
  },
  {
    id: "61099686",
    book_title: "Downtown",
    author: "Anne Rivers Siddons",
    publication: "1995",
    publisher: "HarperTorch",
    image_url_s: "http://images.amazon.com/images/P/0061099686.01.THUMBZZZ.jpg",
    image_url_m: "http://images.amazon.com/images/P/0061099686.01.MZZZZZZZ.jpg",
    image_url_l: "http://images.amazon.com/images/P/0061099686.01.LZZZZZZZ.jpg",
    genre_id: "9",
    is_available: "true",
  },
  {
    id: "038078243X",
    book_title: "Miss Zukas and the Raven's Dance",
    author: "Jo Dereske",
    publication: "1996",
    publisher: "Avon",
    image_url_s: "http://images.amazon.com/images/P/038078243X.01.THUMBZZZ.jpg",
    image_url_m: "http://images.amazon.com/images/P/038078243X.01.MZZZZZZZ.jpg",
    image_url_l: "http://images.amazon.com/images/P/038078243X.01.LZZZZZZZ.jpg",
    genre_id: "7",
    is_available: "true",
  },
  {
    id: "3442410665",
    book_title: "Sturmzeit. Roman.",
    author: "Charlotte Link",
    publication: "1991",
    publisher: "Goldmann",
    image_url_s: "http://images.amazon.com/images/P/3442410665.01.THUMBZZZ.jpg",
    image_url_m: "http://images.amazon.com/images/P/3442410665.01.MZZZZZZZ.jpg",
    image_url_l: "http://images.amazon.com/images/P/3442410665.01.LZZZZZZZ.jpg",
    genre_id: "8",
    is_available: "true",
  },
  {
    id: "3404921038",
    book_title: "Wie Barney es sieht.",
    author: "Mordecai Richler",
    publication: "2002",
    publisher: "Lbbe",
    image_url_s: "http://images.amazon.com/images/P/3404921038.01.THUMBZZZ.jpg",
    image_url_m: "http://images.amazon.com/images/P/3404921038.01.MZZZZZZZ.jpg",
    image_url_l: "http://images.amazon.com/images/P/3404921038.01.LZZZZZZZ.jpg",
    genre_id: "1",
    is_available: "true",
  },
  {
    id: "425163091",
    book_title: "Chocolate Jesus",
    author: "Stephan Jaramillo",
    publication: "1998",
    publisher: "Berkley Publishing Group",
    image_url_s: "http://images.amazon.com/images/P/0425163091.01.THUMBZZZ.jpg",
    image_url_m: "http://images.amazon.com/images/P/0425163091.01.MZZZZZZZ.jpg",
    image_url_l: "http://images.amazon.com/images/P/0425163091.01.LZZZZZZZ.jpg",
    genre_id: "3",
    is_available: "true",
  },
  {
    id: "345417623",
    book_title: "Timeline",
    author: "MICHAEL CRICHTON",
    publication: "2000",
    publisher: "Ballantine Books",
    image_url_s: "http://images.amazon.com/images/P/0345417623.01.THUMBZZZ.jpg",
    image_url_m: "http://images.amazon.com/images/P/0345417623.01.MZZZZZZZ.jpg",
    image_url_l: "http://images.amazon.com/images/P/0345417623.01.LZZZZZZZ.jpg",
    genre_id: "2",
    is_available: "true",
  },
  {
    id: "345402871",
    book_title: "Airframe",
    author: "Michael Crichton",
    publication: "1997",
    publisher: "Ballantine Books",
    image_url_s: "http://images.amazon.com/images/P/0345402871.01.THUMBZZZ.jpg",
    image_url_m: "http://images.amazon.com/images/P/0345402871.01.MZZZZZZZ.jpg",
    image_url_l: "http://images.amazon.com/images/P/0345402871.01.LZZZZZZZ.jpg",
    genre_id: "3",
    is_available: "true",
  },
  {
    id: "971880107",
    book_title: "Wild Animus",
    author: "Rich Shapero",
    publication: "2004",
    publisher: "Too Far",
    image_url_s: "http://images.amazon.com/images/P/0971880107.01.THUMBZZZ.jpg",
    image_url_m: "http://images.amazon.com/images/P/0971880107.01.MZZZZZZZ.jpg",
    image_url_l: "http://images.amazon.com/images/P/0971880107.01.LZZZZZZZ.jpg",
    genre_id: "1",
    is_available: "true",
  },
];

export const getBookGenreByGenreId = (genreId: string) => {
  const genre = genres.find((genre) => genre.id === genreId);
  return genre ? genre.genre : "";
};
