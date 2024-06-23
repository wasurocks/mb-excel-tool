export class Stub {
    private name?: string;
    private predicates: any[];
    private responses: any[];

    constructor() {
        this.predicates = [];
        this.responses = [];
    }

    withName(name: string) {
        this.name = name;
        return this;
    }

    withResponse(response: any) {
        this.responses.push(response);
        return this;
    }

    withProxy(proxy: any) {
        this.responses.push(proxy);
        return this;
    }

    withPredicate(predicate: any) {
        this.predicates.push(predicate);
        return this;
    }
}
