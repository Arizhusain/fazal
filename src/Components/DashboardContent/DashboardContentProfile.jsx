import { useEffect, useState } from 'react';
import './dashboardContent.css'
import { getUser } from '../../Server';
import { useApp } from '../../Context';

const DashboardContentProfile = () => {
    const [edit, setEdit] = useState(false);
    const [userDetails, setUserDetails] = useState(null);
    const user = useApp();

    const getData = async () => {
        const data = await getUser(user?.current?.$id);
        setUserDetails({ ...userDetails, ...data?.documents[0] })
    }

    useEffect(() => {
        setUserDetails({
            ...user?.current
        });
        getData();
    }, []);

    return (
        <>
            <div>
                <div>
                    <h2 className='DashboardContent-profile-heading'>My profile</h2>
                    <p className='DashboardContent-profile-description'>You can edit/update your profile information by click on edit profile button.</p>
                </div>
                <div>
                    <fieldset className='DashboardContent-profile-fieldset'>
                        <legend className='DashboardContent-profile-legend'>Name</legend>
                        {edit ?
                            <input type="text" className='DashboardContent-profile-content-input' value={user?.current?.name} readOnly /> :
                            <p className='DashboardContent-profile-content-p'>{user?.current?.name}</p>
                        }
                    </fieldset>
                    <fieldset className='DashboardContent-profile-fieldset'>
                        <legend className='DashboardContent-profile-legend'>Email</legend>
                        {edit ?
                            <input type="text" className='DashboardContent-profile-content-input' value={user?.current?.email} readOnly={user?.current?.email} /> :
                            <p className='DashboardContent-profile-content-p'>{user?.current?.email}</p>
                        }
                    </fieldset>
                    <fieldset className='DashboardContent-profile-fieldset'>
                        <legend className='DashboardContent-profile-legend'>Contact Number</legend>
                        {edit ?
                            <input type="text" className='DashboardContent-profile-content-input' value={user?.current?.phone} readOnly={user?.current?.phone} /> :
                            <p className='DashboardContent-profile-content-p'>{user?.current?.phone}</p>
                        }
                    </fieldset>
                    <fieldset className='DashboardContent-profile-fieldset'>
                        <legend className='DashboardContent-profile-legend'>Date of birth</legend>
                        {edit ?
                            <input type="text" className='DashboardContent-profile-content-input' value={user?.current?.dob} /> :
                            <p className='DashboardContent-profile-content-p'>{user?.current?.dob}</p>
                        }
                    </fieldset>
                    <fieldset className='DashboardContent-profile-fieldset'>
                        <legend className='DashboardContent-profile-legend'>Gender</legend>
                        {edit ?
                            <input type="text" className='DashboardContent-profile-content-input' value={user?.current?.gender} /> :
                            <p className='DashboardContent-profile-content-p'>{user?.current?.gender}</p>
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