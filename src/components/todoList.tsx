import { useTodos } from '@/stores/useTodos'
import { SwipeableList } from 'react-swipeable-list'
import { Todo } from '@/components/todo'

export default function TodoList() {
    const todos = useTodos((state) => state.todos)

    return (
        <SwipeableList>
            {todos.map((todo) => (
                <Todo key={todo.id} {...todo} />
            ))}
        </SwipeableList>
    )
}
