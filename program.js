import aTeam from "./teams.js";
 

aTeam.init();
document.querySelector("#voteplayer").addEventListener("click", function () {
    const playerNum = document.querySelector("#playerNumber").value;
    aTeam.changeVote(playerNum);
});
