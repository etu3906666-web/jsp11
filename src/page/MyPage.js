import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import Favorites from './Favorites';
import RecentSearch from './RecentSearch';
import Medicines from './Medicines';
import Family from './Family';
import Notifications from './Notifications';
import './MyPage.css';

const MyPage = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState('mypage');
  const [favorites] = useState([
    { id: 1, name: '타이레놀 500mg', category: '해열진통제' },
    { id: 2, name: '게보린', category: '해열진통제' },
    { id: 3, name: '비타민 C 1000mg', category: '영양제' },
  ]);
  const [recentSearches] = useState([
    { id: 1, term: '타이레놀', time: '5분 전' },
    { id: 2, term: '감기약', time: '1시간 전' },
    { id: 3, term: '소화제', time: '2시간 전' },
  ]);
  const [medicines] = useState([
    { id: 1, name: '오메가3', dosage: '1일 1회', time: '아침 식후' },
    { id: 2, name: '비타민 D', dosage: '1일 1회', time: '아침 식후' },
  ]);
  const [family] = useState([
    { id: 1, name: '김영희', relation: '배우자', medicines: 3 },
    { id: 2, name: '홍철수', relation: '자녀', medicines: 2 },
  ]);
  const [notifications, setNotifications] = useState({
    medicineReminder: true,
    familyAlert: true,
  });
  const menuItems = [
    { id: 1, label: '즐겨찾기', page: 'favorites' },
    { id: 2, label: '최근 검색', page: 'recent' },
    { id: 3, label: '가족 연동', page: 'family' },
    { id: 4, label: '복용중인 약', page: 'medicines' },
    { id: 5, label: '알림 설정', page: 'notifications' },
    { id: 6, label: '계정 설정', page: 'account' }
  ];

  const handleBack = () => {
    if (currentPage === 'mypage') {
      navigate(-1);
    } else {
      setCurrentPage('mypage');
    }
  };

  const handleMenuClick = (item) => {
    setCurrentPage(item.page);
  };

  const handleLogout = async () => {
    const confirmed = window.confirm('정말 로그아웃하시겠습니까?');
    if (confirmed) {
      try {
        await signOut(auth);
        navigate('/login');
      } catch (error) {
        console.error('로그아웃 실패:', error);
        alert('로그아웃에 실패했습니다.');
      }
    }
  };

  const handlePasswordClick = () => {
    navigate('/change-password');
  };

  const MainPage = () => (
    <div className="mypage-wrapper">
      <img src="/image/Primary_Pattern.png" className="MyPage-Primary-PatternBottomimage" />
      <div className="MyPage-container">
        <div className="mypage-header">
          <button className="back-button" onClick={handleBack}>
            &lt;
          </button>
          <h1 className="mypage-title">마이페이지</h1>
        </div>
        <div className="menu-list">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="menu-item"
              onClick={() => handleMenuClick(item)}
            >
              <span className="menu-text">{item.label}</span>
              <span className="menu-arrow">&gt;</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // 계정 설정 페이지
  const AccountPage = () => (
    <div className="mypage-wrapper">
      <img src="/image/Primary_Pattern.png" className="MyPage-Primary-PatternBottomimage" />
      <div className="MyPage-container">
        <div className="mypage-header">
          <button className="back-button" onClick={handleBack}>
            &lt;
          </button>
          <h1 className="mypage-title">계정 설정</h1>
        </div>
        <div className="menu-list">
          <div className="menu-item" onClick={handlePasswordClick}>
            <span className="menu-text">비밀번호 변경</span>
            <span className="menu-arrow">&gt;</span>
          </div>
          <div className="menu-item" onClick={handleLogout}>
            <span className="menu-text">로그아웃</span>
            <span className="menu-arrow">&gt;</span>
          </div>
        </div>
      </div>
    </div>
  );

  // 페이지 렌더링
  const renderPage = () => {
    switch (currentPage) {
      case 'favorites':
        return <Favorites onBack={handleBack} favorites={favorites} />;
      case 'recent':
        return <RecentSearch onBack={handleBack} recentSearches={recentSearches} />;
      case 'medicines':
        return <Medicines onBack={handleBack} medicines={medicines} />;
      case 'family':
        return <Family onBack={handleBack} family={family} />;
      case 'notifications':
        return <Notifications onBack={handleBack} notifications={notifications} setNotifications={setNotifications} />;
      case 'account':
        return <AccountPage />;
      case 'mypage':
      default:
        return <MainPage />;
    }
  };

  return (
    <>
      {renderPage()}
    </>
  );
};

export default MyPage;