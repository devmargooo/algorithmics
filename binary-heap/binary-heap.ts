class BinaryHeap {
    private heap = [20, 11, 15, 6, 9];


    public print() {
        const height = Math.log2(this.heap.length);
        console.log(height);
    }
}

const heap = new BinaryHeap();
heap.print();