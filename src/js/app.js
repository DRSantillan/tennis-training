const phaseButtons = document.querySelectorAll('.phases__btn');
const weeksButtons = document.querySelectorAll('.weeks__btn');
const daysButtons = document.querySelectorAll('.days__btn');
const componentButtons = document.querySelectorAll('.training-component');
const modal = document.getElementById('modal');

const classArray = [
	'training-component--tennis',
	'training-component--aerobic',
	'training-component--anaerobic',
	'training-component--strength',
	'training-component--core-mobility',
	'training-component--cross-training',
	'training-component--activation',
	'training-component--recovery',
	'training-component--rest',
	'training-component--speed-agility',
	'training-component--tennis-tv',
	'training-component--life-coach',
];

const getComponentData = async (day, component) => {
	const res = await fetch('./src/data/db.json');
	const data = await res.json();
	const { days } = data;

	days.forEach(item => {
		if (item.day.toString() === day.toString()) {
			item.components.forEach(com => {
				if (com.component === component) {
					modal.innerHTML = `<div class="modal__content">
					<h1>${com.component.charAt(0).toUpperCase() + com.component.slice(1)}</h1>
					${com.content}</div>`;
				}
			});
		}
	});
};

componentButtons.forEach(btn => {
	btn.addEventListener('click', () => {
		modal.style.display = 'block';
		const currentDay = btn.parentElement.id;
		//console.log(currentDay);
		const btnClassList = btn.classList;
		classArray.forEach(item => {
			if (btnClassList.contains(item)) {
				let component = item.replace('training-component--', '');

				getComponentData(currentDay, component);
			}
		});
	});
});

modal.addEventListener('click', () => {
	modal.style.display = 'none';
});

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
