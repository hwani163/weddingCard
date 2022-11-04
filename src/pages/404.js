import React from 'react';
import { withRouter } from 'next/router';

const NotFound = () => (
  <div style={{ padding: 40 }}>
    <p className={{}}>페이지를 찾을 수 없습니다.</p>
    <p className={{}}>
      주소가 맞는지 확인해 본 후 다시 한번 시도해보세요.
    </p>
  </div>
);

export default withRouter(NotFound);
