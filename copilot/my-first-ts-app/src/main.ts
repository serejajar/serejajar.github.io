enum Priority {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high'
};

enum Status {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
};
type User = {
  name: string,
  status: Status,
  todos: Todo[],
  changeStatus: (newStatus: Status) => void,
  addTodo: (todo: string, priority?: Priority) => void,
  displayTodos: () => void,
  displayActiveTodos: () => void
};
type Todo = {
  todo: string,
  priority: Priority

}
  
const user: User = {
  name: '',
  status: Status.ACTIVE,
  todos: [],
  changeStatus(newStatus) {
    if (Object.values(Status).includes(newStatus)) {
      this.status = newStatus;
      console.log(`User status changed to ${newStatus}`);
    } else {
      console.error('Invalid status');
    }
  },

  changeStatus(newStatus: Status) {
    if (Object.values(Status).includes(newStatus)) {
      this.status = newStatus;
      console.log(`User status changed to ${newStatus}`);
    } else {
      console.error('Invalid status');
    }
  },

  addTodo(todo, priority = Priority.MEDIUM) {
    this.todos.push({ todo, priority });
    console.log(`Todo added: ${todo} (Priority: ${priority})`);
  },

  displayTodos() {
    console.log(`Todos for ${this.name}:`);
    this.todos.forEach(todo => console.log(`${todo.todo} (Priority: ${todo.priority})`));
  },

  displayActiveTodos() {
    console.log(`Active Todos for ${this.name}:`);
    this.todos
      .filter(todo => todo.priority !== Priority.HIGH)
      .forEach(todo => console.log(`${todo.todo} (Priority: ${todo.priority})`));
  }
};

user.name = 'John';
user.changeStatus(Status.ACTIVE);
user.addTodo('take delivery', Priority.HIGH);
user.addTodo('stocktaking', Priority.HIGH);
user.addTodo('collect the order');
user.addTodo('throw out the trash', Priority.LOW);
user.displayTodos();
user.displayActiveTodos();
user.changeStatus(Status.INACTIVE);
