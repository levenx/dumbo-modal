import React, { ReactNode } from "react";
import classnames from "classnames";
import "./index.css";

export default function Modal(props) {
  const { visible, onClose, title, children } = props;
  return (
    <div className={classnames("modal", { "modal-visible": visible })}>
      {/* 弹窗内容部分 */}
      <div className="modal-body">
        <div className="modal-body__title">
          <span>{title}</span>
          <span onClick={onClose}>x</span>
        </div>
        <div className="modal-body__content">{children}</div>
        <div className="modal-body__footer">
          <button className="cancel-btn" onClick={onClose}>
            取消
          </button>
          <button className="ensure-btn">确定</button>
        </div>
      </div>
      {/* 遮罩 */}
      <div className="modal-mask"></div>
    </div>
  );
}
