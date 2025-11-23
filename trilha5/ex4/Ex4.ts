abstract class VoteSystem {
  protected votes: Map<string, number>;

  constructor() {
    this.votes = new Map();
  }

  abstract voteFor(candidate: string): void;
  abstract getResults(): object;

  protected getVoteCount(candidate: string): number {
    return this.votes.get(candidate) || 0;
  }
}

class Election extends VoteSystem {
  voteFor(candidate: string): void {
    const currentVotes = this.getVoteCount(candidate);
    this.votes.set(candidate, currentVotes + 1);
    console.log(`Voto registrado para ${candidate}`);
  }

  getResults(): object {
    const results: { [key: string]: number } = {};
    
    this.votes.forEach((votes, candidate) => {
      results[candidate] = votes;
    });

    return results;
  }
}

class Poll extends VoteSystem {
  voteFor(candidate: string): void {
    const currentVotes = this.getVoteCount(candidate);
    this.votes.set(candidate, currentVotes + 1);
    console.log(`Voto registrado na enquete para ${candidate}`);
  }

  getResults(): object {

    const sortedCandidates = Array.from(this.votes.entries())
      .sort((a, b) => b[1] - a[1])
      .map(([candidate, votes]) => ({ candidate, votes }));

    return { ranking: sortedCandidates };
  }
}

console.log("=== SISTEMA DE ELEIÇÃO ===");
const election = new Election();

election.voteFor("Ana Silva");
election.voteFor("João Santos");
election.voteFor("Ana Silva");
election.voteFor("Maria Costa");
election.voteFor("Ana Silva");
election.voteFor("João Santos");

console.log("\nResultados da Eleição:");
console.log(election.getResults());

console.log("\n=== SISTEMA DE ENQUETE ===");
const poll = new Poll();

poll.voteFor("Pizza");
poll.voteFor("Hambúrguer");
poll.voteFor("Pizza");
poll.voteFor("Sushi");
poll.voteFor("Pizza");
poll.voteFor("Hambúrguer");
poll.voteFor("Taco");

console.log("\nResultados da Enquete (Ranking):");
console.log(poll.getResults());