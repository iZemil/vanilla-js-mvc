class Model {
    constructor(inialCount = 1) {
        let counter = inialCount;
        this.observers = [];

        // this.registerObserver = this.registerObserver.bind(this);
        // this.notifyAll = this.notifyAll.bind(this);

        Object.defineProperty(this, 'counter', {
            get() {
                return counter;
            },
            set(value) {
                counter = value;
                this.notifyAll();
            }
        });
    }

    registerObserver(observer) {
        this.observers.push(observer);
    }

    notifyAll() {
        this.observers.forEach(observer => {
            observer.update(this);
        });
    }
}

export default Model;
