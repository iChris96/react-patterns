import React, { useEffect } from 'react';

export const CallAll = () => {

    function callAll(...fns) {
        console.log('...fns', fns)
        return function (...args) {
            console.log('...args', args)
            fns.forEach(fn => fn && fn(...args));
        };
    }

    useEffect(() => {

        const a = (vals) => {
            console.log('a-vals?', vals)
            return ({ a: 'a-', b: 'b-' })
        }
        const b = (vals) => {
            console.log('b-vals?', vals)
            return 10
        }

        const x = callAll(a, b)
        // console.log('x', x)
        // console.log('x()', x())
        console.log('x(aaaa)', x('aaaaa'))
        x('hello')

    }, [])

    return (
        <div>Call All Example</div>
    )

}