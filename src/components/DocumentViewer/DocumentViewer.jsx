import React from 'react'
import DocViewer from "react-doc-viewer"

const DocumentViewer = () => {

    const docs = [
        {uri: require('/img/preview1.png')}
    ]

    return (
        <div>
            <DocViewer documents={docs}/>
        </div>
    )
}

export default DocumentViewer