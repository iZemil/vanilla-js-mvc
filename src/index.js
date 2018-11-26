import Model from './model/';
import View from './view/';
import Controller from './controller/';

function init() {
    const model = new Model();
    const controller = new Controller(model);
    const view = new View(controller);
}
init();
