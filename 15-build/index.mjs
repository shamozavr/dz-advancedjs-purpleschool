import { User } from "./user.mjs";
import { Task } from "./task.mjs";

let task1 = new Task('Write some code');

let user1 = new User(task1);

user1.do()