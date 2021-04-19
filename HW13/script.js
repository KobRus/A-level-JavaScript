import { DOM } from "./DOM.js";

class Circle extends DOM {
    constructor(doc, value) {
        super(doc);
        this.width = value;
        this.height = value;
        this.elem = doc.createElement('div');
    }

    spawnCircle() {
        this.elem.style = `width: ${this.width}px; height: ${this.height}px; background: red; border-radius: 50%`;
        this.doc.body.append(this.elem);
    }

    setClickAction() {
        this.elem.addEventListener('click', (event) => {
            let leftMargin = parseInt(event.target.style.marginLeft) || 0;
            event.target.style.marginLeft = leftMargin + 100 + "px";
        })
    }
}

class Factory {
    create(type) {
        if (type === 'circle') {
            return new Circle(document, 100)
        } else {
            console.log('bzzzzzzzzz')
        }
    }
}


const createCircle = new Factory();
const circle = createCircle.create('circle');
circle.spawnCircle()
circle.setClickAction()