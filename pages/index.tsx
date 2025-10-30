import axios  from "axios";
import { useEffect, useState } from "react";
import PropertyCard from "@/components/common/PropertyCard";


export default function Home() {
  const [properites, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const fetchProperties = async ()=>{
      try {
        const response = await axios.get('/api/properties');
        setProperties(response.data);
        setLoading(false);
      }
      catch (error) {
        console.error("Error fetching properties:", error);
        setLoading(false);
      }
    }

    fetchProperties();

  },[]);

  if (loading) {
    return <p>Loading...</p>;
  }


  return (
    <div className="grid grid-cols-3 gap-4">
      {properites.map((property)=>(
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );

}