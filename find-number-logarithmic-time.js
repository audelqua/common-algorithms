
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
}

const someInstance = new RandomNumberGenerator(100, 0)

someInstance.finderMethodInLinearTime()



