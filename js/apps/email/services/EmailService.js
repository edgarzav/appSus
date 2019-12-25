import Email from "./Email.js"

export default { getEmails, getEmailById, toggleReadMail, addEmail }
let gIdx = 5;
let gEmails;
function getEmails() {
    return Promise.resolve(1)//change to copy
}



function getEmailById(emailId) {
    const email = gEmails.find(email => email.id == emailId)

    return Promise.resolve(email)
}

function toggleReadMail(emailId) {
    gEmails = gEmails.map(email => {
        if (email.id == emailId) {
            email.isRead = !email.isRead
        }
        return email
    })
    return Promise.resolve(gEmails)
}

function addEmail(email) {
    const { to, cc, subject, body } = email
    const newEmail = new Email(to, cc, subject, body)

    gEmails = [{ ...newEmail }, ...gEmails]
    return Promise.resolve(gEmails)
}


 gEmails = [{
    id: 1,
    subject: 'Wassap1?',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    isRead: false,
    sentAt: 1551133930594
}, {
    id: 2,
    subject: 'Wassap2?',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
    isRead: true,
    sentAt: 1551133930594
}, {
    id: 3,
    subject: 'Wassap3?',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
    isRead: true,
    sentAt: 1551133930594
}, {
    id: 4,
    subject: 'Wassap4?',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
    isRead: false,
    sentAt: 1551133930594
}

]
