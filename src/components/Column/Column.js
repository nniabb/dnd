import {Task} from "../Task/Task"
import "./Column.css"
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable"

export const Column = ({tasks}) => {
  return (
    <div className='col'>
      
        <SortableContext
         items={tasks}
         strategy={verticalListSortingStrategy}>
        {tasks.map((task) => (
         <Task id={task.id}
          title={task.title} 
          key={task.id}> </Task>   
        ))}

        </SortableContext>
    </div>
  )
}
