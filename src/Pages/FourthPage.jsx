import React, { useEffect, useState } from 'react'
import Todo from './todo'
import axios from 'axios'
import { Api } from '../config/api'
import { useFormik } from 'formik'
import { Button, Modal } from 'antd'

const FourthPage = () => {
	const [data, setData] = useState([])

	async function GetData() {
		try {
			const response = await axios.get(Api)
			setData(response.data.data)
		} catch (error) {
			console.log('Error fetching data:', error)
		}
	}

	useEffect(() => {
		GetData()
	}, [])

	const [isModalOpen, setIsModalOpen] = useState(false)

	const showModal = () => setIsModalOpen(true)
	const handleCancel = () => setIsModalOpen(false)

	async function DeletData(id) {
		try {
			await axios.delete(`${Api}?id=${id}`)
			GetData()
		} catch (error) {
			console.log('Delete error:', error)
		}
	}

	const formikAdd = useFormik({
		initialValues: {
			Name: '',
			Images: null,
			Description: '',
		},
		onSubmit: async (values, { resetForm }) => {
			if (!values.Images) {
				alert("Пожалуйста, выберите изображение.");
				return;
			}

			const formData = new FormData()
			formData.append('Name', values.Name)
			formData.append('Images', values.Images)
			formData.append('Description', values.Description)

			console.log('FormData:', {
				Name: values.Name,
				Images: values.Images,
				Description: values.Description,
			})

			try {
				await axios.post(Api, formData, {
					headers: {
						'Content-Type': 'multipart/form-data',
					},
				})
				GetData()
				resetForm()
				setIsModalOpen(false)
			} catch (error) {
				console.log('Add error:', error.response?.data || error)
			}
		},
	})
		const editData = async (id) => {
					try {
							await axios.put(`https://to-dos-api.softclub.tj/completed?id=${id}`);
							GetData();  
					} catch (error) {
							console.error(error);
					}
			};

	const handleChangeFile = e => {
		const file = e.target.files[0]
		formikAdd.setFieldValue('Images', file)
	}

	return (
		<div style={{ padding: '20px' }}>
			<Button type="primary" onClick={showModal}>Add</Button>

			<Modal
				title="Добавить пользователя"
				open={isModalOpen}
				onCancel={handleCancel}
				footer={null}
			>
				<form onSubmit={formikAdd.handleSubmit} encType="multipart/form-data">
					<div style={{ marginBottom: '10px' }}>
						<label htmlFor="Name">Name</label><br />
						<input
							type="text"
							name="Name"
							id="Name"
							placeholder="Name:"
							onChange={formikAdd.handleChange}
							value={formikAdd.values.Name}
							style={{ width: '100%', padding: '5px' }}
						/>
					</div>

					<div style={{ marginBottom: '10px' }}>
						<label htmlFor="Images">Image</label><br />
						<input
							type="file"
							name="Images"
							id="Images"
							accept="image/*"
							onChange={handleChangeFile}
							style={{ width: '100%' }}
						/>
					</div>

					<div style={{ marginBottom: '10px' }}>
						<label htmlFor="Description">Discraption</label>
						<input
							type="text"
							name="Description"
							id="Description"
							placeholder="Description"
							onChange={formikAdd.handleChange}
							value={formikAdd.values.Description}
							style={{ width: '100%', padding: '5px' }}
						/>
					</div>

					<Button type="primary" htmlType="submit">Submit</Button>
				</form>
			</Modal>

			<Todo data={data} deleteData={DeletData} editData={editData} />
		</div>
	)
}

export default FourthPage
