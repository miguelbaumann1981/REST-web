import { Router } from 'express';
interface Options {
    port: number;
    public_path?: string;
    routes: Router;
}
export declare class Server {
    private app;
    private readonly port;
    private readonly publicPath;
    private readonly routes;
    constructor(options: Options);
    start(): Promise<void>;
}
export {};
//# sourceMappingURL=server.d.ts.map