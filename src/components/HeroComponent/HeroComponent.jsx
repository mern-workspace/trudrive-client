import React from 'react'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import DashboardComponent from '../DashboardComponent/DashboardComponent'
import DriveComponent from '../DriveComponent/DriveComponent'
import SharedWithMeComponent from '../SharedWithMeComponent/SharedWithMeComponent'
import RecentComponent from '../RecentComponent/RecentComponent'
import StarredComponent from '../StarredComponent/StaredComponent'
import BinComponent from '../BinComponent/BinComponent'
import StorageComponent from '../StorageComponent/StorageComponent'
import DocumentViewer from '../DocumentViewer/DocumentViewer'
import SidebarComponent from '../SidebarComponent/SidebarComponent'
import HeaderComponent from '../HeaderComponent/HeaderComponent'
import Login from '../../Pages/Login'
import Signup from '../../Pages/Signup' 

const HeroComponent = () => {
    const location = useLocation()

    const noHeaderSidebarRoutes = ['/login', '/signup']

    const shouldShowHeaderSidebar = !noHeaderSidebarRoutes.includes(location.pathname)

    return (
        <>
            {shouldShowHeaderSidebar && <SidebarComponent />}

            <div className={shouldShowHeaderSidebar ? "ml-60 mt-48 py-4 w-full" : "w-full"}>
                {shouldShowHeaderSidebar && <HeaderComponent />}
                <div>
                    <Routes>
                        <Route exact path="/" element={<DashboardComponent />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} /> {/* Add your signup route */}
                        <Route path="/drive" element={<DriveComponent />} />
                        <Route path="/shared-with-me" element={<SharedWithMeComponent />} />
                        <Route path="/recent" element={<RecentComponent />} />
                        <Route path="/starred" element={<StarredComponent />} />
                        <Route path="/bin" element={<BinComponent />} />
                        <Route path="/storage" element={<StorageComponent />} />
                        <Route path="/preview" element={<DocumentViewer />} />
                    </Routes>
                </div>
            </div>
        </>
    )
}

const App = () => (
    <Router>
        <HeroComponent />
    </Router>
)

export default App
