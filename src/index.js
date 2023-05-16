import './styles/style.css';
import Elements from './modules/Elements';

const users = [
  {
    name: 'paul',
    score: 1234,
  },
  {
    name: 'John',
    score: 1234,
  },
  {
    name: 'Daniel',
    score: 1234,
  },
  {
    name: 'David',
    score: 1234,
  },
  {
    name: 'Tamor',
    score: 1234,
  },
];

class Ui {
  static diplayScores() {
    const elem = new Elements();
    const { scoreLists } = elem;

    users.forEach((u) => {
      const div = document.createElement('div');
      div.innerText = `${u.name}: ${u.score}`;
      scoreLists.appendChild(div);
    });
  }
}

Ui.diplayScores();
