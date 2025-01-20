$(document).ready(function() {
  function createTweetElement(tweet) {
    const { user, content, created_at } = tweet;

    // Format the creation time using timeago.js
    const timeAgo = timeago.format(new Date(created_at));

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
          <span class="tweet-time">${timeAgo}</span>
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
    // Clear existing tweets
    $('#tweets-container').empty();

    // Loop through tweets
    tweets.forEach(tweet => {
      // Call createTweetElement for each tweet
      const $tweetElement = createTweetElement(tweet);

      // Append the returned jQuery object to the #tweets-container
      $('#tweets-container').append($tweetElement);
    });
  };

  // Function to load tweets from the server
  const loadTweets = function() {
    $.ajax({
      type: 'GET',
      url: '/tweets',
      success: function(tweets) {
        renderTweets(tweets);
      },
      error: function(error) {
        console.error('Error fetching tweets:', error);
      }
    });
  };

  // Load tweets on page load
  loadTweets();

  // Add event listener for form submission
  $('form').on('submit', function(event) {
    event.preventDefault();

    // Get the tweet text
    const tweetText = $('#tweet-text').val().trim();

    // Validate the tweet text
    if (tweetText === "") {
      alert("Tweet content cannot be empty!");
      return;
    }

    if (tweetText.length > 140) {
      alert("Tweet content exceeds the 140 character limit!");
      return;
    }

    // Serialize the form data
    const serializedData = $(this).serialize();
    console.log('Serialized Data:', serializedData);

    // Send the POST request using Ajax
    $.ajax({
      type: 'POST',
      url: '/tweets',
      data: serializedData,
      success: function(response) {
        console.log('Tweet successfully submitted:', response);
        // Reload tweets after successful submission
        loadTweets();

        // Optional: Clear the form after successful submission
        $('form')[0].reset();
        $('.counter').text('140');
      },
      error: function(error) {
        console.error('Error submitting tweet:', error);
      }
    });
  });
});
