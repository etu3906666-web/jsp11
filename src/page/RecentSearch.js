import React, { useState } from 'react';
import './RecentSearch.css';

const RecentSearch = ({ onBack, recentSearches: initialData }) => {
  const [recentSearches] = useState(initialData || [
    { id: 1, term: '타이레놀', time: '5분 전' },
    { id: 2, term: '감기약', time: '1시간 전' },
    { id: 3, term: '소화제', time: '2시간 전' },
  ]);

  return (
    <div className="mypage-wrapper">
      <img src="/image/Primary_Pattern.png" alt="패턴" className="MyPage-Primary-PatternBottomimage" />
      <div className="MyPage-container">
        <div className="mypage-header">
          <button className="back-button" onClick={onBack}>
            &lt;
          </button>
          <h1 className="mypage-title">최근 검색</h1>
        </div>
        <div className="menu-list">
          {recentSearches.length === 0 ? (
            <div style={{ padding: '20px', textAlign: 'center', color: '#999' }}>
              검색 이력이 없습니다.
            </div>
          ) : (
            recentSearches.map((item) => (
              <div key={item.id} className="menu-item">
                <div>
                  <div className="menu-text">{item.term}</div>
                  <div style={{ fontSize: '12px', color: '#999', marginTop: '4px' }}>
                    {item.time}
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

export default RecentSearch;
