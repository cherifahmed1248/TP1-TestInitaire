let fileAtt;

let test = {
    listes: [1, 25],
    capacit: 8
}
function init(i) {
    if (typeof (i) === "number") {
        if (i > 0) {
            let file = {
                list: [],
                capacity: i
            }
            return file
        } else {
            throw new Error('i < 0');
        }
    } else {
        throw new Error('le type de different de number');

    }
}
function getCapacity(queue) {
    if (queue.list && queue.capacity) {
        return queue.capacity;
    } else {
        throw new Error('la structure de queue est incorrect ');
    }

}
function getSize(queue) {
    if (queue.list && queue.capacity) {
        return queue.list.length;
    } else {
        throw new Error('la structure de queue est incorrect ');
    }
}
function isEmpty(queue) {
    if (queue.list && queue.capacity) {
        if (queue.list.length == 0) {
            return true;
        } else {
            return false
        }
    } else {
        throw new Error('la structure de queue est incorrect ');
    }
}
function isFull(queue) {
    if (queue.list && queue.capacity) {
        if (queue.list.length == queue.capacity) {
            return true;
        } else {
            return false
        }
    } else {
        throw new Error('la structure de queue est incorrect ');
    }
}
function addLast(queue, element) {
    if (queue.list && queue.capacity) {
        if (!isFull(queue)) {
            if (typeof (element) === "number") {

                queue.list[getSize(queue)] = element;
                return (queue);
            } else {
                throw new Error('le type de different de number');
            }
        } else {
            return (queue);
        }
    } else {
        throw new Error('la structure de queue est incorrect ');
    }
}
function removeFirst(queue) {
    if (queue.list && queue.capacity) {
        if (!isEmpty(queue)) {
            queue.list.shift();
            return (queue);
        } else {
            return (queue);
        }
    } else {
        throw new Error('la structure de queue est incorrect ');
    }
}

module.exports = { init, isEmpty, getCapacity, getSize, isFull, addLast, removeFirst };
