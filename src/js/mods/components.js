import { modalContent, modalCloseButton, modal } from "./modal";
import { videoButtons } from "./videos";

const getComponentData = async component => {
  let file = `./src/data/${component}.json`;
  const res = await fetch(file);
  const data = await res.json();
  return data;
};
const displayComponent = async (day, component) => {
  let data = getComponentData(component);
  switch (component) {
    case "strength":
      const { gym } = await data;
      displayComponentData("Strength", gym, day, "video");
      break;
    case "activation":
      const { activate } = await data;
      displayComponentData("Activation", activate, day, "video");
      break;
    case "aerobic":
      let { aerobics } = await data;
      displayComponentData("Aerobic Endurance", aerobics, day, "video");
      break;
    case "anaerobic":
      let { anaerobics } = await data;
      displayComponentData("Anaerobic Endurance", anaerobics, day, "other");
      break;
    case "cross-training":
      let { cross } = await data;
      displayComponentData("Cross Training", cross, day, "other");
      break;
    case "core-stability":
      let { core } = await data;
      displayComponentData("Core Stability", core, day, "video");
      break;
    case "plyometrics":
      let { plyo } = await data;
      displayComponentData("Plyometrics", plyo, day, "video");
      break;
    case "flexibility":
      let { flex } = await data;
      displayComponentData("Flexibility", flex, day, "video");
      break;
    case "injury-prevention":
      let { injury } = await data;
      displayComponentData("Injury Prevention", injury, day, "video");
      break;
    case "tennis":
      let { tennis } = await data;
      displayComponentData("Tennis", tennis, day, "other");
      break;
    case "speed-agility":
      let { speed } = await data;
      displayComponentData("Speed / Agility", speed, day, "other");
      break;
  }
};
const displayComponentData = (componentTitle, data, day, kind) => {
  let total = "";
  data.days.forEach(item => {
    if (day.toString() === item.day.toString()) {
      total += componentHeader(
        item.phase,
        item.week,
        item.day,
        componentTitle,
        kind
      );
      if (kind === "video") {
        item.exercises.forEach(i => {
          total += componentContent(
            i.type,
            i.exercise,
            null,
            null,
            i.reps,
            i.video,
            "video"
          );
        });
      } else {
        total += componentContent(
          item.type,
          item.exercise,
          item.duration,
          item.description,
          null,
          null,
          componentTitle
        );
      }
      total += `</div>`;
    }
  });
  modal.innerHTML = modalContent(total, componentTitle);
  modalCloseButton();

  videoButtons();
};
const componentHeader = (phase, week, day, title, kind) => {
  let header;
  if (kind === "video") {
    header = `	<div class="table">
							<div class="table__row">
								<h2>Training Phase: ${phase} - ${title}: Week ${week} - Day: ${day}</h2>
							</div>
							<div class="table__row">
								<div class="table__col table__col--title">
									Exercise Type
								</div>
								<div class="table__col table__col--title">Exercise</div>
								<div class="table__col table__col--title">
									Repetitions
								</div>
								<div class="table__col table__col--title">1</div>
								<div class="table__col table__col--title">2</div>
								<div class="table__col table__col--title">3</div>
							</div>`;
  } else {
    header = `<div class="table">	
							<div class="table__row">
								<h2>Phase: ${phase} - ${title}: Week ${week} - Day: ${day}</h2>
							</div>
							<div class="table__row">
								<div class="table__col table__col--title">
									Type
								</div>
								<div class="table__col table__col--title">Exercise</div>
								<div class="table__col table__col--title">
									Duration
								</div>
								
								<div class="table__col table__col--title">
									Description
								</div>
              </div>`;
  }

  return header;
};
const componentContent = (
  type,
  exercise,
  duration,
  description,
  reps,
  video,
  kind
) => {
  let content;
  if (kind === "video") {
    content = `<div class="table__row">
								<div class="table__col table__col--type">${type}</div>
								<div class="table__col">
									<button class="table__btn">${exercise}</button>
								</div>
								<div class="table__col table__col--reps">${reps}</div>
								<div class="table__col"><input id="explosive-1" /> kg</div>
								<div class="table__col"><input id="explosive-2" /> kg</div>
								<div class="table__col"><input id="explosive-3" /> kg</div>
							</div>
							<div class="table__col table__col--video">
							<video width="60%" controls>
								<source
									src="${video}"
									type="video/mp4"
								/>
								Your browser does not support the video tag.
							</video>
						</div>`;
  } else {
    content = `<div class="table__row">
								<div class="table__col table__col--type">${type}</div>
								<div class="table__col">
									<button class="table__btn">${exercise}</button>
								</div>
								<div class="table__col table__col--reps">${duration}</div>
								<div class="table__col table__col--reps">${description}</div>
							</div>
              `;
  }

  return content;
};

const componentButtons = arr => {
  const btns = document.querySelectorAll(".training-component");
  btns.forEach(btn => {
    btn.addEventListener("click", () => {
      modal.style.display = "block";
      const currentDay = btn.parentElement.id;
      const btnClassList = btn.classList;
      arr.forEach(item => {
        console.log(item);
        if (btnClassList.contains(item)) {
          let component = item.replace("training-component--", "");

          displayComponent(currentDay, component);
        }
      });
    });
  });
};

export {
  getComponentData,
  displayComponentData,
  displayComponent,
  componentButtons
};
