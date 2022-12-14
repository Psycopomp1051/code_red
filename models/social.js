const twitterBtn = document.querySelector(".twitter-btn");
const instagramBtn = document.querySelector(".instagram-btn");
const linkedinBtn = document.querySelector(".linkedin-btn");
// const whatsappBtn = document.querySelector(".whatsapp-btn");

function init() {
  const pinterestImg = document.querySelector(".pinterest-img");

  // let postUrl = encodeURI(document.location.href);
  // let postTitle = encodeURI("Hi everyone, please check this out: ");
  // let postImg = encodeURI(pinterestImg.src);

  // facebookBtn.setAttribute(
  //   "href",
  //   `https://www.facebook.com/sharer.php?u=${postUrl}`
  // );

  twitterBtn.setAttribute(
    "href",
    `https://twitter.com/home`
  );

  instagramBtn.setAttribute(
    "href",
    `https://www.instagram.com/`
  );

  linkedinBtn.setAttribute(
    "href",
    `https://www.linkedin.com/feed/`
  );

//   whatsappBtn.setAttribute(
//     "href",
//     `https://wa.me/?text=${postTitle} ${postUrl}`
//   );
}

init();