const { init, isEmpty, getCapacity, getSize, isFull, addLast, removeFirst } = require('./file');

describe("test of RemoveTask", () => {

    test("remove from empty list", () => {
        const queue = {
            list: [],
            capacity: 10
        }
        const expected = {
            list: [],
            capacity: 10
        }
        expect(removeFirst(queue)).toStrictEqual(expected)
    })

    test("queue should containt list", () => {
        const queue = {
            liste: [],
            capacity: 10
        }

        expect(() => removeFirst(queue)).toThrow();

    })
    test("remove from a list", () => {
        const queue = {
            list: [8, 7, 6, 5],
            capacity: 10
        }
        const expected = {
            list: [7, 6, 5],
            capacity: 10
        }
        expect(removeFirst(queue)).toStrictEqual(expected)
    })
})