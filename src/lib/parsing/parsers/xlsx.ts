import * as xlsx from "xlsx";
import {promises as fs} from "fs";
import {matrixWithHeaderToObjects} from "../common";
import {TabularFileReader} from "../types";
export default {
    key: "xlsx",
    async parse(data: Buffer) {
        const file = await xlsx.read(data);
        const matrix = xlsx.utils.sheet_to_json(file.Sheets.Sheet1, {
            header: 1,
            blankrows: false,
            defval: "",
            // This will resolve dates and stuff
            raw: false,
            rawNumbers: true
        }) as unknown[][];

        // remove empty rows
        return matrixWithHeaderToObjects(matrix);
    }
} as TabularFileReader;
