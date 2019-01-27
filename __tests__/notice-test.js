import Notice from '../src/js/notice';

describe('Notice', () => {
    const notice = new Notice();

    test('Notice should have methods: memo, type, show, hide, hideLater, destroy.', () => {
        expect(typeof notice.memo).toBe('function');
        expect(typeof notice.type).toBe('function');
        expect(typeof notice.show).toBe('function');
        expect(typeof notice.hide).toBe('function');
        expect(typeof notice.hideLater).toBe('function');
        expect(typeof notice.destroy).toBe('function');
    });

    test('Notice/memo should accept a string.', () => {
        notice.memo('Hello World!');

        expect(notice.noteText.textContent).toBe('Hello World!');
    });

    test('Notice/memo should throw if parameter is not a string.', () => {
        try {
            notice.memo(2);
        } catch (e) {
            expect(e.message).toBe('2 - must be a string. notice.js/memo()');
        }
    });

    test('Notice/type should accept a string.', () => {
        notice.type('success');

        expect(notice.module.className).toBe('notice success');
    });

    test('If parameter passed to Notice/type is updated, block class should be removed from spin.', () => {
        notice.type('updated');

        expect(notice.spin.classList.contains('block')).toBeFalsy();
    });

    test('Notice/type should throw if parameter is not a string.', () => {
        try {
            notice.type([]);
        } catch (e) {
            expect(e.message).toBe(' - must be a string. notice.js/type()');
        }
    });

    test('Notice/show should remove toggle-visibility from module.', () => {
        notice.show();

        expect(notice.module.classList.contains('toggle-visibility')).toBeFalsy();
    });

    test('Notice/hide should add toggle-visibility to module', () =>{
        notice.hide();

        expect(notice.module.classList.contains('toggle-visibility')).toBeTruthy();
    });

    test('Notice/hideLater should return a Promise', () => {
        expect(typeof notice.hideLater().then).toBe('function');
        expect(typeof notice.hideLater().catch).toBe('function');
        expect(typeof notice.hideLater().finally).toBe('function');
    });
});
