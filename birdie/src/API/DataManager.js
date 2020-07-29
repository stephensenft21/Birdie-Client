
import {
    // createAuthHeaders,
    AuthApiUrl
} from './AuthManager';
console.log(AuthApiUrl)
let API = {

    getOne: (resource,id) => {
        // const authHeader = createAuthHeaders()
        return fetch(`${AuthApiUrl}/${resource}/${id}`, {
            method: "GET",
           
        }).then(data => data.json())
        
    }, 
    
    //https://localhost:5001/api/v1/Resource
    getAll: (resource) => {
        // const authHeader = createAuthHeaders()
        return fetch(`${AuthApiUrl}/${resource}`, {
            method: "GET",
             headers:  {Accept: 'application/json',
                'Content-Type': 'application/json',}
        }).then(data => data.json())

    },
    
//     getOneResourceWithChild: (resource, id, secondResource) => {
        
//         const authHeader = createAuthHeaders()
//         return fetch(`${AuthApiUrl}/${resource}/${id}?includes=${secondResource}`, {
//             method: "GET",
//             headers: authHeader
//         }).then(data => data.json())
//     },
//     //(https://localhost:5001/api/v1/Compulsion/1?includes=records)
//     PostData(resource, newObj) {
//         const authHeader = createAuthHeaders()
//         return fetch(`${AuthApiUrl}/${resource}`, {
//             method: "POST",
//             body: JSON.stringify(newObj),
//             headers: {
//                 ...authHeader,
//                 Accept: 'application/json',
//                 'Content-Type': 'application/json',
//             },
//             // method: "POST",
//             // headers: authHeader,

//             // body: JSON.stringify(newObj)
//         }).then(response => response.json())
//     },

    deleteUserData(resource, Id) {
        // const authHeader = createAuthHeaders()
        return fetch(`${AuthApiUrl}/${resource}/${Id}`, {
            
            method: "DELETE",
            // headers: authHeader
        }).then(response => response.json())

    },
    update(resource,editedObject) {
        // const authHeader = createAuthHeaders()
        return fetch(`${AuthApiUrl}/${resource}/${editedObject.id}`, {
            method: "PUT",
            headers: {
                // ...authHeader,
                "Content-Type": 'application/json',

            },
            body: JSON.stringify(editedObject)
        }).then(data => data.json())
    },
    // getWeekData(resource) {
//         const authHeader = createAuthHeaders()
//         return fetch(`${AuthApiUrl}${resource}?week=true`,
//         {
//             method: "GET",
//             headers: authHeader
//         })
//             .then(response => response.json())
//     },
 }

export default API