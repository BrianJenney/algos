class MaxHeap {
    constructor() {
        this.values = [];
    }

    insert(val) {
        this.values.push(val);
        this.siftUp();
    }

    siftUp() {
        const { values } = this;
        let idx = values.length - 1;

        while (true) {
            let parentIdx = Math.floor(idx - 1 / 2);
            const parentVal = values[parentIdx];
            const curValue = values[idx];
            if (curValue > parentVal) {
                values[parentIdx] = curValue;
                values[idx] = parentVal;
                idx = parentIdx;
            } else {
                return false;
            }
        }
    }

    extract() {
        const max = this.values.shift();
        this.siftDown();
        return max;
    }

    siftDown() {
        const { values } = this;
        values.unshift(values.pop());
        let parentIdx = 0;
        while (true) {
            let curVal = values[parentIdx];
            let leftChildIdx = parentIdx * 2 + 1;
            let rightChildIdx = parentIdx * 2 + 2;

            let right = values[rightChildIdx];
            let left = values[leftChildIdx];

            const largestIdx = right > left ? rightChildIdx : leftChildIdx;

            if (curVal > values[largestIdx] || largestIdx > values.length - 1) {
                return false;
            } else {
                values[parentIdx] = values[largestIdx];
                values[largestIdx] = curVal;
                parentIdx = largestIdx;
            }
        }
    }

    show() {
        return this.values;
    }
}

const maxHeap = new MaxHeap();

maxHeap.insert(1);
maxHeap.insert(3);
maxHeap.insert(100);
maxHeap.insert(25);
maxHeap.insert(5);
maxHeap.insert(200);
console.log(maxHeap.show());
console.log(maxHeap.extract());
console.log(maxHeap.show());
