const btnsOpenClose = contentClass => {
  const btns = document.querySelectorAll(contentClass);
  btns.forEach(btn => {
    btn.addEventListener("click", () => {
      toggleButtons(btns);
      let content = btn.nextElementSibling;
      if (content.style.display) {
        content.style.display = null;
      } else {
        content.style.display = "block";
      }
    });
  });
};

const toggleButtons = btns => {
  btns.forEach(btn => {
    let content = btn.nextElementSibling;
    content.style.display = null;
  });
};

export { btnsOpenClose };
