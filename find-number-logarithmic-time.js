
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
                console.log('not equal', i);
            }else{
                console.log('found', i);
                break;
            }
        }
    }

    finderMethodInBinaryTree() {
        let top = this.maximum
        let bottom = this.minimum
        let steps = 0
        const randomNumber = this.mainMethod()
        console.log('randomNumber', randomNumber);

        const splitterFunction = () => {
            let average = Math.floor((top + bottom) / 2)
            console.log('average and steps:', average, '_', steps);
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

const someInstance = new RandomNumberGenerator(2342353464575674567, 0)

someInstance.finderMethodInBinaryTree()



