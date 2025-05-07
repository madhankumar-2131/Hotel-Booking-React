// Mock data for hotels
const hotels = [
    { id: 1, name: 'Hotel 1', description: 'Nice place', price: 100, image: '/images/image1.png', rating: 4.5 },
    { id: 2, name: 'Hotel 2', description: 'Great place', price: 150, image: '/images/image2.png', rating: 4.0 },
    { id: 3, name: 'Hotel 1', description: 'Nice place', price: 100, image: '/images/image.png', rating: 4.5 },
    { id: 4, name: 'Hotel 2', description: 'Great place', price: 150, image: '/images/image2.png', rating: 4.0 },
    { id: 5, name: 'Hotel 1', description: 'Nice place', price: 100, image: '/images/image1.png', rating: 4.5 },
    { id: 6, name: 'Madhan', description: 'Great place', price: 150, image: '/images/image2.png', rating: 4.0 },
    { id: 7, name: 'Hotel 1', description: 'Nice place', price: 100, image: '/images/image.png', rating: 4.5 },
    { id: 8, name: 'Hotel 2', description: 'Great place', price: 150, image: '/images/image2.png', rating: 4.0 },
    { id: 9, name: 'Hotel 1', description: 'Nice place', price: 100, image: '/images/image1.png', rating: 4.5 },
    { id: 10, name: 'Hotel 2', description: 'Great place', price: 150, image: '/images/image2.png', rating: 4.0 },
    { id: 11, name: 'Hotel 1', description: 'Nice place', price: 100, image: '/images/image.png', rating: 4.5 },
    { id: 12, name: 'Hotel 2', description: 'Great place', price: 150, image: '/images/image2.png', rating: 4.0 },
    // Add more hotels as needed
  ];
  
  // Function to fetch all hotels
  export const fetchHotels = async () => {
    return hotels;
  };
  
  // Function to fetch a single hotel by ID
  export const fetchHotelById = async (id) => {
    return hotels.find(hotel => hotel.id === parseInt(id));
  };
  