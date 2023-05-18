
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
    const addurl = `${this.baseUrl}/games/${JSON.parse(localStorage.getItem('GameId')).id}/scores/`;
    const response = await fetch(apiUrl, {
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
  }
}