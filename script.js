fetch('https://estagio.geopostenergy.com/WorldCup/GetAllTeams', {
   method: 'GET',
   headers: { "git-user": "elizalap" }
}).then(response => {
   console.log(response.json());
});