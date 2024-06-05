export class Todo {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public done: boolean,
    public created_at: Date,
    public updated_at: Date,
  ) {}
}
