// import { taskService } from '@/services/task.service'
import { ITask } from './page'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Pencil, Trash2 } from 'lucide-react'

const TaskItem = ({ task }: { task: ITask }) => {
	const client = useQueryClient()
	// const { mutate: complete } = useMutation({
	// 	mutationKey: ['completeTask'],
	// 	mutationFn: () =>
	// 		taskService.completeTask(task.id!, {
	// 			text: task.text,
	// 			isCompleted: !task.isCompleted,
	// 		}),
	// 	onSuccess: () => {
	// 		client.invalidateQueries({
	// 			queryKey: ['tasks'],
	// 		})
	// 	},
	// })
	// const { mutate: deleteTask } = useMutation({
	// 	mutationKey: ['deleteTask'],
	// 	mutationFn: (id: number) => taskService.deleteTask(id),
	// 	onSuccess: () => {
	// 		client.invalidateQueries({
	// 			queryKey: ['tasks'],
	// 		})
	// 	},
	// })
	return (
		<div
			// className={`w-[408px] h-[60px] border rounded-md flex items-center justify-between p-[10px] box-border hover:border-green-500 transition`}
			className={`w-[408px] h-[60px] rounded-md flex items-center justify-between p-[10px] box-border ${
				task.isCompleted
					? 'border-sky-400 border text-sky-600 line-through'
					: 'border'
			}`}
		>
			<div className={`text-black`}>{task.text}</div>
			<div className={`flex gap-2`}>
				<input
					type='checkbox'
					className={`cursor-pointer`}
					onChange={async () => {
						if (task.id) {
							// complete()
							// const data = await taskService.getAll()
							// console.log(data);
						}
					}}
					checked={task.isCompleted}
				/>
				<button
					type='button'
					onClick={async () => {
						if (task.id) {
							// deleteTask(task.id)
						}
					}}
				>
					<Trash2
						className={`text-red-500 w-[20px] h-[20px] hover:text-red-600 transition`}
					/>
				</button>
				<button type='button'>
					<Pencil
						className={`h-[20px] w-[20px] text-cyan-600 hover:text-cyan-700 transition`}
					/>
				</button>
			</div>
		</div>
	)
}

export default TaskItem
