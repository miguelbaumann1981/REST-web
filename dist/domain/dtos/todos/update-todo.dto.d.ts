export declare class UpdatedTodoDto {
    readonly id?: number | undefined;
    readonly text?: string | undefined;
    readonly completedAt?: string | undefined;
    private constructor();
    get values(): {
        [key: string]: any;
    };
    static update(props: {
        [key: string]: any;
    }): [string?, UpdatedTodoDto?];
}
//# sourceMappingURL=update-todo.dto.d.ts.map