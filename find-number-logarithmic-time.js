
class RandomNumberGenerator{
    constructor(max, min) {
        this.minimum = min,
        this.maximum = max
    }

    mainMethod() {
        const { maximum, minimum } = this
        let randomNumber = Math.floor(Math.random() * (maximum - minimum) + minimum)

        return randomNumber
    }
}

const someInstance = new RandomNumberGenerator(3, 1)
const someRandomNumber = someInstance.mainMethod()

