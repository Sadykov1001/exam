import React from 'react'
import header from '../assets/ss1.png'
import logo1 from '../assets/award.png'
import pic from '../assets/pic.png'
import pic2 from '../assets/pic copy.png'
import logo2 from '../assets/award (1).png'
import logo3 from '../assets/award (2).png'
import logo4 from '../assets/award (3).png'
import img1 from '../assets/illustration.png'
import circle1 from '../assets/circle-progress.png'
import circle2 from '../assets/circle-progress (1).png'
import circle3 from '../assets/circle-progress (2).png'
import gg1 from '../assets/Benefits.png'
import circle4 from '../assets/circle-progress (3).png'
import group from '../assets/image (16).png'
import rep from '../assets/rep.png'
import bg2 from '../assets/image.png'
import card1 from '../assets/case-card.png'
import card3 from '../assets/case-card (1).png'
import card2 from '../assets/hover.png'
import ss2 from '../assets/ss2.png'
import ss3 from '../assets/ss3.png'
import ss5 from '../assets/ss5.png'

import clogo1 from '../assets/client-logo.png'
import clogo2 from '../assets/client-logo (1).png'
import clogo3 from '../assets/client-logo (2).png'
import clogo4 from '../assets/client-logo (3).png'
import clogo5 from '../assets/client-logo (4).png'
import clogo6 from '../assets/client-logo (5).png'

import { Carousel } from 'antd'
import {
	AppleOutlined,
	ArrowLeftOutlined,
	ArrowRightOutlined,
	CheckOutlined,
	DownOutlined,
	FieldTimeOutlined,
	MinusOutlined,
	PlayCircleOutlined,
	PlusOutlined,
	XOutlined,
} from '@ant-design/icons'
import Btns from '../../Btns'
import { CircularProgress } from '@mui/material'
import CircleProgress from '../components/CircleProgress'

const contentStyle = {
	height: '160px',
	color: '#fff',
	lineHeight: '160px',
	textAlign: 'center',
	background: '#364d79',
}

const FirstPage = () => {
	return (
		<div className='dark:bg-black bg-white'>
			<header style={{ backgroundImage: `url(${header})` }}>
				<div className='w-[100%] sm:py-[150px] py-[50px] text-center sm:text-start sm:items-center  sm:flex gap-[200px] sm:px-[120px]'>
					<div className='text-white '>
						<span className='sm:text-[55px] text-[30px] font-bold '>
							Best <h1 className='text-[#6C68DB]'>SEO & Marketing </h1>{' '}
							Solutions for You
						</span>{' '}
						<br />
						<br />
						<div className='flex gap-[20px] justify-center sm:justify-start'>
							<button className='py-[5px] px-[10px] border-[1px] rounded-xl	 border-white'>
								Get a free analysis
							</button>
							<div className='flex items-center gap-[5px] '>
								<PlayCircleOutlined className='text-[40px]' />
								<p>Play video</p>
							</div>
						</div>
					</div>
					<img src={img1} alt='' />
				</div>
				<div className='sm:flex sm:justify-between text-white sm:px-[150px]'>
					<div className='text-center'>
						<FieldTimeOutlined className='text-[30px]' />
						<p>SEO Content Strategy</p>
					</div>{' '}
					<br />
					<div className='text-center'>
						<AppleOutlined className='text-[30px]' />
						<p>Content Marketing</p>
					</div>{' '}
					<br />
					<div className='text-center'>
						<AppleOutlined className='text-[30px]' />
						<p>Website & Social Media Marketing</p>
					</div>
				</div>
				<br />
				<br />
			</header>
			<div className='sm:flex sm:px-[150px]  sm:gap-[150px] py-[50px] text-center sm:text-start'>
				<p className='sm:w-[400px] font-semibold'>
					Createx SEO Agency is a full-service digital marketing agency. We help
					businesses make more money through a wealth of performance data and
					market research. We create science-based SEO strategies to empower our
					clients.
				</p>
				<div className='flex flex-wrap sm:pt-[0px] py-[20px] w-[40%]'>
					<img src={logo1} alt='' />
					<img src={logo2} alt='' />
					<img src={logo3} alt='' />
					<img src={logo4} alt='' />
				</div>
			</div>

			<Carousel autoplay className='flex'>
				<div className='flex justify-center sm:pl-[600px] pl-[120px]'>
					<img src={clogo1} alt='' />
				</div>
				<div className='sm:pl-[600px] pl-[120px]'>
					<img src={clogo2} alt='' />
				</div>
				<div className='flex justify-center sm:pl-[600px] pl-[120px]'>
					<img src={clogo3} alt='' />
				</div>
				<div className='sm:pl-[600px] pl-[120px]'>
					<img src={clogo4} alt='' />
				</div>
				<div className='sm:pl-[600px] pl-[120px]'>
					<img src={clogo5} alt='' />
				</div>
				<div className='flex justify-center sm:pl-[600px] pl-[120px]'>
					<img src={clogo6} alt='' />
				</div>
			</Carousel>

			<div className='sm:flex sm:px-[100px] text-center sm:text-start sm:items-center'>
				<div className='sm:pb-[0px] pb-[20px]'>
					<h2 className='font-bold text-[40px]'>Createx Agency </h2>
					<br />
					<p className='text-[#787A80] sm:w-[60%]'>
						Lacus ac mollis vitae viverra. Tincidunt est, feugiat montes,
						viverra ullamcorper mi dui, nulla pharetra. Sapien urna nullam elit
						diam mauris orci. Volutpat quam tempus justo, aliquam. Tortor
						ultrices mattis eget orci eu nisi sed augue odio. Et senectus risus,
						pharetra, tristique libero. Dolor risus ac quam dictum mattis
						ultrices laoreet sapien. Feugiat lacus, suscipit eu sociis et quis
						hendrerit. Cras at ac magna ultricies orci.
					</p>
					<br />
					<Btns text={'More about us'} />
				</div>
				<img src={group} alt='' />
			</div>
			<br />
			<br />
			<br />

			<div className='sm:flex justify-center gap-[70px]'>
				<div className='text-center'>
					<CircleProgress percent={"75"} />
					<br />
					<p>Years of experience</p>
				</div>
				<br />
				<div className='text-center'>
										<CircleProgress percent={"75"}/>

					<br />
					<p>Awards</p>
				</div>
				<br />
				<div className='text-center'>
										<CircleProgress percent={"75"}/>

					<br />
					<p>Projects</p>
				</div>
				<br />
				<div className='text-center'>
										<CircleProgress percent={"75"} color="" />

					<br />
					<p>Happy clients</p>
				</div>
			</div>
			<br />
			<br />
			<br />

			<div className='text-center'>
				<h2 className='font-bold text-[35px]'>Our services</h2> <br />
				<div className='sm:flex sm:justify-center flex flex-col sm:flex-row items-center '>
					<button className='border-[2px] text-[#7772F1] border-[#7772F1] px-[40px] py-[5px]'>
						Social Media
					</button>
					<button className=' px-[70px] py-[5px] text-[#9A9CA5]'>SEO</button>
					<button className=' px-[70px] py-[5px] text-[#9A9CA5]'>
						Research
					</button>
					<button className=' px-[70px] py-[5px] text-[#9A9CA5]'>
						Content & PR
					</button>
					<button className=' px-[70px] py-[5px] text-[#9A9CA5]'>
						Payed Traffic
					</button>
				</div>
			</div>

			<div className='px-[10px] sm:px-[0px sm:flex  sm:px-[100px] items-center'>
				<div>
					<h2 className='sm:w-[500px] text-[#1E212C] text-[28px] font-semibold'>
						Complete Worflow For Any SEO Professional
					</h2>
					<br />
					<div className='text-[#424551]'>
						<CheckOutlined style={{ color: '#7772F1' }} /> Aenean enim tellus
						morbi nisl vulputate dictumst.{' '}
					</div>
					<div className='text-[#424551]'>
						<CheckOutlined style={{ color: '#7772F1' }} /> Nibh sapien volutpat
						lacus augue.{' '}
					</div>
					<div className='text-[#424551]'>
						<CheckOutlined style={{ color: '#7772F1' }} /> Vel in amet, placerat
						adipiscing est pharetra.{' '}
					</div>
					<div className='text-[#424551]'>
						<CheckOutlined style={{ color: '#7772F1' }} /> Gravida ornare sit in
						et ut sit sem id.{' '}
					</div>
					<div className='text-[#424551]'>
						<CheckOutlined style={{ color: '#7772F1' }} /> Ultrices pellentesque
						dictum enim egestas ac diam.{' '}
					</div>
					<div className='text-[#424551]'>
						<CheckOutlined style={{ color: '#7772F1' }} /> Sit semper enim
						senectus integer ut turpis et.{' '}
					</div>
					<br />
					<div className='flex gap-[10px]'>
						<button className='border-[2px] rounded-2xl  text-[#7772F1] border-[#7772F1] px-[20px] py-[5px]'>
							Try SEO toolkit
						</button>
						<Btns text={'Try SEO toolkit'} />
					</div>
				</div>
				<img src={rep} alt='' />
			</div>

			<div style={{ backgroundImage: `url(${bg2})` }} className='py-[50px]'>
				<div className='sm:flex sm:px-[100px] px-[10px] sm:justify-center sm:gap-[200px] items-center'>
					<img src={ss2} alt='' />
					<div>
						<h2 className='font-bold text-[30px] text-white'>
							Get a Free SEO Analysis!
						</h2>
						<br />
						<br />
						<div className='flex gap-[10px]'>
							<input
								type='text'
								className='bg-[#393C46] rounded-[5px] py-[3px]'
							/>
							<input
								type='text '
								className='bg-[#393C46] rounded-[5px] py-[3px]'
							/>
						</div>
						<br />
						<input
							type='text'
							className='sm:w-[59%] w-[100%] bg-[#393C46] rounded-[5px] py-[3px]'
						/>{' '}
						<br />
						<br />
						<div className='sm:flex text-center sm:text-start items-center gap-[10px] text-white'>
							<input type='checkbox' />
							<p className='sm:w-[50%]'>
								I agree to receive communications from Createx SEO Agency
							</p>
							<Btns text={'Get a free analysis'} />
						</div>
					</div>
				</div>
			</div>
			<br />
			<br />
			<br />

			<div className='sm:flex sm:items-center sm:px-[100px] sm:text-start text-center px-[10px] '>
				<div>
					<h2 className='text-[30px] font-bold'>Freequently Ask Questions</h2>
					<div className='flex items-start'>
						<MinusOutlined style={{ color: '#7772F1' }} />
						<div>
							<p>Aliquet lectus urna viverra in odio?</p>
							<p className='text-[#787A80] sm:w-[60%]'>
								Adipiscing nunc arcu enim elit mattis eu placerat proin.
								Imperdiet elementum faucibus dignissim purus. Fusce parturient
								diam magna ullamcorper morbi semper massa ac facilisis.
							</p>
						</div>
					</div>
					<div className='flex'>
						<PlusOutlined style={{ color: '#7772F1' }} />
						<p>Orci commodo, viverra orci mollis ut euismod?</p>
					</div>
					<div className='flex'>
						<PlusOutlined style={{ color: '#7772F1' }} />
						<p>
							Sagittis vitae facilisi rutrum amet mauris quisque vel convallis?
						</p>
					</div>
					<div className='flex'>
						<PlusOutlined style={{ color: '#7772F1' }} />
						<p>In id dolor quis nunc, urna hendrerit pharetra?</p>
					</div>
					<br />
					<Btns text={'Discover more'} />
				</div>
				<img src={ss3} alt='' />
			</div>
			<br />
			<br />
			<br />

			<div className='text-center'>
				<h2 className='text-[30px] font-bold'>
					Read our clients' case studies
				</h2>
				<br />
				<div className='sm:flex justify-center sm:gap-[0px] '>
					<img src={card1} className='w-[400px]' alt='' />
					<img src={card2} className='w-[400px]' alt='' />
					<img src={card3} className='w-[400px]' alt='' />
				</div>
				<div className='sm:
				flex gap-[20px] justify-center items-center '>
					<p className='font-semibold'>Explore more case studies</p>
					<Btns text={"View all case studies"} />
				</div>
			</div>


			<div className='sm:pl-[100px]'>
				<img src={gg1} alt="" />
			</div>

			
			<div className='text-center'>
				<h2 className='text-[40px] font-bold'>Flexible pricing plans</h2><br />
				<div className='sm:flex sm:gap-[10px] sm:justify-center' >
					<button className='text-white px-[50px] py-[5px] bg-[#7772F1] rounded-2xl'>Monthly</button>
					<button className='px-[40px] border-[1px] border-[#7772F1] rounded-2xl py-[5px]'>Yearly</button>
				</div><br /><br />
				<div className='sm:flex justify-center sm:pl-[0px]  pl-[50px] gap-[50px]'>
					<div className='border-[1px] border-[#7772F1] py-[30px] w-[300px] '>
						<h2 className='font-semibold text-[20px]'>Basic</h2>
						<span className='items-center text-[30px] font-semibold text-[#7772F1]'>$24 <span className='items-start'>/mon</span></span>
						<div className='flex justify-center'>
						<CheckOutlined style={{ color: '#7772F1' }} /> 
							<p className='font-semibold'>Advanced Analytics</p>
						</div>
						<div className='flex justify-center'>
						<CheckOutlined style={{ color: '#7772F1' }} /> 
							<p className='font-semibold'>Change Management</p>
						</div>
						<div className='flex justify-center'>
						<CheckOutlined style={{ color: '#7772F1' }} /> 
							<p className='font-semibold'>Corporate Finance</p>
						</div>
						<div className='flex justify-center'>
						<CheckOutlined style={{ color: '#7772F1' }} /> 
							<p className='font-semibold'>One Way Link Building</p>
						</div>
						<div className='flex justify-center'>
						<CheckOutlined style={{ color: '#7772F1' }} /> 
							<p className='font-semibold'>Social Media Marketing</p>
						</div>
						<div className='flex justify-center'>
						<XOutlined style={{ color: '#7772F1' }} /> 
							<p className='font-semibold text-[#9A9CA5]'>Strategy & Marketing</p>
						</div>
						<div className='flex justify-center'>
						<XOutlined style={{ color: '#7772F1' }} /> 
							<p className='font-semibold text-[#9A9CA5]'>Information Technology</p>
						</div><br />
						<button className='px-[20px] py-[5px] border-[1px] border-[#7772F1]'>Choose Plan</button>
					</div>
					<br />

					<div className='border-[1px] bg-[#1F222D] text-white py-[30px] w-[300px] '>
						<h2 className='font-semibold text-[20px]'>Optimal</h2>
						<span className='items-center text-[30px] font-semibold text-[#7772F1]'>$64 <span className='items-start'>/mon</span></span>
						<div className='flex justify-center'>
						<CheckOutlined style={{ color: '#7772F1' }} /> 
							<p className='font-semibold'>Advanced Analytics</p>
						</div>
						<div className='flex justify-center'>
						<CheckOutlined style={{ color: '#7772F1' }} /> 
							<p className='font-semibold'>Change Management</p>
						</div>
						<div className='flex justify-center'>
						<CheckOutlined style={{ color: '#7772F1' }} /> 
							<p className='font-semibold'>Corporate Finance</p>
						</div>
						<div className='flex justify-center'>
						<CheckOutlined style={{ color: '#7772F1' }} /> 
							<p className='font-semibold'>One Way Link Building</p>
						</div>
						<div className='flex justify-center'>
						<CheckOutlined style={{ color: '#7772F1' }} /> 
							<p className='font-semibold'>Social Media Marketing</p>
						</div>
						<div className='flex justify-center'>
						<XOutlined style={{ color: '#7772F1' }} /> 
							<p className='font-semibold text-[#9A9CA5]'>Strategy & Marketing</p>
						</div>
						<div className='flex justify-center'>
						<XOutlined style={{ color: '#7772F1' }} /> 
							<p className='font-semibold text-[#9A9CA5]'>Information Technology</p>
						</div><br />
						<Btns text={"Choose plan"} />
					</div>
					<br />
					
					<div className='border-[1px] border-[#7772F1] py-[30px] w-[300px] '>
						<h2 className='font-semibold text-[20px]'>Premium</h2>
						<span className='items-center text-[30px] font-semibold text-[#7772F1]'>$98 <span className='items-start'>/mon</span></span>
						<div className='flex justify-center'>
						<CheckOutlined style={{ color: '#7772F1' }} /> 
							<p className='font-semibold'>Advanced Analytics</p>
						</div>
						<div className='flex justify-center'>
						<CheckOutlined style={{ color: '#7772F1' }} /> 
							<p className='font-semibold'>Change Management</p>
						</div>
						<div className='flex justify-center'>
						<CheckOutlined style={{ color: '#7772F1' }} /> 
							<p className='font-semibold'>Corporate Finance</p>
						</div>
						<div className='flex justify-center'>
						<CheckOutlined style={{ color: '#7772F1' }} /> 
							<p className='font-semibold'>One Way Link Building</p>
						</div>
						<div className='flex justify-center'>
						<CheckOutlined style={{ color: '#7772F1' }} /> 
							<p className='font-semibold'>Social Media Marketing</p>
						</div>
						<div className='flex justify-center'>
						<CheckOutlined style={{ color: '#7772F1' }} /> 
							<p className='font-semibold '>Strategy & Marketing</p>
						</div>
						<div className='flex justify-center'>
						<CheckOutlined style={{ color: '#7772F1' }} /> 
							<p className='font-semibold '>Information Technology</p>
						</div> <br />
						<button className='px-[20px] py-[5px] border-[1px] border-[#7772F1]'>Choose Plan</button>
					</div>
				</div>
			</div>

<br /><br />
			<div>
				<h2 className='text-[30px] font-bold text-center'>What our clients say</h2> <br />
				<div className='flex sm:px-[70px] px-[10px] items-center'>
					<ArrowLeftOutlined />

					<div className='sm:px-[350px] py-[50px] px-[10px] '>
						<p className='text-[#424551] sm:w-[600px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in euismod vulputate etiam eros. Pulvinar neque pharetra arcu diam maecenas diam integer in.</p>
					<br />	<div className='flex gap-[10px] '>

							<img src={ss5} alt="" />
							<div>
								<p className='font-semibold'>Courtney Alexander</p>
								<p className='text-[#787A80]'>Position, Company name</p>
							</div>
						</div>
					</div>
					<ArrowRightOutlined className='bg-[#7772F1] p-[10px] rounded-4xl' style={{color:"white"}} />
				</div>
			</div>

			
			<div className='sm:flex sm:px-[100px] px-[10px] sm:text-start text-center sm:gap-[20px]'>
				<div>
					<h2 className='text-[35px] font-bold'>Latest news</h2>
					<p className='text-[#424551]'>Check more posts in our blog for featured news and advertising insights</p>
					<Btns text={"Go to Blog"} />
				</div><br />
				<div>
					<img src={pic} alt="" />
					<p className='text-[#787A80]'>SEO | July 5, 2020 | By Diana Mccoy</p>
				<br /><br /><br />
				<div>
					<button className='px-[10px]'>Read more</button>
									<ArrowRightOutlined style={{color:"#7772F1"}} />
				</div>
				</div><br />
				<div>
				<div>
					<img src={pic2} alt=""  className='h-[240px]'/>
						<p className='text-[#787A80]'>SEO | July 5, 2020 | By Diana Mccoy</p>
						<p className='text-[22px] font-semibold'>The Basics of Blogging Search <br />	Engine Optimization.</p>
						<p>Mauris tincidunt sollicitudin tristique odio <br /> eget  volutpat. Fringilla viverra amet, <br /> mi interdum  blandit...</p>
				<div>
					<button className='px-[10px]'>Read more</button>
									<ArrowRightOutlined style={{color:"#7772F1"}} />
				</div>
				</div>
					
				</div>
			</div>
			
		</div>
	)
}

export default FirstPage
