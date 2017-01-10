var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// DataBase
var DataBase = (function () {
    function DataBase() {
        this.books = FillBooks();
        this.dvds = FillDvds();
        this.games = FillGames();
    }
    DataBase.prototype.AddBook = function (book) {
        this.books.push(book);
    };
    DataBase.prototype.AddDvd = function (dvd) {
        this.dvds.push(dvd);
    };
    DataBase.prototype.AddGame = function (game) {
        this.games.push(game);
    };
    return DataBase;
}());
// Super-Class
var Product = (function () {
    function Product(name, price, category, articleNumber, discriminator) {
        this.name = name;
        this.price = price;
        this.category = category;
        this.articleNumber = articleNumber;
        this.discriminator = discriminator;
    }
    return Product;
}());
// Book class
var Book = (function (_super) {
    __extends(Book, _super);
    function Book(name, price, category, articleNumber, writer, pocket, discriminator) {
        _super.call(this, name, price, category, articleNumber, discriminator);
        this.writer = writer;
        this.pocket = pocket;
    }
    return Book;
}(Product));
// DVD class
var DVD = (function (_super) {
    __extends(DVD, _super);
    function DVD(name, price, category, articleNumber, year, artists, discriminator) {
        _super.call(this, name, price, category, articleNumber, discriminator);
        this.year = year;
        this.artists = artists;
    }
    return DVD;
}(Product));
// Game class
var Game = (function (_super) {
    __extends(Game, _super);
    function Game(name, price, category, articleNumber, console, multiplayer, discriminator) {
        _super.call(this, name, price, category, articleNumber, discriminator);
        this.console = console;
        this.multiplayer = multiplayer;
    }
    return Game;
}(Product));
// Program
var dataBase = new DataBase();
function GetDataBase() {
    var products = [];
    var books = GetBooks();
    var dvds = GetDvds();
    var games = GetGames();
    for (var _i = 0, games_1 = games; _i < games_1.length; _i++) {
        var game = games_1[_i];
        products.push(game);
    }
    for (var _a = 0, books_1 = books; _a < books_1.length; _a++) {
        var book = books_1[_a];
        products.push(book);
    }
    for (var _b = 0, dvds_1 = dvds; _b < dvds_1.length; _b++) {
        var dvd = dvds_1[_b];
        products.push(dvd);
    }
    return products;
}
function GetBooks() {
    return dataBase.books;
}
function GetDvds() {
    return dataBase.dvds;
}
function GetGames() {
    return dataBase.games;
}
function AddNewBook(newBook) {
    dataBase.AddBook(newBook);
}
// Fill Db functions
function FillGames() {
    var games = [new Game("Superman", 199, "2d", 333000111, "nes", false, "game")];
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
function FillBooks() {
    var books = [new Book("The Summer We Read Gatsby", 89, "fiction", 111000111, "Danielle Ganek", false, "book")];
    books.push(new Book("The Passage", 89, "fiction", 111000222, "Justin Cronin", false, "book"));
    books.push(new Book("Walks With Men", 89, "fiction", 111000333, "Walks With Men", false, "book"));
    books.push(new Book("Red Hook Road", 89, "fiction", 111000444, "Ayelet Waldman", false, "book"));
    return books;
}
function FillDvds() {
    var dvds = [new DVD("Die Hard", 39, "Action", 222000111, 1988, ["Bruce Willis", "Alan Rickman"], "dvd")];
    dvds.push(new DVD("Matrix", 99, "Science-fiction", 222000222, 1999, ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss", "Hugo Weaving"], "dvd"));
    dvds.push(new DVD("Highlander", 59, "Fantasy-action", 222000333, 1986, ["Christopher Lambert", "Sean Connery", "Clancy Brown"], "dvd"));
    dvds.push(new DVD("He-Man", 19, "Cartoon", 222000444, 1983, ["HeMan", "Skeletor"], "dvd"));
    return dvds;
}
//# sourceMappingURL=TS_Lab2.js.map