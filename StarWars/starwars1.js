let films;
let user = 1;
let user1Score = 0;
let user2Score = 0;

window.onload = function() {
    getPosts();
    // document.getElementById("result").innerHTML = " films " + films;
    askQuestions();
}
//while i less than three. so that only two if and else functions.

const askQuestions = () => {
    
    let userFilm = prompt(" What Episode is the First one ever Made");
        if( Number(userFilm) === 4){
            // return film 4 from the API
            // return films.results.title[4]
            user1Score += 1;
            document.getElementById("result").innerHTML = "A New Hope";
            document.getElementById("user1Score").innerHTML = user1Score;  
            user = 2;

        }
    

  
     userFilm = prompt(" What Episode is the Second one ever Made");
     if( Number(userFilm) === 5){
            // return film 4 from the API
            // return films.results.title[4]
            user2Score += 1;
            document.getElementById("result").innerHTML = "A New Hope";
            document.getElementById("user2Score").innerHTML = user2Score;
            user = 1;
        }
        
   
     userFilm = prompt(" What Episode is the Third one ever Made");
     if( Number(userFilm) === 4){
            // return film 4 from the API
            // return films.results.title[4]
            user1Score += 1;
            document.getElementById("result").innerHTML = "A New Hope";
            document.getElementById("user1Score").innerHTML = user1Score;
            user = 2;
        }
        
  
     userFilm = prompt(" What Episode is the Fourth one ever Made");
     if( Number(userFilm) === 4){
            // return film 4 from the API
            // return films.results.title[4]
            user2Score += 1;
            document.getElementById("result").innerHTML = "A New Hope";
            document.getElementById("user2Score").innerHTML = user2Score;
            user = 1;

        }
    
}



const getPosts = () =>  {
    return fetch(`https://swapi.co/api/films/`)
    .then(res => res.json())
    .then(posts => films = posts)
}

const post = {
    title:  'All About Fetch',
    body: 'Fetch is so cool!',
    userId: 1
}

const newPost = post => {
    const options = {
        method: 'POST',
        body: JSON.stringify(post),
        headers: {
            'Content type': 'application/json'
        }
    }
    return fetch(`https://swapi.co/api/films/`, options)
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(error => console.error(`Error: ${error}`))
}

// newPost(post);

//This works on the browser - which understands fetch. Use F12 to see it on the browser

//use a map to create a string concactenation - you cannot combine an object with a string. 