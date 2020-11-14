import {HospitalCode} from "./schema-unifiers/types";
import {Format} from "./file-readers/types";
import {promises as fs} from "fs";
import {FileReaderContainer} from "./file-readers";
import {HospitalUnifiers} from "./schema-unifiers";

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

export async function readFile(job: JobInfo) {
    const patientData = await loadFile(job.patient);
    const treatmentData = await loadFile(job.treatment);
    const schemaUnifier = HospitalUnifiers.get(job.hospital);
    const unifiedPatientData = schemaUnifier.patient(patientData);
    const unifiedTreatmentData = schemaUnifier.treatment(treatmentData);

}
