export class Context {
  req: { headers: Map<string, string> };
  headers: Map<string, string>;

  constructor() {
    const headers: Map<string, string> = new Map();
    this.req = {headers};
    this.headers = new Map();
  }

  setHeader(key: string, value: string) {
    // this.req.headers.set(key, value);
    this.headers.set(key, value);
  }
}
