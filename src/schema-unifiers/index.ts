import {Container} from "../common/container";

import hospital1 from "./hospital1";
import hospital2 from "./hospital2";
import {Unifier} from "./types";

export const HospitalUnifiers = new Container<Unifier>();

HospitalUnifiers.add(
    hospital1,
    hospital2
);

