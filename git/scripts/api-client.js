const apiCall=async (username)=>{
   
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
    
    return data;
}


// export function add(){

// }

// export function subtract(){

// }

export default apiCall;