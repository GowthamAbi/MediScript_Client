import React from 'react'
import NavBar from '../components/bars/NavBar'
import HeroSectioin from '../components/bars/HeroSectioin'
import Footer from '../components/bars/Footer'
import Category from '../components/bars/Category'
import NewsFeed from '../components/bars/NewsFeed'

export default function HomePage() {
  return (
    <>
    <div className='bg-gray-200'>
    <NavBar/>
    <Category/>
    <NewsFeed/>
    <HeroSectioin/>
    <Footer/>
    </div>
    </>
  )
}
