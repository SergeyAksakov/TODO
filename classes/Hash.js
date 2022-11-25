class Hash {
    constructor(ratioOfTasks) {
        this.ratioOfTasks = ratioOfTasks;
    }

    Mda() {
        const deck = new Map();
        for (const [key,value] of this.ratioOfTasks) {{
                deck.set(key,value);
            }
        }
        return deck
    }
}

module.exports = Hash;