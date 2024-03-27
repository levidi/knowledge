class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(value){
        const node = new Node(value)
        this.head = node
        this.tail = node
        this.length = 1
    }

    append(value){
        const node = new Node(value)
        this.tail.next = node
        this.tail = node
        this.length++
    }
    
    prepend(value){
        const node = new Node(value)
        node.next = this.head
        this.head = node
        this.length++
    }

    printList(){
        const array = []
        let currentNode = this.head;
        while (currentNode !== null && currentNode !== undefined){
            array.push(currentNode.value)
            currentNode = currentNode.next
        }
        return array
    }

    insert(index, value){
        if (index === 0) {
            this.prepend(value);
            return this.printList();
          }
        if(index >= this.length){
            return this.append(value)
        }
        const newNode = new Node(value)
        const predecessorNode = this.findNodeByIndex(index-1)
        const nodeToShift = predecessorNode.next
        predecessorNode.next = newNode
        newNode.next = nodeToShift
        this.length++
        return this.printList();
    }

    remove(index){
        const predecessorNode = this.findNodeByIndex(index-1) 
        const nodeToDelete = predecessorNode.next
        predecessorNode.next = nodeToDelete.next
        this.length--
        return this.printList()
    }

    findNodeByIndex(index){
        let count = 0
        let node = this.head
        while(count !== index){
            node = node.next
            count++
        }
        return node
    }
}

const myLinkedList = new LinkedList(10)

myLinkedList.append(5)
myLinkedList.append(16)
console.log(myLinkedList.printList())

myLinkedList.insert(2, 99)
console.log(myLinkedList.printList())

myLinkedList.remove(1)
console.log(myLinkedList.printList())
