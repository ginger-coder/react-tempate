import * as React from "react";

import { Observer, useObservable } from "mobx-react-lite"
 
function ObservePerson(props) {
    const person = useObservable({ name: "John" })
    return (
        <div>
            {person.name}
            <Observer>{() => <div>{person.name}</div>}</Observer>
            <button onClick={() => (person.name = "Mike")}>No! I am Mike</button>
        </div>
    )
}

export default ObservePerson;