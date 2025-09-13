import React from 'react'
import NavBar from '../components/HomePageSection/NavBar'
import HeroSectioin from '../components/HomePageSection/HeroSectioin'
import Footer from '../components/HomePageSection/Footer'
import Category from '../components/HomePageSection/Category'
import NewsFeed from '../components/HomePageSection/Offers'

export default function HomePage() {
  return (
    <>
    <div className='bg-gray-200'>
    <NavBar/>
    <HeroSectioin/>
    <Footer/>
    </div>
    </>
  )
}
