
let countEl = document.getElementById("count-el")
let count = 0
let saveEl = document.getElementById("save-el")
let saveBtn = document.getElementById("save-btn")

function increment() {
    count += 1
    countEl.innerText = count
}

function save() {
    let countStr = count + " - " 
    saveEl.textContent += countStr
    count = 0
    countEl.textContent = 0
}


saveBtn.addEventListener('click', function() {

    save()
})