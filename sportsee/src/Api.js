import React from "react"

function Api(id) {
    /* const search = window.location.search
    const params = new URLSearchParams (search)
    const userId = params.get ('id')
    console.log(userId) */
    
    return fetch('http://localhost:3000/user/18/performance')
        .then(res => res.json())
        .then(data => console.log(data.data))
   
}

export default Api