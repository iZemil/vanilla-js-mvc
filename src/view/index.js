function View(controller) {
    this.controller = controller;

    this.counter = document.getElementById('root');
    this.counter.addEventListener('click', controller);

    this.update = function(data) {
        this.counter.innerText = data.counter;
    };
    this.controller.model.registerObserver(this);
}

export default View;
