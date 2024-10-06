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
      title:
        "Mangrove Loss Exacerbates Climate Change Impacts in the Sundarbans",
      description:
        "The Sundarbans, a UNESCO World Heritage site, is facing a critical decline in mangrove trees. This loss of vegetation has far-reaching consequences for both the environment and the communities that rely on this ecosystem. Mangroves act as natural barriers, protecting coastal areas from storm surges, erosion, and saltwater intrusion. They also serve as important nurseries for fish and other marine life.",
      imageUrl: "/images/article3.png",
      altText: "Mangrove forest in the Sundarbans",
    },
    {
      title:
        "Mangrove Loss Exacerbates Climate Change Impacts in the Sundarbans",
      description:
        "The Sundarbans, a UNESCO World Heritage site, is facing a critical decline in mangrove trees. This loss of vegetation has far-reaching consequences for both the environment and the communities that rely on this ecosystem. Mangroves act as natural barriers, protecting coastal areas from storm surges, erosion, and saltwater intrusion. They also serve as important nurseries for fish and other marine life.",
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
