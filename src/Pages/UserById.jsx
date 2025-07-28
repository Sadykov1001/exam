import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Api } from '../config/api'
import { useParams } from 'react-router-dom'

const UserById = () => {
	const [data, setData] = useState({})
	const { id } = useParams()

	async function getId() {
		try {
			const { data } = await axios.get(`${Api}/${id}`)
			setData(data.data)
		} catch (error) {
			console.error(error)
		}
	}

	useEffect(() => {
		getId()
	}, [id])

	return (
		<div className='mt-[100px]'>
			<div className='text-center'>
				
				<div className='ml-[700px]'>
				{data.images?.map((img, i) => (
					<img
						key={i}
						src={`https://to-dos-api.softclub.tj/images/${img.imageName}`}
						alt=''
						className='w-[150px] h-[150px] object-cover rounded-lg'
					/>
				))}

				</div>
				
				<h2 className='text-xl font-semibold'>{data.name}</h2>
				<p className='text-gray-600'>{data.description}</p>

			</div>
			<br /><br /><br />
		</div>
	)
}

export default UserById
