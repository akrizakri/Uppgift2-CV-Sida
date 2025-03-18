function fetchData() { // funktionen som ska hämta CV:t

    fetch("/data.json") // fetch för att hämta data från JSON filen

        .then(function(response) {

            return response.json(); // "execute and return value"
        })

        .then(function(data) {

            let skList = document.getElementById("skillsList"); // hämtar innehållet för lista på erfarenheter
            skList.innerHTML = "";

            data.skills.forEach(function(skills){
                let li = document.createElement("li");
                li.innerHTML = skills + "<br>";
                skList.appendChild(li);
            }) // funktion som presenterar lista på "kompetenser"

            let xpList = document.getElementById("xp"); // hämtar innehållet för lista på erfarenheter
            xpList.innerHTML = "";

            data.xp.forEach(function(xp) {
                let li = document.createElement("li");
                li.innerHTML = `
                <span class="xp-title"> ${xp.title} </span> <br>
                <span class="xp-company"> ${xp.company} </span> <br>
                <span class="xp-duration"> ${xp.duration} </span>`;
                xpList.appendChild(li);
            }); // funktion som presenterar lista på "erfarenheter" , <span> för att kunna stylea varje rad i för sig i CSS 

            document.getElementById("edu").innerText = data.edu; // hämtar "utbildningar"

            let eduList = document.getElementById("edu"); // hämtar innehållet för lista på utbildningar
            eduList.innerHTML = ""; 

            data.edu.forEach(function(edu) {
                let li = document.createElement("li");
                li.innerHTML = `
                <span class="edu-degree"> ${edu.degree} </span> <br>
                <span class="edu-institution"> ${edu.institution} </span> <br>
                <span class="edu-duration"> ${edu.duration} </span>`;
                eduList.appendChild(li);
            }); // LISTA PÅ UTBILDNINGAR

            let lanList = document.getElementById("langs"); // hämtar innehållet för lista på språk
            lanList.innerHTML = "";

            data.languages.forEach(function(languages){
                let li = document.createElement("li");
                li.innerHTML = languages + "<br>";
                lanList.appendChild(li);
            }) // LISTA PÅ SPRÅK

            
        })
        .catch(function(error) {
            console.error("Misslyckades att hämta data:", error);
        }); // eventuellt misslyckande av hämtning av data via fetch
}

fetchData(); // kör funktionen