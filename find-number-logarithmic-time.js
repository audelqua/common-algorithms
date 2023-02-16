
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

    finderMethodInLogarithmicTime() {
        let top = this.maximum
        let bottom = this.minimum
        const randomNumber = this.mainMethod()
        console.log('randomNumber', randomNumber);

        const splitterFunction = () => {
            let average = Math.floor((top + bottom) / 2)
            console.log('average', average);
            
            if(randomNumber > average) {
                bottom = average;
            }else if(randomNumber < average) {
                top = average
            }

            if(average !== randomNumber) splitterFunction()
        }
        splitterFunction()
    }
}

const someInstance = new RandomNumberGenerator(12324234235, 0)

someInstance.finderMethodInLogarithmicTime()



