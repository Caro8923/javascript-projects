window.addEventListener("load", function(){
    let div = document.getElementById("container");
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function (response) {
        response.json().then(function (json) {
            console.log(json)

            //BONUS MISSION 3
            let count = document.getElementById('count');
            count.innerHTML = `Astronaut Count: ${json.length}`;


            for( let i=0; i< json.length; i++) {
                let astronaut = json[i];
                div.innerHTML += `
                    <div class="astronaut">
                        <div class="bio">
                            <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                            <ul>
                                <li>${astronaut.hoursInSpace}</li>
                                <li>Active: ${astronaut.active}</li>
                                <li>Skills: ${astronaut.skills.join(", ")}</li>
                            </ul>
                    </div>
                    <img class="avatar" src=${astronaut.picture}>
                 </div>
                `
            }
        })
    })
})
