// Displays a person's name, phone number, and address building each contact element like HTMLComponentMaker


const makeContactHTML = (contact) => {
    return `
    <div>
    <h1>Name: ${contact.name}</h1>
    <h3>Email: ${contact.email}</h1>
    <h3>Name: ${contact.phoneNumber}</h1>
    </div>
    `
}


export default makeContactHTML