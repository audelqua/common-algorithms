// ****** find most repeated character in the given string

const tempStr = 'wefferferferfeferferferferferfeferferferfqqqqasasasasasasasasasasasasasasasaslalalaalalalalalallalalalala'

const finder = () => {
    const charactersPair = {}
    let mostRepeatedTimes = 0
    let mostRepeatedCharacter = undefined

    for(let i = 0; i < tempStr.length; i++) {
        charactersPair[tempStr[i]] = charactersPair[tempStr[i]] ? charactersPair[tempStr[i]] + 1 : 1
        if(charactersPair[tempStr[i]] > mostRepeatedTimes) mostRepeatedTimes = charactersPair[tempStr[i]]; mostRepeatedCharacter = tempStr[i]
    }
    console.log('mostRepeatedTimes', mostRepeatedCharacter, mostRepeatedTimes);
}
finder()

