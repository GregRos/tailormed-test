// I don't know the range of these values. Might be more or less.
export type DeceasedStatus = "living" | "deceased" | "hospice";

// I don't know the range of these values. 'Intersex' might also be valid for example.
export type Sex = "male" | "female";
export interface Patient {
    PatientId: string;
    MRN: string;
    DateOfBirth: Date;
    IsDeceased: string;
    Sex: string;
}

export interface Treatment {
    TreatmentId: string;
    PatientId: string;
    StartDate: Date;
    DisplayName: string;
}

export interface SchemaUnifier {
    key: HospitalCode;
    patient(obj: any): Patient;
    treatment(obj: any): Treatment;
}

export type HospitalCode = "hospital1" | "hospital2";
