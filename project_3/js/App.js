const endDate = "25 May 2024 10:00 PM"

document.getElementById('end-date').innerText = endDate;
let inputs = document.querySelectorAll("input")

const clock = () =>{
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now) /1000;
    if(diff < 0){
        return;
    }
    console.log(diff)
    inputs[0].value = Math.floor(diff/3600/24);
    inputs[1].value = Math.floor((diff/3600)%24);
    inputs[2].value = Math.floor((diff/60)%60);
    inputs[3].value = Math.floor((diff)%60)
    //convert into days
}
clock()

/*
1 day = 24 hrs
1hr = 60 mins
60min = 3600 sec
*/
setInterval(clock,1000)