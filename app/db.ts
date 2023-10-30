export interface Todo {
    id: number,
    content: string,
    completed: boolean,
};

export interface User {
    id: number,
    username: string,
    passwordHash: string
};

var todos: Todo[] = [
    {id: 0, content: "test", completed: false}
]

var users: User[] = [
    {
        id: 0,
        username: "VariantAbdulaziz",
        passwordHash: "$2b$10$BrhfRstw4Yq861Y9uxOuXOp/cQa2VCTfdOIlzKm872lgQWeBsYTAi"
    }
]

export function getUsers(): User[] {
    return users;
}
  
export function addUser(user: User): void {
    users.push(user);
}

export function getTodos(): Todo[] {
    return todos;
}
  
export function AddTodo(todo: Todo): void {
    todos.push(todo);
}
