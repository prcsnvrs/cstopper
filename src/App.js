import { Routes, Route } from 'react-router-dom';
import Overview from './components/Overview';
import Register from './components/Register';
import Phone from './components/Phone';
import Login from './components/Login';
import Registration from './components/Registration';
import Success from './components/Success';
import ForgotPassword from './components/ForgotPassword';
// USER
import UserDashboard from './components/User/UserDashboard';
import EmergencyContacts from './components/User/EmergencyContacts'
// ADMIN
import AdminDashboard from './components/Admin/AdminDashboard'
import AdminAccount from './components/Admin/Account_mngmnt'
import AdminRecord from './components/Admin/Record_mngmnt'
import AdminZone from './components/Admin/Zone_mngmnt'
import AdminSettings from './components/Admin/Settings'
import AdminProfile from './components/Admin/Profile'
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/phone" element={<Phone />} />
            <Route path="/success" element={<Success />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            {/* USER */}
            <Route path="/userdashboard" element={<UserDashboard />} />
            <Route path="/emergencycontacts" element={<EmergencyContacts />} />
            {/* ADMIN */}
            <Route path="/admindashboard" element={<AdminDashboard />} />
            <Route path="/adminzone" element={<AdminZone />} />
            <Route path="/adminaccount" element={<AdminAccount />} />
            <Route path="/adminrecord" element={<AdminRecord />} />
            <Route path="/adminprofile" element={<AdminProfile />} />
            <Route path="/adminsettings" element={<AdminSettings />} />
            {/* POLICE */}
          </Routes>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
