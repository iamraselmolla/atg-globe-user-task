// SingleUser.js
import React from 'react';

const SingleUser = ({ handleUserClick, singleUser, isActive }) => {
    return (
        <div
            key={singleUser?.profile.username}
            onClick={() => handleUserClick(singleUser?.id)}
            style={{ cursor: 'pointer' }}
            className={`col-md-4 user-info fw-bold ${isActive ? 'active' : ''}`}
        >
            {isActive && <div className='active_icon'>
                ✓
            </div>}
            <div className="align-items-center shadow d-flex gap-2 my-2 ps-2 py-3 rounded text-black">
                {singleUser?.avatar && (
                    <img width="50" height="50" className="rounded-circle" src={singleUser?.avatar} alt="" />
                )}
                <p className="mb-0">{singleUser?.profile.firstName + ' ' + singleUser?.profile.lastName}</p>
            </div>
        </div>
    );
};

export default SingleUser;
