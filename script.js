document.getElementById("sheetsBtn").onclick = function () {

document.getElementById("contenido").innerHTML = `

<h2>Sheets</h2>

<input type="text" placeholder="Buscar plantilla...">

<hr>

<div class="sheetOption" id="femaleSheet">

♀ Female Sheet

</div>

<div class="sheetOption" id="maleSheet">

♂ Male Sheet

</div>

<div id="sheetContent"></div>

`;

};

document.addEventListener("click", function(event){

if(event.target.id=="femaleSheet"){

document.getElementById("sheetContent").innerHTML=`

<hr>

<h3>Female Sheet</h3>

<p><b>Name:</b></p>

<p><b>Alias:</b></p>

<p><b>Sire:</b></p>

<p><b>Dam:</b></p>

<p><b>Damsire:</b></p>

`;

}

if(event.target.id=="maleSheet"){

document.getElementById("sheetContent").innerHTML=`

<hr>

<h3>Male Sheet</h3>

<p><b>Name:</b></p>

<p><b>Alias:</b></p>

<p><b>Sire:</b></p>

<p><b>Dam:</b></p>

<p><b>Damsire:</b></p>

`;

}

});
                          
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
