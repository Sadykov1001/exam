import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import logo from "../assets/logo.png"
import socials from "../assets/socials.png"
import logo2 from "../assets/award (4).png"
import logo3 from "../assets/award (5).png"
import logo4 from "../assets/award (6).png"
import logo5 from "../assets/award (7).png"
import Btns from '../../Btns'
import { UnorderedListOutlined } from '@ant-design/icons'
const Layot = () => {
	return (
		<div className=' pt-[0px]  '>
			<header className='flex px-[50px] py-[10px]  bg-blue-400  justify-between items-center '>
				<img src={logo} alt="" />
			<ul className='sm:flex gap-[50px] hidden '>
				<li>
					<Link to={'/'}>Services</Link>
				</li>
				<li>
					<Link to={'/second'}>Case Studies</Link>
				</li>
				<li>
					<Link to={'/third'}>About Us</Link>
				</li>
				<li>
					<Link to={'/fourth'}>Todo</Link>
				</li>
				<li>
					<Link to={'/'}>Contacts</Link>
				</li>
				</ul>
			<Btns text={"Talk to a human"}/>
</header>
			<Outlet />

			<footer className='bg-[#1E212C] px-[10px]  sm:px-[100px] py-[50px]'>
				<div className='sm:flex gap-[20px] text-center sm:text-start justify-between'>
					<div>
						<img src={logo} className='sm:pl-[0px] pl-[120px]' alt="" /><br />
						<p className='text-[#A5A6AB] text-[15px] sm:w-[400px]'>Createx SEO Agency is a full-service digital marketing agency. We help businesses make more money through a wealth of performance data and market research. We create science-based SEO strategies to empower our clients.</p><br />
						<img src={socials} className='sm:pl-[0px] pl-[100px]' alt="" />
					</div>
					<div className='flex flex-col gap-[10px]'>
						<h2 className='text-white'>COMPANY</h2>
						<p className='text-[#A5A6AB]'>About Us</p>
						<p className='text-[#A5A6AB]'>Case Studies</p>
						<p className='text-[#A5A6AB]'>Blog</p>
						<p className='text-[#A5A6AB]'>Careers</p>
						<p className='text-[#A5A6AB]'>Contacts</p>
					</div>
					<div className='flex flex-col gap-[10px]'>
						<h2 className='text-white'>SERVICES</h2>
						<p className='text-[#A5A6AB]'>Social Media</p>
						<p className='text-[#A5A6AB]'>SEO</p>
						<p className='text-[#A5A6AB]'>Research</p>
						<p className='text-[#A5A6AB]'>Content & PR</p>
						<p className='text-[#A5A6AB]'>Payed Traffic</p>
					</div>
					<div className='flex flex-col gap-[10px]'>
						<h2 className='text-white'>CONTACT US</h2>
						<p className='text-[#A5A6AB]'> (405) 555-0128</p>
						<p className='text-[#A5A6AB]'>hello@createx.com</p>
					</div>
					<div className='flex flex-col gap-[10px]'>
						<h2 className='text-white'>SIGN UP TO OUR NEWSLETTER</h2>
						<input
							type='text'
							className='sm:w-[90%] w-[100%] bg-[#393C46] rounded-[5px] py-[3px]'
						/>
						<p className='text-[#A5A6AB] sm:w-[250px]'>*Subscribe to our newsletter to receive communications and early updates from Createx SEO Agency.</p>
					</div>
				</div><br /><br />
				<div className='sm:flex sm:gap-[20px] sm:pl-[0px] pl-[120px] justify-center'>
				<img src={logo2} alt="" /><br />
				<img src={logo3} alt="" /><br />
				<img src={logo4} alt="" /><br />
				<img src={logo5} alt="" />

				</div>
			</footer>

		</div>
	)
}

export default Layot
