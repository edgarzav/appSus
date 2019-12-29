export default class Email {
    static nextId = 5
    constructor(to, cc, subject, body, isDraft, data, type) {
        this.to = to
        this.cc = cc
        this.id = Email.nextId++
        this.subject = subject
        this.body = body
        this.isRead = true
        this.sentAt = Date.now()
        this.sent = true
        this.inbox = true
        this.starred = false
        this.isDraft = isDraft
        this.type = 'sent'
        this.data = data
        this.type = type

    }
}
