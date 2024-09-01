import React, { useState } from 'react'
import demoDoc from '../../../public/video.mp4'

const DocumentViewer = () => {
    const [scale, setScale] = useState(1) // State to keep track of the scale level

    const handleZoomIn = () => setScale((prevScale) => prevScale + 0.1)
    const handleZoomOut = () => setScale((prevScale) => Math.max(prevScale - 0.1, 0.1)) // Prevent negative scale

    return (
        <div>
            <div className="controls">
                <button onClick={handleZoomOut}>Zoom Out</button>
                <button onClick={handleZoomIn}>Zoom In</button>
            </div>
            <div
                style={{
                    transform: `scale(${scale})`, 
                    transformOrigin: 'top left',  
                    width: `${500 / scale}px`,    
                    height: `${500 / scale}px`,   
                    overflow: 'hidden',           
                    margin: 'auto'                
                }}
            >
                <iframe src={demoDoc} width="100%" height="100%" style={{ border: 'none' }}></iframe>
            </div>
        </div>
    )
}

export default DocumentViewer
