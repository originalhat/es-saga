export default class ServerStore {
    constructor() {
        this.version = 0;
        this.events = [];
    }

    addEvent(event) {
        this.events.push(event);
        this.version++;
    }
}