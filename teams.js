const aTeam = {
    steps: "Vote Here",
    name: "Who is the GOAT?",
    players: [
      {
        playerNum: 1,
        names: "Kobe Bryant",
        vote: 0,
        numbers: "8, 24",
        teams: "L.A. Lakers",
      },
      {
        playerNum: 2,
        names: "Michael Jordan",
        vote: 0,
        numbers: "23",
        teams: "Chicago Bulls, Washington Wizards",
      },
    ],

    init() {
        setPlayerInfo(this);
        renderPlayers(this.players);
      },
  
    changeVote: function (playerNum, add = true) {
      const playerIndex = this.players.findIndex(
        (player) => player.playerNum == playerNum
      );
      if (playerIndex >= 0) {
        if (add) {
          this.players[playerIndex].vote++;
        } else {
          this.players[playerIndex].vote--;
        }
        renderPlayers(this.players);
      }
    },
  };
  function setPlayerInfo(vote) {
    const voteName = document.querySelector("#voteName");
    const voteSteps = document.querySelector("#voteSteps");
    voteName.textContent = vote.name;
    voteSteps.textContent = vote.steps;
  }
  
  function renderPlayers(players) {
    const html = players.map(
      (player) => `<tr>
        <td>${player.playerNum}</td>
        <td>${player.names}</td>  
        <td>${player.numbers}</td>
        <td>${player.teams}</td>
        <td>${player.vote}</td></tr>`
    );
    document.querySelector("#players").innerHTML = html.join("");
  }
  export default aTeam;
