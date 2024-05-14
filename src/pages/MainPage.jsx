import React, {useRef} from 'react';

export function MainPage(props) {

    const nameRef = useRef(null)
    const userNameRef = useRef(null)
    const emailRef = useRef(null)

    function doRef() {
        const obj = {
            name: nameRef.current.value,//current=input type text, value=zhanchenie
            userName: userNameRef.current.value,
            email: emailRef.current.value
        }
        console.log(obj)
    }

    return (
        <div>
            <input type="text" placeholder='name' ref={nameRef}/>
            <input type="text" placeholder='username' ref={userNameRef}/>
            <input type="text" placeholder='email' ref={emailRef}/>
            <button onClick={doRef}>добавить</button>
        </div>
    );
}

