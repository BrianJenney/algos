class Trie {
    constructor() {
        this.head = new Map();
    }

    add(word, node = this.head) {
        if (word.length === 0) {
            return;
        }

        const letter = word[0];

        if (node.has(letter)) {
            this.add(word.slice(1), node.get(letter));
        } else {
            node.set(letter, new Map());
            this.add(word.slice(1), node.get(letter));
        }
    }

    search(word, node = this.head) {
        if (word.length === 0) {
            throw Error("must enter a valid word");
        }

        const letter = word[0];

        if (word.length === 1 && node.has(letter)) {
            return true;
        }

        if (node && node.has(letter)) {
            return this.search(word.slice(1), node.get(letter));
        } else {
            return false;
        }
    }

    hasWord(word) {
        return this.search(word);
    }

    printWords() {}
}

let myTrie = new Trie();
myTrie.add("hell");
myTrie.add("hello");
console.log(myTrie.hasWord("hello"));
console.log(myTrie.hasWord("hellow"));
console.log(myTrie.hasWord("hell"));
console.log(JSON.stringify([myTrie]));
