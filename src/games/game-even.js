import startGame from '../index';
import { getRandom, isEven } from '../utils';

const message = 'Answer "yes" if number even otherwise answer "no".';

const startBrainEven = () => {
  const getGame = (() => {
    const question = getRandom(1, 21);
    const game = {};
    game.answer = isEven(question) ? 'yes' : 'no';
    game.question = `${question}`;
    return game;
  });

  startGame(getGame, message);
};

export default startBrainEven;
