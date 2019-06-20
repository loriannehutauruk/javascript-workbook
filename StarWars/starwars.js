let films;

window.onload = function() {
    getPosts();
    document.getElementById("result").innerHTML = " films " + films;
  
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