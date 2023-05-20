let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const clearBtn = document.getElementById("clear-btn");
let ulEl = document.getElementById("ul-el");
ulEl.style.display = "none";


const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
console.log(leadsFromLocalStorage)


if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLeads()
}

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    inputEl.value = "";

    localStorage.setItem("myLeads", JSON.stringify(myLeads));

    renderLeads();

    console.log(localStorage.getItem("myLeads"));
});

clearBtn.addEventListener("dblclick", function() {

    localStorage.clear();
    myLeads = []
    renderLeads()

});

function renderLeads() {
    let listItems = "";
    myLeads = JSON.parse(localStorage.getItem("myLeads"));
    
    if (myLeads === null || myLeads.length === 0) { // Vérification si myLeads est null ou vide
        ulEl.style.display = "none";
    } else {
        ulEl.style.display = "block";
        for (let i = 0; i < myLeads.length; i++) {
            listItems += `<li><a target='_blank' href='${myLeads[i]}'>${myLeads[i]}</a></li>`;
        }
        ulEl.innerHTML = listItems;
    }
}
