import { componentButtons } from "./mods/components";
import { btnsOpenClose } from "./mods/buttons";

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
componentButtons(classArray);
btnsOpenClose(".phases__btn");
btnsOpenClose(".weeks__btn");
btnsOpenClose(".days__btn");
