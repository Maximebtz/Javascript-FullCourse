
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
    saveEl.innerText += countStr
    console.log(count)
}


saveBtn.addEventListener('click', function() {

    save()
})