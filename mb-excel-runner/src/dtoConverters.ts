import { StubTemplate, TestData } from "./types/types.js";

export const convertTestDataToStubTemplate = (
    testData: TestData
): StubTemplate => {
    return {
        name: testData.Name,
        request: {
            method: testData.Method,
            path: testData.Path,
            body: JSON.parse(testData.Predicate),
        },
        response: {
            status: parseInt(testData.Status),
            body: JSON.parse(testData.Response),
            delay: parseInt(testData.Timeout),
        },
    };
};
