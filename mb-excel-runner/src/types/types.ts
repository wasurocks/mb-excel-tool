export interface TestData {
    Name: string;
    Path: string;
    Method: string;
    Predicate: string;
    Response: string;
    Status: string;
    Timeout: string;
}

interface StubRequestTemplate {
    method: string;
    path: string;
    body: any;
}

interface StubResponseTemplate {
    status: number;
    body: any;
    delay: number;
}

export interface StubTemplate {
    name: string;
    request: StubRequestTemplate;
    response: StubResponseTemplate;
}

export enum Operator {
    Equals = "equals",
    StartsWith = "startsWith",
    EndsWith = "endsWith",
    DeepEquals = "deepEquals",
    Contains = "contains",
    Matches = "matches",
    Exists = "exists",
    Not = "not",
    And = "and",
    Or = "or",
}

export enum HttpMethod {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE",
    PATCH = "PATCH",
    HEAD = "HEAD",
    OPTIONS = "OPTIONS",
}
