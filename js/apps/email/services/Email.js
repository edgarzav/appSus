export default class Email {
    static nextId = 5
    constructor(to, cc, subject, body) {
        this.to = to
        this.cc = cc
        this.id = Email.nextId++
        this.subject = subject
        this.body = body
        this.isRead = true
        this.sentAt = Date.now()
        this.type = 'sent'

    }
}