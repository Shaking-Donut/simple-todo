import { SwipeableList, Type } from 'react-swipeable-list'
import { useTodos } from '@/stores/useTodos'
import { Todo } from '@/components/todo'
import { sortTodos } from '@/utils/sortTodos'

export default function TodoList() {
    const todos = useTodos((state) => state.todos)

    return (
        <SwipeableList type={Type.IOS} fullSwipe>
            {todos.toSorted(sortTodos).map((todo) => (
                <Todo key={todo.id} todo={todo} />
            ))}
        </SwipeableList>
    )
}
