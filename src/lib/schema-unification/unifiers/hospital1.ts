import dayjs from "dayjs";
import {DeceasedStatus, Patient, Treatment, SchemaUnifier} from "../types";

export function convertDeceased(str: string): DeceasedStatus {
    switch (str) {
        case "Active":
            return "living";
        case "Deceased":
            return "deceased";
        case "Hospice":
            return "hospice";
        default:
            throw new Error(`Unknown deceased status ${str}`)
    }
}

export default {
    key: "hospital1",
    patient(obj: any) {
        return {
            PatientId: obj.PatientID + "",
            MRN: obj.MRN + "",
            DateOfBirth: dayjs(obj.PatientDOB, "MM/DD/YYYY HH:mm").toDate(),
            IsDeceased: convertDeceased(obj.IsDeceased),
            Sex: obj.Sex === "Male" ? "male" : "female"
        } as Patient
    },
    treatment(obj: any): Treatment {
        return {
            DisplayName: obj.DisplayName,
            TreatmentId: obj.TreatmentID + "",
            PatientId: obj.PatientID + "",
            StartDate: dayjs(obj.StartDate, "MM/DD/YYYY").toDate()
        }
    }
} as SchemaUnifier;
