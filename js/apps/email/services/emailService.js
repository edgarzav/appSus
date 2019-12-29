import Email from "./Email.js"

export default {
    getEmails,
    getEmailById,
    toggleReadMail,
    addEmail,
    deleteEmail,
    setEmailStar,
}

let gEmails;


function getEmails(filterBy, sortBy) {
    let emails = (!filterBy) ? [...gEmails] :
        gEmails.filter(email => {

            return email.subject.toLowerCase().includes(filterBy.subject)
                && (filterBy.isRead === '' || email.isRead == filterBy.isRead)
        })
    emails = sortEmails([...emails], sortBy)

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
    console.log(email);
    
    const { to, cc, subject, body, isDraft,data,type } = email
    const newEmail = new Email(to, cc, subject, body, isDraft,data,type)

    gEmails = [{ ...newEmail }, ...gEmails]
    return Promise.resolve(gEmails)
}

function deleteEmail(emailId) {
    gEmails = gEmails.filter(email => email.id !== emailId)

    return Promise.resolve(gEmails)
}

function setEmailStar(emailId) {
    let editEmail = gEmails.find(email => email.id === emailId)
    editEmail = { ...editEmail };
    editEmail.starred = true

    gEmails = gEmails.map(email => editEmail.id === email.id ? editEmail : email);
    return Promise.resolve(gEmails)
}


function sortEmails(emails, sortBy) {
    return emails.sort((email1, email2) => {
        return email1[sortBy] > email2[sortBy] ? 1 :
            (email1[sortBy] < email2[sortBy] ? -1 : 0)
    });
}

gEmails = [{
    id: 1,
    to: 'momomo@gmail.com',
    subject: 'cassap1 rwnk wrvw wvwevwev?',
    body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius consectetur sequi maiores, voluptates numquam totam, dolor libero incidunt tenetur natus aperiam ea dolorem ab! Recusandae, maxime incidunt, accusamus iste maiores, dolore mollitia voluptatem aspernatur deleniti doloribus assumenda autem fugit vitae.',
    isRead: false,
    sentAt: 1551133930597,
    sent: false,
    inbox: true,
    isDraft: false,
    starred: false,
    type: 'inbox'
}, {
    id: 2,
    to: 'momo@gmail.com',
    subject: 'baaorem ipsum dolor sit amet consectetur'
    ,
    body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius consectetur sequi maiores, voluptates numquam totam, dolor libero incidunt tenetur natus aperiam ea dolorem ab! Recusandae, maxime incidunt, accusamus iste maiores, dolore mollitia voluptatem aspernatur deleniti doloribus assumenda autem fugit vitae.',
    isRead: true,
    sentAt: 1551113930594,
    sent: false,
    inbox: true,
    isDraft: false,
    starred: false,
    type: 'inbox'
}, {
    id: 3,
    to: 'koko@gmail.com',
    subject: 'affello, hello hello hello',
    body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius consectetur sequi maiores, voluptates numquam totam, dolor libero incidunt tenetur natus aperiam ea dolorem ab! Recusandae, maxime incidunt, accusamus iste maiores, dolore mollitia voluptatem aspernatur deleniti doloribus assumenda autem fugit vitae.',
    isRead: true,
    sentAt: 1551193930694,
    sent: true,
    inbox: true,
    isDraft: false,
    starred: false,
    type: 'sent'
}, {
    id: 4,
    to: 'muki@gmail.com',
    subject: 'dssap4?',
    body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius consectetur sequi maiores, voluptates numquam totam, dolor libero incidunt tenetur natus aperiam ea dolorem ab! Recusandae, maxime incidunt, accusamus iste maiores, dolore mollitia voluptatem aspernatur deleniti doloribus assumenda autem fugit vitae.',
    isRead: false,
    sentAt: 1551173920594,
    sent: false,
    inbox: true,
    isDraft: false,
    starred: true,
    type: 'inbox'
}

]
