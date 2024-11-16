import React from 'react';
import './Locations.css';

// Sample data for locations
const locations = [
  {
    title: "Senopati, Petogogan",
    address: "Santa Modern Market, Lt.1, Blok CKS 5, Jl. Cipaku I No.1, Petogogan, Jakarta Selatan",
    image: "location.png",
  },
  {
    title: "Kebun Jeruk / Tanjung Duren",
    address: "Komplek Ruko Greenville Maisonet Blok D Nomor 9, RT.7/RW.5, North Tanjung Duren, Jakarta Barat",
    image: "location.png",
  },
  {
    title: "Food Plaza PIK",
    address: "Food Plaza PIK FMA-16, Kamal Muara, Penjaringan Jakarta Utara",
    image: "location.png",
  },
  {
    title: "Kuningan - D'Kanteen",
    address: "D Kanteen, Jl. Komando Raya No.18, DKI Jakarta 12920",
    image: "location.png",
  },
  {
    title: "Bintaro, Thelapan Square",
    address: "Jl. Juang Raya Bar. No.38, Kota Tangerang Selatan, Banten",
    image: "location.png",
  },
  {
    title: "Gading Serpong",
    address: "Ruko Golden 8, Jl. Ki Hajar Dewantara Jl. Boulevard Raya Gading Serpong No. 25, ...",
    image: "location.png",
  },
  {
    title: "Cipete",
    address: "Jl. Cipete Raya No. 74C, RW.3, Cipete Jakarta Selatan 12410",
    image: "location.png",
  },
  {
    title: "Menteng",
    address: "Jl. H. Agus Salim No. 60, Menteng, Jakarta Pusat 10350",
    image: "location.png",
  },
];

// Component for each individual location card
const LocationCard = ({ title, address, image }) => (
  <div className="location-card border rounded-lg p-4 shadow-lg bg-white flex items-center">
    <img src={require(`../assets/images/${image}`)} alt={title} className="location-icon mr-4"/>
    <div>
      <h3 className="text-lg font-semibold text-blue-700">{title}</h3>
      <p className="text-sm text-gray-600">{address}</p>
      <button className="text-red-600 font-semibold flex items-center mt-2">
      <img src={require(`../assets/images/cursor.png`)} alt="map" className="location-cursor mr-2"/>
        View Map
      </button>
    </div>
  </div>
);

// Main component for displaying the list of locations
const Locations = () => {
  return (
    <div className="container-location">
      <div className="locations-header">
        <h2 className="locations-title">Locations</h2>
      </div>
      <div className="grid">
        {locations.map((location, index) => (
          <LocationCard
            key={index}
            title={location.title}
            address={location.address}
            image={location.image}
          />
        ))}
      </div>
    </div>
  );
};


export default Locations;
