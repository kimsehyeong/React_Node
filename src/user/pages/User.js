import UserList from "../components/UsersList";
const User = () => {

    const USERS = [
        {
            id: 'u1',
            name: 'kimSehyeong',
            image: 'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            places: 3
        }
    ];
    return (
        <UserList items={USERS} />
    );
};


export default User;