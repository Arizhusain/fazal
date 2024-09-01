import React, { useState } from 'react';
import './dashboardContent.css'

const DashboardContentProfile = () => {
    const [edit, setEdit] = useState(false);
    return (
        <>
            <div>
                <div>
                    <h2 className='DashboardContent-profile-heading'>My profile</h2>
                    <p className='DashboardContent-profile-description'>You can edit/update your profile information by click on edit profile button.</p>
                </div>
                <div>
                    <fieldset className='DashboardContent-profile-fieldset'>
                        <legend className='DashboardContent-profile-legend'>First Name</legend>
                        {edit ?
                            <input type="text" className='DashboardContent-profile-content-input' /> :
                            <p className='DashboardContent-profile-content-p'>Arifhusain</p>
                        }
                    </fieldset>
                    <fieldset className='DashboardContent-profile-fieldset'>
                        <legend className='DashboardContent-profile-legend'>Last Name</legend>
                        {edit ?
                            <input type="text" className='DashboardContent-profile-content-input' /> :
                            <p className='DashboardContent-profile-content-p'>Soudagar</p>
                        }
                    </fieldset>
                    <fieldset className='DashboardContent-profile-fieldset'>
                        <legend className='DashboardContent-profile-legend'>Email</legend>
                        {edit ?
                            <input type="text" className='DashboardContent-profile-content-input' /> :
                            <p className='DashboardContent-profile-content-p'>arifhusainsoudagar@gmail.com</p>
                        }
                    </fieldset>
                    <fieldset className='DashboardContent-profile-fieldset'>
                        <legend className='DashboardContent-profile-legend'>Contact Number</legend>
                        {edit ?
                            <input type="text" className='DashboardContent-profile-content-input' /> :
                            <p className='DashboardContent-profile-content-p'>+91-7358236715</p>
                        }
                    </fieldset>
                    <fieldset className='DashboardContent-profile-fieldset'>
                        <legend className='DashboardContent-profile-legend'>Alternate Contact Number</legend>
                        {edit ?
                            <input type="text" className='DashboardContent-profile-content-input' /> :
                            <p className='DashboardContent-profile-content-p'>+91-7358236715</p>
                        }
                    </fieldset>
                    <fieldset className='DashboardContent-profile-fieldset'>
                        <legend className='DashboardContent-profile-legend'>Date of birth</legend>
                        {edit ?
                            <input type="text" className='DashboardContent-profile-content-input' /> :
                            <p className='DashboardContent-profile-content-p'>-</p>
                        }
                    </fieldset>
                    <fieldset className='DashboardContent-profile-fieldset'>
                        <legend className='DashboardContent-profile-legend'>Gender</legend>
                        {edit ?
                            <input type="text" className='DashboardContent-profile-content-input' /> :
                            <p className='DashboardContent-profile-content-p'>-</p>
                        }
                    </fieldset>
                    {edit ?
                        <button className='DashboardContent-profile-edit-button' onClick={() => setEdit(false)}>Update Profile</button>
                        :
                        <button className='DashboardContent-profile-edit-button' onClick={() => setEdit(true)}>Edit Profile</button>}

                </div>
            </div >
        </>
    )
}

export default DashboardContentProfile