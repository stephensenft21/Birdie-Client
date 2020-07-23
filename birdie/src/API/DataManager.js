
import {
    createAuthHeaders,
    baseUrl
} from './userManager';

let API = {

    getOne: (resource, id) => {
        const authHeader = createAuthHeaders()
        return fetch(`${baseUrl}/${resource},${id}`, {
            method: "GET",
            headers: authHeader
        }).then(data => data.json())
    },
    //https://localhost:5001/api/v1/Resource
    getAll: (resource) => {
        const authHeader = createAuthHeaders()
        return fetch(`${baseUrl}/${resource}`, {
            method: "GET",
            headers: authHeader
        }).then(data => data.json())

    },
    
    getOneResourceWithChild: (resource, id, secondResource) => {
        
        const authHeader = createAuthHeaders()
        return fetch(`${baseUrl}/${resource}/${id}?includes=${secondResource}`, {
            method: "GET",
            headers: authHeader
        }).then(data => data.json())
    },
    //(https://localhost:5001/api/v1/Compulsion/1?includes=records)
    PostData(resource, newObj) {
        const authHeader = createAuthHeaders()
        return fetch(`${baseUrl}/${resource}`, {
            method: "POST",
            body: JSON.stringify(newObj),
            headers: {
                ...authHeader,
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            // method: "POST",
            // headers: authHeader,

            // body: JSON.stringify(newObj)
        }).then(response => response.json())
    },

    deleteUserData(resource, Id) {
        const authHeader = createAuthHeaders()
        return fetch(`${baseUrl}/${resource}/${Id}`, {
            
            method: "DELETE",
            headers: authHeader
        }).then(response => response.json())

    },
    update(editedObject, database) {
        const authHeader = createAuthHeaders()
        return fetch(`${baseUrl}/${database}/${editedObject.id}`, {
            method: "PUT",
            headers: {
                ...authHeader,
                Accept: 'application/json',

            },
            body: JSON.stringify(editedObject)
        }).then(data => data.json())
    }, getWeekData(resource) {
        const authHeader = createAuthHeaders()
        return fetch(`${baseUrl}${resource}?week=true`,
        {
            method: "GET",
            headers: authHeader
        })
            .then(response => response.json())
    },
}
export default API