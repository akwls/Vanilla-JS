let hajinInfo = {
    name: "hajin",
    age : 18,
    gender : "Female",
    isPretty : true,
    favMovies : [
        "Twilight",
        "Harry Potter"
    ],
    favFood : [
        "Maratang",
        "Galbi",
        "Tteokbokki"
    ],
    favArtist : [
        {
            name : "baekhyun",
            age: 30,
            job : "singer"
        },
        {
            name: "teo",
            age : 40,
            job : "actor"
        }
    ]
}

console.log(hajinInfo.favArtist[1].name);