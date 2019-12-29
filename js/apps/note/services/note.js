import utils from '../../../../services/utils.js'

export default class Note{
    constructor(type, isPinned,style,info){
        this.id = utils.getRandomId()
        this.type = type
        this.isPinned = isPinned
        this.style=style
        this.info=info
    }
}