import React from 'react'
import { activitiesLogo, userListLogo, requestsLogo, analyticsLogo, settingsLogo, mainMenuLogo, logoutLogo } from '@/public/images/1image'
import Image from 'next/image'
import './AdminAside.css';

const AdminAside = () => {
  return (
    <aside>
        <div className="profile-container">
            <img src="https://placehold.jp/150x150.png" alt="Your Profile" /> {/* img for links, for packages Image */}
            <div className="profile-container-description">
                <h2>Dummy Name</h2>
                <h3><i>Role</i></h3>
            </div>
        </div>

        <div className="btn-container">
            <table className="btn-container-table">
                <tbody>
                    <tr>
                        <td>
                            <button>
                                <Image src={activitiesLogo} alt="Activities" className='btn-img' />
                                <h2 className="btn-title">Activities</h2>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button>
                                <Image src={analyticsLogo} alt="Analytics" className='btn-img' />
                                <h2 className="btn-title">Analytics</h2>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button>
                                <Image src={requestsLogo} alt="Requests" className='btn-img' />
                                <h2 className="btn-title">Requests</h2>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button>
                                <Image src={userListLogo} alt="User List" className='btn-img' />
                                <h2 className="btn-title">User List</h2>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button>
                                <Image src={settingsLogo} alt="Settings" className='btn-img' />
                                <h2 className="btn-title">Settings</h2>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button>
                                <Image src={mainMenuLogo} alt="Main Menu" className='btn-img' />
                                <h2 className="btn-title">Main Menu</h2>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button>
                                <Image src={logoutLogo} alt="Logout" className='btn-img' />
                                <h2 className="btn-title">Logout</h2>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </aside>
  )
}

export default AdminAside