import type { Todo } from '@/types/todos'
import { SwipeableListItem } from 'react-swipeable-list'

export function Todo(todo: Todo) {
    return <SwipeableListItem key={todo.id}>{todo.text}</SwipeableListItem>
}
