import './styles/style.css';
import Elements from './modules/Elements.js';
import Game from './modules/Game.js';
import User from './modules/user.js';

class Ui {
  static diplayScores(scores) {
    const elem = new Elements();
    const { scoreLists } = elem;
    scores.forEach((u) => {
      const div = document.createElement('div');
      div.innerText = `${u.user}: ${u.score}`;
      scoreLists.appendChild(div);
    });
  }

  static clearScoreLists() {
    const elem = new Elements();
    const { scoreLists } = elem;
    scoreLists.innerHTML = '';
  }

  static clearInputs() {
    const elem = new Elements();
    const { inputName, inputScore } = elem;
    inputName.value = '';
    inputScore.value = '';
  }
}

const game = new Game();
if (localStorage.getItem('GameId')) {
  game.getScores()
    .then((res) => Ui.diplayScores(res));
} else {
  game.createGame();
}

const elem = new Elements();
const { refreshBtn, submitBtn } = elem;

// events
refreshBtn.addEventListener('click', () => {
  Ui.clearScoreLists();
  game.getScores()
    .then((res) => Ui.diplayScores(res));
});

submitBtn.addEventListener('click', (event) => {
  // add user
  event.preventDefault();
  const elem = new Elements();
  if (elem.inputName.value !== '' && elem.inputScore.value !== '') {
    const urs = new User(elem.inputName.value, elem.inputScore.value);
    game.addUser(urs);
    Ui.clearInputs();
  }
});