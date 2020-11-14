import dayjs from "dayjs";
import {DeceasedStatus, Patient, Treatment} from "../types";
import {Unifier} from "../../common/container";

export function convertDeceased(str: string): DeceasedStatus {
    switch (str) {
        case "Active":
            return "living";
        case "Deceased":
            return "deceased";
        case "Hospice":
            return "hospice";
        default:
            throw new Error("Unknown deceased status")
    }
}
export const patient = {
    key: "hospital1/patient",
    unify(obj: any) {
        return {
            PatientId: obj.PatientID + "",
            MRN: obj.MRN + "",
            DateOfBirth: dayjs(obj.PatientDOB, "MM/DD/YYYY HH:mm").toDate(),
            IsDeceased: convertDeceased(obj.IsDeceased),
            Sex: obj.Sex === "Male" ? "male" : "female"
        } as Patient
    }
};

export const treatment = {
    key: "hospital1/treatment",
    unify(obj: any): Treatment {
        return {
            DisplayName: obj.DisplayName,
            TreatmentId: obj.TreatmentId + "",
            PatientId: obj.PatientId + "",
            StartDate: dayjs(obj.StartDate, "MM/DD/YYYY").toDate()
        }
    }
}
