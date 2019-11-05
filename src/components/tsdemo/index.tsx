import * as React from 'react';
export interface Props {
    name: string;
    enthusiasmLevel?: number;
    onIncrement?: () => void;
    onDecrement?: () => void;
}

class Greeting {
    greeting: string;
    constructor(message: string){
        this.greeting = message;
    }
    greet() {
        return 'Hello,'+ this.greeting;
    }
}


function Tsdemo({ name, enthusiasmLevel = 1, onIncrement, onDecrement }: Props) {
    if (enthusiasmLevel <= 0) {
      throw new Error('You could be a little more enthusiastic. :D');
    }

    let greeter = new Greeting('Typescript').greet();
    console.log(greeter);
    
  
    return (
      <div className="hello">
        <div className="greeting">
          Hello {name + getExclamationMarks(enthusiasmLevel)}
        </div>
        <div>
          <button onClick={onDecrement}>-</button>
          <button onClick={onIncrement}>+</button>
        </div>
      </div>
    );
  }

export default Tsdemo;

function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!');
}
