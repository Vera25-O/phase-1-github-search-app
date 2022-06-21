document.addEventListener("DOMContentLoaded",()=>{
    gitHubUserInfo()
})

function gitHubUserInfo(){
    document.querySelector('form').addEventListener('submit',(e)=>{
        e.preventDefault()
        const search = document.getElementById('search').value
        const searchInput = search.replace("","")
        console.log(searchInput)
        fetch('https://api.github.com/users/${searchInput}')
        .then (res => res.json())
        .then(data=>{
            displayUser(data)
            userRepos(data)
        })
    })
}
function displayUser(user){
    const li=document.createElement("li")
    li.innerHTML=`<img src="${user.avatar_url}"alt="">
    <h2>${user.login}</h2>
    <a href="${user.html_url}">check Profile</a>`
    document.getElementById("user-list").appendChild(li)
}
function userRepos(repos){
    fetch(repos.repos_url)
    .then(res=>res.json())
    .then(repData=>repData.forEach(repo=>displayRepo(repo)))
}
function displayRepo(repo){
    const repolink = document.createElement("li")
    repolink.innerHTML=`${repo.nam}`
    document.getElementById("repos-list").appendChild*(repolink)
} 