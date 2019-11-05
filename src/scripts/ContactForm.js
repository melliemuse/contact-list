// Listens for when the submit button is pressed. When it is triggered, a new contact should be POSTed to the API. It should import the ContactCollection component
import ContactCollection from "./ContactCollection.js"
import displayContactList from "./ContactList.js"

const submitFunc = () => {
    event.preventDefault()
    const nameInputField = document.querySelector("#name")
    const name = nameInputField.value
    console.log(name)
    const phoneNumberField = document.querySelector("#phoneNumber")
    const phoneNumber = phoneNumberField.value
    console.log(phone)
    const emailField = document.querySelector("#email")
    const email = emailField.value
    // const interestsField = document.querySelector("#interests")
    // const interestsValue = interestsField.value
    console.log({ name, phoneNumber, email})
    ContactCollection.saveAPINewContactData({ name, phoneNumber, email})
    .then(ContactCollection.getAPIContactsData)
    .then(contacts => displayContactList())
    // .then pass data to contact.js / contactList
}

const contactForm = () => {
    const body = document.querySelector("body")
    const form = document.createElement("form")
    const nameInputField = document.createElement("input")
    nameInputField.id = "name"
    const nameLabel = document.createElement("label")
    // nameLabel.id = "name"
    nameLabel.innerHTML = "Name"
    const phoneNumberField = document.createElement("input")
    phoneNumberField.id = "phoneNumber"
    const phoneNumberLabel = document.createElement("label")
    // phoneNumberLabel.id = "phoneNumber"
    phoneNumberLabel.innerHTML = "Phone Number"
    const emailField = document.createElement("input")
    emailField.id = "email"
    const emailLabel = document.createElement("label")
    // emailLabel.id = "email"
    emailLabel.innerHTML = "Email"
    // const interestsLabel = document.createElement("label")
    // // interestsLabel.id = "interests"
    // interestsLabel.innerHTML = "Interests"
    // const interestsField = document.createElement("input")
    // interestsField.id = "interests"
    const submitButton = document.createElement("button")
    submitButton.className = "submit--button"
    submitButton.innerHTML = "Submit"
    const resultsContainer = document.createElement("div")
    resultsContainer.id = "results--container"
    body.appendChild(form)
    form.appendChild(nameLabel)
    form.appendChild(nameInputField)
    form.appendChild(phoneNumberLabel)
    form.appendChild(phoneNumberField)
    form.appendChild(emailLabel)
    form.appendChild(emailField)
    // form.appendChild(interestsLabel)
    // form.appendChild(interestsField)
    form.appendChild(submitButton)
    body.appendChild(resultsContainer)

    submitButton.addEventListener("click", submitFunc)
}


export default contactForm