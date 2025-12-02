import React, { useState } from 'react';
import './Medicines.css';

const Medicines = ({ onBack, medicines: initialData }) => {
  const [medicines] = useState(initialData || [
    { id: 1, name: '오메가3', dosage: '1일 1회', time: '아침 식후' },
    { id: 2, name: '비타민 D', dosage: '1일 1회', time: '아침 식후' },
  ]);

  return (
    <div className="mypage-wrapper">
      <img src="/image/Primary_Pattern.png" alt="패턴" className="MyPage-Primary-PatternBottomimage" />
      <div className="MyPage-container">
        <div className="mypage-header">
          <button className="back-button" onClick={onBack}>
            &lt;
          </button>
          <h1 className="mypage-title">복용중인 약</h1>
        </div>
        <div className="menu-list">
          {medicines.length === 0 ? (
            <div style={{ padding: '20px', textAlign: 'center', color: '#999' }}>
              복용중인 약이 없습니다.
            </div>
          ) : (
            medicines.map((item) => (
              <div key={item.id} className="menu-item">
                <div>
                  <div className="menu-text">{item.name}</div>
                  <div style={{ fontSize: '12px', color: '#999', marginTop: '4px' }}>
                    {item.dosage} · {item.time}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Medicines;
