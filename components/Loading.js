const Loading = () => {
    return (
        <div className="position-fixed w-100 h-100 text-center loading"
        style={{background: '#0008', color: 'white', top: 0, left: 0, zIndex: 9}}>
            <svg width="250" height="250" viewBox="0 0 50 50">
                <text fill="#fff" x="7" y="30">Loading</text>
            </svg>
        </div>
    )
}

export default Loading