import * as XLSX from "xlsx";
import { TestData } from "./types/types.js";

export const parseExcelFile = (filePath: string): TestData[] => {
    // Read the Excel file
    const workbook = XLSX.readFile(filePath);

    // Assume the first sheet is the one we want
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];

    // Convert the sheet to JSON
    const jsonData = XLSX.utils.sheet_to_json<TestData>(worksheet, {
        raw: false,
    });

    return jsonData;
};
