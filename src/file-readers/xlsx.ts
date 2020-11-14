import * as xlsx from "xlsx";
import {promises as fs} from "fs";
import {matrixWithHeaderToObjects} from "./common";
import {TabularFileReader} from "./types";
export default {
    key: "xlsx",
    async parse(path: Buffer) {
        const data = await fs.readFile(path, {
            encoding: null
        });
        const file = await xlsx.read(data);
        const matrix = xlsx.utils.sheet_to_json(file.Sheets.Sheet1, {
            header: 1
        }) as unknown[][];
        return matrixWithHeaderToObjects(matrix);
    }
} as TabularFileReader;
