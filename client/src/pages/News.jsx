import React, { useState } from "react"; // Import useState
import Background from "../components/Background";
import Modal from "../components/Modal"; // Import Modal component

const News = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal
  const [modalContent, setModalContent] = useState({ title: "", content: "" }); // State for modal content

  // Define the array of news items
  const newsItems = [
    {
      title:
        "Gender Inequality and Climate Change: A Toxic Cocktail in the Sundarbans",
      description:
        "The Sundarbans, a delicate and ecologically significant region in South Asia, is facing the dual challenge of climate change and entrenched gender inequality. Rising sea levels, frequent cyclones, and severe flooding have caused widespread destruction of livelihoods and ecosystems, disproportionately affecting women in the region...",
      imageUrl: "/images/article1.png",
      altText: "Person sitting by water in the Sundarbans",
    },
    {
      title:
        "Mangrove Loss Exacerbates Climate Change Impacts in the Sundarbans",
      description:
        "The Sundarbans, a UNESCO World Heritage site, is the largest mangrove forest in the world, spanning parts of India and Bangladesh. This unique ecosystem serves as a crucial barrier against natural disasters, provides habitat for diverse wildlife, and supports the livelihoods of millions of people. However, it faces severe threats due to climate change and anthropogenic activities, leading to significant mangrove loss.\n\n" +
        "Mangroves play a vital role in coastal ecosystems. They act as natural barriers against storm surges, reducing the impact of cyclones and tidal waves on coastal communities. Additionally, mangroves provide habitat for various species, serve as breeding grounds for marine life, and are effective carbon sinks, absorbing and storing carbon dioxide. Furthermore, they filter pollutants and sediments from water, improving water quality in coastal areas.\n\n" +
        "Several factors contribute to the degradation of mangroves in the Sundarbans. Climate change, with rising sea levels and increased salinity, impacts the growth and survival of mangrove species. Deforestation driven by illegal logging, land reclamation, and urban development significantly contributes to mangrove loss. Additionally, pollution from industrial and agricultural runoff introduces harmful pollutants, while unsustainable fishing practices further deplete mangrove resources.\n\n" +
        "The loss of mangroves has far-reaching consequences. It increases the vulnerability of coastal communities to natural disasters, leading to more severe impacts on human settlements and infrastructure. Additionally, the degradation of mangrove habitats threatens the survival of various species, disrupting the food chain and decreasing biodiversity. Many communities in the Sundarbans depend on mangroves for fishing, honey production, and other resources; their loss diminishes these livelihoods, resulting in economic hardship.\n\n" +
        "The relationship between mangrove loss and climate change is cyclical. The destruction of mangroves releases stored carbon dioxide back into the atmosphere, exacerbating global warming. Simultaneously, climate change progresses, subjecting mangroves to increased flooding, temperature extremes, and saltwater intrusion, leading to further degradation.\n\n" +
        "Addressing the challenges posed by mangrove loss in the Sundarbans requires a multi-faceted approach. Community engagement is essential for promoting sustainable practices, ensuring local knowledge and needs are considered. Restoration projects aimed at replanting mangroves can help recover lost habitats and their benefits. Furthermore, stronger environmental policies and enforcement against illegal logging and land reclamation are crucial for protecting mangrove ecosystems.\n\n" +
        "In conclusion, the loss of mangroves in the Sundarbans is a pressing environmental issue with significant implications for biodiversity, local communities, and climate change. The interplay between mangrove loss and climate change creates a feedback loop that exacerbates both challenges. Sustainable management practices, community involvement, and effective policies are essential for preserving this vital ecosystem and mitigating the impacts of climate change in the region. Addressing these issues holistically will be crucial for the resilience of both the Sundarbans and the communities that depend on it.",
      imageUrl: "/images/article2.png",
      altText: "Mangrove forest in the Sundarbans",
    },
    {
      title: "Climate Change Derails Tourist Guides' Earnings in Sundarbans",
      description:
        "Kolkata, India – The picturesque Sundarbans, once a thriving tourist destination, is facing the devastating impacts of climate change, which is significantly affecting the livelihoods of local tourist guides. As rising sea levels, extreme weather events, and environmental degradation threaten the region's unique biodiversity and natural beauty, the number of tourists visiting the Sundarbans has plummeted, resulting in a sharp decline in income for those who depend on the tourism industry.\n\n" +
        "Many tourist guides in the Sundarbans have reported a significant drop in their earnings over the past few years. With fewer tourists venturing into the region due to concerns about safety and accessibility, the demand for their services has dwindled. This decline has forced many guides to explore alternative sources of income, such as fishing or farming, often with limited success.\n\n" +
        "Climate change has also impacted the Sundarbans' wildlife, which is a major draw for tourists. As habitats are destroyed and species are threatened, the region's biodiversity has suffered. This decline in wildlife populations has further discouraged tourists from visiting the area, exacerbating the financial challenges faced by local guides.\n\n" +
        "To address the crisis, conservation organizations and local communities are working together to develop sustainable tourism initiatives that can help mitigate the impacts of climate change while supporting the livelihoods of tourist guides. These initiatives include promoting eco-friendly tourism practices, investing in climate-resilient infrastructure, and raising awareness about the importance of protecting the Sundarbans.\n\n" +
        "However, the challenges faced by tourist guides in the Sundarbans are significant, and more comprehensive solutions are needed. Governments, international organizations, and private sector businesses must work together to support the region's tourism industry and ensure the well-being of its local communities.",
      imageUrl: "/images/article3.png",
      altText: "Mangrove forest in the Sundarbans",
    },
    {
      title:
        "Climate Change Sweetens the Bitter Taste of Honey Production Decline",
      description:
        "Kolkata, India – The buzzing of bees, once a harmonious symphony of nature, is now a dwindling sound in the Sundarbans. Climate change, with its rising temperatures and erratic rainfall patterns, has dealt a bitter blow to honey production in the region.\n\n" +
        "Bees, crucial pollinators for a variety of crops, are particularly sensitive to changes in their environment. Rising temperatures can disrupt their life cycles, reduce their foraging activity, and weaken their immune systems. Additionally, extreme weather events such as droughts and floods can destroy bee colonies and limit the availability of nectar-producing plants.\n\n" +
        "The decline in honey production has had a significant impact on local beekeepers, who rely on this sweet commodity for their livelihoods. As their income sources dwindle, many beekeepers are struggling to make ends meet. The decline has also affected the broader agricultural sector, as bees play a vital role in pollinating crops such as mangoes, bananas, and cucumbers.\n\n" +
        "To address the crisis, beekeepers and researchers are exploring various strategies to mitigate the impacts of climate change on honey production. These include developing climate-resilient beekeeping practices, planting bee-friendly plants, and protecting bee habitats. Additionally, efforts are underway to raise awareness about the importance of bees and the threats they face due to climate change.\n\n" +
        "While the challenges faced by beekeepers in the Sundarbans are significant, it is essential to take action to protect these vital pollinators and ensure the sustainability of honey production. By adopting sustainable practices and investing in research, we can help safeguard the future of bees and the sweet nectar they produce.",
      imageUrl: "/images/article4.png",
      altText: "Mangrove forest in the Sundarbans",
    },
  ];

  // Function to handle card click
  const handleCardClick = (title, description) => {
    setModalContent({ title, content: description }); // Set content for modal
    setIsModalOpen(true); // Open modal
  };

  return (
    <div className="bg-[#121212] font-sans overflow-hidden min-h-screen">
      <div>
        <Background
          heroText={
            "As the Sundarbans face severe flooding, women bear the brunt, losing livelihoods and access to resources."
          }
        />
      </div>
      <div className="w-full grid grid-cols-2 gap-4 h-auto p-4">
        {newsItems.map((item, index) => (
          <NewsCard
            key={index}
            title={item.title}
            text={item.description}
            img={item.imageUrl}
            onClick={() => handleCardClick(item.title, item.description)} // Pass click handler
          />
        ))}
      </div>
      <div className="flex justify-center items-center">
        <img src="/images/dataImg.png" alt="" className="" />
      </div>
      <div className="flex justify-center items-center mt-3 mb-9">
        <img src="/images/dataImg2.png" alt="" className="" />
      </div>
      {/* Modal component */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)} // Close modal function
        title={modalContent.title}
        content={modalContent.content}
      />
    </div>
  );
};

export default News;

// NewsCard component
function NewsCard({ title, text, img, onClick }) {
  // Add onClick prop
  const previewText = text.length > 200 ? `${text.substring(0, 200)}...` : text;

  return (
    <div
      className="h-full flex flex-col gap-4 p-4 cursor-pointer"
      onClick={onClick}
    >
      {" "}
      {/* Add cursor-pointer and onClick */}
      <img src={img} alt="" className="rounded-xl" />
      <div className="flex justify-center flex-col gap-2 p-2">
        <div className="text-2xl text-white font-semibold">{title}</div>
        <div className="text-lg text-white">{previewText}</div>
      </div>
    </div>
  );
}
