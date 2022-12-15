async function getUserActivity(id) {
    
    const response = await fetch(`http://localhost:3000/user/${id}/activity`);
        
    return await response.json()  
      
}

export default getUserActivity

