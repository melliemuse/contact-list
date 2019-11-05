// Loads existing contacts from a json-server API, and saves new ones.

const ContactCollection = {
    getAPIContactsData : () => {
        return fetch("http://localhost:8088/contacts")
        .then(contacts => contacts.json())
    },
    saveAPINewContactData : (newContact) => {
        console.log("it's running!")
        return fetch("http://localhost:8088/contacts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newContact)
        }
        )
    }
}

export default ContactCollection