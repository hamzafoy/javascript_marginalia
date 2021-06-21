/*------------------------------------------------
~~~| What is a QUEUE in terms of Data Structures? |~~~
--------------------------------------------------- */

//QUEUEs are linear collections of nodes that only add/enqueue nodes to the tail & removes/dequeues nodes from the head.
//FIFO - First In First Out principle applies to QUEUEs.
//Some queues are BOUNDED or limiting the amount of data that can be placed in it.
//Attempting to enqueue data to a full BOUNDED queue will result in QUEUE OVERFLOW.
//Attempting to dequeue from an empty queue will result in QUEUE UNDERFLOW.



const Node = require('./ds_nodes');

const flights = [
'Botswana Bird flight #345',
'Singapore Skies flight #890',
'Mexico Mirage flight #234',
'Greenland Flying Seals flight #567'
];

class LinkedList {
    constructor() {
      this.head = null;
    }
  
    addToHead(data) {
      const newHead = new Node(data);
      const currentHead = this.head;
      this.head = newHead;
      if (currentHead) {
        this.head.setNextNode(currentHead);
      }
    }
  
    addToTail(data) {
      let tail = this.head;
      if (!tail) {
        this.head = new Node(data);
      } else {
        while (tail.getNextNode() !== null) {
          tail = tail.getNextNode();
        }
        tail.setNextNode(new Node(data));
      }
    }
  
    removeHead() {
      const removedHead = this.head;
      if (!removedHead) {
        return;
      }
      this.head = removedHead.getNextNode();
      return removedHead.data;
    }
  
    printList() {
      let currentNode = this.head;
      let output = '<head> ';
      while (currentNode !== null) {
        output += currentNode.data + ' ';
        currentNode = currentNode.getNextNode();
      }
      output += '<tail>';
      console.log(output);
    }
  
};

class Queue {
constructor(maxSize = Infinity) {
    this.queue = new LinkedList();
    this.maxSize = maxSize;
    this.size = 0;
}

isEmpty() {
    return this.size === 0;
}

hasRoom() {
    return this.size < this.maxSize;
}

enqueue(data) {
    if (this.hasRoom()) {
    this.queue.addToTail(data);
    this.size++;
    } else {
    throw new Error("Queue is full!");
    }
}

dequeue() {
    if (!this.isEmpty()) {
    const data = this.queue.removeHead();
    this.size--;
    return data;
    } else {
    throw new Error("Queue is empty!");
    }
}
};

const load = flights => {
const runway = new Queue(3);
    flights.forEach(flight => {
    try {
        runway.enqueue(flight);
        console.log(`${flight} taxi to runway`)
    } catch (error) {
        console.log('Runway full!')
    }
    });
    while(!runway.isEmpty()) {
        const cleared = runway.dequeue();
        console.log('\nFlights wait...\n');
        console.log(`${cleared}, is cleared for takeoff!\n${cleared} in air.`);
    }
console.log(`\nAll planes have taken off and the airway is clear!\n`)
};
  

const runway = load(flights);