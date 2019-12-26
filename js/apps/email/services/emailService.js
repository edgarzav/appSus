import Email from "./Email.js"

export default {
    getEmails,
    getEmailById,
    toggleReadMail,
    addEmail,
    deleteEmail,
}

let gEmails;


function getEmails(filterBy) {
    const emails = (!filterBy) ? [...gEmails] :
        gEmails.filter(email => {

            return email.subject.toLowerCase().includes(filterBy.subject)
                && (filterBy.isRead === '' || email.isRead == filterBy.isRead)
        })
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

function deleteEmail(emailId) {
    gEmails = gEmails.filter(email => email.id !== emailId)

    return Promise.resolve(gEmails)
}


gEmails = [{
    id: 1,
    to: 'momomo@gmail.com',
    subject: 'Wassap1 rwnk wrvw wvwevwev?',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    isRead: false,
    sentAt: 1551133930594
}, {
    id: 2,
    to: 'momo@gmail.com',
    subject: 'Lorem ipsum dolor sit amet consectetur' 
    ,
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
    isRead: true,
    sentAt: 1551133930594
}, {
    id: 3,
    to: 'koko@gmail.com',
    subject: 'hello, hello hello hello',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
    isRead: true,
    sentAt: 1551133930594
}, {
    id: 4,
    to: 'muki@gmail.com',
    subject: 'Wassap4?',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
    isRead: false,
    sentAt: 1551133930594
}

]
