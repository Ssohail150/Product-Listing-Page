// components/Modal.js
export default function Modal({ product, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="bg-white rounded-lg w-4/5 h-4/5 relative z-10 flex flex-col overflow-hidden shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-black-900  rounded-full bg-white p-2 focus:outline-none transition duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full p-5 overflow-auto">
          <div className="w-full h-full flex items-center justify-center">
            <img
              src={product.image}
              alt={product.title}
              className="object-contain w-full h-80"
            />
          </div>
          <div className="sm:border-l-2 border-gray-200 sm:pl-4 flex flex-col justify-center p-4 overflow-auto">
            <h2 className="text-2xl font-bold mb-4 text-black">{product.title}</h2>
            <p className="text-gray-700 mb-4">${product.price}</p>
            <p className="text-gray-500">{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
