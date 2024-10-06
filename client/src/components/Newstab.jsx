import React from 'react'
import { ChevronRight } from "lucide-react"

const NewsCard = ({ title, description, imageUrl, altText }) => {
  return (
    <div className="w-full md:w-1/2 p-4">
      <div className="bg-black text-white rounded-lg overflow-hidden h-full flex flex-col">
        <div className="relative">
          <img
            src={imageUrl || "/placeholder.svg?height=400&width=600"}
            alt={altText || "News image"}
            className="w-full h-64 object-cover"
          />
          <div className="absolute bottom-4 right-4 bg-white bg-opacity-20 rounded-full p-2">
            <ChevronRight className="w-6 h-6 text-white" />
          </div>
        </div>
        <div className="p-6 flex-grow">
          <h2 className="text-2xl font-bold mb-4">{title}</h2>
          <p className="text-gray-300">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default NewsCard