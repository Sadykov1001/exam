import {
	CheckOutlined,
	HomeOutlined,
	InboxOutlined,
	OpenAIOutlined,
	PhoneOutlined,
	RightOutlined,
	ShoppingCartOutlined,
	XOutlined,
} from '@ant-design/icons'
import React from 'react'
import rep from '../assets/rep.png'
import Btns from '../../Btns'
import bg from '../assets/bg2.png'
import clogo1 from '../assets/client-logo.png'
import clogo2 from '../assets/client-logo (1).png'
import clogo3 from '../assets/client-logo (2).png'
import clogo4 from '../assets/client-logo (3).png'
import clogo5 from '../assets/client-logo (4).png'
import clogo6 from '../assets/client-logo (5).png'
import ff1 from '../assets/ff1.png'
import { Carousel } from 'antd'
import card1 from '../assets/case-card.png'
import card3 from '../assets/case-card (1).png'
import card2 from '../assets/hover.png'

const ThirdPages = () => {
	return (
		<div className='dark:bg-black bg-white'>
			<header style={{ backgroundImage: `url(${bg})` }} className='py-[50px]'>
				<div className='flex gap-[10px] text-[#A7A7B3] justify-center items-center'>
					<HomeOutlined />
					<RightOutlined />
					<p>Services</p>
					<RightOutlined />
					<br />
					<br />
				</div>
				<div className='text-center flex flex-col items-center'>
					<h1 className='text-[50px] text-white font-bold'>
						Search Engine Optimization
					</h1>
					<br />
					<p className='text-[#A7A7B3] sm:w-[40%]'>
						Ipsum blandit etiam nunc vitae. Duis lobortis odio vel morbi dui
						pellentesque enim integer facilisi. Ultrices vitae tempor amet nec
						euismod non.
					</p>
				</div>
				<br />
				<br />
				<p className='text-center text-white'>Your website URL</p>
				<div className='flex justify-center items-center'>
					<input
						type='text'
						placeholder='http://yoursite.com'
						className='text-white'
						name=''
						id=''
					/>
					<Btns text={'Analyse your site'} />
				</div>
			</header>
			<br />
			<br />

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
			<br />
			<br />
			<div className='sm:flex sm:gap-[100px] px-[10px] sm:px-[100px] items-center'>
				<img src={ff1} alt='' />
				<div className='sm:w-[20%]'>
					<h2 className='text-[30px] font-bold'>
						We go above and beyond to ensure successful SEO
					</h2>
					<br />
					<p className='text-[#787A80]'>
						Lacus ac mollis vitae viverra. Tincidunt est, feugiat montes,
						viverra ullamcorper mi dui, nulla pharetra. Sapien urna nullam elit
						diam mauris orci. Volutpat quam tempus justo, aliquam. Tortor
						ultrices mattis eget orci eu nisi sed augue odio. Et senectus risus,
						pharetra, tristique libero. Dolor risus ac quam dictum mattis
						ultrices laoreet sapien. Feugiat lacus, suscipit eu sociis et quis
						hendrerit. Cras at ac magna ultricies orci.
					</p>
				</div>
			</div>
			<br />
			<br />

			<div>
				<h2 className='font-bold text-[30px] text-center'>
					SEO services include
				</h2>

				<div className='sm:flex justify-center gap-[50px]'>
					<div className='sm:w-[16%] text-center px-[10px] '>
						<ShoppingCartOutlined
							style={{ fontSize: '30px', color: '#7772F1' }}
						/>
						<p className='font-semibold'>E-commerce Websites</p>
						<p className='text-[#787A80]'>
							Aenean urna dictum adipiscing nec, cras quisque. Nunc in mauris.{' '}
						</p>
					</div>
					<div className='sm:w-[16%] text-center px-[10px] '>
						<InboxOutlined style={{ fontSize: '30px', color: '#7772F1' }} />
						<p className='font-semibold'>Content-rich Websites</p>
						<p className='text-[#787A80]'>
							Culpa nostrud commodo ea consequat reprehenderit aliquip.{' '}
						</p>
					</div>
					<div className='sm:w-[16%] text-center px-[10px] '>
						<OpenAIOutlined style={{ fontSize: '30px', color: '#7772F1' }} />
						<p className='font-semibold'>B2B /B2C Services</p>
						<p className='text-[#787A80]'>
							Viverra scelerisque consequat net. Adipisicing esse consequat.{' '}
						</p>
					</div>
				</div>
				<br />
				<br />
				<div className='sm:flex justify-center	 gap-[50px]'>
					<div className='sm:w-[16%] text-center px-[10px] '>
						<ShoppingCartOutlined
							style={{ fontSize: '30px', color: '#7772F1' }}
						/>
						<p className='font-semibold'>E-commerce Websites</p>
						<p className='text-[#787A80]'>
							Aenean urna dictum adipiscing nec, cras quisque. Nunc in mauris.{' '}
						</p>
					</div>
					<div className='sm:w-[16%] text-center px-[10px] '>
						<InboxOutlined style={{ fontSize: '30px', color: '#7772F1' }} />
						<p className='font-semibold'>Content-rich Websites</p>
						<p className='text-[#787A80]'>
							Culpa nostrud commodo ea consequat reprehenderit aliquip.{' '}
						</p>
					</div>
					<div className='sm:w-[16%] text-center px-[10px] '>
						<OpenAIOutlined style={{ fontSize: '30px', color: '#7772F1' }} />
						<p className='font-semibold'>B2B /B2C Services</p>
						<p className='text-[#787A80]'>
							Viverra scelerisque consequat net. Adipisicing esse consequat.{' '}
						</p>
					</div>
				</div>
			</div>

			<div className='bg-[#7772F1] '>
				<div className='px-[100px]'><br /><br />
							<h2 className='text-[30px] text-center text-white font-bold'>
					Get a Free SEO Analysis!
				</h2>
				<div className='sm:flex hidden pl-[170px] gap-[230px] text-white'>
					<p>Name</p>
					<p>Emaill</p>
					<p>Your website URL</p>
				</div>
				<div className='sm:flex flex flex-col sm:flex-row justify-center gap-[20px]'>
					<input type='text' className='w-[250px] bg-[white] px-[10px]  ' placeholder='Name' name='' id='' />
					<input type='text' className='w-[250px] bg-[white] px-[10px] ' placeholder='Your working email' name='' id='' />
					<input type='text' className='w-[250px] bg-[white] px-[10px] ' placeholder='http://yoursite.com' name='' id='' />
					<button className='bg-black text-white px-[30px] py-[5px]'>Analyse your site</button>
				</div>
				</div><br /><br />
			</div>
<br /><br /><br />

			<div>
				<h2 className='text-[30px] text-center font-bold'>That’s how it works</h2>
				<div className='sm:pl-[700px] text-center sm:text-start px-[20px] sm:w-[70%]'>
					<p className='text-[#787A80] font-semibold'>STEP 1</p>
					<p className='font-bold'>Off-Site SEO Analysis</p>
					<p className='text-[#787A80]'>Aliquam turpis viverra quam sit interdum blandit posuere pellentesque. Nisl, imperdiet gravida massa neque.</p>
				</div>
				<div className='sm:pl-[350px] px-[20px] sm:w-[43%] text-center sm:text-end'>
					<p className='text-[#787A80] font-semibold'>STEP 2</p>
					<p className='font-bold'>Technical SEO Optimizations</p>
					<p className='text-[#787A80]'>Facilisis pellentesque quis accumsan ultricies. Eu egestas eget feugiat lacus, amet, sollicitudin egestas laoreet etiam. Nunc nisl orci auctor et fames. Vestibulum viverra faucibus faucibus et convallis.</p>
				</div>
				<div className='sm:pl-[700px] text-center sm:text-start px-[20px] sm:w-[70%]'>
					<p className='text-[#787A80] font-semibold'>STEP 3</p>
					<p className='font-bold'>Usability Check</p>
					<p className='text-[#787A80]'>Eget amet, enim pharetra leo egestas nisi, odio imperdiet facilisis. Aliquet orci varius volutpat egestas facilisi lobortis. Varius praesent pretium in leo, accumsan, in ultricies. </p>
				</div>
				<div className='sm:pl-[350px] px-[20px] sm:w-[43%] text-center sm:text-end'>
					<p className='text-[#787A80] font-semibold'>STEP 4</p>
					<p className='font-bold'>Content Marketing</p>
					<p className='text-[#787A80]'>Non tempor pulvinar tincidunt aliquam. Placerat ultricies malesuada dui auctor. Faucibus in leo, nulla odio nulla imperdiet quis faucibus neque.</p>
				</div>
			</div><br /><br /><br />

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

			<br /><br /><br />
			<div className='text-center'>
				<h2 className='text-[30px] font-bold'>
Related case studies
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
<br /><br /><br />

			

			
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


		</div>
	)
}

export default ThirdPages
