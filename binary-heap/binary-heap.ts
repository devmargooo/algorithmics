class BinaryHeap {
    private heap = [20, 11, 15, 6, 9];

    private getLevel(index: number) {
        return Math.floor(Math.log2(index))
    }


    public print() {
        const height = this.getLevel(this.heap.length);

        const index = 0;

        for (let i = 0; i < height; i++) {

        }
    }

    private getNode(index: number) {
        return {
            index,
            value: this.heap[index]
        }
    }

    public getIndexesTree() {
        const height = this.getLevel(this.heap.length);
        const tree = [[this.getNode(0)]];

        for (let i = 1; i < height + 1; i++) {
            const new_line = [];
            const prev_line = tree[tree.length - 1];
            for (let j = 0; j < prev_line.length; j++) {
                const parent = prev_line[j];
                if (!parent.value) {
                    continue
                }
                const left = parent.index * 2 + 1;
                new_line.push(this.getNode(left));
                const right = parent.index * 2 + 2;
                new_line.push(this.getNode(right));
            }
            if (new_line.length)  {
                tree.push(new_line);
            }
        }

        return tree;
    }
}

const heap = new BinaryHeap();
const tree = heap.getIndexesTree();
console.log(tree);