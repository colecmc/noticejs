import createDOM from './createDOM';

/**
 * Easy to use micro-library to show a notice on screen
 * @author colecmc
 * @version 0.1.0
 */
class Notice {
    /* global document, HTMLElement */

    constructor() {
        this.DOC = document;

        if (!(this.DOC.getElementById('notice') instanceof HTMLElement)) {
            const spinEl = createDOM({
                element: 'span',
                attr: {
                    'class': 'spinner notice-spinner block'
                },
                children: ['&nbsp;']
            });

            const messageEl = createDOM({
                element: 'span',
                attr: {
                    'class': 'notice-message'
                },
                children: ['loading...']
            });

            const dom = createDOM({
                element: 'div',
                attr: {
                    'id': 'notice',
                    'class': 'notice error toggle-visibility'
                },
                children: [
                    createDOM({
                        element: 'p',
                        attr: null,
                        children: [messageEl, spinEl],
                    })
                ],
            });

            this.DOC.body.appendChild(dom);

            this.module = this.DOC.getElementById('notice');
            this.spin = this.module.querySelector('.notice-spinner');
            this.noteText = this.module.querySelector('.notice-message');
            this.spin.classList.add('block');
        }
    }

    show() {
        this.module.classList.remove('toggle-visibility');
        return this;
    }

    hide(...elapsed) {
        if (elapsed[0] === 1) {
            return this.hideLater(elapsed[0]);
        }

        this.module.classList.add('toggle-visibility');
        this.destroy();
        return this;
    }

    hideLater(elapse) {
        if (typeof elapse !== 'number') {
            throw new Error(`${elapse.toString()} - must be a number. notice.js/hideLater()`);
        }

        const elapsed = (elapse === 1) ? 2000 : elapse;

        return new Promise((resolve) => {
            const timer = setTimeout(() => {
                this.module.classList.add('toggle-visibility');
                resolve(this);
                clearTimeout(timer);
                this.destroy();
            }, elapsed);
        });
    }

    memo(message) {
        if (this.noteText) {
            if (typeof message === 'string') {
                const child = this.DOC.createTextNode(message);

                while (this.noteText.firstChild) {
                    this.noteText.removeChild(this.noteText.firstChild);
                }
                this.noteText.appendChild(child);
            } else {
                throw new Error(`${message.toString()} - must be a string. notice.js/memo()`);
            }
        }
        return this;
    }

    type(css) {
        if (css === 'updated') {
            this.spin.classList.remove('block');
        } else {
            this.spin.classList.add('block');
        }

        if (typeof css === 'string') {
            this.module.className = `notice ${css}`;
        } else {
            throw new Error(`${css.toString()} - must be a string. notice.js/type()`);
        }

        return this;
    }

    destroy() {
        this.DOC.body.removeChild(this.module);
        this.spin = null;
        this.noteText = null;
        this.module = null;
        return null;
    }
}

export default Notice;
