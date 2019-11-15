const phaseButtons = document.querySelectorAll(".phases__btn");
const weeksButtons = document.querySelectorAll(".weeks__btn");
const daysButtons = document.querySelectorAll(".days__btn");
const componentButtons = document.querySelectorAll(".training-component");

const modal = document.getElementById("modal");

const classArray = [
  "training-component--tennis",
  "training-component--aerobic",
  "training-component--anaerobic",
  "training-component--strength",
  "training-component--core-stability",
  "training-component--cross-training",
  "training-component--activation",
  "training-component--flexibility",
  "training-component--day-off",
  "training-component--speed-agility",
  "training-component--tennis-tv",
  "training-component--life-coach",
  "training-component--plyometrics",
  "training-component--injury-prevention"
];

const getComponentData = async (day, component) => {
  let file = `./src/data/${component}.json`;
  const res = await fetch(file);
  const data = await res.json();
  return data;
};
const strength = (day, data) => {
  let content;
  let header;
  let total = "";

  data.forEach(item => {
    header = `	<div class="strength">
						
							<div class="strength__row">
								<h2>Training Phase: ${item.phase} - Gym: Week ${item.week} - Day: ${item.day}</h2>
							</div>
							<div class="strength__row">
								<div class="strength__col strength__col--title">
									Exercise Type
								</div>
								<div class="strength__col strength__col--title">Exercise</div>
								<div class="strength__col strength__col--title">
									Repetitions
								</div>
								<div class="strength__col strength__col--title">1</div>
								<div class="strength__col strength__col--title">2</div>
								<div class="strength__col strength__col--title">3</div>
							</div>`;

    if (day.toString() === item.day.toString()) {
      total += header;
      //console.log(total);
      item.exercises.forEach(ex => {
        content = `<div class="strength__row">
								<div class="strength__col strength__col--type">${ex.type}</div>
								<div class="strength__col">
									<button class="strength__btn">${ex.exercise}</button>
								</div>
								<div class="strength__col strength__col--reps">${ex.reps}</div>
								<div class="strength__col"><input id="explosive-1" /> kg</div>
								<div class="strength__col"><input id="explosive-2" /> kg</div>
								<div class="strength__col"><input id="explosive-3" /> kg</div>
							</div>
							<div class="strength__col strength__col--video">
							<video width="60%" controls>
								<source
									src="${ex.video}"
									type="video/mp4"
								/>
								Your browser does not support the video tag.
							</video>
						</div>`;

        total += content;
      });
      total += `
					</div>`;
      console.log(total);
    }
  });
  const modalContent = `<div class="modal__content">
							<span class="modal__close">X</span>
							<h1>Strength</h1>
							${total}
							</div>`;
  modal.innerHTML = modalContent;
  const closeModal = document.querySelector(".modal__close");
  const videoButtons = document.querySelectorAll(".strength__btn");
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });
  videoButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      toggleVideos(videoButtons);
      let content = btn.parentElement.parentNode.nextElementSibling;
      if (content.style.display) {
        content.style.display = null;
      } else {
        content.style.display = "block";
      }
    });
  });
};
const activation = (day, data) => {
  console.log(day, data);
  let content;
  let header;
  let total = "";
  data.days.forEach(item => {
    header = `<div class="strength">	
							<div class="strength__row">
								<h2>Phase: ${item.phase} - Activation: Week ${item.week} - Day: ${item.day}</h2>
							</div>
							<div class="strength__row">
								<div class="strength__col strength__col--title">
									Exercise Type
								</div>
								<div class="strength__col strength__col--title">Exercise</div>
								<div class="strength__col strength__col--title">
									Repetitions
								</div>
							</div>`;
    if (day.toString() === item.day.toString()) {
      total += header;
      //console.log(total);
      item.exercises.forEach(ex => {
        content = `<div class="strength__row">
								<div class="strength__col strength__col--type">${ex.type}</div>
								<div class="strength__col">
									<button class="strength__btn">${ex.exercise}</button>
								</div>
								<div class="strength__col strength__col--reps">${ex.reps}</div>
							</div>
							<div class="strength__col strength__col--video">
							<video width="60%" controls>
								<source
									src="${ex.video}"
									type="video/mp4"
								/>
								Your browser does not support the video tag.
							</video>
						</div>`;

        total += content;
      });
      total += `
					</div>`;
      console.log(total);
    }
  });
  const modalContent = `<div class="modal__content">
							<span class="modal__close">X</span>
							<h1>Strength</h1>
							${total}
							</div>`;
  modal.innerHTML = modalContent;
  const closeModal = document.querySelector(".modal__close");
  const videoButtons = document.querySelectorAll(".strength__btn");
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });
  videoButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      toggleVideos(videoButtons);
      let content = btn.parentElement.parentNode.nextElementSibling;
      if (content.style.display) {
        content.style.display = null;
      } else {
        content.style.display = "block";
      }
    });
  });
};
const aerobic = (day, data) => {
  console.log(day, data);
  let content;
  let header;
  let total = "";
  data.days.forEach(item => {
    header = `<div class="strength">	
							<div class="strength__row">
								<h2>Phase: ${item.phase} - Aerobic Endurance: Week ${item.week} - Day: ${item.day}</h2>
							</div>
							<div class="strength__row">
								<div class="strength__col strength__col--title">
									Exercise Type
								</div>
								<div class="strength__col strength__col--title">Exercise</div>
								<div class="strength__col strength__col--title">
									Duration
								</div>
								<div class="strength__col strength__col--title">
									Distance
								</div>
								<div class="strength__col strength__col--title">
									Description
								</div>
							</div>`;
    if (day.toString() === item.day.toString()) {
      total += header;
      console.log(total);

      content = `<div class="strength__row">
								<div class="strength__col strength__col--type">${item.type}</div>
								<div class="strength__col">
									<button class="strength__btn">${item.exercise}</button>
								</div>
								<div class="strength__col strength__col--reps">${item.duration}</div>
								<div class="strength__col strength__col--reps">${item.distance}</div>
								<div class="strength__col strength__col--reps">${item.description}</div>
							</div>
							`;

      total += content;

      total += `
					</div>`;
      console.log(total);
    }
  });
  const modalContent = `<div class="modal__content">
							<span class="modal__close">X</span>
							<h1>Aerobic Endurance</h1>
							${total}
							</div>`;
  modal.innerHTML = modalContent;
  const closeModal = document.querySelector(".modal__close");

  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });
};
const anaerobic = (day, data) => {
  console.log(day, data);
  let content;
  let header;
  let total = "";
  data.days.forEach(item => {
    header = `<div class="strength">	
							<div class="strength__row">
								<h2>Phase: ${item.phase} - Anaerobic Endurance: Week ${item.week} - Day: ${item.day}</h2>
							</div>
							<div class="strength__row">
								<div class="strength__col strength__col--title">
									Exercise Type
								</div>
								<div class="strength__col strength__col--title">Exercise</div>
								<div class="strength__col strength__col--title">
									Duration
								</div>
								<div class="strength__col strength__col--title">
									Distance
								</div>
								<div class="strength__col strength__col--title">
									Description
								</div>
							</div>`;
    if (day.toString() === item.day.toString()) {
      total += header;
      console.log(total);

      content = `<div class="strength__row">
								<div class="strength__col strength__col--type">${item.type}</div>
								<div class="strength__col">
									<button class="strength__btn">${item.exercise}</button>
								</div>
								<div class="strength__col strength__col--reps">${item.duration}</div>
								<div class="strength__col strength__col--reps">${item.distance}</div>
								<div class="strength__col strength__col--reps">${item.description}</div>
							</div>
							`;

      total += content;

      total += `
					</div>`;
      console.log(total);
    }
  });
  const modalContent = `<div class="modal__content">
							<span class="modal__close">X</span>
							<h1>Anaerobic Endurance</h1>
							${total}
							</div>`;
  modal.innerHTML = modalContent;
  const closeModal = document.querySelector(".modal__close");

  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });
};
const plyometric = (day, data) => {
  let content;
  let header;
  let total = "";

  data.days.forEach(item => {
    header = `	<div class="strength">
						
							<div class="strength__row">
								<h2>Training Phase: ${item.phase} - Plyometrics: Week ${item.week} - Day: ${item.day}</h2>
							</div>
							<div class="strength__row">
								<div class="strength__col strength__col--title">
									Exercise Type
								</div>
								<div class="strength__col strength__col--title">Exercise</div>
								<div class="strength__col strength__col--title">
									Repetitions
								</div>
								<div class="strength__col strength__col--title">1</div>
								<div class="strength__col strength__col--title">2</div>
								<div class="strength__col strength__col--title">3</div>
							</div>`;

    if (day.toString() === item.day.toString()) {
      total += header;
      //console.log(total);
      item.exercises.forEach(ex => {
        content = `<div class="strength__row">
								<div class="strength__col strength__col--type">${ex.type}</div>
								<div class="strength__col">
									<button class="strength__btn">${ex.exercise}</button>
								</div>
								<div class="strength__col strength__col--reps">${ex.reps}</div>
								<div class="strength__col"><input id="explosive-1" /> kg</div>
								<div class="strength__col"><input id="explosive-2" /> kg</div>
								<div class="strength__col"><input id="explosive-3" /> kg</div>
							</div>
							<div class="strength__col strength__col--video">
							<video width="60%" controls>
								<source
									src="${ex.video}"
									type="video/mp4"
								/>
								Your browser does not support the video tag.
							</video>
						</div>`;

        total += content;
      });
      total += `
					</div>`;
      console.log(total);
    }
  });
  const modalContent = `<div class="modal__content">
							<span class="modal__close">X</span>
							<h1>Plyometrics</h1>
							${total}
							</div>`;
  modal.innerHTML = modalContent;
  const closeModal = document.querySelector(".modal__close");
  const videoButtons = document.querySelectorAll(".strength__btn");
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });
  videoButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      toggleVideos(videoButtons);
      let content = btn.parentElement.parentNode.nextElementSibling;
      if (content.style.display) {
        content.style.display = null;
      } else {
        content.style.display = "block";
      }
    });
  });
};
const crosstraining = (day, data) => {
  console.log(day, data, "<<<<<<<<<<<");
  let content;
  let header;
  let total = "";
  data.days.forEach(item => {
    header = `<div class="strength">	
							<div class="strength__row">
								<h2>Phase: ${item.phase} - Cross Training: Week ${item.week} - Day: ${item.day}</h2>
							</div>
							<div class="strength__row">
								<div class="strength__col strength__col--title">
									Exercise Type
								</div>
								<div class="strength__col strength__col--title">Exercise</div>
								<div class="strength__col strength__col--title">
									Duration
								</div>
								<div class="strength__col strength__col--title">
									Distance
								</div>
								<div class="strength__col strength__col--title">
									Description
								</div>
							</div>`;
    if (day.toString() === item.day.toString()) {
      total += header;
      console.log(total);

      content = `<div class="strength__row">
								<div class="strength__col strength__col--type">${item.type}</div>
								<div class="strength__col">
									<button class="strength__btn">${item.exercise}</button>
								</div>
								<div class="strength__col strength__col--reps">${item.duration}</div>
								<div class="strength__col strength__col--reps">${item.distance}</div>
								<div class="strength__col strength__col--reps">${item.description}</div>
							</div>
							`;

      total += content;

      total += `
					</div>`;
      console.log(total);
    }
  });
  const modalContent = `<div class="modal__content">
							<span class="modal__close">X</span>
							<h1>Cross Training</h1>
							${total}
							</div>`;
  modal.innerHTML = modalContent;
  const closeModal = document.querySelector(".modal__close");

  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });
};
const coreStability = (day, data) => {
  let content;
  let header;
  let total = "";

  data.days.forEach(item => {
    header = `	<div class="strength">
						
							<div class="strength__row">
								<h2>Training Phase: ${item.phase} - Core Stability: Week ${item.week} - Day: ${item.day}</h2>
							</div>
							<div class="strength__row">
								<div class="strength__col strength__col--title">
									Exercise Type
								</div>
								<div class="strength__col strength__col--title">Exercise</div>
								<div class="strength__col strength__col--title">
									Repetitions
								</div>
								<div class="strength__col strength__col--title">1</div>
								<div class="strength__col strength__col--title">2</div>
								<div class="strength__col strength__col--title">3</div>
							</div>`;

    if (day.toString() === item.day.toString()) {
      total += header;
      //console.log(total);
      item.exercises.forEach(ex => {
        content = `<div class="strength__row">
								<div class="strength__col strength__col--type">${ex.type}</div>
								<div class="strength__col">
									<button class="strength__btn">${ex.exercise}</button>
								</div>
								<div class="strength__col strength__col--reps">${ex.reps}</div>
								<div class="strength__col"><input id="explosive-1" /> kg</div>
								<div class="strength__col"><input id="explosive-2" /> kg</div>
								<div class="strength__col"><input id="explosive-3" /> kg</div>
							</div>
							<div class="strength__col strength__col--video">
							<video width="60%" controls>
								<source
									src="${ex.video}"
									type="video/mp4"
								/>
								Your browser does not support the video tag.
							</video>
						</div>`;

        total += content;
      });
      total += `
					</div>`;
      console.log(total);
    }
  });
  const modalContent = `<div class="modal__content">
							<span class="modal__close">X</span>
							<h1>Core Stability</h1>
							${total}
							</div>`;
  modal.innerHTML = modalContent;
  const closeModal = document.querySelector(".modal__close");
  const videoButtons = document.querySelectorAll(".strength__btn");
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });
  videoButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      toggleVideos(videoButtons);
      let content = btn.parentElement.parentNode.nextElementSibling;
      if (content.style.display) {
        content.style.display = null;
      } else {
        content.style.display = "block";
      }
    });
  });
};
const flexibility = (day, data) => {
  console.log(day, data);
  let content;
  let header;
  let total = "";
  data.days.forEach(item => {
    header = `<div class="strength">	
							<div class="strength__row">
								<h2>Phase: ${item.phase} - Flexibility: Week ${item.week} - Day: ${item.day}</h2>
							</div>
							<div class="strength__row">
								<div class="strength__col strength__col--title">
									Exercise Type
								</div>
								<div class="strength__col strength__col--title">Exercise</div>
								<div class="strength__col strength__col--title">
									Repetitions
								</div>
							</div>`;
    if (day.toString() === item.day.toString()) {
      total += header;
      //console.log(total);
      item.exercises.forEach(ex => {
        content = `<div class="strength__row">
								<div class="strength__col strength__col--type">${ex.type}</div>
								<div class="strength__col">
									<button class="strength__btn">${ex.exercise}</button>
								</div>
								<div class="strength__col strength__col--reps">${ex.reps}</div>
							</div>
							<div class="strength__col strength__col--video">
							<video width="60%" controls>
								<source
									src="${ex.video}"
									type="video/mp4"
								/>
								Your browser does not support the video tag.
							</video>
						</div>`;

        total += content;
      });
      total += `
					</div>`;
      console.log(total);
    }
  });
  const modalContent = `<div class="modal__content">
							<span class="modal__close">X</span>
							<h1>Flexibility</h1>
							${total}
							</div>`;
  modal.innerHTML = modalContent;
  const closeModal = document.querySelector(".modal__close");
  const videoButtons = document.querySelectorAll(".strength__btn");
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });
  videoButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      toggleVideos(videoButtons);
      let content = btn.parentElement.parentNode.nextElementSibling;
      if (content.style.display) {
        content.style.display = null;
      } else {
        content.style.display = "block";
      }
    });
  });
};
const injuryPrevention = (day, data) => {
  console.log(day, data);
  let content;
  let header;
  let total = "";
  data.days.forEach(item => {
    header = `<div class="strength">	
							<div class="strength__row">
								<h2>Phase: ${item.phase} - Injury Prevention: Week ${item.week} - Day: ${item.day}</h2>
							</div>
							<div class="strength__row">
								<div class="strength__col strength__col--title">
									Exercise Type
								</div>
								<div class="strength__col strength__col--title">Exercise</div>
								<div class="strength__col strength__col--title">
									Repetitions
								</div>
							</div>`;
    if (day.toString() === item.day.toString()) {
      total += header;
      //console.log(total);
      item.exercises.forEach(ex => {
        content = `<div class="strength__row">
								<div class="strength__col strength__col--type">${ex.type}</div>
								<div class="strength__col">
									<button class="strength__btn">${ex.exercise}</button>
								</div>
								<div class="strength__col strength__col--reps">${ex.reps}</div>
							</div>
							<div class="strength__col strength__col--video">
							<video width="60%" controls>
								<source
									src="${ex.video}"
									type="video/mp4"
								/>
								Your browser does not support the video tag.
							</video>
						</div>`;

        total += content;
      });
      total += `
					</div>`;
      console.log(total);
    }
  });
  const modalContent = `<div class="modal__content">
							<span class="modal__close">X</span>
							<h1>Injury Prevention</h1>
							${total}
							</div>`;
  modal.innerHTML = modalContent;
  const closeModal = document.querySelector(".modal__close");
  const videoButtons = document.querySelectorAll(".strength__btn");
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });
  videoButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      toggleVideos(videoButtons);
      let content = btn.parentElement.parentNode.nextElementSibling;
      if (content.style.display) {
        content.style.display = null;
      } else {
        content.style.display = "block";
      }
    });
  });
};
const displayComponent = async (day, component) => {
  let data;

  console.log(component, "componenet");
  switch (component) {
    case "strength":
      data = getComponentData(day, component);
      let { days } = await data;
      console.log(days);
      strength(day, days);
      break;
    case "activation":
      data = getComponentData(day, component);
      const { activate } = await data;
      activation(day, activate);
      break;
    case "aerobic":
      data = getComponentData(day, component);
      let { aerobics } = await data;
      aerobic(day, aerobics);
      break;
    case "anaerobic":
      data = getComponentData(day, component);
      let { anaerobics } = await data;
      anaerobic(day, anaerobics);
      break;
    case "cross-training":
      data = getComponentData(day, component);
      let { cross } = await data;
      crosstraining(day, cross);
      break;
    case "core-stability":
      data = getComponentData(day, component);
      let { core } = await data;
      coreStability(day, core);
      break;
    case "plyometrics":
      data = getComponentData(day, component);
      let { plyometrics } = await data;
      plyometric(day, plyometrics);
      break;
	  case "flexibility":
		  data = getComponentData(day, component);
		  let { flex } = await data;
		  flexibility(day, flex);
		  break;
	  case "injury-prevention":
		  data = getComponentData(day, component);
		  let { injury } = await data;
		  injuryPrevention(day, injury);
		  break;
  }
};

componentButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    modal.style.display = "block";
    const currentDay = btn.parentElement.id;
    console.log(currentDay);
    const btnClassList = btn.classList;
    classArray.forEach(item => {
      console.log(item);
      if (btnClassList.contains(item)) {
        let component = item.replace("training-component--", "");
        console.log(component, ">>>>>>>>>>");
        displayComponent(currentDay, component);
        //getComponentData(currentDay, component);
      }
    });
  });
});

phaseButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    toggleContent(phaseButtons);
    let content = btn.nextElementSibling;
    if (content.style.display) {
      content.style.display = null;
    } else {
      content.style.display = "block";
    }
  });
});
weeksButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    toggleContent(weeksButtons);
    let content = btn.nextElementSibling;

    if (content.style.display) {
      content.style.display = null;
    } else {
      content.style.display = "block";
    }
  });
});
daysButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    toggleContent(daysButtons);
    let content = btn.nextElementSibling;

    if (content.style.display) {
      content.style.display = null;
    } else {
      content.style.display = "block";
    }
  });
});

const toggleContent = contentBtns => {
  contentBtns.forEach(btn => {
    let content = btn.nextElementSibling;
    content.style.display = null;
  });
};
const toggleVideos = contentBtns => {
  contentBtns.forEach(btn => {
    let content = btn.parentElement.parentNode.nextElementSibling;
    content.style.display = null;
  });
};
