/*-----------------------------------------------
~~~| What is a NODE in terms of Data Structures? |~~~
-------------------------------------------------- */

//NODES are the building blocks for a number of LINEAR data structures.
//Nodes contain DATA & they contain a POINTER or multiple POINTERS to other nodes.

class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  
    setNextNode(node) {
      if (node instanceof Node || node === null) {
        this.next = node;
      } else {
        throw new Error('Next node must be a member of the Node class.');
      }
    }
  
    getNextNode() {
      return this.next;
    }
  }
  
  //let strawberryNode = new Node('Berry Tasty');
  //let vanillaNode = new Node('Vanilla');
  //let coconutNode = new Node('Coconuts for Coconut');
  //vanillaNode.setNextNode(strawberryNode);
  //strawberryNode.setNextNode(coconutNode);
  //let currentNode = vanillaNode;
  /*---
  while(currentNode !== null) {
    console.log(currentNode.data)
    currentNode = currentNode.next;
  }
  ---*/
  module.exports = Node;

  //In this example, the `node data structure` is constructed using the `class` syntax.
  //Each `node` is made to hold some kind of data, in this example, an ice cream flavor.
  //Each `node` save for the last node is also made to hold a `pointer` to another node.
  //The logic behind the ordering of the nodes is to convey the order that ice cream should be distributed onto a cone.
  //The use of the `WHILE` loop enables the printing of correct order of ice cream distribution onto the cone.
  //NODES can be used to construct trees or linked lists.