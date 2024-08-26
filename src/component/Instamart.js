import log from "../assets/instamart.png"
const Instamart = ()=>{
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <header className="bg-white shadow-md p-6 mb-8">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          InataMart
        </h1>
      </header> 

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {Array(10)
          .fill([])
          .map((e, index) => (
            <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img
            className="h-40 w-full object-cover mb-4 rounded"
            src={log}
            alt="Product"
          />
          <h2 className="text-lg font-semibold text-gray-700 mb-2">
            Insta-Mart
          </h2>
          
          <button className="p-2 m-2 bg-purple-800 text-white rounded-lg  hover:bg-purple-500 transition duration-300">
            Add to Cart
          </button>
        </div>
          ))}
        
        {/* Repeat above div block for more products */}
      </section>
    </div>
  )
};

export default Instamart; 