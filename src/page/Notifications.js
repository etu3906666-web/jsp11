import React, { useState } from 'react';
import './Notifications.css';

const Notifications = ({ onBack, notifications: initialNotifications, setNotifications }) => {
  const [notif, setNotif] = useState(initialNotifications || {
    medicineReminder: true,
    familyAlert: true,
  });

  const handleChange = (key, value) => {
    const updated = { ...notif, [key]: value };
    setNotif(updated);
    if (setNotifications) {
      setNotifications(updated);
    }
  };

  return (
    <div className="mypage-wrapper">
      <img src="/image/Primary_Pattern.png" alt="패턴" className="MyPage-Primary-PatternBottomimage" />
      <div className="MyPage-container">
        <div className="mypage-header">
          <button className="back-button" onClick={onBack}>
            &lt;
          </button>
          <h1 className="mypage-title">알림 설정</h1>
        </div>
        <div className="menu-list">
          <div className="menu-item">
            <span className="menu-text">복용 약 알림</span>
            <input
              type="checkbox"
              checked={notif.medicineReminder}
              onChange={(e) =>
                handleChange('medicineReminder', e.target.checked)
              }
            />
          </div>
          <div className="menu-item">
            <span className="menu-text">가족 알림</span>
            <input
              type="checkbox"
              checked={notif.familyAlert}
              onChange={(e) =>
                handleChange('familyAlert', e.target.checked)
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
