import {HospitalCode} from "./schema-unifiers/types";
import {Format} from "./file-readers/types";
import {promises as fs} from "fs";
import {FileReaderContainer} from "./file-readers";
import {SchemaUnifierContainer} from "./schema-unifiers";

export interface HospitalFileInfo {
    path: string;
    format: Format;
}

export interface JobInfo {
    hospital: HospitalCode;
    patient: HospitalFileInfo;
    treatment: HospitalFileInfo;
}

export async function loadFile(file: HospitalFileInfo) {
    const fileReader = FileReaderContainer.get(file.format);
    const data = await fs.readFile(file.path, {
        encoding: null
    });
    return fileReader.parse(data);
}

export async function runImportJob(job: JobInfo) {
    const schemaUnifier = SchemaUnifierContainer.get(job.hospital);
    const rawPatientData = await loadFile(job.patient);
    const patientData = rawPatientData.map(x => schemaUnifier.patient(x));
    const rawTreatmentData = await loadFile(job.treatment);
    const treatmentData = rawTreatmentData.map(x => schemaUnifier.treatment(x));
    return {
        patientData,
        treatmentData
    }

}
