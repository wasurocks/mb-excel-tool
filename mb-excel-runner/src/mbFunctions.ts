import { HttpMethod, StubTemplate } from "./types/types.js";
import { Stub } from "./mb/stub.js";

const getHttpMethod = (method: string): HttpMethod => {
    switch (method) {
        case "GET":
            return HttpMethod.GET;
        case "POST":
            return HttpMethod.POST;
        case "PUT":
            return HttpMethod.PUT;
        case "DELETE":
            return HttpMethod.DELETE;
        default:
            throw new Error(`Unsupported HTTP method: ${method}`);
    }
};

export const createStubFromTemplate = (template: StubTemplate): Stub => {
    const httpMethod = getHttpMethod(template.request.method);
    return new Stub()
        .withName(template.name)
        .withPredicate({
            and: [
                {
                    equals: {
                        method: httpMethod,
                        path: template.request.path,
                    },
                },
                {
                    or: [
                        {
                            equals: {
                                body: template.request.body,
                            },
                        },
                    ],
                },
            ],
        })
        .withResponse({
            is: {
                statusCode: template.response.status,
                body: template.response.body,
            },
            behaviors: [
                {
                    wait: template.response.delay || 0,
                },
            ],
        });
};
