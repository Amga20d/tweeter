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

  // Test / driver code (temporary). Eventually will get this from the server.
const tweetData = {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
        "handle": "@SirIsaac"
      },
    "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
    "created_at": 1461116232227
 }

const $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
console.log($tweet); // to see what it looks like
$('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
});
