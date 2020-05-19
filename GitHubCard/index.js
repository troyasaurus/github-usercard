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


const followersArray = ['dylanmestyanek', 'chelsabeth', 'itava0', 'jhaddon', 'adkhiker'];
i = 0;
followersArray.forEach((user, i) => {
    axios.get(`https://api.github.com/users/${followersArray[i]}`)
        .then(response => {
            console.log(response);
            const myInfo = response.data;
            const mainCard = document.querySelector('.cards');
            const cardInfo = newCardMaker(myInfo);
            console.log(cardInfo);
            mainCard.appendChild(cardInfo)
        })
        .catch(error => {
            console.log(error)
        });
    // console.log(followersArray);
});

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={"https://avatars0.githubusercontent.com/u/11880596?v=4"} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
// const cardList = (data) => {
//   const newCard = document.createElement('div');
//   const userImg = document.createElement('img');
//   const nameOfUser = document.createElement('h3');
//   const userName = document.createElement('p');
//   const userLoc = document.createElement('p');
//   const userProf = document.createElement('p');
//   const userFollowers = document.createElement('p');
//   const userFollowing = document.createElement('p');
//   const userBio = document.createElement('p');

//   newCard.appendChild(userBio);
//   newCard.appendChild(userImg);
//   newCard.appendChild(userName);
//   newCard.appendChild(nameOfUser);
//   newCard.appendChild(userLoc);
//   newCard.appendChild(userProf);
//   newCard.appendChild(userFollowers);
//   newCard.appendChild(userFollowing);

//   nameOfUser.textContent = `${data.nameOfUser}`;
//   userName.textContent =  `${data.login}`;
//   userLoc.textContent= `${data.location}`;
//   userProf.textContent = `${data.html_url}`;
//   userFollowers.textContent = `${data.userFollowers}`;
//   userFollowing.textContent = `${data.userFollowing}`;
//   userBio.textContent = `${data.userBio}`;
//   userImg.src = `${data.avatar_url}`;

//   newCard.classList.add('card');
//   userImg.classList.add('img');
//   nameOfUser.classList.add('h3');
//   userName.classList.add('p');
//   userLoc.classList.add('p');
//   userProf.classList.add('p');
//   userFollowers.classList.add('p');
//   userFollowing.classList.add('p');
//   userBio.classList.add('p');

//   return card;
// }

// const cards = document.querySelector('.cards');

// followersArray.forEach(data =>{
//   cards.appendChild(cardList(data))
// });



function newCardMaker(data){


	// Elements
    const newCard = document.createElement("div");
    const cardInfo = document.createElement("div");
    const h3Name = document.createElement("h3")
    const newImg = document.createElement("img");
    const usersName = document.createElement("p");
    const usersLoc = document.createElement("p");
    const usersProfile = document.createElement("p");
    const usersProfileUrl = document.createElement("a");
    const usersFollowers = document.createElement("p");
    const usersFollowing = document.createElement("p");
    const usersBio = document.createElement("p");
  
  
      //text content-content
      newImg.src = `${data.avatar_url}`;
      h3Name.textContent = `${data.name}`;
      usersName.textContent = `${data.login}`;
      usersLoc.textContent = `${data.location}`;
      usersProfileUrl.textContent = `${data.html_url}`;
      usersFollowers.textContent = `${data.followers}`;
      usersFollowing.textContent = `${data.following}`;
      usersBio.textContent = `${data.bio}`;
   
      
      //classes
    newCard.classList.add("card");
    cardInfo.classList.add("card-info");
    h3Name.classList.add("name");
    usersName.classList.add("username");

     //append
    newCard.appendChild("newImg");
    newCard.appendChild("cardInfo");
    
    cardInfo.appendChild("h3Name");
    cardInfo.appendChild("usersName");
    cardInfo.appendChild("usersLoc");
    cardInfo.appendChild("usersProfile");
    cardInfo.appendChild("usersProfileUrl");
    cardInfo.appendChild("usersFollowers");
    cardInfo.appendChild("usersFollowing");


    return newCard;

}



axios.get('https://api.github.com/users/troyasaurus')
    .then(response => {
        console.log(response);
        const myInfo = response.data;
        newCardMaker(response.data);
        const newCard = document.querySelector('.cards');
        const cardInfo = newCardMaker(myInfo);
        console.log(myInfo);
        newCard.appendChild(cardInfo)
    })
    .catch(error => {
        console.log(error);
    });
  