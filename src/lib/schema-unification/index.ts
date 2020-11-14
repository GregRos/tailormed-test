import {Container} from "../common/container";

import hospital1 from "./unifiers/hospital1";
import hospital2 from "./unifiers/hospital2";
import {SchemaUnifier} from "./types";

export const schemaUnifierContainer = new Container<SchemaUnifier>();

schemaUnifierContainer.add(
    hospital1,
    hospital2
);

