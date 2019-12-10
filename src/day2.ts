import fs from "fs";

export class Day2 {

    process() {
        const data: string = fs.readFileSync('data/day2.txt', 'utf8');
        let incode: Array<number> = data.split(/,/).map(Number)
        incode[1] = 12;
        incode[2] = 2;

        for (let i = 0; i < incode.length; i = i + 4) {
            let opcode: number = incode[i];
            let p2: number = incode[i + 1];
            let p3: number = incode[i + 2];
            let replacePos: number = incode[i + 3];

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