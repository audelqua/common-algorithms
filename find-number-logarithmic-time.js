
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

    finderMethodInLinearTime() {
        const top = this.maximum
        const bottom = this.minimum
        const randomNumber = this.mainMethod()
        
        for(let i = bottom; i < top; i ++){
            if(i !== randomNumber) {
                console.log('not equal and my random', i, randomNumber);
            }else{
                console.log('found and random', i, randomNumber);
                break;
            }
        }
    }

    finderMethodInBinaryTree() {
        let top = this.maximum
        let bottom = this.minimum
        let steps = 0
        const randomNumber = this.mainMethod()

        const splitterFunction = () => {
            let average = Math.floor((top + bottom) / 2)
            console.log(`my random number is: ${randomNumber} - my steps is ${steps} - length of inputted number is: ${JSON.stringify(randomNumber).length}`);
            
            if(randomNumber > average) {
                bottom = average;
            }else if(randomNumber < average) {
                top = average
            }

            steps = steps + 1
            if(average !== randomNumber) splitterFunction()
        }
        splitterFunction()
    }
}

const someInstance = new RandomNumberGenerator(10000000000000000, 0)

// someInstance.finderMethodInLinearTime()
someInstance.finderMethodInBinaryTree()



