// javascript
import { winningAddresses } from "./winning-addresses.js"

const submitForm = document.getElementById("submit-form")
const checkForm = document.getElementById("check-form")
const checkButton = document.getElementById("check")


submitForm.addEventListener("submit", e => {
    checkButton.disabled = true 
    checkButton.textContent = "Refresh page"
    e.preventDefault()

    try {
        const submitAddress = new FormData(submitForm).get('address')

        if(!submitAddress.includes("cosmos")) {
            throw new Error("Invalid address")
        }

        if(winningAddresses.includes(submitAddress)) {
            checkForm.innerHTML += `
            <p class='winning-message'>
                🎉 Congratulations! You have won the lucky draw! 🎉 </p><p class='winning-message'>
     Refresh the page for the next check.
            </p>`
        } else {
            checkForm.innerHTML += `
            <p class='winning-message'>
                🎉 Unfortunately! You are not in the winning list! 🎉 </p><p class='winning-message'>
     Refresh the page for the next check.
            </p>`
        }
        
    }
    catch (error) {
        checkForm.innerHTML += `
            <p class='winning-message'>
                Invalid address. Please try again.
            </p>`
    }
})

