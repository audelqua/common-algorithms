
class RandomNumberGenerator{
    constructor(max, min) {
        this.minimum = min,
        this.maximum = max
    }

    static mainMethod() {
        const { maximum, minimum } = this
        let randomNumber = Math.floor(Math.random() * (maximum - minimum) + minimum)

        return randomNumber
    }


    finderMethodInLogarithmicTime(targetNumber) {
        const top = this.maximum
        const bottom = this.minimum

        console.log('targetNumber', targetNumber);
        console.log('top', top);
        console.log('bottom', bottom);
    }
}

const someInstance = new RandomNumberGenerator(10000000000, 0)

someInstance.finderMethodInLogarithmicTime(someRandomNumber)



