import React from 'react';

function MainContent() {
    const paragraphStyle = {
        marginBottom: '500px',
        marginTop: '500px',
    };

    return (
        <main>
            <p style={paragraphStyle}>MainContent Paragraph</p>
        </main>
    );
}

export default MainContent;
