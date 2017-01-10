// DataBase
module Media {

    class DataBase {
        public books: [Book];
        public dvds: [DVD];
        public games: [Game];
        public constructor() {
            this.books = FillBooks();
            this.dvds = FillDvds();
            this.games = FillGames();
        }

        public AddBook(book: Book): void {
            this.books.push(book);
        }
        public AddDvd(dvd: DVD): void {
            this.dvds.push(dvd);
        }
        public AddGame(game: Game) {
            this.games.push(game);
        }
    }
    // Super-Class
    class Product {
        public name: string;
        public price: number;
        public category: string;
        public articleNumber: number
        public discriminator: string

        public constructor(name: string, price: number, category: string, articleNumber: number, discriminator: string) {
            this.name = name;
            this.price = price;
            this.category = category;
            this.articleNumber = articleNumber;
            this.discriminator = discriminator;
        }
    }
    // Book class
    class Book extends Product {
        public writer: string;
        public pocket: boolean;

        public constructor(name: string, price: number, category: string, articleNumber: number, writer: string, pocket: boolean, discriminator: string) {
            super(name, price, category, articleNumber, discriminator);
            this.writer = writer;
            this.pocket = pocket;
        }
    }
    // DVD class
    class DVD extends Product {
        public year: number;
        public artists: [string];

        public constructor(name: string, price: number, category: string, articleNumber: number, year: number, artists: [string], discriminator: string) {
            super(name, price, category, articleNumber, discriminator);
            this.year = year;
            this.artists = artists;
        }
    }
    // Game class
    class Game extends Product {
        public console: string;
        public multiplayer: boolean;

        public constructor(name: string, price: number, category: string, articleNumber: number, console: string, multiplayer: boolean, discriminator: string) {
            super(name, price, category, articleNumber, discriminator);
            this.console = console;
            this.multiplayer = multiplayer;
        }
    }

    // Program
    let dataBase: DataBase = new DataBase();
    function GetDataBase() {
        let products = [];
        let books = GetBooks();
        let dvds = GetDvds();
        let games = GetGames();

        for (let game of games) {
            products.push(game as Product);
        }
        for (let book of books) {
            products.push(book as Product);
        }
        for (let dvd of dvds) {
            products.push(dvd as Product);
        }
        return products;
    }
    function GetBooks(): [Book] {
        return dataBase.books;
    }
    function GetDvds(): [DVD] {
        return dataBase.dvds;
    }
    function GetGames(): [Game] {
        return dataBase.games;
    }
    function AddNewBook(newBook: Book): void {
        dataBase.AddBook(newBook);
    }
    // Fill Db functions
    function FillGames(): [Game] {
        let games: [Game] = [new Game("Superman", 199, "2d", 333000111, "nes", false, "game")]

        games.push(new Game("DonkeyKong", 149, "2d", 333000222, "nes", false, "game"));
        games.push(new Game("Paperboy", 249, "2d", 333000333, "nes", false, "game"));
        games.push(new Game("StreetFighterII", 99, "Fighting", 333000444, "snes", false, "game"));
        games.push(new Game("Super Metroid", 199, "Imposible", 333000555, "snes", false, "game"));
        games.push(new Game("The Legend of Zelda: A Link to the Past", 149, "Awsomnes", 333000666, "snes", false, "game"));
        games.push(new Game("Duck Hunt", 49, "Shoot", 333000666, "nes", false, "game"));
        games.push(new Game("Super Mario Kart", 199, "Racing", 333000777, "snes", true, "game"));
        games.push(new Game("Starcraft", 109, "Strategy", 333000888, "computer", true, "game"));
        return games;
    }
    function FillBooks(): [Book] {
        let books: [Book] = [new Book("The Summer We Read Gatsby", 89, "fiction", 111000111, "Danielle Ganek", false, "book")];

        books.push(new Book("The Passage", 89, "fiction", 111000222, "Justin Cronin", false, "book"));
        books.push(new Book("Walks With Men", 89, "fiction", 111000333, "Walks With Men", false, "book"));
        books.push(new Book("Red Hook Road", 89, "fiction", 111000444, "Ayelet Waldman", false, "book"));

        return books;
    }
    function FillDvds(): [DVD] {
        let dvds: [DVD] = [new DVD("Die Hard", 39, "Action", 222000111, 1988, ["Bruce Willis", "Alan Rickman"], "dvd")]

        dvds.push(new DVD("Matrix", 99, "Science-fiction", 222000222, 1999, ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss", "Hugo Weaving"], "dvd"));
        dvds.push(new DVD("Highlander", 59, "Fantasy-action", 222000333, 1986, ["Christopher Lambert", "Sean Connery", "Clancy Brown"], "dvd"));
        dvds.push(new DVD("He-Man", 19, "Cartoon", 222000444, 1983, ["HeMan", "Skeletor"], "dvd"));

        return dvds;
    }
}