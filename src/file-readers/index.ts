import {Container} from "../common/container";

import csv from "./csv";
import xlsx from "./xlsx";
import {TabularFileReader} from "./types";

export const FileReaderContainer = new Container<TabularFileReader>();
FileReaderContainer.add(csv, xlsx);
