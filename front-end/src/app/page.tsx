'use client'

import { taskService } from '@/services/task.service'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import { ChangeEventHandler, useState } from 'react'
import TaskItem from './TaskItem'

export interface ITask {
	text: string
	isCompleted: boolean
	id: number
}

const Home = () => {
	const { data, isSuccess } = useQuery({
		queryKey: ['tasks'],
		queryFn: () => taskService.getAll(),
	})
	return (
		<div>
			{isSuccess && data.map(task => <TaskItem task={task} key={task.id} />)}
		</div>
	)
}

export default Home
