const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north']
let move;
const position = [0, 0];

function finalPosition(moves) {


  const position = [0, 0];
  for (const move of moves) {

    if (move === 'north') {
      position[1] = position[1] + 1;
    } else if (move === 'south') {
      position [1] = position[1] - 1;
    } else if (move === 'west') {
      position[0] = position[0] - 1;
    } else if (move === 'east') {
      position[0] = position[0] + 1;
    }
  }
  return position;
}
finalPosition(moves);