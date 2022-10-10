const url = "https://estagio.geopostenergy.com/WorldCup/GetAllTeams";
const allTeamsContainer = document.querySelector("#all-teams-container");

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

   teams.map((team) => {


      const teamContainer = document.createElement("div");
      const name = document.createElement("h3");
      const token = document.createElement("p");

      name.innerText = team.Name;
      token.innerText = team.Token;

      teamContainer.appendChild(name);
      teamContainer.appendChild(token);

      allTeamsContainer.appendChild(teamContainer);
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