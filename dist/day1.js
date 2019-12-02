"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
class Day1 {
    method1(data) {
        const massArray = data.split(/\r?\n/).map(Number);
        let totalFuel = 0;
        for (const i of massArray) {
            totalFuel += (Math.floor((i / 3)) - 2);
        }
        return totalFuel;
    }
    method2(data) {
        return data.split(/\r?\n/)
            .map(Number)
            .map(mass => Math.floor(mass / 3) - 2)
            .reduce((a, b) => a + b);
    }
    run() {
        const data = fs_1.default.readFileSync('data/day1.txt', 'utf8');
        console.log(this.method1(data));
        console.log(this.method2(data));
    }
}
exports.Day1 = Day1;
