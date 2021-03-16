// Your code here
function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`
}
function mondayWork(activityM="go to the office"){

    return `This Monday, I will ${activityM}.`
}
function wrapAdjective(adjective="*"){
    return function(kind="special"){
        return  `You are ${adjective}${kind}${adjective}!`
    }
}