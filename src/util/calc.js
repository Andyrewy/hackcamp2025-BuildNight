import {mockRoute} from "./mockResponse"


//declaring variables
//mock values of willingness to speed
const SPEEDHWY = 40;
const SPEEDCITY = 30;

let totalTimeHrs = 0;

//function calculating new times speeding
function getStepTime(step){
    let newspeed;

    if(step.routeType === "Hwy"){
        newspeed = step.speed + SPEEDHWY;
        time = step.distance / newspeed;
        return time;
    }
    if(step.routeType === "City"){
        newspeed = step.speed + SPEEDCITY
        time = step.distance / newspeed;
        return time;
    }

    return 0;
}

//if hour is over or under one display hours and min or just min
function timeDisplay(newTotalTime){
    const totalMinuites = newTotalTime * 60;
    const hours = Math.floor(totalMinuites / 60);
    const minuites = Math.floor(totalMinuites % 60);

    //display logic
    if(hours > 0){
        return `${hours}h ${minuites}mins`;
    } else{
        return `${minuites}mins`;
    }
}

for(const step of mockRoute){
    totalTimeHrs += getStepTime(step);
}

const formattedTime = timeDisplay(totalTimeHrs);

console.log("Total time (in hours):", totalTimeHrs);
console.log("Your new total time is:", formattedTime);







