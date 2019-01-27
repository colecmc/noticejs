/**
 * @author colecmc
 * @summary create a DOM tree with attributes and children
 * @param {string} element
 * @param {Object} attr
 * @param {Array} children
 * @returns {HTMLElement}
 * @version 0.1.0
 */

function createDOM ({ element, attr, children }) {
    let el;

    if (element && typeof element === 'string') {
        el = document.createElement(element);
    } else {
        el = document.createElement('div');
    }

    if (attr) {
        Object.entries(attr).forEach(item => el.setAttribute(item[0], item[1]));
    }

    if (children) {
        if (Array.isArray(children)) {
            children.forEach((item) => {
                if (typeof item === 'string') {
                    const child = document.createTextNode(item);

                    el.appendChild(child);
                } else {
                    el.appendChild(item);
                }
            });
        } else {
            throw new Error('createDOM Exception: The "children" parameter must be an Array');
        }
    }

    return el;
}

export default createDOM;