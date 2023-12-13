const notifications = document.querySelectorAll(".notify");
const follows = document.querySelectorAll(".follow");
const retweets = document.querySelectorAll(".retweet");
const hearts = document.querySelectorAll(".heart");
const input = document.querySelector(".input");
const button = document.querySelector(".post");

let p = document.querySelector("p");

notifications.forEach((notification) =>
  notification.addEventListener("click", () => {
    notification.style.backgroundColor = "#f2f2f2";
    notification.style.borderRadius = "15px";
  })
);

follows.forEach((follow) => {
  follow.addEventListener("click", () => {
    if (follow.innerText === "Follow") {
      follow.style.backgroundColor = "skyblue";
      follow.innerText = "Following";
    } else if (follow.innerText === "Following") {
      follow.style.backgroundColor = "black";
      follow.innerText = "Follow";
    }
  });
});

button.addEventListener("click", () => {
  // Create a new tweet element by cloning an existing one
  const myPost = document.querySelector(".mypost");
  let newTweet = myPost.cloneNode(true);

  // Modify the new tweet with the content from the input field
  let tweetText = newTweet.querySelector(".p");
  tweetText.innerText = input.value;

  // Append the new tweet to the container
  const feed = document.querySelector(".feed");
  feed.appendChild(newTweet);

  input.value = "";
});

retweets.forEach((retweet) =>
  retweet.addEventListener("click", () => {
    if ((retweet.style.color = "black")) {
      retweet.style.color = "green";
    } else if ((retweet.style.color = "green")) {
      retweet.style.color = "black";
    }
  })
);

hearts.forEach((heart) =>
  heart.addEventListener("click", () => {
    heart.innerHTML = `<i class="fa-solid fa-heart"></i>`;
    heart.style.before = "none";
    heart.style.color = "red";
  })
);
