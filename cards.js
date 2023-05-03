let card = {
  rank: 2,
  suit: "spade",
  color: "black",
  name: "2",
};
// console.table(card);

// Creates an array of all 52 cards
let buildDeck = function () {
  let deck = [];
  for (i = 2; i <= 14; i++) {
    deck.push(createCard(i, "Hearts"));
    deck.push(createCard(i, "Spade"));
    deck.push(createCard(i, "Clubs"));
    deck.push(createCard(i, "Diamond"));
  }
  return deck;
};
// Builds a single card based on its rank and suit

let createCard = function (rank, suit) {
  card = {
    rank: rank,
    suit: suit,
    color: getColor(suit),
    name: getName(rank),
  };
  return card;
};
// Gets the card's name based on its rank
let getName = function (rank) {
  switch (rank) {
    case 11:
      return "Jack";
    case 12:
      return "Queen";
    case 13:
      return "King";
    case 14:
      return "Ace";
    default:
      return rank + "";
  }
};
// Getss the card's color based on its suit
let getColor = function (suit) {
  if (suit === "Diamond" || suit === "Hearts") {
    return "Red";
  } else {
    return "Black";
  }
};
let deck = buildDeck();
// console.table(deck);

// Provides an arrray of 5 cards from the deck
let dealHand = function (deck) {
  return [
    dealCard(deck),
    dealCard(deck),
    dealCard(deck),
    dealCard(deck),
    dealCard(deck),
  ];
};
// Retrieves single card from the deck
let dealCard = function (deck) {
  let index = Math.floor(Math.random() * deck.length);
  let card = deck.splice(index, 1)[0];
  return card;
};

dealTopCard = function (hand) {
  let card = hand.splice(0, 1)[0];
  return card;
};

let gameOfWar = function () {
  let player1 = {
    name: "Joseph",
    hand: dealHand(deck),
    wins: 0,
  };

  let player2 = {
    name: "Cpu",
    hand: dealHand(deck),
    wins: 0,
  };
  // let i = 1;
  while (player1.hand.length > 0 && player2.hand.length > 0) {
    gameRound(player1, player2);
    // console.log(i);
    // i++;
  }
  if (player2.hand.length === 0) {
    player1.wins += 1;
    console.log(player1.hand);
    return "Congratualations Joseph";
  } else if (player1.hand.length === 0) {
    player2.wins += 1;
    console.log(player2.hand);
    return "Congratulations Cpu";
  } else {
    return "you broke the game";
  }
};
let gameRound = function (player1, player2) {
  let p1Card = dealTopCard(player1.hand);
  let p2Card = dealTopCard(player2.hand);

  if (p1Card.rank > p2Card.rank) {
    player1.hand.push(p1Card);
    player1.hand.push(p2Card);
    console.log(`${player1.name} won a ${p2Card.suit} of ${p2Card.rank}`);
    return player1;
  } else if (p2Card.rank > p1Card.rank) {
    player2.hand.push(p2Card);
    player2.hand.push(p1Card);
    console.log(`${player2.name} won a ${p1Card.suit} of ${p1Card.rank}`);
    return player2;
  } else if (p1Card.rank === p2Card.rank) {
    if (player1.hand.length === 0) {
      player1.hand.push(p1Card);
    } else if (player2.hand.length === 0) {
      player2.hand.push(p2Card);
    } else {
      let winningPlayer = gameRound(player1, player2);
      winningPlayer.hand.push(p1Card);
      winningPlayer.hand.push(p2Card);
      console.log(
        `${player1.name} and ${player2.name} tied with a ${p1Card.suit} of ${p1Card.rank} and ${p2Card.suit} of ${p2Card.rank}`
      );
      return winningPlayer;
    }
  }
};

console.log(gameOfWar());
