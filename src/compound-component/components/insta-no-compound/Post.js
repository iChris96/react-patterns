import React from 'react'

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'white',
        margin: 'auto',
        width: '800px'
    },
    slider: {
        width: '300px',
        border: '1px solid gray'
    },
    imgContainer: {
        padding: '20px',
        maxWidth: '500px'

    },
    img: {
        overflow: 'hidden'
    }
}

const Post = () => {

    return (
        <div style={styles.container}>
            <div style={styles.imgContainer}>
                <div style={styles.img}>
                    <div style={{ backgroundColor: '#A99FFF', width: '500px', height: '500px' }}></div>
                </div>

            </div>
            <div style={styles.slider}>
                <div>
                    Profile
                </div>
                <div>
                    Comments List
                </div>
                <div>
                    Actions
                </div>
                <div>
                    Add Comment
                </div>
            </div>
        </div>
    )
}

export default Post;


