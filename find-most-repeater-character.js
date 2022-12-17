// ****** find most repeated character in the given string

const tempStr = 'wefferferferfeferferferferferfeferferferfqqqqasasasasasasasasasasasasasasasaslalalaalalalalalallalalalala'

const finder = () => {
    const charactersPair = {} // this is for characters and the time they are repeater 
    let mostRepeatedTimes = 0 // this is for most repeated one (number)
    let mostRepeatedCharacter = undefined // this is for most repeated one (character)

    for(let i = 0; i < tempStr.length; i++) { //lets iterate on all element in the given string 
        charactersPair[tempStr[i]] = charactersPair[tempStr[i]] ? charactersPair[tempStr[i]] + 1 : 1 // here we are adding new character to our object the key is the character and the default value is one. if the key has been exist before it means that ist repeated so the number 1 will add by 1 and this will continue till the last element
        if(charactersPair[tempStr[i]] > mostRepeatedTimes) mostRepeatedTimes = charactersPair[tempStr[i]]; mostRepeatedCharacter = tempStr[i] // this is for saving the most repeater character and its number
    }
    console.log('mostRepeatedTimes', mostRepeatedCharacter, mostRepeatedTimes);
}
finder()

