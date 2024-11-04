class GraphNode {
    constructor(public value: string, public neighbors: GraphNode[] = []) {}
}

class Graph {
    constructor(private start_node: GraphNode) {}

    private printNode(node: GraphNode) {
        let neighbors_string = '';
        for (let i = 0; i < node.neighbors.length; i++) {
            neighbors_string += node.neighbors[i];

            if (i < node.neighbors.length - 1) {
                neighbors_string += ', ';
            }
        }

        console.log(node.value + ": ["  + neighbors_string + ']');
    }

    public bfs() {
        const visited = new Set();
        const queue = [this.start_node];

        while (queue.length) {
            const node = queue.shift();

            if (node && !visited.has(node.value)) {
                console.log(node.value);
                visited.add(node.value);

                for (let i = 0; i < node.neighbors.length; i++) {
                    if (!visited.has(node.neighbors[i].value)) {
                        queue.push(node.neighbors[i]);
                    }
                }
            }
        }
    }
}


// {
//     A: ['B', 'C'],
//     B: ['A', 'D', 'E'],
//     C: ['A', 'F'],
//     D: ['B'],
//     E: ['B', 'F'],
//     F: ['C', 'E']
//   }

const a = new GraphNode('A');
const b = new GraphNode('B');
const c = new GraphNode('C');
const d = new GraphNode('D');
const e = new GraphNode('E');
const f = new GraphNode('F');

a.neighbors = [b, c];
b.neighbors = [a, d, e];
c.neighbors = [a, f];
d.neighbors = [b];
e.neighbors = [b, f];
f.neighbors = [c, e];

const graph = new Graph(a);
graph.bfs();