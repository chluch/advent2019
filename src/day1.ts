import fs from "fs";

export class Day1 {
    calc(mass: number): number {
        return Math.floor(mass / 3) - 2
    }

    method1(data: string): number {
        const massArray: Array<number> = data.split(/\r?\n/).map(Number);
        let totalFuel = 0
        for (const i of massArray) {
            totalFuel += this.calc(i);
        }
        return totalFuel;
    }

    method2(data: string): number {
        return data.split(/\r?\n/)
            .map(Number)
            .map(x => this.calc(x))
            .reduce((a, b) => a + b);
    }

    calcActualFuel(mass: number): number { 
        let m = mass
        let sum = 0
        while (m > 0) {
            m = this.calc(m);
            sum += Math.max(m, 0);
            console.log("current mass: " + m + " sum: " + sum);
        }
        return sum;
    }

    method3(data: string): number {
        return data.split(/\r?\n/)
            .map(Number)
            .map(x => this.calcActualFuel(x))
            .reduce((a, b) => a + b);
    }

    run() {
        const data: string = fs.readFileSync('data/day1.txt', 'utf8');
        console.log(this.method1(data));
        console.log(this.method2(data));
        console.log(this.calcActualFuel(14));
        console.log(this.method3(data));
    }
}

