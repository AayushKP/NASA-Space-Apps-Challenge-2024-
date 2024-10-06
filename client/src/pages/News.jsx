import React from "react";
import Background from "../components/Background";

const News = () => {
  // Define the array of news items
  const newsItems = [
    {
      title:
        "Gender Inequality and Climate Change: A Toxic Cocktail in the Sundarbans",
      description:
        "The Sundarbans, a delicate and ecologically significant region in South Asia, is facing the dual challenge of climate change and entrenched gender inequality. Rising sea levels, frequent cyclones, and severe flooding have caused widespread destruction of livelihoods and ecosystems, disproportionately affecting women in the region. Women in the Sundarbans, who traditionally depend on natural resources like farming and fishing for their sustenance, are now left with fewer opportunities as these resources dwindle. Yet, despite being the most impacted by climate change, women are often excluded from decision-making processes regarding climate adaptation and disaster management. This marginalization exacerbates their vulnerability, trapping them in a cycle of poverty and insecurity.",
      imageUrl: "/images/article1.png",
      altText: "Person sitting by water in the Sundarbans",
    },
    {
      title:
        "Mangrove Loss Exacerbates Climate Change Impacts in the Sundarbans",
      description:
        "The Sundarbans, a UNESCO World Heritage site, is facing a critical decline in mangrove trees. This loss of vegetation has far-reaching consequences for both the environment and the communities that rely on this ecosystem. Mangroves act as natural barriers, protecting coastal areas from storm surges, erosion, and saltwater intrusion. They also serve as important nurseries for fish and other marine life.",
      imageUrl: "/images/article2.png",
      altText: "Mangrove forest in the Sundarbans",
    },
    {
      title: "Climate Change Derails Tourist Guides' Earnings in Sundarbans",
      description:
        "Kolkata, India – The picturesque Sundarbans, once a thriving tourist destination, is facing the devastating impacts of climate change, which is significantly affecting the livelihoods of local tourist guides. As rising sea levels, extreme weather events, and environmental degradation threaten the region's unique biodiversity and natural beauty, the number of tourists visiting the Sundarbans has plummeted, resulting in a sharp decline in income for those who depend on the tourism industry.Many tourist guides in the Sundarbans have reported a significant drop in their earnings over the past few years. With fewer tourists venturing into the region due to concerns about safety and accessibility, the demand for their services has dwindled. This decline has forced many guides to explore alternative sources of income, such as fishing or farming, often with limited success.Climate change has also impacted the Sundarbans' wildlife, which is a major draw for tourists. As habitats are destroyed and species are threatened, the region's biodiversity has suffered. This decline in wildlife populations has further discouraged tourists from visiting the area, exacerbating the financial challenges faced by local guides.To address the crisis, conservation organizations and local communities are working together to develop sustainable tourism initiatives that can help mitigate the impacts of climate change while supporting the livelihoods of tourist guides. These initiatives include promoting eco-friendly tourism practices, investing in climate-resilient infrastructure, and raising awareness about the importance of protecting the Sundarbans.However, the challenges faced by tourist guides in the Sundarbans are significant, and more comprehensive solutions are needed. Governments, international organizations, and private sector businesses must work together to support the region's tourism industry and ensure the well-being of its local communities.",
      imageUrl: "/images/article3.png",
      altText: "Mangrove forest in the Sundarbans",
    },
    {
      title:
        "Climate Change Sweetens the Bitter Taste of Honey Production Decline",
      description:
        "Kolkata, India – The buzzing of bees, once a harmonious symphony of nature, is now a dwindling sound in the Sundarbans. Climate change, with its rising temperatures and erratic rainfall patterns, has dealt a bitter blow to honey production in the region.Bees, crucial pollinators for a variety of crops, are particularly sensitive to changes in their environment. Rising temperatures can disrupt their life cycles, reduce their foraging activity, and weaken their immune systems. Additionally, extreme weather events such as droughts and floods can destroy bee colonies and limit the availability of nectar-producing plants.The decline in honey production has had a significant impact on local beekeepers, who rely on this sweet commodity for their livelihoods. As their income sources dwindle, many beekeepers are struggling to make ends meet. The decline has also affected the broader agricultural sector, as bees play a vital role in pollinating crops such as mangoes, bananas, and cucumbers.To address the crisis, beekeepers and researchers are exploring various strategies to mitigate the impacts of climate change on honey production. These include developing climate-resilient beekeeping practices, planting bee-friendly plants, and protecting bee habitats. Additionally, efforts are underway to raise awareness about the importance of bees and the threats they face due to climate change.While the challenges faced by beekeepers in the Sundarbans are significant, it is essential to take action to protect these vital pollinators and ensure the sustainability of honey production. By adopting sustainable practices and investing in research, we can help safeguard the future of bees and the sweet nectar they produce.",
      imageUrl: "/images/article4.png",
      altText: "Mangrove forest in the Sundarbans",
    },
  ];

  return (
    <div className="bg-[#121212] font-sans overflow-hidden min-h-screen">
      {/* Background component with hero text */}
      <div>
        <Background
          heroText={
            "As the Sundarbans face severe flooding, women bear the brunt, losing livelihoods and access to resources."
          }
        />
      </div>
      {/* Render News Cards using grid */}
      <div className="w-full grid grid-cols-2 gap-4 h-auto p-4">
        {newsItems.map((item, index) => (
          <NewsCard
            key={index}
            title={item.title}
            text={item.description}
            img={item.imageUrl}
          />
        ))}
      </div>
      <div className="flex justify-center items-center">
        <img src="/images/dataImg.png" alt="" className="" />
      </div>
      <div className="flex justify-center items-center mt-3 mb-9">
        <img src="/images/dataImg2.png" alt="" className="" />
      </div>
    </div>
  );
};

export default News;

// NewsCard component to render each news item
function NewsCard({ title, text, img }) {
  const previewText = text.length > 200 ? `${text.substring(0, 200)}...` : text; // Adjust character length to fit 3 lines

  return (
    <div className="h-full flex flex-col gap-4 p-4">
      {" "}
      {/* Adjusted to use padding instead of margin */}
      <img src={img} alt="" className="rounded-xl" />
      <div className="flex justify-center flex-col gap-2 p-2">
        <div className="text-2xl text-white font-semibold">{title}</div>
        <div className="text-lg text-white">{previewText}</div>
      </div>
    </div>
  );
}
