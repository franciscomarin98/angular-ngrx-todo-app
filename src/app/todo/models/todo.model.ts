export class Todo {
    public id!: number;
    public todo!: string;
    public completed!: boolean;

    constructor(_todo: string) {
        this.todo = _todo;
        this.id = Math.random();
        this.completed = false;
    }
}
