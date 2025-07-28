import StatusIcon from '@mui/icons-material/Check'
import StatusIcon2 from '@mui/icons-material/Clear'
import { Button, Modal } from 'antd'
import axios from 'axios'
import { useFormik } from 'formik'
import { useState } from 'react'
import { Api } from '../config/api'
import { Link } from 'react-router-dom'

const Todo = ({ data, deleteData, editData, GetData }) => {
	const [isModalOpen, setIsModalOpen] = useState(false)

	const showModal = () => {
		setIsModalOpen(true)
	}

	const handleOk = () => {
		setIsModalOpen(false)
	}

	const handleCancel = () => {
		setIsModalOpen(false)
	}

	const edFormik = useFormik({
		initialValues: {
			name: '',
			description: '',
			id: null,
		},

		onSubmit: async values => {
			const edObj = {
				name: values.name,
				description: values.description,
				id: values.id,
			}

			try {
				await axios.put(Api, edObj)
				GetData()
			} catch (error) {}
		},
	})

	return (
		<table className='w-full border border-gray-300 dark:border-white text-sm'>
			<thead>
				<tr className='bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white text-center'>
					<th className='p-2 border dark:border-white'>ID</th>
					<th className='p-2 border dark:border-white'>Img</th>
					<th className='p-2 border dark:border-white'>Name</th>
					<th className='p-2 border dark:border-white'>Actions</th>
				</tr>
			</thead>

			<tbody className='text-center'>
				{data.map((e, i) => (
					<tr
						key={i}
						className='hover:bg-gray-50 dark:hover:bg-gray-700 border dark:border-white'
					>
						<td className='p-2 border dark:border-white'>{i + 1}</td>

						<td className='p-2 border dark:border-white'>
							<div className='flex flex-wrap justify-center gap-2'>
								{e.images?.map(el => (
									<img
  key={el.id}
  src={`https://to-dos-api.softclub.tj/images/${el.imageName}`}
  alt="user"
  className="w-16 h-16 object-cover rounded-md border"
/>
								))}
							</div>
						</td>

						<td className='p-2 border dark:border-white'>{e.name}</td>

						<td className='p-2 border dark:border-white'>
							<div className='flex flex-wrap justify-center items-center gap-2'>
								<button
									onClick={() => deleteData(e.id)}
									className='text-red-500 hover:text-red-700'
								>
									🗑️
								</button>

								<Button
									size='small'
									variant='outlined'
									onClick={() => editData(e.id)}
									color={e.isCompleted ? 'success' : 'error'}
									startIcon={e.isCompleted ? <StatusIcon /> : <StatusIcon2 />}
								>
									{e.isCompleted ? 'Active' : 'Inactive'}
								</Button>
								<Link to={`/user/${e.id}`}>
									{console.log(e.id)}
									<button className='px-3 py-1 text-blue-600 border border-blue-400 rounded hover:bg-blue-50 dark:hover:bg-blue-900'>
										Info
									</button>
								</Link>

								<Button
									type='primary'
									onClick={() => {
										showModal()
										edFormik.setFieldValue('name', e.name)
										edFormik.setFieldValue('id', e.id)
										edFormik.setFieldValue('description', e.description)
									}}
								>
									Open Modal
								</Button>

								<Modal
									title='Edit Data'
									open={isModalOpen}
									onOk={handleOk}
									onCancel={handleCancel}
								>
									<form onSubmit={edFormik.handleSubmit} className='space-y-4'>
										<input
											type='text'
											name='name'
											value={edFormik.values.name}
											onChange={edFormik.handleChange}
											className='w-full p-2 border rounded'
										/>
										<input
											type='text'
											name='description'
											value={edFormik.values.description}
											onChange={edFormik.handleChange}
											className='w-full p-2 border rounded'
										/>
										<button
											type='submit'
											className='bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition'
										>
											Submit
										</button>
									</form>
								</Modal>
							</div>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}

export default Todo
