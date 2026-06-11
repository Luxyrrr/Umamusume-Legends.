document.getElementById("sheetsBtn").onclick = function () {

document.getElementById("contenido").innerHTML = `

<h2>Sheet</h2>

<input type="text" placeholder="Buscar en la plantilla...">

<hr>

<h3>Basic Information</h3>

<p><b>Name:</b></p>

<p><b>Alias:</b></p>

<p><b>Kana:</b></p>

<p><b>Birthday:</b></p>

<hr>

<h3>Pedigree</h3>

<p><b>Sire:</b></p>

<p><b>Dam:</b></p>

<p><b>Damsire:</b></p>

<hr>

<h3>Racing</h3>

<p><b>Surface:</b></p>

<p><b>Distance:</b></p>

<p><b>Running Style:</b></p>

<hr>

<h3>Lore</h3>

<p></p>

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
