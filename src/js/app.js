const phaseButtons = document.querySelectorAll('.phases__btn');
const weeksButtons = document.querySelectorAll('.weeks__btn');
const daysButtons = document.querySelectorAll('.days__btn');
phaseButtons.forEach(btn => {
	btn.addEventListener('click', () => {
		toggleContent(phaseButtons);
		let content = btn.nextElementSibling;
		if (content.style.display) {
			content.style.display = null;
		} else {
			content.style.display = 'block';
		}
	});
});
weeksButtons.forEach(btn => {
	btn.addEventListener('click', () => {
		toggleContent(weeksButtons);
		let content = btn.nextElementSibling;

		if (content.style.display) {
			content.style.display = null;
		} else {
			content.style.display = 'block';
		}
	});
});
daysButtons.forEach(btn => {
	btn.addEventListener('click', () => {
		toggleContent(daysButtons);
		let content = btn.nextElementSibling;

		if (content.style.display) {
			content.style.display = null;
		} else {
			content.style.display = 'block';
		}
	});
});

const toggleContent = contentBtns => {
	contentBtns.forEach(btn => {
		let content = btn.nextElementSibling;
		//content.style.maxHeight = null;
		
			content.style.display = null;
		
	});
};
