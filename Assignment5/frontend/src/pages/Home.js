import DestinationCard from "../components/DestinationCard";
import Hero from "../components/Hero";

const destinations = [
  {
    name: "Santorini Sunset Escape",
    location: "Santorini, Greece",
    days: "5 Days",
    price: 70000,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    desc: "Enjoy stunning sunsets and white-washed houses by the sea.",
  },
  {
    name: "Swiss Alps Adventure",
    location: "Zermatt, Switzerland",
    days: "6 Days",
    price: 120000,
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    desc: "Experience snow-capped mountains and scenic train rides.",
  },
  {
    name: "Bali Tropical Retreat",
    location: "Bali, Indonesia",
    days: "5 Days",
    price: 60000,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    desc: "Relax in tropical paradise with beaches and temples.",
  },
  {
    name: "Sydney City Explorer",
    location: "Sydney, Australia",
    days: "4 Days",
    price: 95000,
    image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=1000",
    desc: "Visit Opera House and enjoy vibrant city life.",
  },
  {
    name: "Iceland Northern Lights",
    location: "Reykjavik, Iceland",
    days: "5 Days",
    price: 130000,
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa",
    desc: "Witness magical auroras and icy landscapes.",
  },
  {
    name: "Rome Historical Tour",
    location: "Rome, Italy",
    days: "4 Days",
    price: 85000,
    image: "https://images.unsplash.com/photo-1529260830199-42c24126f198",
    desc: "Explore ancient ruins and rich cultural heritage.",
  },
  {
    name: "Dubai Luxury Trip",
    location: "Dubai, UAE",
    days: "5 Days",
    price: 60000,
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
    desc: "Luxury shopping and desert safari.",
  },
  {
    name: "Paris Romantic Getaway",
    location: "Paris, France",
    days: "6 Days",
    price: 85000,
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    desc: "Romantic cafes and Eiffel Tower.",
  },
  {
    name: "London City Tour",
    location: "London, UK",
    days: "5 Days",
    price: 95000,
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b",
    desc: "Explore Big Ben and Thames river.",
  },
];

function Home() {
  return (
    <>
      <Hero />

      <h2 className="title">Featured Packages</h2>

      <div className="grid">
        {destinations.map((place, index) => (
          <DestinationCard key={index} place={place} />
        ))}
      </div>
    </>
  );
}

export default Home;