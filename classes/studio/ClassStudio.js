//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.

class CrewCandidate {
    constructor(name, mass, scores) {
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }

    addScore(score) {
        this.scores.push(score)
    }

    average() {
        let sum = 0;
        for (let i=0; i < this.scores.length; i ++) {
            sum += this.scores[i];
        }
        let avg = sum/this.scores.length;
        return Math.round(avg*10)/10;
    }

    status() {
        let status;
        let avgScore = this.average();
        if (avgScore >= 90) {
            status = "Accepted";
        } else if (avgScore >= 80 && avgScore < 90) {
            status = "Reserve";
        } else if (avgScore >= 70 && avgScore <80) {
            status = "Probationary";
        } else {
            status = "Rejected";
        }
        return status;

    }
}

let bubbabear = new CrewCandidate('Bubba Bear', '135kg', [88, 85, 90]);
let merrymaltese = new CrewCandidate('Merry Maltese', '1.5kg', [93, 88, 97]);
let gladgator = new CrewCandidate("Glad Gator", "225kg", [75, 78, 62]);

console.log(bubbabear);
console.log(merrymaltese);
console.log(gladgator);


bubbabear.addScore(83);

console.log(bubbabear);
console.log(merrymaltese.average());

console.log(gladgator.status());

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.



//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.

gladgator.addScore(100);
console.log(gladgator.average())
console.log(gladgator.status())

gladgator.addScore(100);
console.log(gladgator.average())
console.log(gladgator.status())

//Two 100% attempts to reach Reserve Status 

gladgator.addScore(100);
console.log(gladgator.average())
console.log(gladgator.status())

gladgator.addScore(100);
console.log(gladgator.average())
console.log(gladgator.status())

gladgator.addScore(100);
console.log(gladgator.average())
console.log(gladgator.status())

gladgator.addScore(100);
console.log(gladgator.average())
console.log(gladgator.status())

//Six 100% attempts to reach Accepted Status