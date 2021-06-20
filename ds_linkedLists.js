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



  class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    addToHead(data) {
      const newHead = new Node(data);
      const currentHead = this.head;
      if (currentHead) {
        currentHead.setPreviousNode(newHead);
        newHead.setNextNode(currentHead);
      }
      this.head = newHead;
      if (!this.tail) {
        this.tail = newHead;
      }
    }
  
    addToTail(data) {
      const newTail = new Node(data);
      const currentTail = this.tail;
      if (currentTail) {
        currentTail.setNextNode(newTail);
        newTail.setPreviousNode(currentTail);
      }
      this.tail = newTail;
      if (!this.head) {
        this.head = newTail;
      }
    }
  
    removeHead() {
      const removedHead = this.head;
      if (!removedHead) {
        return;
      }
      this.head = removedHead.getNextNode();
      if (this.head) {
        this.head.setPreviousNode(null);
      }
      if (removedHead === this.tail) {
        this.removeTail();
      }
      return removedHead.data;
    }
  
    removeTail() {
      const removedTail = this.tail;
      if (!removedTail) {
        return;
      }
      this.tail = removedTail.getPreviousNode();
      if (this.tail) {
        this.tail.setNextNode(null);
      }
      if (removedTail === this.head) {
        this.removeHead();
      }
      return removedTail.data;
    }
  
    removeByData(data) {
      let nodeToRemove;
      let currentNode = this.head;
      while (currentNode !== null) {
        if (currentNode.data === data) {
          nodeToRemove = currentNode;
          break;
        }
        currentNode = currentNode.getNextNode();
      }
      if (!nodeToRemove) {
        return null;
      }
      if (nodeToRemove === this.head) {
        this.removeHead();
      } else if (nodeToRemove === this.tail) {
        this.removeTail();
      } else {
        const nextNode = nodeToRemove.getNextNode();
        const previousNode = nodeToRemove.getPreviousNode();
        nextNode.setPreviousNode(previousNode);
        previousNode.setNextNode(nextNode);
      }
      return nodeToRemove;
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

  const roadTrip = new DoublyLinkedList();
  roadTrip.addToHead('Louisville, KY')
  roadTrip.addToTail('Indianapolis, IN')
  roadTrip.addToTail('Fort Wayne, IN')
  roadTrip.addToTail('Chicago, IL')
  roadTrip.printList();
  roadTrip.removeByData('Fort Wayne, IN')
  roadTrip.printList();