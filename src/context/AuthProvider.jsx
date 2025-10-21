 
import { Authcontext } from './AuthContext';

const AuthProvider = ({children}) => {
  return  <Authcontext>{children}</Authcontext>
};

export default AuthProvider;