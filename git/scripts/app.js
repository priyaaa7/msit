import apiCall from "./api-client.js";

document.getElementById('searchBtn').addEventListener('click',myfunction );
function myfunction(){
fn();
dynamicContent();

}

const fn= async ()=> {
    const username = document.getElementById('username').value;
    
    if (username === "") {
        alert('Please enter a username');
        return;
    }
let data= await apiCall(username);

    document.getElementById('avatar').src = data.avatar_url;
    document.getElementById('name').textContent =  data.login;
    document.getElementById('repos').textContent = data.public_repos;
    document.getElementById('followers').textContent = data.followers;
    document.getElementById('following').textContent = data.following;
    document.getElementById('profileLink').href = data.html_url;

    document.getElementById('profile').style.display = 'block';

}

const dynamicContent=()=>{
    let h2= document.createElement('h2');
    h2.innerText='i am a dynamic element'
    let btn= document.createElement('button');
    btn.innerText='danger'
    btn.className='btn btn-danger';

    let maindiv= document.getElementById("dynamicContent");
    maindiv.appendChild(h2);
    maindiv.appendChild(btn);

}