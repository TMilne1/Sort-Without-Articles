const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 
'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 
'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

const sortedBands = bands.sort((a,b) =>{
    const article = ["the", "a","an"]
    let firstWordInA = article.includes((a.split(" ")[0]).toLowerCase())
    let firstWordInB = article.includes((b.split(" ")[0]).toLowerCase())


    if (firstWordInA && firstWordInB){
        return a > b

    }
    else if (firstWordInB) {
        return a > b.split(" ").slice(1).join(" ")
    }
    else if (firstWordInA) {
        return a.split(" ").slice(1).join(" ") > b
    }
    else{
    return a > b
    }
})

