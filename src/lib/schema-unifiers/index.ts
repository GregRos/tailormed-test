import {Container} from "../common/container";

import hospital1 from "./hospital1";
import hospital2 from "./hospital2";
import {SchemaUnifier} from "./types";

export const SchemaUnifierContainer = new Container<SchemaUnifier>();

SchemaUnifierContainer.add(
    hospital1,
    hospital2
);

