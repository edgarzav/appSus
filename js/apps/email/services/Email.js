export default class Email {
    static nextId = 5
    constructor(to, cc, subject, body) {
        this.to = to
        this.cc = cc
        this.id = Email.nextId++
        this.subject = subject
        this.body = body
        this.isRead = false
        this.sentAt = Date.now()

    }
}

// id: '1',
//     subject: 'Wassap1?',
//     body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
//     isRead: false,
//     sentAt: 1551133930594