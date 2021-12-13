
import { useNavigate } from "react-router-dom";
import './menu-item.styles.scss';

// const MenuItem = ({ title, imageUrl, size, linkUrl, match }) => (
//     <div className={`${size} menu-item`}
//         onClick={() => history.push(`${match.url}${linkUrl}`)}
//     >
//         <div className='background-image' style={{
//             backgroundImage: `url(${imageUrl})`
//         }} />
//         <div className='content'>
//             <h1 className='title'>
//                 {title.toUpperCase()}
//             </h1>
//             <span className='subtitle'>
//                 SHOP NOW
//             </span>
//         </div>
//     </div>
// )

// export default MenuItem;

export default function MenuItem({ title, imageUrl, size, linkUrl }) {

    let navigate = useNavigate();

    return (
        <div className={`${size} menu-item`}
            onClick={() => navigate(`../${linkUrl}`)}
        >
            <div className='background-image' style={{
                backgroundImage: `url(${imageUrl})`
            }} />
            <div className='content'>
                <h1 className='title'>
                    {title.toUpperCase()}
                </h1>
                <span className='subtitle'>
                    SHOP NOW
                </span>
            </div>
        </div>
    )
}
