import { Request, Response } from "express";
export declare class TodosController {
    constructor();
    getTodos: (req: Request, res: Response) => Response<any, Record<string, any>>;
    getTodoById: (req: Request, res: Response) => Response<any, Record<string, any>> | undefined;
    createTodo: (req: Request, res: Response) => Response<any, Record<string, any>> | undefined;
    updateTodo: (req: Request, res: Response) => Response<any, Record<string, any>> | undefined;
    deleteTodo: (req: Request, res: Response) => Response<any, Record<string, any>> | undefined;
}
//# sourceMappingURL=controller.d.ts.map