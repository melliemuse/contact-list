// Displays all contacts. It should import the Contact component and the ContactCollection component. Calling functions from ContactCollection - intial get all and passing values to contact.js

import ContactCollection from "./ContactCollection.js"
import makeContactHTML from "./Contact.js"
import contactForm from "./ContactForm.js"

// contact
const displayContactList = () => {
    ContactCollection.getAPIContactsData()
    .then(contacts => {
        contactForm()
        const resultsContainer = document.querySelector("#results--container")
        console.log(contacts)
        contacts.forEach(contact => {
            console.log(contact)
            console.log(contact.name)
            resultsContainer.innerHTML += makeContactHTML(contact)
        })
    })
}

export default displayContactList
