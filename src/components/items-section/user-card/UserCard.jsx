import React from 'react'

const UserCard = ({user}) => {
  return (
    <div className="card shadow cursor-pointer group">
      <div className="img overflow-hidden">
        <img
          className="w-full rounded group-hover:scale-110 transition-all"
          src={user.picture.large}
          alt={`${user.name.title} ${user.name.first} ${user.name.last}`}
        />
      </div>
      <div className="info px-1 py-3">
        <h3 className="text-lg font-medium text-purple-600 mb-1">{`${user.name.title} ${user.name.first} ${user.name.last}`}</h3>
        <p>
          <span className='font-semibold'>Country:</span> {user.location.country}
        </p>
      </div>
    </div>
  );
}

export default UserCard