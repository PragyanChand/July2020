export class Task {
    id: number;
    title: string;
    description: string;
    completed: boolean;
    date: Date;

    constructor(id, title, description = ""){
        this.id = id;
        this.title = title;
        this.description = description;
        this.completed = false;
        this.date = new Date();
    }
}

