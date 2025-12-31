console.log("JS LOADED")
// ====== REMOVE DEMO DATA ======
function removeDemoData() {
    const demoCards=document.querySelectorAll(".habit-card.demo")

    demoCards.forEach((card) => card.remove())
}

// ====== STATS UPDATE FUNCTION ======
function statsUpdate(){
    // TOTAL HABITS
    let totalHabits=document.querySelectorAll(".habit-card").length
    const totalHabitsText=document.getElementById("total-habits")
    totalHabitsText.innerText=`Total Habits: ${totalHabits}`

    // COMPLETED TODAY
    let completedToday=document.querySelectorAll(".habit-card.completed").length
    const completedTodayText=document.getElementById("completed-today")

    completedTodayText.innerText=`Completed Today: ${completedToday}`

    // BEST STREAK
    const cards = document.querySelectorAll(".habit-card")
    let bestStreak = 0

    cards.forEach((card) => {
        const streak = Number(card.dataset.streak || 0)
        if (streak > bestStreak) bestStreak = streak
    })

    const bestStreakText=document.getElementById("best-streak")

    bestStreakText.innerText=`Best Streak: ${bestStreak} Days`
}

// DELETE EXISTING CARD
const deleteIcons = document.querySelectorAll(".delete-habit")

deleteIcons.forEach((icon) => {
  icon.addEventListener("click", (e) => {
    e.stopPropagation()

    const card = icon.parentElement
    const habitName = card.querySelector("h3").innerText

    if (!confirm(`Delete "${habitName}"?`)) return

    card.remove()
    statsUpdate()
  })
})

// ====== MARK AS DONE BUTTON ====== 
const button=document.querySelectorAll(".habit-card button")

let completedToday=document.querySelectorAll(".habit-card.completed").length
const completedTodayText=document.querySelectorAll(".habit-card.completed").length

button.forEach((btn) => {
    btn.addEventListener("click", () => {

        const card = btn.parentElement
        let streak=Number(card.dataset.streak || 0)

        const isCompleted=card.classList.toggle("completed")

        if (isCompleted) {
            btn.innerText = "Completed ✓"
            streak++
        } 
        
        else {
            btn.innerText = "Mark As Done"
            streak = Math.max(0, streak - 1)
        }

        card.dataset.streak = streak

        card.querySelector("p").innerText =
            `Current Streak: ${streak} Days`

        statsUpdate()
    })
})

// ====== FORM SUBMISSION ====== 
const habitForm=document.querySelector(".habit-form")
const habitInput=document.getElementById("habit-input")

habitForm.addEventListener("submit", (x) => {
    x.preventDefault()
    const habitName=habitInput.value.trim()
    if (habitName ==="") return

    // REMOVE DEMO DATA ON FIRST REAL INPUT
    if (document.querySelector(".habit-card.demo")) {
        removeDemoData()
    }

    // ====== HABIT CARD ======
    // CREATE
    const habitCard=document.createElement("div")
    habitCard.classList.add("habit-card")

    habitCard.innerHTML= `
        <span class="delete-habit">✕</span>
        <h3>${habitName}</h3>
        <p>Current Streak: 0 Days</p>
        <button>Mark As Done</button>
    `
    // APPEND
    const habitContainer=document.getElementById("habit-container")
    habitContainer.appendChild(habitCard)

    // DELETE BUTTON LOGIC NEW CARD
    const deleteIcon = habitCard.querySelector(".delete-habit")

    deleteIcon.addEventListener("click", () => {
        if (!confirm(`Delete "${habitName}"?`)) return
        habitCard.remove()
        statsUpdate()
    })

    // MARK AS DONE BUTTON LOGIC FOR NEW CARD
    const newButton = habitCard.querySelector("button")

    newButton.addEventListener("click", () => {
        let streak = Number(habitCard.dataset.streak || 0)

        if (newButton.innerText === "Mark As Done") {
            newButton.innerText = "Completed ✓"
            habitCard.classList.add("completed")
            streak++
        } 
        
        else {
            newButton.innerText = "Mark As Done"
            habitCard.classList.remove("completed")

            streak = Math.max(0, streak - 1)
        }

        habitCard.dataset.streak = streak

        habitCard.querySelector("p").innerText =
            `Current Streak: ${streak} Days`

        statsUpdate()
    })

    habitInput.value = ""

    statsUpdate()
})

// INITIAL SYNC
statsUpdate()

