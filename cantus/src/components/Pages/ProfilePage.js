import { useAuth0 } from '@auth0/auth0-react';

const ProfilePage = () => {
    const { user, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <article>
                {user?.picture && <img src={user.picture} alt={user?.name} />}
                <h2>{user?.name}</h2>
                <ul>
                    {Object.keys(user).map((objkey, i) => <li key={i}>{objkey}: {user[objkey]
                    }</li>)}
                </ul>

            </article>
        )
    )
}

export default ProfilePage