class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{ 
    constructor(){
        this.head = null
        this.length = 0
    }

    add(value){
        const node = new Node(value)

        if(this.head == null){
            this.head = node
            this.length++
            return
        }

        let iterator = this.head
        while(true){
            if(iterator.next == null){
                iterator.next = node
                break
            }
            iterator = iterator.next
        }
        this.length++
    }

    /**
     * It is possible to perform this operation, but it doesn`t seem to have a practical use,
     * because in theory you dont`t use Index in a LinkedList 
     */
    insert(index, value){ // Mab
        const node = new Node(value)

        if(index == 0){
            node.next = this.head
            this.head = node
            this.length++
            return
        }


        if(this.head == null){
            this.head = node
            this.length++
            return
        }

        let iterator = this.head
        let count = 0
        while(true){
            if(count == index-1 || iterator.next == null){
                node.next = iterator.next
                iterator.next = node
                break
            }
            iterator = iterator.next
            count++
        }
        this.length++
    }

    remove(value){
        
        if(this.head == null){
            return null
        }

        if(this.head.value == value){
            this.head = this.head.next ?? null
            this.length--
            return
        }
        
        let previous = this.head
        let iterator = previous.next

        while(true){
            if(iterator == null){
                return null
            }

            if(iterator.value == value){
                previous.next = iterator.next
                break
            }
            previous = iterator
            iterator = iterator.next
        }
        this.length--
    }

    get(value){
        
        if(this.head == null){
            return null
        }

        let iterator = this.head
        while(true){
            if(iterator == null){
                return null
            }
            if(iterator.value == value){
                return iterator
            }
            iterator = iterator.next
        }
    }

    print(){

        if(this.head == null){
            return null
        }

        const values = []
        let iterator = this.head
        while(true){
            if(iterator == null){
                break
            }

            values.push(iterator.value)
            iterator = iterator.next
        }
        return values
    }
}

const myLinkedList = new LinkedList()

myLinkedList.insert(4, 33)

myLinkedList.remove(1)

myLinkedList.add(20)

myLinkedList.remove(20)

myLinkedList.add(30)

myLinkedList.add(31)

myLinkedList.remove(31)

myLinkedList.remove(40)

console.info(myLinkedList.print())

console.info(myLinkedList.head.value)

myLinkedList.insert(0, 99)

console.info(myLinkedList.print())

console.info(myLinkedList.head.value)

console.info(myLinkedList.print())

console.info(myLinkedList.get(30))

console.info(myLinkedList.get(999))

console.info(myLinkedList.length)