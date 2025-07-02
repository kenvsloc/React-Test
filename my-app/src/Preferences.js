// File: Preferences.js
import React, { useState, useImperativeHandle } from 'react';

// Bắt buộc phải bọc trong forwardRef để dùng useImperativeHandle
const Preferences = React.forwardRef((props, ref) => {
  const [wantsNewProdInfo, setWantsNewProdInfo] = useState(false);
  const [wantsProdUpdateInfo, setWantsProdUpdateInfo] = useState(false);

  // Định nghĩa các hàm mà component cha có thể gọi
  const resetAllPreferences = () => {
    setWantsNewProdInfo(false);
    setWantsProdUpdateInfo(false);
    console.log('Các tùy chọn đã được reset!');
  };

  const getPreferencesData = () => {
    return { wantsNewProdInfo, wantsProdUpdateInfo };
  };

  // Sử dụng useImperativeHandle để tùy chỉnh giá trị của ref.current ở component cha
  useImperativeHandle(ref, () => ({
    // "Gửi" một đối tượng chứa các hàm này lên cho cha
    reset: resetAllPreferences,
    getData: getPreferencesData,
  }));

  return (
    <div>
      <h3>Tùy chọn nhận thông tin</h3>
      {/* ... JSX cho các checkbox như ví dụ trước ... */}
      <label>
        <input type="checkbox" checked={wantsNewProdInfo} onChange={() => setWantsNewProdInfo(p => !p)} />
        Gửi thông tin sản phẩm mới
      </label>
      <br />
      <label>
        <input type="checkbox" checked={wantsProdUpdateInfo} onChange={() => setWantsProdUpdateInfo(p => !p)} />
        Gửi thông tin cập nhật
      </label>
    </div>
  );
});

export default Preferences;