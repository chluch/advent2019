import fs from "fs";

export class Day1 {
    method1(data: string): number {
        const massArray: Array<number> = data.split(/\r?\n/).map(Number);
        let totalFuel = 0
        for (const i of massArray) {
            totalFuel += (Math.floor((i / 3)) - 2);
        }
        return totalFuel;
    }

    method2(data: string): number {
        return data.split(/\r?\n/)
            .map(Number)
            .map(mass => Math.floor(mass / 3) - 2)
            .reduce((a, b) => a + b);
    }

    run() {
        const data: string = fs.readFileSync('data/day1.txt', 'utf8');
        console.log(this.method1(data));
        console.log(this.method2(data));
    }
}
