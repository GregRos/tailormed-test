import dayjs from "dayjs";
import {Patient, Treatment, SchemaUnifier} from "../types";

export default {
    key: "hospital2",
    patient(obj: any) {
        return {
            PatientId: obj.PatientId + "",
            MRN: obj.MRN + "",
            DateOfBirth: dayjs(obj.PatientDOB, "MM/DD/YYYY").toDate(),
            IsDeceased: obj.IsDeceased === "Y" ? "deceased" : "living",
            Sex: obj.Sex === "Male" ? "male" : "female"
        } as Patient
    },
    treatment(obj: any): Treatment {
        return {
            DisplayName: obj.DisplayName,
            TreatmentId: obj.TreatmentId + "",
            PatientId: obj.PatientId + "",
            StartDate: dayjs(obj.StartDate, "MM/DD/YYYY").toDate()
        }
    }
} as SchemaUnifier;

