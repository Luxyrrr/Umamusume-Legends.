document.getElementById("sheetBtn").onclick = function () {

document.getElementById("contenido").innerHTML = `
<h2>Sheet</h2>

<input type="text" placeholder="Buscar plantilla...">

<p>Aquí aparecerán las plantillas.</p>
`;

};

document.getElementById("umasBtn").onclick = function () {

document.getElementById("contenido").innerHTML = `
<h2>Umas</h2>

<input type="text" placeholder="Buscar Uma...">

<p>Aquí aparecerán los personajes.</p>
`;

};

document.getElementById("racesBtn").onclick = function () {

document.getElementById("contenido").innerHTML = `
<h2>Races</h2>

<input type="text" placeholder="Buscar carrera...">

<p>Aquí aparecerán las carreras.</p>
`;

};
