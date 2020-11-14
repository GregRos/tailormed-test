import test from "ava";
import {loadFile} from "../lib/import-job";
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
})

