const url = "https://estagio.geopostenergy.com/WorldCup/GetAllTeams";
const allTeamsContainer = document.querySelector("#all-teams-container");
const timesGrupoA = document.querySelector(".grupo-a");
const timesGrupoB = document.querySelector(".grupo-b");
const timesGrupoC = document.querySelector(".grupo-c");
const timesGrupoD = document.querySelector(".grupo-d");
const timesGrupoE = document.querySelector(".grupo-e");
const timesGrupoF = document.querySelector(".grupo-f");
const timesGrupoG = document.querySelector(".grupo-g");
const timesGrupoH = document.querySelector(".grupo-h");


function shuffleArray(array) {
   array.sort(() => Math.random() - 0.5);
}

async function getAllTeams() {

   const response = await fetch(url, {
      method: 'GET',
      headers: { "git-user": "elizalap" }
   });

   const data = await response.json();
   const teams = data.Result;

   shuffleArray(teams);

   let grupoA = (teams.slice(0, 4));
   let grupoB = (teams.slice(4, 8));
   let grupoC = (teams.slice(8, 12));
   let grupoD = (teams.slice(12, 16));
   let grupoE = (teams.slice(16, 20));
   let grupoF = (teams.slice(20, 24));
   let grupoG = (teams.slice(24, 28));
   let grupoH = (teams.slice(28, 32));

   grupoA.map((team) => {

      const teamContainer = document.createElement("div");
      const name = document.createElement("h3");
      const token = document.createElement("p");

      name.innerText = team.Name;
      token.innerText = team.Token;

      teamContainer.appendChild(name);
      teamContainer.appendChild(token);

      timesGrupoA.appendChild(teamContainer);
      allTeamsContainer.appendChild(timesGrupoA);

   });

   grupoB.map((team) => {

      const teamContainer = document.createElement("div");
      const name = document.createElement("h3");
      const token = document.createElement("p");

      name.innerText = team.Name;
      token.innerText = team.Token;

      teamContainer.appendChild(name);
      teamContainer.appendChild(token);

      timesGrupoB.appendChild(teamContainer);
      allTeamsContainer.appendChild(timesGrupoB);
   });

   grupoC.map((team) => {

      const teamContainer = document.createElement("div");
      const name = document.createElement("h3");
      const token = document.createElement("p");

      name.innerText = team.Name;
      token.innerText = team.Token;

      teamContainer.appendChild(name);
      teamContainer.appendChild(token);

      timesGrupoC.appendChild(teamContainer);
      allTeamsContainer.appendChild(timesGrupoC);
   });

   const tituloA = document.createElement("h2");
   tituloA.innerHTML = "Grupo A";

   grupoD.map((team) => {

      const teamContainer = document.createElement("div");
      const name = document.createElement("h3");
      const token = document.createElement("p");

      name.innerText = team.Name;
      token.innerText = team.Token;

      teamContainer.appendChild(name);
      teamContainer.appendChild(token);

      timesGrupoD.appendChild(teamContainer);
      allTeamsContainer.appendChild(timesGrupoD);
   });

   grupoE.map((team) => {

      const teamContainer = document.createElement("div");
      const name = document.createElement("h3");
      const token = document.createElement("p");

      name.innerText = team.Name;
      token.innerText = team.Token;

      teamContainer.appendChild(name);
      teamContainer.appendChild(token);

      timesGrupoE.appendChild(teamContainer);
      allTeamsContainer.appendChild(timesGrupoE);
   });

   grupoF.map((team) => {

      const teamContainer = document.createElement("div");
      const name = document.createElement("h3");
      const token = document.createElement("p");

      name.innerText = team.Name;
      token.innerText = team.Token;

      teamContainer.appendChild(name);
      teamContainer.appendChild(token);

      timesGrupoF.appendChild(teamContainer);
      allTeamsContainer.appendChild(timesGrupoF);
   });

   grupoG.map((team) => {

      const teamContainer = document.createElement("div");
      const name = document.createElement("h3");
      const token = document.createElement("p");

      name.innerText = team.Name;
      token.innerText = team.Token;

      teamContainer.appendChild(name);
      teamContainer.appendChild(token);

      timesGrupoG.appendChild(teamContainer);
      allTeamsContainer.appendChild(timesGrupoG);
   });

   grupoH.map((team) => {

      const teamContainer = document.createElement("div");
      const name = document.createElement("h3");
      const token = document.createElement("p");

      name.innerText = team.Name;
      token.innerText = team.Token;

      teamContainer.appendChild(name);
      teamContainer.appendChild(token);

      timesGrupoH.appendChild(teamContainer);
      allTeamsContainer.appendChild(timesGrupoH);
   });

}

// function printRandomTeams() {

//    let teams = getAllTeams();

//    shuffleArray(teams);

//    teams.map((team) => {
//       const div = document.createElement("div");
//       const name = document.createElement("h3");
//       const token = document.createElement("p");

//       name.innerText = team.Name;
//       token.innerText = team.Token;

//       div.appendChild(name);
//       div.appendChild(token);

//       teamsContainer.appendChild(div);
//    });

// }

getAllTeams();
//printRandomTeams();