const average = (mathScore, literatureScore, englishScore) => {
    return (mathScore + literatureScore + englishScore) / average.length; 
};

const ranked = (average) => {
if(average >= 9) {
    return "Excellent";
}else if(average >= 8 && average < 9) {
    return "Good";
}else if(average >= 6.5 && average < 8) {
    return "Fair";
}else {
    return "Average";
}
}

const myAverage = average(9, 8, 7);

console.log(`Average Score: ${myAverage}
Ranked: ${ranked(myAverage)}`);
