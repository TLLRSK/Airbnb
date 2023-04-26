import './Topbar.scss'
export default function Topbar() {
    return <>
        <nav className="topbar">
            <div className="topbar-logo">
                <img src="http://placekitten.com/g/24" alt="" className="topbar-logo" />
                <h1 className="topbar-title">AirBnb</h1>
            </div>
            <div className="topbar-filter flex-row gap--12">
                <div className="topbar-dropdown">Location</div>
                <div className="topbar-guests">Guests</div>
                <div className="topbar-search">
                    <img src="http://placekitten.com/g/24" alt="" className="search-icon" />
                </div>
            </div>
        </nav>
    
    </>
}