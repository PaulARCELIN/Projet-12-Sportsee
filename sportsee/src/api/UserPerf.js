async function getUserPerf(id) {
    
    const response = await fetch(`http://localhost:3000/user/${id}/performance`);
        
    return await response.json()  
      
}

export default getUserPerf

