import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { addTodo, removeTodo,} from "../features/todos/todoSlice";
import type { TodoType } from "../types/todosTypes";

const BoardTodo = () => {
    const [text, setText] = useState("");
    const dispatch = useDispatch();
      const todos = useSelector((state) => state.todos);

}

export default BoardTodo;