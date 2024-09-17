import { useEffect, useState } from 'react';
import './dashboardContent.css'
import { getUser } from '../../Server';
import { useApp } from '../../Context';
import { UpdateExtraUserDetails, updateUsersAuthDetails } from '../../Server/User';

const DashboardContentProfile = () => {
    const [edit, setEdit] = useState(false);
    const [userDetails, setUserDetails] = useState(null);
    const [extras, setExtras] = useState({});
    const user = useApp();

    const getData = async () => {
        const data = await getUser(user?.current?.$id);
        setUserDetails({ ...user?.current })
        setExtras({ ...data?.documents[0] })
    }

    const handleAuthChange = (e) => {
        setUserDetails({ ...userDetails, [e.target.name]: `${e.target.value}` });
    }
    const handleInputChange = (e) => {
        setExtras({ ...extras, [e.target.name]: e.target.value });
    }

    const handleUpdateProfile = async (e) => {
        e?.preventDefault();
        const extraPayload = {};
        extras.alternate_email ? extraPayload.alternate_email = extras.alternate_email : null;
        extras.alternate_phone ? extraPayload.alternate_phone = extras.alternate_phone : null;
        extras.dob ? extraPayload.dob = extras.dob : null;
        extras.gender ? extraPayload.gender = extras.gender : null;
        const authPayload = {};
        !user?.current?.email ? authPayload.email = userDetails.email : null;
        !user?.current?.phone ? authPayload.phone = userDetails.phone : null;

        const updateUsersAuthData = await updateUsersAuthDetails(userDetails.$collectionId, authPayload.email, authPayload.phone);
        const updateUserData = await UpdateExtraUserDetails(extras.$id, extraPayload);
        console.log(updateUserData, updateUsersAuthData);
        setEdit(false);
        await user.init();
    }

    useEffect(() => {
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
                            <input type="text" className='DashboardContent-profile-content-input' value={userDetails?.name} readOnly /> :
                            <p className='DashboardContent-profile-content-p'>{userDetails?.name}</p>
                        }
                    </fieldset>
                    <fieldset className='DashboardContent-profile-fieldset'>
                        <legend className='DashboardContent-profile-legend'>Email</legend>
                        {edit ?
                            <input type="email" name="email" className='DashboardContent-profile-content-input' value={userDetails?.email} readOnly={user?.current?.email} onChange={handleAuthChange} /> :
                            <p className='DashboardContent-profile-content-p'>{userDetails?.email}</p>
                        }
                    </fieldset>
                    <fieldset className='DashboardContent-profile-fieldset'>
                        <legend className='DashboardContent-profile-legend'>Contact Number</legend>
                        {edit ?
                            <>
                                <div className='DashboardContent-profile-phone-wrapper'>
                                    {!user?.current?.phone ? <span className='DashboardContent-profile-phone-prefix'>+91</span> : null}
                                    <input type="text" name="phone" className={`DashboardContent-profile-content-input ${!user?.current?.phone ? 'paddingLeft3' : null}`} value={userDetails?.phone} readOnly={user?.current?.phone} onChange={handleAuthChange} maxLength={10} />
                                    {isNaN(userDetails?.phone) ? <span>invalid phone number</span> : null}
                                </div>
                            </> :
                            <p className='DashboardContent-profile-content-p'>{userDetails?.phone}</p>
                        }
                    </fieldset>
                    <fieldset className='DashboardContent-profile-fieldset'>
                        <legend className='DashboardContent-profile-legend'>Alternate Email</legend>
                        {edit ?
                            <input type="email" name="alternate_email" className='DashboardContent-profile-content-input' value={extras?.alternate_email} onChange={handleInputChange} /> :
                            <p className='DashboardContent-profile-content-p'>{extras?.alternate_email}</p>
                        }
                    </fieldset>
                    <fieldset className='DashboardContent-profile-fieldset'>
                        <legend className='DashboardContent-profile-legend'>Alternate Contact Number</legend>
                        {edit ?
                            <>
                                <div className='DashboardContent-profile-phone-wrapper'>
                                    <span className='DashboardContent-profile-phone-prefix'>+91</span> < input type="text" name="alternate_phone" className='DashboardContent-profile-content-input paddingLeft3' value={extras?.alternate_phone} onChange={handleInputChange} maxLength={10} />
                                    {(isNaN(extras?.alternate_phone) || extras?.alternate_phone?.length < 10) ? <span>invalid, please enter a valid 10 digit phone number</span> : null}
                                </div>
                            </> :
                            <p className='DashboardContent-profile-content-p'>{extras?.alternate_phone}</p>
                        }
                    </fieldset>
                    <fieldset className='DashboardContent-profile-fieldset'>
                        <legend className='DashboardContent-profile-legend'>Date of birth</legend>
                        {edit ?
                            <input type="date" name="dob" className='DashboardContent-profile-content-input' value={extras?.dob} onChange={handleInputChange} /> :
                            <p className='DashboardContent-profile-content-p'>{extras?.dob}</p>
                        }
                    </fieldset>
                    <fieldset className='DashboardContent-profile-fieldset'>
                        <legend className='DashboardContent-profile-legend'>Gender</legend>
                        {edit ?
                            <>
                                <div>
                                    <label>
                                        <input type="radio" name="gender" value="Male" checked={extras?.gender === 'Male'} onChange={handleInputChange} />
                                        <span className='DashboardContent-profile-content-input-fz'>Male</span>
                                    </label><br />
                                    <label>
                                        <input type="radio" name="gender" value="Female" checked={extras?.gender === 'Female'} onChange={handleInputChange} />
                                        <span className='DashboardContent-profile-content-input-fz'>Female</span>
                                    </label><br />
                                    <label>
                                        <input type="radio" name="gender" value="Prefer not to say" checked={extras?.gender === 'Prefer not to say'} onChange={handleInputChange} />
                                        <span className='DashboardContent-profile-content-input-fz'>Prefer not to say</span>
                                    </label>
                                </div>
                            </>
                            :
                            <p className='DashboardContent-profile-content-p'>{extras?.gender}</p>
                        }
                    </fieldset>
                    {edit ?
                        <button className='DashboardContent-profile-edit-button' onClick={handleUpdateProfile}>Update Profile</button>
                        :
                        <button className='DashboardContent-profile-edit-button' onClick={() => setEdit(true)}>Edit Profile</button>}

                </div>
            </div >
        </>
    )
}

export default DashboardContentProfile