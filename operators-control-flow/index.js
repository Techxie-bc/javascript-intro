// list all subjects in arrays
let scienceSubjects = ["Physics", "Chemistry", "Biology", "Technical Drawing"] 
let socialScienceSubjects = ["Accounting", "Commerce", "Marketing", "Geography"]
let artsSubjects = ["Government", "Economics", "Literature", "History"]
let generalSubjects = ["English", "Mathematics"]

// function to view subjects where n is the student's class
function chooseSubjects(n) {
    if (n == 'arts') {
        console.log(artsSubjects + "," + generalSubjects);
    } else if (n == 'social science'){
        console.log(socialScienceSubjects + "," + generalSubjects);
    } else if (n == 'science') {
        console.log(scienceSubjects + "," + generalSubjects);
    } else {
        console.log(generalSubjects)
    }
}
// running the program for Bolatito
chooseSubjects("arts")

// function to calculate nearest power of 2 where num is the input number
function nearestPower(num) {
    // convert the number to its base 2 logarithm
    const power = Math.log2(num);
    // use Math.floor method round off getting the lower value
    const lower = Math.pow(2, Math.floor(power));
    // use Math.ceil to round up getting the higher value
    const upper = Math.pow(2, Math.ceil(power));
    // compare upper and lower value and log result to the console
    if (num - lower < upper - num) {
        console.log("The number " + lower + " is the power of 2 nearest to " + num + ".")
    } else {
        console.log("The number " + upper + " is the power of 2 nearest to " + num + ".")
        
    }

}
nearestPower(50)