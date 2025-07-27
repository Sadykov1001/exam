import { Button } from 'antd'
import React from 'react'
import StatusIcon from "@mui/icons-material/Check";
import StatusIcon2 from "@mui/icons-material/Clear";

const Todo = ({ data, deleteData , editData}) => {
	return (
		<table className='w-[100%]'>
			<thead>
				<tr className='text-center border-white border '>
					<th className='dark:border-white border'>ID</th>
					<th className='dark:border-white border'>Img</th>
					<th className='dark:border-white border'>Name</th>
					<th className='dark:border-white border'>Actions</th>
				</tr>
			</thead>
			<tbody className='text-center'>
				{data.map((e, i) => {
					return (
						<tr className='dark:border-white border' key={i}>
							<td className='dark:border-white border'>{i + 1}</td>
							<td className='dark:border-white border'>
								<div className='flex flex-wrap justify-center gap-2'>
									{e.images?.map(el => (	
										<img
											key={el.id}
											src={` https://to-dos-api.softclub.tj/images/${el.imageName}`}
											alt='user'
											className='w-16 h-16 object-cover rounded-md border'
										/>
									))}
								</div>
							</td>
							<td className='dark:border-white border'>{e.name}</td>
				
							<td className='dark:border-white border flex justify-center gap-[10px]'>
								<button onClick={() => deleteData(e.id)}>🗑️</button>
								<Button
                  size="small"
                  variant="outlined"
                  onClick={() => editData(e.id)}
                  color={e.isCompleted == true ? "success" : "error"}
                  startIcon={
                    e.isCompleted == true ? <StatusIcon /> : <StatusIcon2 />
                  }
                >
                  {e.isCompleted == true ? "Active" : "Inactive"}
                </Button>
								<button>info</button>
								<button>✒️</button>
							</td>
						</tr>
					)
				})}
			</tbody>
		</table>
	)
}

export default Todo
