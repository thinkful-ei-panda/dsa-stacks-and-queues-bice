class _Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }
	push(data) {
        /* If the stack is empty, then the node will be the
           top of the stack */
        if (this.top === null) {
            this.top = new _Node(data, null);
            return this.top;
        }

        /* If the stack already has something, 
           then create a new node,
           add data to the new node, and
           have the pointer point to the top */
        const node = new _Node(data, this.top);
        this.top = node;
    }
	pop() {
        /* In order to remove the top of the stack, you have to point
           the pointer to the next item and that next item becomes the
           top of the stack */
        const node = this.top;
        this.top = node.next;
        return node.data;
    }
	peek(){
		return this.top;
	}
	empty(){
		if(this.top===null){return true;}
		else return false;
	}
	display(type){
		let x=[];
		let tmp=this.top;
		while(this.top!==null){
			if(type==='data'){x.push(this.top.data);}
			if(type==='nodes'){x.push(this.top);}
			this.top=this.top.next;
		}
		this.top=tmp;
		return x;
	}
}

let starTrek=new Stack;
const characters=['Kirk','Spock','McCoy','Scotty'];
characters.forEach(character=>starTrek.push(character));

function is_palindrome(s) {
    s=s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    sReverse=s.split('').reverse().join('');
	return sReverse===s;
}
// True, true, true, false
// console.log(is_palindrome("dad"));
// console.log(is_palindrome("A man, a plan, a canal: Panama"));
// console.log(is_palindrome("1001"));
// console.log(is_palindrome("Tauhida"));

function bracketCheck(str){
	// needs a fix for the overwriting of the location of opening brackets, but works otherwise.
	let openBracket=new Stack;
	let openLocation;
	let closeLocation;
	for(i=0;i<str.length;i++){
		if(str.charAt(i)==='('||str.charAt(i)==='['||str.charAt(i)==='{'){
			openBracket.push(str.charAt(i));
			openLocation=i;
		}
		else if(openBracket.top!==null){
			if(openBracket.top.data==='('){
				console.log('( - is currently open');
				if(str.charAt(i)===')'){
					console.log('closing ) found');
					openBracket.pop();
					closeLocation=i;
				}
			}
			else if(openBracket.top.data==='['){
				console.log('[ - is currently open');
				if(str.charAt(i)===']'){
					console.log('closing ] found');
					openBracket.pop();
					closeLocation=i;
				}
			}
			else if(openBracket.top.data==='{'){
				console.log('{ - is currently open');
				if(str.charAt(i)==='}'){
					console.log('closing } found');
					openBracket.pop();
					closeLocation=i;
				}
			}
		}
		if(i===str.length-1&&openBracket.top!==null){
			return `No closing bracket for '${openBracket.top.data}' found at location: ${openLocation}`;
		}
		else if(i===str.length-1&&openBracket.top===null){return `Syntax intact`}
	}
}
// console.log(bracketCheck('({1+1}'));

function numericalStackSort(input){
	// Expects the typof input to be array containing integers.
	const unsortedNumberStack=new Stack;
	input.forEach(number=>unsortedNumberStack.push(number));
	console.log(unsortedNumberStack.display('nodes'));
	// console.log(unsortedNumberStack.display('data'));

	const sortedNumberStack=new Stack;

	// console.log(unsortedNumberStack.peek());
	counter=0;
	while(counter<){
	console.log(`=============== ${counter} ===============`)
		if(unsortedNumberStack.top.data>unsortedNumberStack.top.next.data){
			let objChain=unsortedNumberStack.top.next.next; // Store the chain of objects that come directly after top.next
			unsortedNumberStack.top.next.next=null
			let x=unsortedNumberStack.top;
			unsortedNumberStack.top=unsortedNumberStack.top.next;
			unsortedNumberStack.top.next=x;
			unsortedNumberStack.top.next.next=objChain;
		sortedNumberStack.push(unsortedNumberStack.pop());
		}
		unsortedNumberStack.top=unsortedNumberStack.top.next;
		counter++;
	}
	console.log(unsortedNumberStack.display('nodes'));
	// console.log(unsortedNumberStack.display('data'));

	console.log(sortedNumberStack.display('nodes'));
}
numericalStackSort([4,3,1,5,6])