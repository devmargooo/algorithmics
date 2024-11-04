class BinaryHeap {
    private heap = [20, 11, 15, 6, 9];

    private getLevel(index: number) {
        return Math.floor(Math.log2(index))
    }

    private getNode(index: number) {
        return {
            index,
            value: this.heap[index]
        }
    }

    public getPrintTree() {
        const height = this.getLevel(this.heap.length);
        const tree = [[this.getNode(0)]];

        for (let i = 1; i < height + 1; i++) {
            const new_line = [];
            const prev_line = tree[tree.length - 1];
            for (let j = 0; j < prev_line.length; j++) {
                const parent = prev_line[j];
                if (!parent.value) {
                    continue;
                }
                const left = this.getNode(parent.index * 2 + 1);
                new_line.push(left);
                const right = this.getNode(parent.index * 2 + 2);
                new_line.push(right);
            }
            if (new_line.length)  {
                tree.push(new_line);
            }
        }

        return tree;
    }

    public print() {
        const print_tree = this.getPrintTree();
        const print_height = print_tree.length;
        for (let i = 0; i < print_tree.length; i++) {
            let print_string = this.getSpace(print_height - i);
            const line = print_tree[i];
            for (let j = 0; j < line.length; j++) {
                print_string += line[j].value;
                print_string += ' ';
            }
            console.log(print_string);
        }
    }

    private getSpace(length: number): string {
        if (!length) {
            return ''
        }

        return new Array(length).fill(' ').join('');
    }
}

const heap = new BinaryHeap();
heap.print();
// console.log(tree);