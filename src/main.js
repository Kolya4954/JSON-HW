const inputRef = document.getElementById("bookmarkInput")
const buttonRef = document.getElementById("addBookmarkBtn")
const listRef = document.getElementById("bookmarkList")



let arrayOfLinks = []

const STORAGE_KEY = "listOfLinks"


function createLink(array){
   const items = array.map(item =>{
    return `<li>
<a href="${item}" target="_blank">${item}</a>
<button type="button" class="delete">X</button>
</li>`
   }).join("")
   listRef.innerHTML = items
}


const ifSaved = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
arrayOfLinks = ifSaved

createLink(arrayOfLinks)


buttonRef.addEventListener("click", () =>{
    arrayOfLinks.push(inputRef.value)
    inputRef.value = ""
    createLink(arrayOfLinks)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(arrayOfLinks))
})


listRef.addEventListener("click", (elem) =>{
  if (elem.target.classList.contains("delete")) {
        const li = elem.target.parentElement;
        const value = li.querySelector("a").textContent;
        arrayOfLinks = arrayOfLinks.filter(item => item !== value);
        li.remove();
        localStorage.setItem(STORAGE_KEY,JSON.stringify(arrayOfLinks))       
        }
})