"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
class Day2 {
    part1(noun, verb) {
        const data = fs_1.default.readFileSync('data/day2.txt', 'utf8');
        let incode = data.split(/,/).map(Number);
        incode[1] = noun;
        incode[2] = verb;
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
        return incode[0];
    }
    part2() {
        let goalOpcode = 19690720;
        for (let n = 0; n < 100; n++) {
            for (let v = 0; v < 100; v++) {
                const output = this.part1(n, v);
                if (output === goalOpcode) {
                    return 100 * n + v;
                }
            }
        }
    }
}
exports.Day2 = Day2;
