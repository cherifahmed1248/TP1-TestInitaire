function recherche(list, element) {

    if (typeof (element) === "number") {
        if (typeof (list) === "object") {
            var X = 0
            list.forEach(element => {

                if (typeof (element) !== "number") {
                    throw new Error('element  is not a element');
                }
                if (X > element) {
                    throw new Error('list non trie')
                } else {
                    X = element
                }
            });
            var m = Math.floor(list.length / 2);
            if (list[m] === element) {
                console.log('true')
                return true
            }
            if (list.length == 1) {
                console.log("false")

                return false;

            }
            if (list[m] < element) {
                console.log(m)
                return recherche(list.slice(m, list.length), element);
            } else {
                console.log(m)
                return recherche(list.slice(0, m), element);
            }


        } else {
            throw new Error('list  is not object');
        }
    } else {
        throw new Error('le type de different de number');

    }
}
module.exports = { recherche }