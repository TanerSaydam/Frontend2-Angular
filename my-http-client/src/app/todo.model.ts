export class TodoModel{
    userId: number = 0;
    id: number = 0;
    title: string = "";
    completed: boolean = false;

    // constructor(userId: number, id: number, title: string, completed:boolean){
    //     this.userId = userId;
    //     this.id = id;
    //     this.title = title;
    //     this.completed = completed;
    // }
    // userId: number;
    // id: number;
    // title: string;
    // completed: boolean;
}

//const todo = new TodoModel(1,1,"adad",false);
const todo = new TodoModel();
todo.userId = 1;
todo.id = 1;
todo.title = "1";
todo.completed = false;