const form1 = document.querySelector("#search-button")
const searchinput1 = document.getElementById("search-input")
const searchresult1 = document.querySelector(".search-result")
const showmore = document.getElementById("show-more-button")
let inputdata =""
let page=1
async function searchimages(){
    inputdata = searchinput1.value
    const url = `https://api.unsplash.com./search/photos/?page=${page}&query=${inputdata}&client_id=y-cBMHagrW6lPRcPcIGhYIy4RTJ9cqW-4SOLSGLazPY&per_page=9`;
    const response = await fetch(url)
    const data = await response.json()
    const r = data.results
    if(page === 1)
    {
        searchresult1.innerHTML=''
    }
    r.map((result)  =>{
       const imagewrapper = document.createElement("div")
       imagewrapper.classList.add("search-results")
       const image = document.createElement("img")
       image.src = result.urls.small
       image.alt = result.alt_description
       const imageLink = document.createElement("a")
       imageLink.href = result.links.html
       imageLink.target="_blank"
       imageLink.textContent =result.alt_description
       imagewrapper.appendChild(image)
       imagewrapper.appendChild(imageLink)
       searchresult1.appendChild(imagewrapper)
    })
    page++
    if(page>1)
    {
        showmore.style.display = "block"
    }
}
form1.addEventListener("click",(e)=>{
    e.preventDefault()
    page=1
    searchimages()
})
showmore.addEventListener("click",()=>{
    searchimages()
})