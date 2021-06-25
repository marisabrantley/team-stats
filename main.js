const team = {
  _players: [
    {
      firstName: 'Pablo',
      lastName: 'Sanchez',
      age: 11,
    }, 
    {  
      firstName: 'Jimmy',
      lastName: 'Stewart',
      age: 10,
    },
    { 
      firstName: 'Cal',
      lastName: 'Worthington',
      age: 12
    }
  ],
  _games: [
    {
      opponent: 'Broncos',
      teamPoints: 42,
      opponentPoints: 27,
    },
    {
      opponent: 'Unicorns',
      teamPoints: 39,
      opponentPoints: 57,
    }, 
    {  
      opponent: 'Turtles',
      teamPoints: 49,
      opponentPoints: 14,
    }
  ],

  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },

  addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };
    this.players.push(player);
  },

  addGame(oppName, points, oppPoints) {
    const game = {
      opponent: oppName,
      points: points,
      opponentPoints: oppPoints
    }
    this.games.push(game);
  },

};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

//console.log(team.players);

team.addGame('Dophins', 25, 75);
team.addGame('Whales', 125, 100);
team.addGame('Urchins', 20, 30);

console.log(team.games);











