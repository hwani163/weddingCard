import React, { useEffect } from 'react';
import { withStore } from '../store';
import Image from 'next/image'
class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false  // 이전의 모달 창 실행 여부를 props에서 state로 변경.
    }
  }

  render() {
    return (
      <>
        <div>
          <img src="/images/wedding/map.png" style={{ width: '100%' }} />
        </div>
      </>
    )
  }
}

export default withStore(Map);