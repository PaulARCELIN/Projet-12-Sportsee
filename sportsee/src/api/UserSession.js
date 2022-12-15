async function getUserSessions(id) {
    
    const response = await fetch(`http://localhost:3000/user/${id}/average-sessions`);
        
    return await response.json()  
      
}

export default getUserSessions

