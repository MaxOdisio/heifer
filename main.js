import { moo } from "./moo.js";
import { say } from "cowsay";
const myName = "Max";
console.log(say({ text: moo(myName) }));
