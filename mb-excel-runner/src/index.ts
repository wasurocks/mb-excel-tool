import { createStubFromTemplate } from "./mbFunctions.js";
import { parseExcelFile } from "./excelParser.js";
import { Mountebank } from "./mb/mountebank.js";
import { Imposter } from "./mb/imposter.js";
import { convertTestDataToStubTemplate } from "./dtoConverters.js";

const run = async () => {
    const mb = new Mountebank(process.env.MB_BASE_URL);
    const filePath = "./excel-files/example.xlsx";
    const parsedData = parseExcelFile(filePath);

    let imposter = new Imposter().withPort(4545);

    parsedData
        .map((data) => convertTestDataToStubTemplate(data))
        .map((data) => createStubFromTemplate(data))
        .reduce((acc, stub) => acc.withStub(stub), imposter);

    console.log(JSON.stringify(imposter, null, 2));

    await mb.createImposter(imposter);
};

run();
