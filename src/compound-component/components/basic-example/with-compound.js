import React, { createContext, useContext, useState } from 'react';

const styles = {
    container: { padding: '60px', border: '2px solid gray' },
    image: { width: '100px', height: '100px', backgroundColor: 'salmon' },
    title: { fontWeight: 'bold', fontSize: '16px', color: 'orange' },
    footer: { height: '100px', backgroundColor: 'black', position: 'sticky', bottom: 0 }
}

export const MyCustomContext = createContext();


const Title = () => {
    const { title } = useContext(MyCustomContext);
    return (<div style={styles.title}>{title}</div>)
}
const Text = (props) => (<div>{props.text}</div>)
const Image = () => (<div style={styles.image}></div>)
const Container = (props) => {
    return (<div style={styles.container}>{props.children}</div>)
}
const Footer = () => {

    const { showFooter, setShowFooter } = useContext(MyCustomContext);

    if (!showFooter) return <button onClick={() => setShowFooter(true)}>activate footer</button>
    return (
        <div style={styles.footer}></div>
    )
}

const MyComponentProvider = (props) => {
    const [title] = useState('This Is My Title')
    const [showFooter, setShowFooter] = useState(false)

    const valuesProvider = {
        title,
        showFooter,
        setShowFooter,
    };

    return (
        <div style={{ height: '100%', border: '1px solid black', padding: '6px', }}>
            <MyCustomContext.Provider value={valuesProvider}>
                {props.children}
            </MyCustomContext.Provider>
        </div>
    )

}


export default () => {

    const [text1] = useState('title1')
    const [text2] = useState('title2')


    return (
        <div>
            <h1>you can use it like this:</h1>
            <MyComponentProvider>
                <Title />
                <Image />
                <Text text={text1} />
                <Text text={text2} />
                <Container >
                    <div>{'From here: ' + text1}</div>
                </Container>
                <Footer />
            </MyComponentProvider>
            <h1>or just in this order like this:</h1>
            <MyComponentProvider>
                <Image />
                <Title />


                <Container >
                    <div>{'From here: ' + text1}</div>
                </Container>
                <Text text={text1} />
                <Text text={text2} />
                <Footer />
            </MyComponentProvider>

        </div>

    )
}