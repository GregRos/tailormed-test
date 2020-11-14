import {parse} from "async-csv";
import {matrixWithHeaderToObjects} from "./common";
import {TabularFileReader} from "./types";

export default {
    key: "csv",
    async parse(data: Buffer) {
        const text = data.toString("utf8");
        const result: any[][] = await parse(text) as any;
        return matrixWithHeaderToObjects(result);
    }
} as TabularFileReader;
