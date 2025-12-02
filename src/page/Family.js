import React, { useState } from 'react';
import './Family.css';

const Family = ({ onBack, family: initialData }) => {
  const [family] = useState(initialData || [
    { id: 1, name: '김영희', relation: '배우자', medicines: 3 },
    { id: 2, name: '홍철수', relation: '자녀', medicines: 2 },
  ]);

  return (
    <div className="mypage-wrapper">
      <img src="/image/Primary_Pattern.png" alt="패턴" className="MyPage-Primary-PatternBottomimage" />
      <div className="MyPage-container">
        <div className="mypage-header">
          <button className="back-button" onClick={onBack}>
            &lt;
          </button>
          <h1 className="mypage-title">가족 연동</h1>
        </div>
        <div className="menu-list">
          {family.length === 0 ? (
            <div style={{ padding: '20px', textAlign: 'center', color: '#999' }}>
              연동된 가족이 없습니다.
            </div>
          ) : (
            family.map((member) => (
              <div key={member.id} className="menu-item">
                <div>
                  <div className="menu-text">{member.name}</div>
                  <div style={{ fontSize: '12px', color: '#999', marginTop: '4px' }}>
                    {member.relation} · 약 {member.medicines}개
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

export default Family;
