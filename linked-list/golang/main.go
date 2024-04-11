package main

import (
	"fmt"
	"strings"
)

type node struct {
	value int
	next  *node
}

func (n node) String() string {
	return fmt.Sprintf("%d", n.value)
}

type linkedList struct {
	head *node
	len  int
}

func (l *linkedList) add(value int) {
	newNode := new(node)
	newNode.value = value

	if l.head == nil {
		l.head = newNode
		l.len++
		return
	}

	iterator := l.head
	for iterator.next != nil {
		iterator = iterator.next
	}
	iterator.next = newNode
	l.len++
}

func (l *linkedList) remove(value int) {
	var previous *node
	for current := l.head; current != nil; current = current.next {
		if current.value == value {
			if l.head == current {
				l.head = current.next
			} else {
				previous.next = current.next
				return
			}
		}
		previous = current
	}
}

func (l linkedList) get(value int) *node {
	for iterator := l.head; iterator != nil; iterator = iterator.next {
		if iterator.value == value {
			return iterator
		}
	}
	return nil
}

func (l linkedList) String() string {
	sb := strings.Builder{}
	for iterator := l.head; iterator != nil; iterator = iterator.next {
		sb.WriteString(fmt.Sprint(iterator))
	}
	return sb.String()
}

func main() {
	fmt.Println("Hello")
	newLinkedList := new(linkedList)
	newLinkedList.add(1)
	newLinkedList.add(2)
	newLinkedList.add(3)
	newLinkedList.add(4)
	newLinkedList.add(5)
	fmt.Println(newLinkedList)
	fmt.Println(newLinkedList.get(4))
	newLinkedList.remove(1)
	newLinkedList.remove(5)
	fmt.Println(newLinkedList)
}
