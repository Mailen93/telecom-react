// ! CRUD -> R:READ => GET
export const get = async (url) => {
    try {
        const response = await fetch(url)
        if(!response.ok) {
            throw new Error(`Something happened ${response.status} ${response.statusText}`)
        }
        const data = await response.json()
        return data
    } catch (error) {
        console.log("🚀 ~ file: http.js:14 ~ get ~ error:", error)
    }
}

// ! CRUD -> C:CREATE => POST

// ! CRUD -> U:UPDATE => PUT 

// ! CRUD -> D:DELETE => DELETE


