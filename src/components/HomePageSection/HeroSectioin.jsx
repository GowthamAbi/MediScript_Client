import React from 'react'
import Category from './Category'
import Offers from './Offers'
import NewsFeed from './NewsFeed'
import Content from './Content'

export default function HeroSectioin() {
  return (
    <div>
      <Category/>
      <Offers/>
      <NewsFeed/>
      <Content/>
    </div>
  )
}
