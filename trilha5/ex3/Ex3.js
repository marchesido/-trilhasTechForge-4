var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var FavoriteManager = /** @class */ (function () {
    function FavoriteManager() {
        this.favorites = [];
    }
    return FavoriteManager;
}());
var MoviesFavoriteManager = /** @class */ (function (_super) {
    __extends(MoviesFavoriteManager, _super);
    function MoviesFavoriteManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Adiciona um filme sem permitir duplicatas
    MoviesFavoriteManager.prototype.addFavorite = function (item) {
        if (!this.favorites.includes(item)) {
            this.favorites.push(item);
        }
    };
    MoviesFavoriteManager.prototype.getFavorites = function () {
        return __spreadArray([], this.favorites, true).sort();
    };
    return MoviesFavoriteManager;
}(FavoriteManager));
var BooksFavoriteManager = /** @class */ (function (_super) {
    __extends(BooksFavoriteManager, _super);
    function BooksFavoriteManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BooksFavoriteManager.prototype.addFavorite = function (item) {
        this.favorites.unshift(item);
    };
    BooksFavoriteManager.prototype.getFavorites = function () {
        return __spreadArray([], this.favorites, true);
    };
    return BooksFavoriteManager;
}(FavoriteManager));
console.log("=== FILMES FAVORITOS ===");
var movieManager = new MoviesFavoriteManager();
movieManager.addFavorite("Inception");
movieManager.addFavorite("The Matrix");
movieManager.addFavorite("Interstellar");
movieManager.addFavorite("The Matrix"); // Duplicata - não será adicionado
movieManager.addFavorite("Avatar");
console.log("Filmes (ordem alfabética):");
console.log(movieManager.getFavorites());
console.log("\n=== LIVROS FAVORITOS ===");
var bookManager = new BooksFavoriteManager();
bookManager.addFavorite("1984");
bookManager.addFavorite("O Senhor dos Anéis");
bookManager.addFavorite("Harry Potter");
bookManager.addFavorite("Dom Casmurro");
console.log("Livros (último adicionado no início):");
console.log(bookManager.getFavorites());
