/*

Just starting 
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/troyasaurus
*/

// import Axios from "axios";
// Axios.get('https://api.github.com/users/troyasaurus')


/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/




axios.get('https://api.github.com/users/troyasaurus')
    .then(response => {
        console.log(response);
        const myInfo = response.data;
        newCardMaker(response.data);
        const mainCard = document.querySelector('.cards');
        const cardInfo = newCardMaker(myInfo);
        mainCard.appendChild(cardInfo)
    })
    .catch(error => {
        console.log(error);
    });


const followersArray = ['dylanmestyanek', 'chelsabeth', 'itava0', 'jhaddon', 'adkhiker'];
i = 0;
followersArray.forEach((user, i) => {
    axios.get(`https://api.github.com/users/${followersArray[i]}`)
        .then(response => {
            console.log(response);
            const myInfo = response.data;
            const mainCard = document.querySelector('.cards');
            const cardInfo = newCardMaker(myInfo);
            mainCard.appendChild(cardInfo)
        })
        .catch(error => {
            console.log(error)
        });
});




const mainCard = document.querySelector('.cards');
function newCardMaker(data) {
    const newCard = document.createElement('div');
    const 
          img = document.createElement('img'),
          cardInfo = document.createElement('div'),
          h3Name = document.createElement('h3'),
          userInfo = document.createElement('p'),
          usersLocation = document.createElement('p'),
          usersProfile = document.createElement('p'),
          usersProfileUrl = document.createElement('a'),
          usersFollowers = document.createElement('p'),
          usersFollowing = document.createElement('p'),
          usersBio = document.createElement('p');

    newCard.classList.add('card');
    cardInfo.classList.add('card-info');
    h3Name.classList.add('name');
    userInfo.classList.add('username');

    newCard.appendChild(img);
    newCard.appendChild(cardInfo);
    cardInfo.appendChild(h3Name);
    cardInfo.appendChild(userInfo);
    cardInfo.appendChild(usersLocation);
    cardInfo.appendChild(usersProfile);
    cardInfo.appendChild(usersFollowers);
    cardInfo.appendChild(usersFollowing);
    cardInfo.appendChild(usersBio);

    img.src = `${data.avatar_url}`;
    h3Name.textContent = `${data.name}`;
    userInfo.textContent = `${data.login}`;
    usersLocation.textContent = `${data.location}`;
    usersProfileUrl.textContent = `${data.html_url}`;
    usersFollowers.textContent = `${data.followers}`;
    usersFollowing.textContent = `${data.following}`;
    usersBio.textContent = `${data.bio}`;
    
    return newCard
}