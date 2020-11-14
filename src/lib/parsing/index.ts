import {Container} from "../common/container";

import csv from "./parsers/csv";
import xlsx from "./parsers/xlsx";
import {TabularFileReader} from "./types";

export const FileReaderContainer = new Container<TabularFileReader>();
FileReaderContainer.add(csv, xlsx);
