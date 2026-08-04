import { useState, useEffect} from 'react'


function Categories() {
  const [fundis, setFundis] = useState([]);
  const [search, setSearch] = useState("")
  const [selectedFundi, setSelectedFundi] = useState(null)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(true)

  
  useEffect(()=> {
     async function fetchFundis() {
    try{
      setLoading(true)
      const response = await fetch('http://localhost:3001/fundis');
      if(!response.ok) throw new Error('Failed to fetch the Fundis')
        const data = await response.json()
      setFundis(data);
    }catch(err){setError(err.message)}

    finally{
      setLoading(false)
    }

    
  }
  fetchFundis();
  }, [])

  const filteredFundis = fundis.filter((f) => {
    const term =search.toLowerCase().trim();

    if(!term) return true;
    const name = String(f.name || f.fundiName || "").toLowerCase()
    const category = String(f.category || "").toLowerCase()
    const location = String(f.location || "").toLowerCase()
     return (
    name.includes(term) ||
    category.includes(term) ||
    location.includes(term)
  );
  });
 

  return (
    <>
      <h1 className='text-2xl font-black'>Find Fundi</h1>
      <input className='w-full p-3 border rounded-lg mb-2.5 text-sm focus:outline-none' type="text" placeholder='Search by name, loaction or trade (eg, plumber)' value={search} onChange={(e)=> setSearch(e.target.value)} />
      {!loading && !error && (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>{filteredFundis.length === 0 ? (<p className='text-gray-600 text-md col-span-full'>No Fundis Found</p>) : (
          filteredFundis.map((f)=> (<div key={f.id} className='p-4 border rounded-lg bg-white flex flex-col justify-between'><div>
            <h3>{f.name || f.fundiName}</h3>
            <p>{f.category}</p>
            <p>{f.location}</p>
            <p>{f.phone}</p>
            </div>
            <button className='mt-5 w-full py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-500' onClick={()=> setSelectedFundi(f)}>View Details</button>
            </div>))
        )}</div>
      )
      }
    </>
  )
}

export default Categories
