import createDOM from '../src/js/createDOM';

describe('createDOM', () => {
    test('Create some DOM tree without any errors', () => {
        const dom = createDOM({
            element: 'p',
            attr: {
                'id': 'someDom',
                'class': 'dom-classname',
                'title': 'my dom tree'
            },
            children: ['Hello World!'],
        });

        expect(dom.id).toBe('someDom');
        expect(dom.className).toBe('dom-classname');
        expect(dom.title).toBe('my dom tree');
        expect(dom.firstChild.textContent).toBe('Hello World!');
        expect(dom.tagName).toBe('P');
    });

    test('createDOM should create a div if no element is given', () => {
        const dom = createDOM({
            element: '',
            attr: null,
            children: []
        });

        expect(dom.tagName).toBe('DIV');
    });

    test('createDOM should throw if "children" parameter is not an Array', () => {
        try {
            const dom = createDOM({
                element: 'span',
                attr: {
                    'name': 'some-name-value'
                },
                children: {
                    'name': 'some-name-value'
                }
            });
        } catch (e) {
            expect(e.message).toBe('createDOM Exception: The "children" parameter must be an Array');
        }
    });
});
