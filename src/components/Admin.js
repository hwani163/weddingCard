import React, { Component } from 'react';
import dayjs from 'dayjs';
import { withRouter } from 'next/router'

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props.metadata
    };
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = async () => {
    const { router } = this.props;
    const { name, email } = this.state;
    const { id } = router?.query;
    // const { host } = context.req.headers;
    try {
      const result = await axios.post(`http://${host}/api/wedding/${id}`, {
        ...this.state
      });
      return { props: { ...result.data } };
    } catch (error) {
      return { props: {} };
    }
  }

  render() {
    const {
      id,
      password,
      date,
      location,
      geo,
      desc,
      boy_name,
      boy_bank,
      boy_tel,
      boy_dad_name,
      boy_dad_tel,
      boy_mom_name,
      boy_mom_tel,
      girl_name,
      girl_bank,
      girl_tel,
      girl_dad_name,
      girl_dad_tel,
      girl_mom_name,
      girl_mom_tel,
    } = this.state;
    const inputArray = [
      { key: 'id', placeholder: '닉' },
      { key: 'password', placeholder: '비번' },
      { key: 'date', placeholder: '식날짜' },
      { key: 'location', placeholder: '위치' },
      { key: 'geo', placeholder: '위치 위도경도' },
      { key: 'desc', placeholder: '설명' },
      { key: 'boy_name', placeholder: '신랑이름' },
      { key: 'boy_bank', placeholder: '신랑계좌' },
      { key: 'boy_tel', placeholder: '신랑폰번호' },
      { key: 'boy_dad_name', placeholder: '신랑아빠' },
      { key: 'boy_dad_tel', placeholder: '신랑아빠번호' },
      { key: 'boy_mom_name', placeholder: '신랑엄마' },
      { key: 'boy_mom_tel', placeholder: '신랑엄마번호' },
      { key: 'girl_name', placeholder: '신부이름' },
      { key: 'girl_bank', placeholder: '신부계좌' },
      { key: 'girl_tel', placeholder: '신부폰번호' },
      { key: 'girl_dad_name', placeholder: '신부아빠' },
      { key: 'girl_dad_tel', placeholder: '신부아빠번호' },
      { key: 'girl_mom_name', placeholder: '신부엄마' },
      { key: 'girl_mom_tel', placeholder: '신부엄마번호' },
    ];
    return (
      <div style={{ padding: 40 }}>
        {/* {inputArray.map((item) => (
          <Form.Input
            label={item.placeholder}
            key={item.key}
            placeholder={item.placeholder}
            name={item.key}
            value={this.state[item.key]}
            onChange={this.handleChange}
          />
        ))}
        <Form.Button content="Submit" /> */}
      </div>
    );
  }
}

export default withRouter(Admin);
