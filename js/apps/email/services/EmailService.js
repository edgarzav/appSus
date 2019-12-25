export default { getEmails,getEmailById }
let gEmails = [{
    id: '2',
    subject: 'Wassap1?',
    body: 'Pick up!',
    isRead: false,
    sentAt: 1551133930594
}, {
    id: '2',
    subject: 'Wassap2?',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
    isRead: true,
    sentAt: 1551133930594
}, {
    id: '3',
    subject: 'Wassap3?',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
    isRead: true,
    sentAt: 1551133930594
}, {
    id: '4',
    subject: 'Wassap4?',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
    isRead: false,
    sentAt: 1551133930594
}

]

function getEmails() {
    return Promise.resolve(gEmails)//change to copy
}



function getEmailById(emailId) {
    const email = gEmails.find(email => email.id === emailId)

    return Promise.resolve(email)
}
