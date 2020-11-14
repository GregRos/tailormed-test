export type Format = "csv" | "xlsx";

export interface TabularFileReader {
    key: Format;
    parse(data: Buffer): Promise<object[]>;
}
