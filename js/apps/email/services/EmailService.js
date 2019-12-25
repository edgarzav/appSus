import Email from "./Email.js"

export default { getEmails, getEmailById, toggleReadMail, addEmail }

let gEmails;


function getEmails(searchBy) {
    const emails = (!searchBy) ? [...gEmails] :
        gEmails.filter(email => email.subject.toLowerCase().includes(searchBy))

    return Promise.resolve(emails)
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
    subject: 'koko',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
    isRead: true,
    sentAt: 1551133930594
}, {
    id: 3,
    subject: 'hello',
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
