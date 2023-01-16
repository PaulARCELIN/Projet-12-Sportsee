//function to get the ID in the URL 
export function getUserId() {
    const search = window.location.search
    
    const params = new URLSearchParams (search)
    const id = params.get('id')
    if(id == null ) {
        return null
    }
    const userId = id.split('/')
    return userId[0]
}




