async function getUserActivity(id) {
    
    const response = await fetch(`http://localhost:3000/user/${id}/activity`);
    return await response.json()  
    
}

async function getUserData(id) {
    
    const response = await fetch(`http://localhost:3000/user/${id}`);  
    return await response.json()  
      
}

async function getUserPerf(id) {
    
    const response = await fetch(`http://localhost:3000/user/${id}/performance`);  
    return await response.json()  
      
}

async function getUserSessions(id) {
    
    const response = await fetch(`http://localhost:3000/user/${id}/average-sessions`);
    return await response.json()  
      
}

module.exports = {
    getUserActivity,
    getUserData,
    getUserPerf,
    getUserSessions
}