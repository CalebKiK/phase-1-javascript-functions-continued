// code your solution here

function saturdayFun(activity = "roller-skate"){
    console.log (`This Monday I would like to ${activity}`)
}


const mondayWork = function(activity = "go to the office"){
    console.log (`This Monday I will ${activity}`);
}

function wrapAdjective(flair = "*") {
    return function (adjective = "special") {
        return `You are ${flair} ${adjective} ${flair}`;
    };
}

const encouragingPromptFunction = wrapAdjective("!!!");
console.log(encouragingPromptFunction("a dedicated programmer"));