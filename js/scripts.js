const nameWrapper = document.querySelector('div.name-box h2');

// Generates random number
const randomNum = num => {
    return Math.floor(Math.random() * num);
}

// object holds the separate 
const nameLists = {

    firstNames: ["notebook", "groovy", "terrific", "power", "husky", "plug", "cannon", "wrong", "spill", "aware", "scandalous", "grateful"],
    secondNames: ["unequaled", "hollow", "attempt", "roasted", "plucky", "toe", "automatic", "loving", "pick", "telling", "unite"],
    thirdNames: ["tangible", "complete", "acidic", "wicked", "bruise", "heartbreaking", "nod", "heavy", "mix", "yarn", "dock", "kaput"]
}

const generateName = () => {

    // Holds newly generate name
    let newName = [];

    for(let name in nameLists) {
        
        let randomId = randomNum(nameLists[name].length);

        switch(name) {
            case "firstNames":
                newName.push(nameLists[name][randomId].toUpperCase())
                break
            case "secondNames":
                newName.push(nameLists[name][randomId].toUpperCase())
                break
            case "thirdNames":
                newName.push(nameLists[name][randomId].toUpperCase())
                break
            default:
                newName.push("ERROR")
        }
    }

    // Holds newly generate name
    const formatName = name => {
        return newName.join(" - ");
    }

    nameWrapper.innerHTML = formatName(newName);
}


