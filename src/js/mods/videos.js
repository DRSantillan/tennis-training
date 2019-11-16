const videoButtons = () => {
  const btns = document.querySelectorAll(".table__btn");
  btns.forEach(btn => {
    btn.addEventListener("click", () => {
      toggleVideos(btns);
      let content = btn.parentElement.parentNode.nextElementSibling;
      if (content.style.display) {
        content.style.display = null;
      } else {
        content.style.display = "block";
      }
    });
  });
};
const pauseVideos = () => {
  const modal = document.getElementById("modal");
  const vids = modal.querySelectorAll("video");
  vids.forEach(vid => {
    vid.pause();
    vid.currentTime = 0;
  });
};
const toggleVideos = contentBtns => {
  pauseVideos();
  contentBtns.forEach(btn => {
    let content = btn.parentElement.parentNode.nextElementSibling;
    content.style.display = null;
  });
};

export { toggleVideos, videoButtons };
