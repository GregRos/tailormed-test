
import {CsvReader} from "./file-readers/csv";
import {XlsxReader} from "./file-readers/xlsx";
const content = "./Software_Engineer_Test/Software Engineer"
async function run () {
    const csv = await CsvReader.read(`${content}/hospital_1_Patient.csv`);
    const xlsx = await XlsxReader.read(`${content}/hospital_1_Patient.xlsx`);
    console.log("csv", csv);
    console.log("xlsx", xlsx);
}

run();
