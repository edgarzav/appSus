export default class Book {
    constructor(id, title, subtitle, publishedDate, description, pageCount, thumbnail, amount, currencyCode, isOnSale) {
        this.id = id
        this.title = title
        this.subtitle = subtitle
        this.publishedDate = publishedDate
        this.description = description || ''
        this.pageCount = pageCount
        this.thumbnail = thumbnail
        this.listPrice = { amount, currencyCode, isOnSale }
    }
}
