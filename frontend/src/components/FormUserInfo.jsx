import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { setUserInfo } from '@containers/TestingTab/action';

import {
  WrapFormUserInfo,
  WrapForm,
  FormUser,
  WrapTitle,
  InputFormUserInfo,
  LabelFormUserInfo,
  StartBtn,
} from './styled';


class FormUserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDone: false,
      name: '',
      phone: '',
      school: '',
      address: '',
    };
  }

  // LIFECYCLE:
  componentDidMount() {
    const { userInfo } = this.props;
    if (userInfo) this.setState({ ...userInfo });
  }

  // METHODS:
  hanlerChangeInputEvent(evt) {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  }

  handlerClickStartBtn() {
    const {
      name,
      phone,
      school,
      address,
    } = this.state;

    if (name === '' || phone === '') return;

    this.props.setUserInfo({
      name,
      phone,
      school,
      address,
    });
    this.setState({ isDone: true });
  }

  render() {
    if (this.state.isDone) return <Redirect to="/test" />;

    const {
      name,
      school,
      phone,
      address,
    } = this.state;
    return (
      <WrapFormUserInfo>
        <WrapForm>
          <WrapTitle>
            <img
              src="https://dght003-7228c.firebaseapp.com/images/title-form-user-info.png"
              alt="trắc nghiệm chọn nghề"
              style={{ width: '100%' }}
            />
            <p style={{ color: 'white' }}>
              <i>
                “Nghề nào cho bạn – Nghề nào cho tôi”
                 là cuốn sách của tác giả SHOYA ZICHY
                 và ANN BIDOU đã giúp thế hệ trẻ
                 hiểu hơn về chính mình và định
                 hướng nghề nghiệp tốt nhất. Dựa
                 trên tinh thần của cuốn sách,
                 tool “Trắc nghiệm nghề nghiệp”ra
                 đời với mong muốn các bạn học sinh
                 THPT có định hướng tốt hơn về lựa
                 chọn ngành học và cơ hội nghề nghiệp trong tương lai.
              </i>
            </p>
          </WrapTitle>
          <FormUser>
            <LabelFormUserInfo htmlFor="name">
              Họ và tên *
              <br />
              <InputFormUserInfo
                onChange={evt => this.hanlerChangeInputEvent(evt)}
                type="text"
                name="name"
                value={name}
              />
              {
                name === ''
                  ? <i style={{ color: 'red', fontSize: 13 }}>Bắt buộc phải điền thông tin này</i>
                  : null
              }
            </LabelFormUserInfo>
            <br />
            <LabelFormUserInfo htmlFor="phone">
              Số điện thoại *
              <br />
              <InputFormUserInfo
                onChange={evt => this.hanlerChangeInputEvent(evt)}
                type="text"
                name="phone"
                value={phone}
              />
              {
                phone === ''
                  ? <i style={{ color: 'red', fontSize: 13 }}>Bắt buộc phải điền thông tin này</i>
                  : null
              }
            </LabelFormUserInfo>
            <br />
            <LabelFormUserInfo htmlFor="school">
              Trường THPT
              <br />
              <InputFormUserInfo
                onChange={evt => this.hanlerChangeInputEvent(evt)}
                type="text"
                name="school"
                value={school}
              />
            </LabelFormUserInfo>
            <br />
            <LabelFormUserInfo htmlFor="address">
              Nơi ở hiện nay
              <br />
              <InputFormUserInfo
                onChange={evt => this.hanlerChangeInputEvent(evt)}
                type="text"
                name="address"
                value={address}
              />
            </LabelFormUserInfo>
            <StartBtn onClick={() => this.handlerClickStartBtn()}>Bắt đầu ngay</StartBtn>
          </FormUser>
        </WrapForm>
      </WrapFormUserInfo>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return ({
    setUserInfo: userInfo => dispatch(setUserInfo(userInfo)),
  });
};

const mapStateToProps = (state) => {
  return ({
    userInfo: state.testingTab.userInfo,
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(FormUserInfo);
