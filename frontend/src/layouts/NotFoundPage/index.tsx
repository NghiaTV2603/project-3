import { Link } from 'react-router-dom';
import _404Image from '../../assets/images/404.svg';

function NotFoundPage() {
   return (
      <div>
         <h1>Not found page</h1>

         <img src={_404Image} alt="404" />

         <Link to="/">Go to home page</Link>
      </div>
   );
}

export default NotFoundPage;
