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
var VoteSystem = /** @class */ (function () {
    function VoteSystem() {
        this.votes = new Map();
    }
    VoteSystem.prototype.getVoteCount = function (candidate) {
        return this.votes.get(candidate) || 0;
    };
    return VoteSystem;
}());
var Election = /** @class */ (function (_super) {
    __extends(Election, _super);
    function Election() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Election.prototype.voteFor = function (candidate) {
        var currentVotes = this.getVoteCount(candidate);
        this.votes.set(candidate, currentVotes + 1);
        console.log("Voto registrado para ".concat(candidate));
    };
    Election.prototype.getResults = function () {
        var results = {};
        this.votes.forEach(function (votes, candidate) {
            results[candidate] = votes;
        });
        return results;
    };
    return Election;
}(VoteSystem));
var Poll = /** @class */ (function (_super) {
    __extends(Poll, _super);
    function Poll() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Poll.prototype.voteFor = function (candidate) {
        var currentVotes = this.getVoteCount(candidate);
        this.votes.set(candidate, currentVotes + 1);
        console.log("Voto registrado na enquete para ".concat(candidate));
    };
    Poll.prototype.getResults = function () {
        var sortedCandidates = Array.from(this.votes.entries())
            .sort(function (a, b) { return b[1] - a[1]; })
            .map(function (_a) {
            var candidate = _a[0], votes = _a[1];
            return ({ candidate: candidate, votes: votes });
        });
        return { ranking: sortedCandidates };
    };
    return Poll;
}(VoteSystem));
console.log("=== SISTEMA DE ELEIÇÃO ===");
var election = new Election();
election.voteFor("Ana Silva");
election.voteFor("João Santos");
election.voteFor("Ana Silva");
election.voteFor("Maria Costa");
election.voteFor("Ana Silva");
election.voteFor("João Santos");
console.log("\nResultados da Eleição:");
console.log(election.getResults());
console.log("\n=== SISTEMA DE ENQUETE ===");
var poll = new Poll();
poll.voteFor("Pizza");
poll.voteFor("Hambúrguer");
poll.voteFor("Pizza");
poll.voteFor("Sushi");
poll.voteFor("Pizza");
poll.voteFor("Hambúrguer");
poll.voteFor("Taco");
console.log("\nResultados da Enquete (Ranking):");
console.log(poll.getResults());
