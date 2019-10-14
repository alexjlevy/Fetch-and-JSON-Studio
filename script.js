window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(json){
            // Bonus 1: Custom sort by hours in space
            function compare (a,b){
                if (a.hoursInSpace < b.hoursInSpace){
                    return 1;
                }
                if (a.hoursInSpace > b.hoursInSpace){
                    return -1;
                }
                return 0;
            }
            json.sort(compare)
            let header = document.getElementById("header")
            let div = document.getElementById("container")
            let activeTag = document.getElementsByClassName("active")
            for (let i = 0; i<json.length ; i++){
                div.innerHTML += `
                <div class = "astronaut">
                    <div class = "bio">
                    <h3>${json[i].firstName} ${json[i].lastName}</h3>
                    <ul>
                        <li>Hours in space: ${json[i].hoursInSpace}</li>               
                        <li class = "active"">Active: ${json[i].active}</li>
                        <li>Skills: ${json[i].skills.join(", ")}</li>
                    </ul>
                </div>
                <img class="avatar" src="${json[i].picture}">
            </div>
                    `
            //Bonus 2: Make "Active: True" text green.
            if(activeTag[i].innerHTML === "Active: true"){
                activeTag[i].style.color = "green"
            }
                }
            //Bonus 3: Add an astronaut count 
            header.innerHTML = `Astronaut Count: ${json.length}`           
            })
        })
    })

