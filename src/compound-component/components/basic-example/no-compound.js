import React, { useState } from 'react';

const styles = {
    container: { padding: '60px', border: '2px solid gray' },
    image: { width: '100px', height: '100px', backgroundColor: 'blue' },
    title: { fontWeight: 'bold', fontSize: '16px', color: 'orange' },
    footer: { height: '100px', backgroundColor: 'black', position: 'sticky', bottom: 0 }
}

const Title = (props) => (<div style={styles.title}>{props.title}</div>)
const Text = (props) => (<div>{props.text}</div>)
const Image = () => (<div style={styles.image}></div>)
const Container = (props) => (<div style={styles.container}><Text text={props.text}></Text></div>)
const Footer = () => (<div style={styles.footer}></div>)

export default () => {
    const [title] = useState('This Is My Title')
    const [text1] = useState('title1')
    const [text2] = useState('title2')
    const [showFooter, setShowFooter] = useState(false)


    return (
        <div style={{ height: '100%', border: '1px solid black', padding: '6px', }}>
            <Title title={title} />
            <Text text={text1} />
            <Text text={text2} />
            <Image />
            <Container text={'From here: ' + text1} />
            <Footer />
        </div>
    )

}

