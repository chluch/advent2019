"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
class Day1 {
    calc(mass) {
        return Math.floor(mass / 3) - 2;
    }
    method1(data) {
        const massArray = data.split(/\r?\n/).map(Number);
        let totalFuel = 0;
        for (const i of massArray) {
            totalFuel += this.calc(i);
        }
        return totalFuel;
    }
    method2(data) {
        return data.split(/\r?\n/)
            .map(Number)
            .map(x => this.calc(x))
            .reduce((a, b) => a + b);
    }
    calcActualFuel(mass) {
        let m = mass;
        let sum = 0;
        while (m > 0) {
            m = this.calc(m);
            sum += Math.max(m, 0);
            console.log("current mass: " + m + " sum: " + sum);
        }
        return sum;
    }
    method3(data) {
        return data.split(/\r?\n/)
            .map(Number)
            .map(x => this.calcActualFuel(x))
            .reduce((a, b) => a + b);
    }
    run() {
        const data = fs_1.default.readFileSync('data/day1.txt', 'utf8');
        console.log(this.method1(data));
        console.log(this.method2(data));
        console.log(this.calcActualFuel(14));
        console.log(this.method3(data));
    }
}
exports.Day1 = Day1;
