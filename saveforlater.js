console.log("Hand = ");
for (let i = 0; i < player1.hand.length; i++) {
  console.log(player1.hand[i].name);
}
let cardcomparecard = function (hand1, hand2) {
  let foundWinner = false;
  let p1Card = dealTopCard(hand1);
  let p2Card = dealTopCard(hand2);
  while (!foundWinner) {
    console.log(p1Card);
    console.log(p2Card);
    p1Card = dealTopCard(hand1);
    p2Card = dealTopCard(hand2);
    if (p1Card.rank > p2Card.rank) {
      foundWinner = true;
      player1.hand.push(p1Card);
      player1.hand.push(p2Card);
    } else if (p2Card.rank > p1Card.rank) {
      foundWinner = true;
      player2.hand.push(p1Card);
      player2.hand.push(p2Card);
    } else {
      dealTopCard(player1.hand);
      dealTopCard(player2.hand);
    }
  }
};
for (let i = 0; i < 5; i++) {
  cardcomparecard(player1.hand, player2.hand);
  console.log(player1);
  console.log(player2);
}
