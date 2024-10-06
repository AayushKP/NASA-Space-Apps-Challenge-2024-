import React from 'react'
import NewsCard from './../components/Newstab'
import Background from '../components/Background'

const News = () => {
  const newsItems = [
    {
      title: "Men Dominate Decision-Making on Climate Issues in the Sundarbans, Marginalizing Women",
      description: "In the Sundarbans, where climate change is wreaking havoc on livelihoods and the environment, decision-making power remains predominantly in the hands of men. Women, who are disproportionately affected by flooding...",
      imageUrl: "./src/assets/images/article1.png",
      altText: "Person sitting by water in the Sundarbans"
    },
    {
      title: "Decline in Mangrove Trees Worsens Climate Change Impacts in the Sundarbans",
      description: "The Sundarbans, home to the largest mangrove forest in the world, is witnessing a steady decline in mangrove tree cover due to rising sea levels, deforestation, and land degradation. These vital ecosystems act as natural barriers against...",
      imageUrl: "/../src/assets/images/article2.png",
      altText: "Mangrove forest in the Sundarbans"
    },
    // Add more news items as needed
  ]

  return (
    <div className="bg-[#121212] overflow-hidden">
      <Background />
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            {newsItems.map((item, index) => (
              <NewsCard key={index} {...item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default News
