const modal = document.getElementById("modal");

const modalContent = (html, title) => {
  const content = `<div class="modal__content">
							<span class="modal__close">X</span>
							<h1>${title}</h1>
							${html}
              </div>`;

  return content;
};
const modalCloseButton = () => {
  const closeModal = document.querySelector(".modal__close");

  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });
};

export { modalContent, modalCloseButton, modal };
