import React, { useState } from 'react';
import './App.css';
import Modal from './components/Modal';

function App() {
  const [visible, setVisible] = useState();
  return (
    <div className="app-body">
      <button className="ensure-btn" onClick={() => setVisible(true)}>打开弹窗</button>

      {/* 弹窗组件 */}
      <Modal
        visible={visible}
        title={'弹窗标题'}
        onClose={() => setVisible(false)} >
        弹窗内容
      </Modal>
    </div>
  );
}

export default App;
