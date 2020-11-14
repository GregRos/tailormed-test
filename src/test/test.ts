import test from "ava";
import {loadFile} from "../lib/import-job";
import hospital1 from "../lib/schema-unification/unifiers/hospital1";
import hospital2 from "../lib/schema-unification/unifiers/hospital2";
import {Patient, Treatment} from "../lib/schema-unification/types";
import dayjs from "dayjs";
test("test csv", async t => {
    const objs = await loadFile({
        path: "./resources/test.csv",
        format: "csv"
    });
    t.deepEqual(objs, [{
        A: "A",
        B: 4,
        C: ""
    }]);
})

test("test xlsx", async t => {
    const objs = await loadFile({
        path: "./resources/test.xlsx",
        format: "xlsx"
    });
    t.deepEqual(objs, [{
        A: 1,
        B: "hi",
        C: ""
    }]);
});

test("hospital1", async t => {
    t.deepEqual(hospital1.patient({
        PatientID: 100,
        MRN: 7000,
        PatientDOB: "4/10/1970 0:00",
        IsDeceased: "Active",
        Sex: "Male"
    }), {
        Sex: "male",
        IsDeceased: "living",
        DateOfBirth: dayjs("4/10/1970 0:00").toDate(),
        PatientId: "100",
        MRN: "7000"
    } as Patient);

    t.deepEqual(hospital1.treatment({
        PatientID: 7000,
        StartDate: "2/1/2019 9:00",
        DisplayName: "Test",
        TreatmentID: 1234
    }), {
        StartDate: dayjs("2/1/2019 9:00").toDate(),
        TreatmentId: "1234",
        DisplayName: "Test",
        PatientId: "7000"
    } as Treatment);
})

test("hospital2", async t => {
    t.deepEqual(hospital2.patient({
        PatientId: 777,
        MRN: 888,
        PatientDOB: "1/25/1940",
        IsDeceased: "N",
        Sex: "Male"
    }), {
        Sex: "male",
        IsDeceased: "living",
        DateOfBirth: dayjs("1/25/1940").toDate(),
        PatientId: "777",
        MRN: "888"
    } as Patient);

    t.deepEqual(hospital2.treatment({
        PatientId: 7000,
        StartDate: "1/25/2017",
        DisplayName: "Test",
        TreatmentId: "X8769"
    }), {
        StartDate: dayjs("1/25/2017").toDate(),
        TreatmentId: "X8769",
        DisplayName: "Test",
        PatientId: "7000"
    } as Treatment);
})
