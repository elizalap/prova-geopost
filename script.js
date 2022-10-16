const url = "https://estagio.geopostenergy.com/WorldCup/GetAllTeams";
const timesContainer = document.querySelector("#times-container");
const timesGrupoA = document.querySelector(".grupo-a");
const timesGrupoB = document.querySelector(".grupo-b");
const timesGrupoC = document.querySelector(".grupo-c");
const timesGrupoD = document.querySelector(".grupo-d");
const timesGrupoE = document.querySelector(".grupo-e");
const timesGrupoF = document.querySelector(".grupo-f");
const timesGrupoG = document.querySelector(".grupo-g");
const timesGrupoH = document.querySelector(".grupo-h");


function embaralharArray(times) {
   times.sort(() => Math.random() - 0.5);
}


async function getTimes() {

   const resposta = await fetch(url, {
      method: 'GET',
      headers: { "git-user": "elizalap" }
   });

   const data = await resposta.json();
   const times = data.Result;


   embaralharArray(times);

   let grupoA = (times.slice(0, 4));
   let grupoB = (times.slice(4, 8));
   let grupoC = (times.slice(8, 12));
   let grupoD = (times.slice(12, 16));
   let grupoE = (times.slice(16, 20));
   let grupoF = (times.slice(20, 24));
   let grupoG = (times.slice(24, 28));
   let grupoH = (times.slice(28, 32));

   grupoA.map((time) => {

      const timeContainer = document.createElement("div");
      const nome = document.createElement("p");

      nome.innerText = time.Name;

      timeContainer.appendChild(nome);

      timesGrupoA.appendChild(timeContainer);
      timesContainer.appendChild(timesGrupoA);

   });

   grupoB.map((time) => {

      const timeContainer = document.createElement("div");
      const nome = document.createElement("p");

      nome.innerText = time.Name;

      timeContainer.appendChild(nome);

      timesGrupoB.appendChild(timeContainer);
      timesContainer.appendChild(timesGrupoB);
   });

   grupoC.map((time) => {

      const timeContainer = document.createElement("div");
      const nome = document.createElement("p");

      nome.innerText = time.Name;

      timeContainer.appendChild(nome);

      timesGrupoC.appendChild(timeContainer);
      timesContainer.appendChild(timesGrupoC);
   });

   grupoD.map((time) => {

      const timeContainer = document.createElement("div");
      const nome = document.createElement("p");

      nome.innerText = time.Name;

      timeContainer.appendChild(nome);

      timesGrupoD.appendChild(timeContainer);
      timesContainer.appendChild(timesGrupoD);
   });

   grupoE.map((time) => {

      const timeContainer = document.createElement("div");
      const nome = document.createElement("p");

      nome.innerText = time.Name;

      timeContainer.appendChild(nome);

      timesGrupoE.appendChild(timeContainer);
      timesContainer.appendChild(timesGrupoE);
   });

   grupoF.map((time) => {

      const timeContainer = document.createElement("div");
      const nome = document.createElement("p");

      nome.innerText = time.Name;

      timeContainer.appendChild(nome);

      timesGrupoF.appendChild(timeContainer);
      timesContainer.appendChild(timesGrupoF);
   });

   grupoG.map((time) => {

      const timeContainer = document.createElement("div");
      const nome = document.createElement("p");

      nome.innerText = time.Name;

      timeContainer.appendChild(nome);

      timesGrupoG.appendChild(timeContainer);
      timesContainer.appendChild(timesGrupoG);
   });

   grupoH.map((time) => {

      const timeContainer = document.createElement("div");
      const nome = document.createElement("p");

      nome.innerText = time.Name;

      timeContainer.appendChild(nome);

      timesGrupoH.appendChild(timeContainer);
      timesContainer.appendChild(timesGrupoH);
   });
}

getTimes();