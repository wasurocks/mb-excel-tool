import { Stub } from "./stub.js";

export class Imposter {
    protocol = "http";
    port: number = 0;
    stubs: any[] = [];
    name: string | undefined = undefined;
    numberOfRequests = 0;
    requests = [];

    withStub(s: Stub) {
        this.stubs.push(s);
        return this;
    }

    withPort(p: number) {
        this.port = p;
        return this;
    }

    withName(name: string) {
        this.name = name;
        return this;
    }
}
