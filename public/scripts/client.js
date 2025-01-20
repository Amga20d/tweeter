$(document).ready(function() {
  // Ensure the error message element is hidden initially
  $('#error-message').hide();

  function createTweetElement(tweet) {
    const { user, content, created_at } = tweet;

    // Format the creation time using timeago.js
    const timeAgo = timeago.format(new Date(created_at));

    const tweetHTML = `
      <article class="tweet">
        <header class="tweet-header">
          <img src="${escape(user.avatars)}" alt="Profile Picture" class="profile-picture">
          <h2>${escape(user.name)}</h2>
          <p class="username">${escape(user.handle)}</p>
        </header>
        <p>${escape(content.text)}</p>
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

      // Prepend the returned jQuery object to the #tweets-container
      $('#tweets-container').prepend($tweetElement);
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

    // Hide the error message element
    $('#error-message').slideUp();

    // Get the tweet text
    const tweetText = $('#tweet-text').val().trim();

    // Validate the tweet text
    if (tweetText === "") {
      $('#error-message').text("Tweet content cannot be empty!").slideDown();
      return;
    }

    if (tweetText.length > 140) {
      $('#error-message').text("Tweet content exceeds the 140 character limit!").slideDown();
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
        $('#tweet-text').trigger('input'); // Trigger the input event to update the counter
      },
      error: function(error) {
        console.error('Error submitting tweet:', error);
      }
    });
  });

  // Escape function to prevent XSS attacks
  function escape(str) {
    const div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }
});
