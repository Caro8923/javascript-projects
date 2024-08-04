function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    button.addEventListener('click', event=> {
        paragraph.innerHTML = 'Houston! We have liftoff!';
    });

    missionAbort.addEventListener('mouseover', function(event) {
        event.target.style.backgroundColor= "red";
    })
    
    missionAbort.addEventListener('mouseout', function(event) {
        event.target.style.backgroundColor="";
    })

    missionAbort.addEventListener('click', event => {
        //input from readline sync?
        //if YES the print message
    })
}

window.addEventListener("load", init);
