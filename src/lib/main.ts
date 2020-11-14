import {runImportJob} from "./import-job";
import 'source-map-support/register'
function dataPath(fileName: string) {
    return `./Software_Engineer_Test/Software Engineer/${fileName}`
}

async function run() {
    const result = await runImportJob({
        hospital: "hospital1",
        patient: {
            format: "csv",
            path: dataPath("hospital_1_Patient.csv")
        },
        treatment: {
            format: "xlsx",
            path: dataPath("hospital_1_Treatment.xlsx")
        }
    });

    console.log(result);
}

run();
