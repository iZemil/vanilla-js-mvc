function Controller(model) {
    const self = this;

    this.model = model;

    // EVENTLISTENER INTERFACE
    this.handleEvent = function(e) {
        e.stopPropagation();

        switch (e.type) {
            case 'click':
                self.clickHandler(e.target);
                break;
            default:
                console.log(e.target);
        }
    };

    // GET THE MODEL
    this.getModelCounter = function() {
        return self.model.counter;
    };

    // CHANGE THE MODEL
    this.clickHandler = function(target) {
        self.model.counter += 1;
    };
}

export default Controller;
