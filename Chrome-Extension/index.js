let myLeads = [];
let oldLeads = []
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const tabBtn = document.getElementById("tab-btn");
const clearBtn = document.getElementById("clear-btn");
let ulEl = document.getElementById("ul-el");
ulEl.style.display = "none";


const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
console.log(leadsFromLocalStorage)


if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    render(myLeads);
}

tabBtn.addEventListener("click", function(){    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        console.log(tabs)
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)
    })
})

function render(leads) {
    let listItems = "";
    leads = JSON.parse(localStorage.getItem("myLeads"));
    
    if (leads === null || leads.length === 0) { // Vérification si myLeads est null ou vide
        ulEl.style.display = "none";
    } else {
        ulEl.style.display = "block";
        for (let i = 0; i < leads.length; i++) {
            listItems += `
                        <li>
                            <a target='_blank' href='${leads[i]}'>
                                ${leads[i]}
                            </a>
                        </li>`;
        }
        ulEl.innerHTML = listItems;
    }
}

clearBtn.addEventListener("dblclick", function() {
    localStorage.clear();
    myLeads = [];
    render();
});


inputBtn.addEventListener("click", function() {
    if (inputEl.value) {
        if (myLeads === null) {
            myLeads = [];
        }
        myLeads.push(inputEl.value);
        inputEl.value = "";

        localStorage.setItem("myLeads", JSON.stringify(myLeads));

        render(myLeads);
    }
});



