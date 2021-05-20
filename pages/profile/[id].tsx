import React from 'react';
import { Header } from '../../components/Header';
import { Profile } from '../../components/Profile';

export default function ProfilePage() {
  return (
    <>
      <Header />
      <div className="container mt-30">
        <Profile
          avatarUrl="https://sun9-15.userapi.com/impg/PmnLAr-xRXSzloN4DxAqPK0LQVwahjxK6JoCIg/lFaTr4xGyBg.jpg?size=744x619&quality=96&sign=7edeeb31fa3ea0039b71a35551a3e693&type=album"
          fullname="Andrey Shock"
          username="shock_dev"
          about="Test info"
        />
      </div>
    </>
  );
}
