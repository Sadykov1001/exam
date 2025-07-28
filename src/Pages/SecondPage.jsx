import React from 'react'
import bg from '../assets/bg2.png'
import rep from '../assets/rep.png'
import rep2 from '../assets/rep2.png'
import rep3 from '../assets/rep3.png'
import rep4 from '../assets/rep4.png'
import pic from '../assets/pic.png'
import pic2 from '../assets/pic copy.png'
import rep5 from '../assets/rep5.png'
import bg2 from '../assets/bg2.png'
import ss2 from '../assets/ss2.png'
import card1 from '../assets/case-card.png'
import card3 from '../assets/case-card (1).png'
import card2 from '../assets/hover.png'
import clogo1 from '../assets/client-logo.png'
import clogo2 from '../assets/client-logo (1).png'
import clogo3 from '../assets/client-logo (2).png'
import clogo4 from '../assets/client-logo (3).png'
import clogo5 from '../assets/client-logo (4).png'
import clogo6 from '../assets/client-logo (5).png'

import { ArrowRightOutlined, HomeOutlined, InboxOutlined, OpenAIOutlined, PhoneOutlined, RightOutlined, RocketOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import Btns from '../../Btns'
import { Carousel } from 'antd';


const contentStyle = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const SecondPage = () => {
	return (
		<div className='dark:bg-gray-900 bg-white'>
			<header style={{ backgroundImage: `url(${bg})` }} className='py-[50px]'>
				<div className='flex gap-[10px] text-[#A7A7B3] justify-center items-center'>
					<HomeOutlined />
					<RightOutlined />
					<p>Services</p>
					<br /><br />
				</div>
				<div className='text-center flex flex-col items-center'>
					<h1 className='text-[50px] text-white font-bold'>Our services</h1><br />
					<p className='text-[#A7A7B3] sm:w-[40%]'>
						We offer more than services. Our agency provides solutions to your
						top-priority concerns, involving customer targeting, email
						performance and sales growth. If there is no existing solution
						readily available, we create one, specifically to suit your
						business.
					</p>
				</div><br /><br />
				<div className='text-white flex gap-[20px] justify-center'>
					<button className='border-[2px] px-[20px] border-white'>Start now</button>
					<div className='flex gap-[10px]'>
						<PhoneOutlined style={{fontSize:"25px", color:"#7772F1"}}/>
						<div>
							<p>Call us</p>
							<p>(405) 555-0128</p>
						</div>
					</div>
				</div>
			</header>
			<div className='sm:flex gap-[50px] sm:px-[100px] px-[10px] items-center'>
				<div >
					<h2 className='text-[25px] font-bold'>Social Media Marketing</h2><br />
					<p className='text-[#787A80]'>Eleifend orci massa et facilisis orci feugiat ac. Congue in ut lacus, turpis accumsan gravida. Aliquet mattis dignissim massa sociis a, id bibendum. Egestas lorem eros, mi cras amet, vel eget molestie. Turpis enim arcu, amet donec massa pellentesque nulla duis. Arcu dictum metus sed purus senectus faucibus eget elementum pretium. 
					</p><br /><br />
					<div className='flex gap-[10px]'>
							<button className='border-[1px] rounded-xl border-[#7772F1] text-[#7772F1] px-[20px]
					py-[5px]'>Learn More</button>
					<Btns text={"Try SEO toolkit"} />
					</div>
				</div>
					<img src={rep} alt="" />
			</div>
			<div className='sm:flex gap-[0px] sm:px-[80px] px-[10px] items-center'>
					<img src={rep2} alt="" />
				<div >
					<h2 className='text-[25px] font-bold'>Search Engine Optimization</h2><br />
					<p className='text-[#787A80]'>Elementum ipsum lorem tortor morbi quis turpis pellentesque ultrices aenean. Lacus sit viverra et egestas nisl vitae lacus, eget. Eu pulvinar duis in posuere non adipiscing. Nunc, tristique viverra tincidunt nec proin tempus egestas massa. Quis velit nunc nisl sem in tristique.
					</p><br /><br />
					<div className='flex gap-[10px]'>
							<button className='border-[1px] rounded-xl border-[#7772F1] text-[#7772F1] px-[20px]
					py-[5px]'>Learn More</button>
					<Btns text={"Try SEO toolkit"} />
					</div>
				</div>
			</div>
			
			
			<div className='sm:flex flex flex-col-reverse gap-[50px] sm:px-[100px] px-[10px] items-center'>
				<div >
					<h2 className='text-[25px] font-bold'>Research Service</h2><br />
					<p className='text-[#787A80]'>Volutpat tellus mauris sit sit. Posuere ut sit vestibulum amet viverra in. Est nulla lectus purus tincidunt massa tortor. Hendrerit vulputate elementum blandit massa vitae amet felis eget. 
					</p><br /><br />
					<div className='flex gap-[10px]'>
							<button className='border-[1px] rounded-xl border-[#7772F1] text-[#7772F1] px-[20px]
					py-[5px]'>Learn More</button>
					<Btns text={"Try SEO toolkit"} />
					</div>
				</div>
					<img src={rep3} alt="" />
			</div>
			<div className='sm:flex gap-[0px] sm:px-[80px] px-[10px] items-center'>
					<img src={rep4} alt="" />
				<div >
					<h2 className='text-[25px] font-bold'>Content & PR Service</h2><br />
					<p className='text-[#787A80]'>Consequat pharetra elit posuere fringilla luctus sit. Curabitur accumsan fermentum magna amet. Sed nec amet posuere tellus pellentesque vitae. Pulvinar nulla sem risus diam volutpat. Amet, sit aliquet magna in viverra at elit nullam.
					</p><br /><br />
					<div className='flex gap-[10px]'>
							<button className='border-[1px] rounded-xl border-[#7772F1] text-[#7772F1] px-[20px]
					py-[5px]'>Learn More</button>
					<Btns text={"Try SEO toolkit"} />
					</div>
				</div>
			</div>


			<div className='sm:flex flex flex-col-reverse gap-[50px] sm:px-[100px] px-[10px] items-center'>
				<div >
					<h2 className='text-[25px] font-bold'>Payed Traffic Management</h2><br />
					<p className='text-[#787A80]'>Tortor vitae orci hendrerit lobortis eu. Metus aliquam sem tellus ut fringilla purus nisl, consectetur netus. Velit ac feugiat ut mattis dis nullam ultrices amet. Lacus eu neque arcu arcu curabitur at sapien. Id sed aliquet id sit nibh ornare massa scelerisque. 
					</p><br /><br />
					<div className='flex gap-[10px]'>
							<button className='border-[1px] rounded-xl border-[#7772F1] text-[#7772F1] px-[20px]
					py-[5px]'>Learn More</button>
					<Btns text={"Try SEO toolkit"} />
					</div>
				</div>
					<img src={rep5} alt="" />
			</div><br /><br />

			
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

			<div className='text-center'>
				<h2 className='text-[25px] font-bold'>Markets in which we operate</h2> <br />
				<div className='md:flex justify-center gap-[50px]'>
					<div className='md:w-[16%] px-[20px] text-center'>
						<ShoppingCartOutlined style={{fontSize:"30px", color:"#7772F1"}} />
						<p className='font-semibold'>E-commerce Websites</p>
						<p className='text-[#787A80]'>Aenean urna dictum adipiscing nec, cras quisque. Nunc in mauris. </p>
					</div>
					<div className='sm:w-[16%]  px-[20px] text-center'>
						<InboxOutlined  style={{fontSize:"30px", color:"#7772F1"}} />
						<p className='font-semibold'>Content-rich Websites</p>
						<p className='text-[#787A80]'>Culpa nostrud commodo ea consequat reprehenderit aliquip.  </p>
					</div>
					<div className='sm:w-[16%]  px-[20px] text-center'>
						<OpenAIOutlined style={{fontSize:"30px", color:"#7772F1"}} />
						<p className='font-semibold'>B2B /B2C Services</p>
						<p className='text-[#787A80]'>Viverra scelerisque consequat net. Adipisicing esse consequat. </p>
					</div>
					<div className='sm:w-[16%]  px-[20px] text-center'>
						<RocketOutlined  style={{fontSize:"30px", color:"#7772F1"}} />
						<p className='font-semibold'>Startup Projects</p>
						<p className='text-[#787A80]'>Aute eiusmod dolore dolore deserunt veniam ad deserunt.  </p>
					</div>
				</div>
			</div>
			<br /><br /><br />

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
<br /><br /><br />
			

			<Carousel autoplay className='flex'>
				
			</Carousel>

			<Carousel arrows infinite={false}>
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
			<br /><br />
			
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

export default SecondPage
