/*------------------------------------------------------
~~~| What is a LINKED LIST in terms of Data Structures? |~~~
--------------------------------------------------------- */

//A LINKED LIST is a linear data structure where elements are stored and linked by pointers.
//The first NODE in a LINKED LIST is the HEAD NODE. If there are no nodes in the linked list, then the HEAD NODE's value is `null`.
//The last NODE in a LINKED LIST is the TAIL NODE. The tail node's pointer will be set to `null`.
//A LINKED LIST exposes the ability to travel at least in one direction (or bi-directionally) between elements in the list.


const Node = require('./ds_nodes')

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
  
  }

  let list = new LinkedList();
  list.addToHead('spring')
  list.addToTail('summer')
  list.addToTail('autumn')
  list.addToTail('winter')
  list.printList();