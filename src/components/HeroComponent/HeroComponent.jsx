import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import DashboardComponent from '../DashboardComponent/DashboardComponent'
import DriveComponent from '../DriveComponent/DriveComponent'
import SharedWithMeComponent from '../SharedWithMeComponent/SharedWithMeComponent'
import RecentComponent from '../RecentComponent/RecentComponent'
import StaredComponent from '../StarredComponent/StaredComponent'
import BinComponent from '../BinComponent/BinComponent'
import StorageComponent from '../StorageComponent/StorageComponent'
import DocumentViewer from '../DocumentViewer/DocumentViewer'
import SidebarComponent from '../SidebarComponent/SidebarComponent'

const HeroComponent = () => {

    return (
        <Router>
            <SidebarComponent />
            <div>
                <div className="ml-60">
                    <Routes>
                        <Route exact path="/" element={<DashboardComponent />} />
                        <Route path="/drive" element={<DriveComponent />} />
                        <Route path="/shared-with-me" element={<SharedWithMeComponent />} />
                        <Route path="/recent" element={<RecentComponent />} />
                        <Route path="/starred" element={<StaredComponent />} />
                        <Route path="/bin" element={<BinComponent />} />
                        <Route path="/storage" element={<StorageComponent />} />
                        <Route path="/preview" element={<DocumentViewer />} />
                    </Routes>
                </div>
            </div>
        </Router>
    )
}

export default HeroComponent
