import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      
        <div className='text-2xl text-center pt-8 border-t'>
            <Title text1={'ABOUT'} text2={'US'}/>
        </div>

        <div className='my-10 flex flex-col md:flex-row gap-16'>
            <img className='w-full md:max-w-[450px]' src={assets.about} alt="" />
            <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
                <p>Welcome to KAWS Shop — your destination for limited-edition art collectibles that blur the line between streetwear and contemporary culture. Our mission is to curate exclusive drops that celebrate the bold creativity and unique expression found in the world of KAWS and designer figures. Every piece in our collection is handpicked for quality, rarity, and artistic significance. </p>
                <p>Whether you're a seasoned collector or new to the scene, our shop is designed to inspire and elevate your space. We're passionate about bridging the gap between pop culture and fine art through limited releases that speak volumes. Join a global community of collectors who value art, design, and individuality.</p>
                <b className='text-gray-800'>Our Mission</b>
                <p>At KAWS Shop, our mission is to make collectible art more accessible while honoring the exclusivity and craftsmanship that define it. We strive to connect passionate collectors with pieces that spark emotion, conversation, and cultural impact. Through carefully curated drops, we celebrate the intersection of street art, design, and personal expression. Our goal is to cultivate a global community that values authenticity, creativity, and the power of limited-edition art. Whether you're building your first collection or expanding a seasoned one, we're here to elevate your experience. Every figure we offer isn't just a product — it's a statement.</p>
            </div>
        </div>
        <div className='text-4xl py-4'>
            <Title text1={'WHY'} text2={'CHOOSE US'}/>
        </div>
        
        <div className='flex flex-col md:flex-row text-sm mb-20'>
            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Quality Assurance:</b>
              <p className='text-gray-600'>Every product we offer goes through a rigorous quality check to ensure it meets the highest standards of design, durability, and authenticity. We partner with trusted sources and verified manufacturers to bring you collectibles that are as flawless as they are iconic. From packaging to paintwork, we inspect every detail so you can shop with confidence. Our commitment to quality is rooted in the belief that each figure should be display-ready and collection-worthy. What you see is exactly what you get — no compromises. When you purchase from KAWS Shop, you're investing in a piece of art that's made to last.</p>
            </div>
            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Convenience:</b>
              <p className='text-gray-600'>We've designed every part of our shopping experience to be as seamless and intuitive as possible. With a mobile-first interface, secure checkout, and real-time order tracking, buying your favorite collectibles has never been easier. Our site is fast, easy to navigate, and optimized for both casual browsers and serious collectors. From drop alerts to instant digital receipts, we handle the details so you can focus on what matters — curating your collection. Need help? Our support is just a click away. Shopping at KAWS Shop is smooth, secure, and always on your terms.</p>
            </div>
            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Exceptional Customer Servie</b>
              <p className='text-gray-600'>Our customers are the heart of everything we do, and we're here to support you every step of the way. Whether you have a question about a product, need help with your order, or just want to chat collectibles — we've got you covered. Our dedicated support team is fast, friendly, and knowledgeable about everything we sell. We don't just solve problems — we make sure you walk away with a great experience. Expect clear communication, quick responses, and real solutions. At KAWS Shop, every customer is treated like a VIP.</p>
            </div>
        </div>
        <NewsletterBox/>
    </div>
  )
}
export default About