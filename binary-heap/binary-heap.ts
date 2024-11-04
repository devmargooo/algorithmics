class BinaryHeap {
    private heap:number[];

    constructor(arr: number[]) {
        this.heap = arr;
        this.heapifyAll();
    }

    private heapifyAll() {
        for (let i = 0; i < this.getHeapSize() / 2; i++) {

            this.heapify(i);
        }
    }

    private getLevel(index: number) {
        return Math.floor(Math.log2(index))
    }

    private getNode(index: number) {
        return {
            index,
            value: this.heap[index]
        }
    }

    private getLeftChildIndex(parent_index: number): number {
        return 2 * parent_index + 1;
    }

    private getRightChildIndex(parent_index: number): number {
        return 2 * parent_index + 2;
    }

    private swap(index1: number, index2: number): void {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }

    private getSpace(length: number): string {
        if (!length) {
            return ''
        }

        return new Array(length).fill(' ').join('');
    }

    private getHeapSize() {
        return this.heap.length;
    }

    private getPrintTree() {
        const height = this.getLevel(this.getHeapSize());
        const tree = [[this.getNode(0)]];

        for (let i = 1; i < height + 1; i++) {
            const new_line = [];
            const prev_line = tree[tree.length - 1];
            for (let j = 0; j < prev_line.length; j++) {
                const parent = prev_line[j];
                if (!parent.value) {
                    continue;
                }
                const left = this.getNode(this.getLeftChildIndex(parent.index));
                new_line.push(left);
                const right = this.getNode(this.getRightChildIndex(parent.index));
                new_line.push(right);
            }
            if (new_line.length)  {
                tree.push(new_line);
            }
        }

        return tree;
    }

    private getParentIndex(index: number) {
        if (!index) {
            return null;
        }

        return Math.floor((index - 1) / 2);
    }

    public heapify(index: number = 0) {
        const left = this.getLeftChildIndex(index);
        const right = this.getRightChildIndex(index);

        let largest = index;

        if (this.heap[left] > this.heap[largest]) {
            largest = left;
        }
        
        if (this.heap[right] > this.heap[largest]) {
            largest = right;
        }

        if (largest !== index) {
            this.swap(index, largest);
            this.heapify(largest);
        }
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

    public add(value: number) {
        let index = this.heap.length;
        this.heap[index] = value;
        let parent_index = this.getParentIndex(index);
        
        while (parent_index !== null && this.heap[parent_index] < this.heap[index]) {
            this.swap(index, parent_index);
            index = parent_index;
            parent_index = this.getParentIndex(index);
        }
    }

    public getMax() {
        if (!this.heap.length) {
            return null;
        }

        const result = this.heap.shift();
        this.heapifyAll();
        return result;
    }
}

const heap = new BinaryHeap([9, 17, 15]);
heap.print();
