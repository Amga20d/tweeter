/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
  function createTweetElement(tweet) {
    const { user, content, created_at } = tweet;

    const tweetHTML = `
      <article class="tweet">
        <header class="tweet-header">
          <img src="${user.avatars}" alt="Profile Picture" class="profile-picture">
          <h2>${user.name}</h2>
          <p class="username">${user.handle}</p>
        </header>
        <p>${content.text}</p>
        <hr>
        <footer>
          <span class="tweet-time">${created_at}</span>
          <div class="icon-container">
            <span class="icon"><i class="fa-regular fa-flag"></i></span>
            <span class="icon"><i class="fa-solid fa-retweet"></i></span>
            <span class="icon"><i class="fa-regular fa-heart"></i></span>
          </div>
        </footer>
      </article>
    `;

    return $(tweetHTML);
  }

  const renderTweets = function(tweets) {
    // Loop through tweets
    tweets.forEach(tweet => {
      // Call createTweetElement for each tweet
      const $tweetElement = createTweetElement(tweet);

      // Append the returned jQuery object to the #tweets-container
      $('#tweets-container').append($tweetElement);
    });
  };

  // Fake data taken from initial-tweets.json
  const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd"
    },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Galileo",
      "avatars": "https://i.imgur.com/5fUVPRP.png",
      "handle": "@Galileo"
    },
    "content": {
      "text": "E pur si muove"
    },
    "created_at": 1461120000000
  },
  {
    "user": {
      "name": "Einstein",
      "avatars": "https://i.imgur.com/vKv8Cdl.png",
      "handle": "@Albert"
    },
    "content": {
      "text": "Imagination is more important than knowledge."
    },
    "created_at": 1461123600000
  },
  {
    "user": {
      "name": "Curie",
      "avatars": "https://i.imgur.com/buD6iaE.png",
      "handle": "@Marie"
    },
    "content": {
      "text": "Nothing in life is to be feared, it is only to be understood."
    },
    "created_at": 1461127200000
  },
  {
    "user": {
      "name": "Turing",
      "avatars": "https://i.imgur.com/8V9mlE6.png",
      "handle": "@Alan"
    },
    "content": {
      "text": "We can only see a short distance ahead, but we can see plenty there that needs to be done."
    },
    "created_at": 1461130800000
  },
  {
    "user": {
      "name": "Hawking",
      "avatars": "https://i.imgur.com/76HZPYM.png",
      "handle": "@Stephen"
    },
    "content": {
      "text": "Intelligence is the ability to adapt to change."
    },
    "created_at": 1461134400000
  },
  {
    "user": {
      "name": "Tesla",
      "avatars": "https://i.imgur.com/4Hrm5hK.png",
      "handle": "@Nikola"
    },
    "content": {
      "text": "The present is theirs; the future, for which I really worked, is mine."
    },
    "created_at": 1461138000000
  },
  {
    "user": {
      "name": "Aristotle",
      "avatars": "https://i.imgur.com/VlZO58J.png",
      "handle": "@Aristotle"
    },
    "content": {
      "text": "The more you know, the more you realize you don't know."
    },
    "created_at": 1461141600000
  },
  {
    "user": {
      "name": "Faraday",
      "avatars": "https://i.imgur.com/Jn29kC6.png",
      "handle": "@Michael"
    },
    "content": {
      "text": "But still try, for who knows what is possible!"
    },
    "created_at": 1461145200000
  },
  {
    "user": {
      "name": "Lovelace",
      "avatars": "https://i.imgur.com/NTpH3kg.png",
      "handle": "@Ada"
    },
    "content": {
      "text": "That brain of mine is something more than merely mortal, as time will show."
    },
    "created_at": 1461148800000
  },
  {
    "user": {
      "name": "Darwin",
      "avatars": "https://i.imgur.com/Tx3GT4b.png",
      "handle": "@Charles"
    },
    "content": {
      "text": "A man who dares to waste one hour of time has not discovered the value of life."
    },
    "created_at": 1461152400000
  }
];


  // Render tweets on page load
  renderTweets(data);
});
