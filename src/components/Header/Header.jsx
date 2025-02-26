import profile from '../../../images/profile.png';
const Header = () => {
    return (
        <div className='flex items-center p-4 border-b-2 justify-between max-w-7xl mx-auto'>
            <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;