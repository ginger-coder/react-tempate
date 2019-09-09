import * as React from "react";

const buildName = (firstName:string,...restOfName:[]):Array<string> => {
    return [firstName,...restOfName];
    // console.log(1111);
}

var people = {
    name:['bxk','bxx','genger','typescript'],
    getName:function(){
        var i = Math.floor(Math.random()*this.name.length);
        console.error('this->',this);
        return this.name[i];
    }
}

let name = people.getName();
console.error(name);


const home = () => {
    return <div>Hello { buildName('Bian', 'And', 'Juan').join('❤️') }</div>
}


export default home;