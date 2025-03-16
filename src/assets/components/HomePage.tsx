import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HomePage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  const testimonials = [
    {
      name: "Chirag Baijaiya",
      handle: "@chiragbaijaiyaa",
      text: "Renewed my car insurance today with abc again. Two years in a row. Such a good service. No spam, clean UI on website and email. Quick call connect. Appreciation tweet .",
    },
    {
      name: "CA. Saurabh Sharma",
      handle: "@casauralah7",
      text: "@Insurance Realty got a very pleasant experience whether it was a claim lodgement, surveyor appointment and finally payment settlement. Thanks team @Insurance again.",
    },
    {
      name: "Aswathy Nambiar",
      handle: "@wonder_bubble",
      text: "Thanks for the splendid car revive service @Insurance! The service man was very hardworking and my car is now sparkling clean 😊️✨ #GoodDeedsNeedAMention",
    },
    {
      name: "Karan Yadav",
      handle: "@karanyadav21",
      text: "So just renewed my car insurance with @Insurance. First year I had paid 30K to another company, then when I switched to this, I paid 15K in 2018, 8K in 2019 and today I have just paid 6.3K in premium! How awesome is",
    },
  ];

  return (
    <div className="bg-[#f5f1e9] min-h-screen">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-[#f5f1e9]">
        <h1 className="text-xl font-bold">MutualGlobal</h1>
        <ul className="flex gap-6 text-gray-800">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Products</li>
          <li className="cursor-pointer">Services</li>
          <li className="cursor-pointer">Pos</li>
          <li className="cursor-pointer">MGIB Prime</li>
          <li className="cursor-pointer">About Us</li>
        </ul>
        <button className="bg-black text-white px-4 py-2 rounded-lg">Sign In</button>
      </nav>
      
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between px-16 py-20">
        <div className="max-w-xl">
          <h2 className="text-5xl font-bold text-gray-900">
            Elevate <span className="underline">Your Tomorrow</span> <span className="underline"> Insurance</span> Online Today .
          </h2>
        </div>
        <div className="mt-10 lg:mt-0">
          <img src="/hero.png" alt="AI illustration" className="w-64" />
        </div>
      </div>
       {/* Cards Section 1*/}
       <div className="flex flex-col lg:flex-row gap-6 justify-center px-8">
        <div className="bg-white shadow-lg p-6 rounded-lg max-w-sm">
          <h3 className="text-sm text-gray-600 font-bold">Health</h3>
          <h2 className="text-lg font-semibold">Health Insurance in Minutes</h2>
          <p className="text-gray-600 mt-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa non recusandae autem!</p>
          <button className="bg-black text-white px-4 py-2 rounded-lg mt-4">Learn more</button>
        </div>
        
        <div className="bg-white shadow-lg p-6 rounded-lg max-w-sm">
          <h3 className="text-sm text-gray-600 font-bold">Two Wheeler</h3>
          <h2 className="text-lg font-semibold">Lorem ipsum dolor sit.</h2>
          <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <button className="border-2 border-black px-4 py-2 rounded-lg mt-4">Learn more</button>
        </div>
        <div className="bg-white shadow-lg p-6 rounded-lg max-w-sm">
          <h3 className="text-sm text-gray-600 font-bold">Four wheeler</h3>
          <h2 className="text-lg font-semibold">Lorem ipsum dolor sit.</h2>
          <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <button className="bg-black text-white px-4 py-2 rounded-lg mt-4">Learn more</button>
        </div>
        <div className="bg-white shadow-lg p-6 rounded-lg max-w-sm">
          <h3 className="text-sm text-gray-600 font-bold">Commercial</h3>
          <h2 className="text-lg font-semibold">Lorem ipsum dolor sit.</h2>
          <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <button className="border-2 border-black px-4 py-2 rounded-lg mt-4">Learn more</button>
        </div>
        <div className="bg-white shadow-lg p-6 rounded-lg max-w-sm">
          <h3 className="text-sm text-gray-600 font-bold">Fire</h3>
          <h2 className="text-lg font-semibold">Lorem ipsum dolor sit.</h2>
          <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <button className="bg-black text-white px-4 py-2 rounded-lg mt-4">Learn more</button>
        </div>
        <div className="bg-white shadow-lg p-6 rounded-lg max-w-sm">
          <h3 className="text-sm text-gray-600 font-bold">Marine</h3>
          <h2 className="text-lg font-semibold">Lorem ipsum dolor sit.</h2>
          <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <button className="border-2 border-black px-4 py-2 rounded-lg mt-4">Learn more</button>
        </div>
        <div className="bg-white shadow-lg p-6 rounded-lg max-w-sm">
          <h3 className="text-sm text-gray-600 font-bold">Home</h3>
          <h2 className="text-lg font-semibold">Family is ....</h2>
          <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <button className="bg-black text-white px-4 py-2 rounded-lg mt-4">Learn more</button>
        </div>
        <div className="bg-white shadow-lg p-6 rounded-lg max-w-sm">
          <h3 className="text-sm text-gray-600 font-bold">Travel</h3>
          <h2 className="text-lg font-semibold">Lorem ipsum dolor sit.</h2>
          <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <button className="border-2 border-black px-4 py-2 rounded-lg mt-4">Learn more</button>
        </div>
      </div>
      {/* Cards Section 2*/}
      <div className="flex flex-col lg:flex-row gap-6 justify-center px-8">
        {/* Your existing cards */}
      </div>
      
      {/* Testimonials Carousel Section */}
      <div className="px-8 py-12">
        <h2 className="text-4xl font-bold text-center mb-8">Our customers experience</h2>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-4">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                <p className="text-gray-600">{testimonial.handle}</p>
                <p className="text-gray-800 mt-4">{testimonial.text}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      
      
      {/* New Animated Section */}
      <motion.div 
        className="bg-[#e8dfd3] p-12 mt-12 rounded-xl mx-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold">Do you have any pending challans</h2>
        <p className="text-gray-700 mt-4 max-w-2xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga maxime alias totam quis suscipit laudantium in!</p>
        <motion.button 
          className="mt-6 border-2 border-black px-4 py-2 rounded-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Read about it
        </motion.button>
        
        <div className="flex flex-col lg:flex-row gap-4 mt-6">
          <motion.div 
            className="bg-[#d6cbbc] p-4 rounded-lg flex-1"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-sm font-bold">Model details</h3>
            <h2 className="text-lg font-semibold">know more here...</h2>
            <span className="text-xl">→</span>
          </motion.div>
          <motion.div 
            className="bg-[#d6cbbc] p-4 rounded-lg flex-1"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-sm font-bold">More insights</h3>
            <h2 className="text-lg font-semibold">know more here...</h2>
            <span className="text-xl">→</span>
          </motion.div>
        </div>
      </motion.div>
      <footer className="bg-gray-900 text-white p-8">
      <div className="container mx-auto">
        {/* ACKO Information */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold">MutualGlobal</h2>
          <p className="text-gray-400">MutualGlobal Technology & Services Private Limited</p>
          <p className="text-gray-400">
2nd Floor, 16/1, AVS Compound,
80ft Road, 4th Block, Koramangala,
Bangalore, 560034</p>
        </div>

        {/* Products and Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">PRODUCTS</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Motor Insurance</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Car Insurance</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Health Insurance</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Travel Insurance</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Life Insurance</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Term Insurance</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Group Health Insurance</a></li>
              {/* <li><a href="#" className="text-gray-400 hover:text-white">ABHA Card</a></li> */}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">COMPANY</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">About us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Board of directors</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Media kit</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">All resources</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Articles</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Autodesk - The tech blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Partnerships</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Sitemap</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">LEGAL</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Whistleblower policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Financials & disclosures</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Privacy policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Terms & conditions</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">SUPPORT</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Contact us</a></li>
            </ul>
          </div>
        </div>

        {/* Additional Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">CAR INSURANCE</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Bike Insurance</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Health Insurance</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Group Health Insurance</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">TRAVEL INSURANCE</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">International Travel Insurance</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">LIFE INSURANCE</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Term Insurance</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center text-gray-400">
          <p>Listed as the "Insurance" on the Apple App Store</p>
          <p className="mt-2">The use of images and brands are only for the purposes of publication and illustration. MutualGlobal reserves the right to take action against any third parties.</p>
        </div>
      </div>
    </footer>
    </div>
    
    
  );
}