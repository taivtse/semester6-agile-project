import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  CircularProgressbar, buildStyles,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { convertMapToListAnswer } from '@utils/converter';
import { postTestResult } from '@utils/api';

import theme from '@src/root/theme';

import {
  WrapTestResult,
  WrapSectorInfo,
  WrapListMajorInfo,
  WrapSectorCircle,
  WrapSectorContent,
  SectorCircle,
  TitleSectorContent,
  WrapMajorInfo,
  TitleMajorContent,
  WrapMajorContent,
  MajorContent,
  WrapMajorCircle,
  MajorCircle,
} from './styled';

class TestResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      CNTT: 0,
      UDPM: 0,
      TKW: 0,
      LTDD: 0,
      TKDH: 0,
    };
  }

  // LIFECYCLE:
  componentDidMount() {
    const { listAnswer, userInfo } = this.props;
    const answers = convertMapToListAnswer(listAnswer);
    postTestResult(userInfo, answers)
      .then((res) => {
        const courses = {};
        res.data.forEach((el) => { courses[el.majorId] = el.percent; });
        this.setState({ ...courses });
      })
      .catch(err => console.log(err));
  }

  componentDidUpdate() {
    const { listAnswer } = this.props;
    if (listAnswer && listAnswer.size !== 0) {
      // send api
    }
  }

  // METHODS:
  getPercentNotSuitable(percent) {
    return 90 + (100 - percent) * 3.6;
  }

  render() {
    const {
      CNTT,
      UDPM,
      TKW,
      LTDD,
      TKDH,
    } = this.state;
    return (
      <WrapTestResult>
        <WrapSectorInfo>
          <WrapSectorCircle>
            <CircularProgressbar
              value={CNTT}
              text={`${CNTT}%`}
              styles={buildStyles({
                textColor: theme.color.blue,
                pathColor: theme.bgColor.orange,
                trailColor: theme.bgColor.blueOverlay,
                pathTransition: 0.4,
                strokeLinecap: 'butt',
              })}
            />
          </WrapSectorCircle>
          <WrapSectorContent>
            <TitleSectorContent>CÔNG NGHỆ THÔNG TIN</TitleSectorContent>
            Bạn khá phù hợp với ngành CNTT . Bạn thông minh và có khả năng
             giải quyết các vấn đề khoa học. Độc lập sáng tạo, có tư duy
             phản biện, lật lại vấn đề. Thích trầm tư suy nghĩ hơn là tham
             gia các công tác xã hội sôi nổi. Tự tổ chức công việc của mình
             rất tốt, thường lập kế hoạch và thực hiện theo đúng kế hoạch đã
             đề ra, cũng bởi vì có tính kiên trì, tỉ mỉ và ngăn nắp.
          </WrapSectorContent>
        </WrapSectorInfo>
        <WrapListMajorInfo>
          <WrapMajorInfo>
            <WrapMajorCircle>
              <CircularProgressbar
                value={UDPM}
                text={`${UDPM}%`}
                styles={buildStyles({
                  textColor: theme.color.blue,
                  pathColor: theme.bgColor.orange,
                  trailColor: theme.bgColor.blueOverlay,
                  pathTransition: 0.4,
                  strokeLinecap: 'butt',
                })}
              />
            </WrapMajorCircle>
            <WrapMajorContent>
              <TitleMajorContent>ỨNG DỤNG PHẦN MỀM</TitleMajorContent>
              <MajorContent>
                Bạn thích thú với những ứng dụng mới, những phát minh sáng
                 kiến mới, là một người chịu được áp lực, canh tranh cao.
                 Luôn tìm tòi, học hỏi, nghiên cứu, thích những công việc
                 liên quan đến trí óc và logic.
              </MajorContent>
            </WrapMajorContent>
          </WrapMajorInfo>
          <WrapMajorInfo>
            <WrapMajorCircle>
              <CircularProgressbar
                value={TKW}
                text={`${TKW}%`}
                styles={buildStyles({
                  textColor: theme.color.blue,
                  pathColor: theme.bgColor.orange,
                  trailColor: theme.bgColor.blueOverlay,
                  pathTransition: 0.4,
                  strokeLinecap: 'butt',
                })}
              />
            </WrapMajorCircle>
            <WrapMajorContent>
              <TitleMajorContent>THIẾT KẾ WEBSITE</TitleMajorContent>
              <MajorContent>
                Bạn là người có thiên hướng óc sáng tạo, cẩn thận, tỉ mĩ
                 và ngăn nắp, giỏi giải quyết những việc đòi hỏi sự khéo
                 léo của đôi bàn tay và trí não. Bạn luôn có những ý tưởng
                 sáng tạo tuyệt vời và mới lạ.
              </MajorContent>
            </WrapMajorContent>
          </WrapMajorInfo>
          <WrapMajorInfo>
            <WrapMajorCircle>
              <CircularProgressbar
                value={LTDD}
                text={`${LTDD}%`}
                styles={buildStyles({
                  textColor: theme.color.blue,
                  pathColor: theme.bgColor.orange,
                  trailColor: theme.bgColor.blueOverlay,
                  pathTransition: 0.4,
                  strokeLinecap: 'butt',
                })}
              />
            </WrapMajorCircle>
            <WrapMajorContent>
              <TitleMajorContent>LẬP TRÌNH DI ĐỘNG</TitleMajorContent>
              <MajorContent>
                Bạn là một người thích nghiên cứu, tạo ra những ứng dụng
                 mới lạ vừa mang tính giải trí vừa đáp ứng được nhu cầu
                 người dùng, tạo ra những sản phẩm thông minh giúp cải
                 thiện chất lượng cuộc sống hằng ngày.
              </MajorContent>
            </WrapMajorContent>
          </WrapMajorInfo>
          <WrapMajorInfo>
            <WrapMajorCircle>
              <CircularProgressbar
                value={TKDH}
                text={`${TKDH}%`}
                styles={buildStyles({
                  textColor: theme.color.blue,
                  pathColor: theme.bgColor.orange,
                  trailColor: theme.bgColor.blueOverlay,
                  pathTransition: 0.4,
                  strokeLinecap: 'butt',
                })}
              />
            </WrapMajorCircle>
            <WrapMajorContent>
              <TitleMajorContent>THIẾT KẾ ĐỒ HỌA</TitleMajorContent>
              <MajorContent>
                Nhóm người này có tính cách cởi mở, sáng tạo, nhạy cảm
                 và giàu cảm xúc cùng với trí tưởng tượng phong phú.
                 Không thích những khuôn mẫu, những nguyên tắc mà thích
                 có sự độc đáo và riêng biệt. Có khả năng biểu đạt tình
                 cảm của mình, thích được tham gia vào các hoạt động của
                 con người, đặc biệt trong lĩnh vực văn hóa, nghệ thuật.
              </MajorContent>
            </WrapMajorContent>
          </WrapMajorInfo>
        </WrapListMajorInfo>
      </WrapTestResult>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    listAnswer: state.testingTab.listAnswer,
    userInfo: state.testingTab.userInfo,
  };
};

const mapDispatchToProps = () => { };

export default connect(mapStateToProps, null)(TestResult);
