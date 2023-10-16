import React from 'react'
import Button from './components/Button'
import TitleHero from './components/TitleHero'
import ContentHero from './components/ContentHero'
import herobg1 from './assets/background/hero-1.png'
import herobg2 from './assets/background/hero-2.png'
import herobg3 from './assets/background/hero-3.png'
import RowSpecialities from './components/RowSpecialities'


const App = () => {
  return (
    <div>
      <div>
        <div className='grid grid-cols-2 h-screen'>
          <div className='bg-[#1A2A2F]'>
            <div className='grid h-full'>
              <div className='grid content-end px-10'>
                <div className=''>
                  <TitleHero className='text-white uppercase text-6xl font-bold leading-tight'>
                    Empowering  Tomorrow
                  </TitleHero>
                </div>
                <div className='pt-3'>
                  <Button className='bg-[#009AF0] hover:bg-blue-700 text-white py-2 px-4 rounded-md'>Learn More About BTEKLabs</Button>
                </div>
              </div>
              <div className='grid content-end'>
                <div className='bg-[#009AF0] text-white px-10 py-4'>
                  IT Solution Provider & Software House
                </div>
              </div>
            </div>
          </div>
          <div style={{backgroundImage: `url(${herobg1})`, backgroundSize: 'cover'}}/>
        </div>
        <div className='grid grid-cols-2 h-screen'>
          <div style={{backgroundImage: `url(${herobg1})`, backgroundSize: 'cover'}}/>
          <div className='grid content-center ps-10 pe-12'>
            <ContentHero titleSection={'About'} title={'Crafting Excellent Innovations'}>
              <div className='pt-6'>
                <p className='text-justify'>BTEKLabs is a beacon of professionalism and innovation in the technology industry. With an unwavering commitment to excellence, we excels in crafting software solutions that not only meet but exceed the expectations of its clients. Every line of code is meticulously written to deliver top-tier, cutting-edge software. You can expect a seamless blend of professionalism and innovation, resulting in solutions that empower your digital journey and set new standards in the software industry.</p>
              </div>
              <div className='pt-6'>
                <Button className='bg-[#009AF0] hover:bg-blue-700 text-white py-2 px-4 rounded-md'>Know More About Our Vision</Button>
              </div>
            </ContentHero>
          </div>
        </div>
        <div style={{backgroundImage: `url(${herobg2})`, backgroundSize: 'cover'}} className='grid grid-cols-2 h-screen'>
          <div className='grid content-center ps-10'>
            <ContentHero titleSection={'Specialities'} title={'Crafting Excellent Innovations'}>
              <div className='pt-6'>
                <p className='text-justify text-white'>BTEKLabs is a beacon of professionalism and innovation in the technology industry. With an unwavering commitment to excellence, we excels in crafting software solutions that not only meet but exceed the expectations of its clients. Every line of code is meticulously written to deliver top-tier, cutting-edge software. You can expect a seamless blend of professionalism and innovation, resulting in solutions that empower your digital journey and set new standards in the software industry.</p>
              </div>
              <div className='pt-6'>
                <Button className='bg-[#009AF0] hover:bg-blue-700 text-white py-2 px-4 rounded-md'>Know More About Our Vision</Button>
              </div>
            </ContentHero>
          </div>
          <div className='grid row-auto content-center gap-y-6 px-10'>
            <RowSpecialities name='Web Development'></RowSpecialities>
            <RowSpecialities name='Mobile Apps Development'></RowSpecialities>
            <RowSpecialities name='IoT Engineering'></RowSpecialities>
          </div>
        </div>
        <div className='grid grid-cols-5 h-screen bg-[#F4F4F4] gap-x-4'>
          <div className='col-span-2 grid content-center p-10 bg-white'>
            <ContentHero titleSection='Innovations' title='Your Digital Journey Starts Here'>
              <div className='pt-6'>
                <p className='text-justify'>We specializes in a diverse range of fields, including Warehouse Management Systems (WMS), Point of Sales (POS) solutions, and Information Systems. Our expertise lies in creating tailored software solutions that optimize warehouse operations and efficient inventory tracking that can provide organizations with robust data management, analysis, and reporting capabilities. With a strong track record in these specialized areas, we are The Most Trusted partner for businesses seeking software solutions that drive operational excellence and enhance their competitive edge in today's dynamic market.</p>
              </div>
            </ContentHero>
          </div>
          <div style={{backgroundImage: `url(${herobg3})`, backgroundSize: 'cover'}} className='col-span-2 grid content-end p-10'>
            <ContentHero titleSection='warehousing' title='Integrated Warehouse Management System'/>
          </div>
          <div style={{backgroundImage: `url(${herobg3})`, backgroundSize: 'cover'}} className='col-span-1 grid content-end p-10'>
            <ContentHero titleSection='warehousing' title='Integrated Warehouse Management System'/>
          </div>
        </div>
        <div className='grid grid-cols-2 h-72 bg-[#009AF0]'>
          <div>test</div>
          <div>test</div>
        </div>
      </div>
    </div>
  )
}

export default App