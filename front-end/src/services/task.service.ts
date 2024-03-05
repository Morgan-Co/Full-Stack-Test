import { ITask } from '@/app/page'
import axios from 'axios'

class Service {
	async getAll() {
		const response = await axios.get<ITask[]>('http://localhost:4200/task')
		return response.data
	}

	async createTask(data: ITask) {
		const response = await axios.post<ITask>('http://localhost:4200/task', data)
		return response.data
	}
}

export const taskService = new Service()
