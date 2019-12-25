export default {getEmails}
let gEmails = [{
    subject: 'Wassap1?',
    body: 'Pick up!',
    isRead: false,
    sentAt: 1551133930594
}, {
    subject: 'Wassap2?',
    body: 'Pick up!',
    isRead: true,
    sentAt: 1551133930594
}, {
    subject: 'Wassap3?',
    body: 'Pick up!',
    isRead: true,
    sentAt: 1551133930594
}, {
    subject: 'Wassap4?',
    body: 'Pick up!',
    isRead: false,
    sentAt: 1551133930594
}

]

function getEmails() {

    return Promise.resolve(gEmails)//change to copy
}
