let t=document.getElementById("bookmarkInput"),e=document.getElementById("addBookmarkBtn"),n=document.getElementById("bookmarkList"),a=[],l="listOfLinks";function o(t){n.innerHTML=t.map(t=>`<li>
<a href="${t}" target="_blank">${t}</a>
<button type="button" class="delete">X</button>
</li>`).join("")}o(a=JSON.parse(localStorage.getItem(l))||[]),e.addEventListener("click",()=>{a.push(t.value),t.value="",o(a),localStorage.setItem(l,JSON.stringify(a))}),n.addEventListener("click",t=>{if(t.target.classList.contains("delete")){let e=t.target.parentElement,n=e.querySelector("a").textContent;a=a.filter(t=>t!==n),e.remove(),localStorage.setItem(l,JSON.stringify(a))}});
//# sourceMappingURL=JSON-HW.c1d0793d.js.map
