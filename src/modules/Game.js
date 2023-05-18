
export default class Game {
  baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

  // create Game on Leaderboard free API
  // return the id of the Game created.
  createGame = async () => {
    const creatUrl = `${this.baseUrl}games/`;
    const response = await fetch(creatUrl, {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify({
        name: 'New Game'
      })
    });
  
    const data = await response.json(); // Game with ID: 1Vn8Zty8QlQcGnXgk2Ih added.
    const id = data['result'].slice(data['result'].indexOf(':') + 2, data['result'].indexOf('added'));
    localStorage.setItem('GameId', JSON.stringify({id: `${id}`}));
    console.log(id);
    return id;
  }

  // addscore.
  // recive user object as a parameter.
  // add user name & score.
  // return void.
  addUser = async(user) => {
    const { name, score } = user;
    const addurl = `${this.baseUrl}games/${JSON.parse(localStorage.getItem('GameId')).id}/scores/`;
    const response = await fetch(addurl, {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify({
        user: `${name}`,
        score: `${score}`
      })
    });
    const data = await response.json();
    console.log(data);
  }

  // fetch scores from the api.
  // return the scores result as array.
  getScore = async () => {
    const getUrl = `${this.baseUrl}games/${JSON.parse(localStorage.getItem('GameId')).id}/scores/`;
    const response = await fetch(getUrl);
    const data = await response.json();
    const users = data['result'];
    return users
  }
}