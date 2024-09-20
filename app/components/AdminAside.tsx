import React from 'react'
import { activitiesLogo, userListLogo, requestsLogo, analyticsLogo, settingsLogo, mainMenuLogo, logoutLogo } from '@/public/images/1image'
import Image from 'next/image'

const AdminAside = () => {
  return (
    <aside>
        <div className="profile-container">
            <Image src="" alt="Your Profile" />
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
                                <Image src={activitiesLogo} alt="Activities" />
                                <h2 className="btn-title">Button Title #1</h2>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button>
                                <Image src={analyticsLogo} alt="Analytics" />
                                <h2 className="btn-title">Button Title #1</h2>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button>
                                <Image src={requestsLogo} alt="Requests" />
                                <h2 className="btn-title">Button Title #1</h2>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button>
                                <Image src={userListLogo} alt="User List" />
                                <h2 className="btn-title">Button Title #1</h2>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button>
                                <Image src={settingsLogo} alt="Settings" />
                                <h2 className="btn-title">Button Title #1</h2>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button>
                                <Image src={mainMenuLogo} alt="Main Menu" />
                                <h2 className="btn-title">Button Title #1</h2>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button>
                                <Image src={logoutLogo} alt="Logout" />
                                <h2 className="btn-title">Button Title #1</h2>
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