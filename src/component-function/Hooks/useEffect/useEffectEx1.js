import { useEffect, useState } from "react"


const UseEffectex1 = () => {
    const [count, setCount] = useState(0)

    const incrementHandler = () => {
        return (
            setCount((count) => { return count + 1 })
        )
    }

    const decrementHandler = () => {
        return (
            setCount((count) => { return count - 1 })
        )
    }

    const handleReset = () => {
        return (
            setCount((count) => { return count * 0 })
        )
    }

    useEffect(() => {
        document.title = `current count${count}`
    }, [count])


    return (
        <>
            <h1>Use Effect Example</h1>
            <h2>current count {count}</h2>
            <button onClick={incrementHandler}>Increment</button>
            <button onClick={decrementHandler} >Decrement</button>
            <button onClick={handleReset} >Reset</button>

        </>
    )
}

export default UseEffectex1