const blogPosts = [
  {
    title: "5 Tips for Healthier Soil Using Organic Methods",
    category: "Soil & Composting",
    image: "https://www.usbiopower.com/hubfs/Blog%20Art/aoeblog-Organic-Soil-vs-Compost.jpg",
  },
  {
    title: "Natural Pest Control: What Works for Small Farms",
    category: "Crop Protection",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp2skp3-7zwavcq1NQAEwZZ_Qsl2qPW4dgcueJrKtfJSvXq6oR0lMnowHguJ1utIZlOjo&usqp=CAU",
  },
  {
    title: "How to Get Certified as an Organic Farmer",
    category: "Organic Certification",
    image: "https://i.ibb.co.com/LdKdw8NP/Organic-Certification.png",
  },
  {
    title: "Companion Planting: Boost Yields Naturally",
    category: "Crop Planning",
    image: "https://www.shutterstock.com/image-photo/female-farmers-use-laptops-track-260nw-2670599169.jpg",
  },
];
const Blogs = () => {
  return (
    <section className="bg-white py-12 px-6 md:px-20">
      <div className="text-center">
        <h2 className="text-4xl font-bold   ">Agro News</h2>
        <div className="flex justify-center mb-3">
         <div className="w-24 h-[3px] rounded-full bg-gradient-to-r from-black to-black"></div>
        </div>
        <p className="  text-gray-600 mb-10">
          Stay ahead with fresh insights on organic farming, soil health, pest
          control, and certification.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="rounded-lg shadow hover:shadow-lg transition overflow-hidden"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm text-green-700 font-medium">
                  {post.category}
                </span>
              </div>
              

              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-green-700 transition cursor-pointer">
                See Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
