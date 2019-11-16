import { modalContent, modalCloseButton, modal } from "./modal";
import { videoButtons } from "./videos";

const getComponentData = async (day, component) => {
  let file = `./src/data/${component}.json`;
  const res = await fetch(file);
  const data = await res.json();
  return data;
};
const displayComponent = async (day, component) => {
  let data;
  switch (component) {
    case "strength":
      data = getComponentData(day, component);
      const { gym } = await data;
      displayComponentData("Strength", gym, day, "video");
      break;
    case "activation":
      data = getComponentData(day, component);
      const { activate } = await data;
      displayComponentData("Activation", activate, day, "video");
      break;
    case "aerobic":
      data = getComponentData(day, component);
      let { aerobics } = await data;
      displayComponentData("Aerobic Endurance", aerobics, day, "video");
      break;
    case "anaerobic":
      data = getComponentData(day, component);
      let { anaerobics } = await data;
      displayComponentData("Anaerobic Endurance", anaerobics, day, "other");
      break;
    case "cross-training":
      data = getComponentData(day, component);
      let { cross } = await data;
      displayComponentData("Cross Training", cross, day, "other");
      break;
    case "core-stability":
      data = getComponentData(day, component);
      let { core } = await data;
      displayComponentData("Core Stability", core, day, "video");
      break;
    case "plyometrics":
      data = getComponentData(day, component);
      let { plyo } = await data;
      displayComponentData("Plyometrics", plyo, day, "video");
      break;
    case "flexibility":
      data = getComponentData(day, component);
      let { flex } = await data;
      displayComponentData("Flexibility", flex, day, "video");
      break;
    case "injury-prevention":
      data = getComponentData(day, component);
      let { injury } = await data;
      displayComponentData("Injury Prevention", injury, day, "video");
      break;
    case "tennis":
      data = getComponentData(day, component);
      let { tennis } = await data;
      displayComponentData("Tennis", tennis, day, "other");
      break;
    case "speed-agility":
      data = getComponentData(day, component);
      let { speed } = await data;
      displayComponentData("Speed / Agility", speed, day, "other");
      break;
  }
};
const displayComponentData = (componentTitle, data, day, kind) => {
  debugger;
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
    header = `	<div class="strength">
							<div class="strength__row">
								<h2>Training Phase: ${phase} - ${title}: Week ${week} - Day: ${day}</h2>
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
  } else {
    header = `<div class="strength">	
							<div class="strength__row">
								<h2>Phase: ${phase} - ${title}: Week ${week} - Day: ${day}</h2>
							</div>
							<div class="strength__row">
								<div class="strength__col strength__col--title">
									Type
								</div>
								<div class="strength__col strength__col--title">Exercise</div>
								<div class="strength__col strength__col--title">
									Duration
								</div>
								
								<div class="strength__col strength__col--title">
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
    content = `<div class="strength__row">
								<div class="strength__col strength__col--type">${type}</div>
								<div class="strength__col">
									<button class="strength__btn">${exercise}</button>
								</div>
								<div class="strength__col strength__col--reps">${reps}</div>
								<div class="strength__col"><input id="explosive-1" /> kg</div>
								<div class="strength__col"><input id="explosive-2" /> kg</div>
								<div class="strength__col"><input id="explosive-3" /> kg</div>
							</div>
							<div class="strength__col strength__col--video">
							<video width="60%" controls>
								<source
									src="${video}"
									type="video/mp4"
								/>
								Your browser does not support the video tag.
							</video>
						</div>`;
  } else {
    content = `<div class="strength__row">
								<div class="strength__col strength__col--type">${type}</div>
								<div class="strength__col">
									<button class="strength__btn">${exercise}</button>
								</div>
								<div class="strength__col strength__col--reps">${duration}</div>
								<div class="strength__col strength__col--reps">${description}</div>
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
