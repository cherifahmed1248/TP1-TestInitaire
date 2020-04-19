const { recherche } = require('./recherche');

describe("test of recherche ", () => {
    test("type d'element != number", () => {
        const queue = [1, 3, 5, 7, 9, 11, 13];
        element = "7"

        expect(() => recherche(queue, element)).toThrow();
    })
    test("recherche d'un element existant dans un liste impaire", () => {
        const queue = [1, 3, 5, 7, 9, 11, 13];
        element = 1
        const expected = true
        expect(recherche(queue, element)).toBe(expected)
    })
    test("recherche d'un element existant dans un liste pair", () => {
        const queue = [1, 3, 5, 7, 9, 11, 13, 15];
        element = 15
        const expected = true
        expect(recherche(queue, element)).toBe(expected)
    })
    test("recherche d'un element qui n'existe pas dans la liste", () => {
        const queue = [1, 3, 5, 7, 9, 11, 13];
        element = 19
        const expected = false
        expect(recherche(queue, element)).toBe(expected)
    })
    test("queue should be a array", () => {
        const queue = {
            liste: [],
            capacity: 10
        }

        expect(() => recherche(queue, element)).toThrow();

    })
    test("queue should containt list of number", () => {
        const queue = [8, 9, 10, "ddf", 17]

        expect(() => recherche(queue, element)).toThrow();
    })
    test("queue non trie", () => {
        const queue = [3, 4, 5, 6, 7, 6, 7, 8]

        expect(() => recherche(queue, element)).toThrow();
    })
})
