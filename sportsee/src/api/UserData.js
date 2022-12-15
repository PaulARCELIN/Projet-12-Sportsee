async function getUserData(id) {
    
    const response = await fetch(`http://localhost:3000/user/${id}`);
        
    return await response.json()  
      
}

export default getUserData

