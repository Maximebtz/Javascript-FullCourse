
let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
let ulEl = document.getElementById("ul-el")
ulEl.style.display = "none"


inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads()
    
})


function renderLeads(){
    
    let listItems = ""
        if(ulEl === false){
            ulEl.display ="none"
        } else {
            ulEl.style.display = "block"
            for(let i = 0; i < myLeads.length; i++) {
                listItems += `
                            <li>
                                <a  target='_blank' href='${myLeads[i]}'>
                                    ${myLeads[i]}
                                </a>
                            </li>
                            `
        
        ulEl.innerHTML = listItems

        }
    }
}