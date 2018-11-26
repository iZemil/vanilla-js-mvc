function View(controller) {
    this.controller = controller;

    this.heading = document.getElementById('root');
    this.heading.innerText = controller.getModelCounter();

    this.heading.addEventListener('click', controller);
}

export default View;
