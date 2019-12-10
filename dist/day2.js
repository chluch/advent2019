"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
class Day2 {
    process() {
        const data = fs_1.default.readFileSync('data/day2.txt', 'utf8');
        let incode = data.split(/,/).map(Number);
        incode[1] = 12;
        incode[2] = 2;
        for (let i = 0; i < incode.length; i = i + 4) {
            let opcode = incode[i];
            let p2 = incode[i + 1];
            let p3 = incode[i + 2];
            let replacePos = incode[i + 3];
            if (opcode === 1) {
                incode[replacePos] = incode[p2] + incode[p3];
            }
            else if (opcode === 2) {
                incode[replacePos] = incode[p2] * incode[p3];
            }
            else if (opcode === 99) {
                break;
            }
            else {
                console.log("Error: This Opcode does not exist.");
            }
        }
        console.log(incode);
        return incode;
    }
}
exports.Day2 = Day2;
