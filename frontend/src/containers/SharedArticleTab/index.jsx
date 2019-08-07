import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import theme from '@src/root/theme';

import {
  WrapSharedArticleTab,
  Title,
  WrapMenu,
  Menu,
  MenuUl,
  MenuLi,
  MenuTitle,
  WrapSideBar,
  WrapBody,
  WrapMajor,
  MajorTitle,
  MajorContent,
  WrapMajorContent,
  WrapSection,
  SectionTitle,
  SectionContent,
  WrapSectionContent,
} from './styled';

export default class SharedArticleTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elIsSelected: '',
    };
    this.titleSection = [
      'UDPM',
      'UDPM-1',
      'UDPM-2',
      'UDPM-3',
      'TKW',
      'TKW-1',
      'TKW-2',
      'TKW-3',
      'TKDH',
      'TKDH-1',
      'TKDH-2',
      'TKDH-3',
      'LTDD',
      'LTDD-1',
      'LTDD-2',
      'LTDD-3',
    ];
  }

  // METHODS:
  scrollToRef(ref) {
    const body = ReactDOM.findDOMNode(this.refs['wrap-body']);
    const destination = ReactDOM.findDOMNode(this.refs[ref]).offsetTop;
    body.scrollTop = destination - 20;
    this.setState({ elIsSelected: ref });
  }

  handlerScrollToSection(evt) {
    const currentTop = evt.target.scrollTop;
    let currentSection = '';
    this.titleSection.forEach((ref, index) => {
      const destination = ReactDOM.findDOMNode(this.refs[ref]).offsetTop;
      if (currentTop > (destination - 25)) {
        let currentDestination = ReactDOM.findDOMNode(this.refs[currentSection]);
        currentDestination = currentDestination ? currentDestination.offsetTop : 0;
        if (destination > (currentDestination - 25)) currentSection = ref;
      }
    });
    this.setState({ elIsSelected: currentSection });
  }

  render() {
    const { elIsSelected } = this.state;
    return (
      <WrapSharedArticleTab>
        <WrapSideBar>

          <WrapMenu>
            <Menu>
              <MenuTitle
                onClick={() => this.scrollToRef('UDPM')}
                is-selected={elIsSelected === 'UDPM'}
              >
                Ứng Dụng Phần Mềm
              </MenuTitle>
              <MenuUl>
                <MenuLi
                  onClick={() => this.scrollToRef('UDPM-1')}
                  is-selected={elIsSelected === 'UDPM-1'}
                >
                  Môi trường học tập
                </MenuLi>
                <MenuLi
                  onClick={() => this.scrollToRef('UDPM-2')}
                  is-selected={elIsSelected === 'UDPM-2'}
                >
                  Môi trường làm việc
                </MenuLi>
                <MenuLi
                  onClick={() => this.scrollToRef('UDPM-3')}
                  is-selected={elIsSelected === 'UDPM-3'}
                >
                  Tính chất ngành học
                </MenuLi>
              </MenuUl>
              <MenuTitle
                onClick={() => this.scrollToRef('TKW')}
                is-selected={elIsSelected === 'TKW'}
              >
                Thiết Kế Website
              </MenuTitle>
              <MenuUl>
                <MenuLi
                  onClick={() => this.scrollToRef('TKW-1')}
                  is-selected={elIsSelected === 'TKW-1'}
                >
                  Môi trường học tập
                </MenuLi>
                <MenuLi
                  onClick={() => this.scrollToRef('TKW-2')}
                  is-selected={elIsSelected === 'TKW-2'}
                >
                  Môi trường làm việc
                </MenuLi>
                <MenuLi
                  onClick={() => this.scrollToRef('TKW-3')}
                  is-selected={elIsSelected === 'TKW-3'}
                >
                  Tính chất ngành học
                </MenuLi>
              </MenuUl>
              <MenuTitle
                onClick={() => this.scrollToRef('TKDH')}
                is-selected={elIsSelected === 'TKDH'}
              >
                Thiết Kế Đồ Họa
              </MenuTitle>
              <MenuUl>
                <MenuLi
                  onClick={() => this.scrollToRef('TKDH-1')}
                  is-selected={elIsSelected === 'TKDH-1'}
                >
                  Môi trường học tập
                </MenuLi>
                <MenuLi
                  onClick={() => this.scrollToRef('TKDH-2')}
                  is-selected={elIsSelected === 'TKDH-2'}
                >
                  Môi trường làm việc
                </MenuLi>
                <MenuLi
                  onClick={() => this.scrollToRef('TKDH-3')}
                  is-selected={elIsSelected === 'TKDH-3'}
                >
                  Tính chất ngành học
                </MenuLi>
              </MenuUl>
              <MenuTitle
                onClick={() => this.scrollToRef('LTDD')}
                is-selected={elIsSelected === 'LTDD'}
              >
                Lập Trình Mobile
              </MenuTitle>
              <MenuUl>
                <MenuLi
                  onClick={() => this.scrollToRef('LTDD-1')}
                  is-selected={elIsSelected === 'LTDD-1'}
                >
                  Môi trường học tập
                </MenuLi>
                <MenuLi
                  onClick={() => this.scrollToRef('LTDD-2')}
                  is-selected={elIsSelected === 'LTDD-2'}
                >
                  Môi trường làm việc
                </MenuLi>
                <MenuLi
                  onClick={() => this.scrollToRef('LTDD-3')}
                  is-selected={elIsSelected === 'LTDD-3'}
                >
                  Tính chất ngành học
                </MenuLi>
              </MenuUl>
            </Menu>
          </WrapMenu>
        </WrapSideBar>
        <WrapBody
          ref="wrap-body"
          onScroll={evt => this.handlerScrollToSection(evt)}
        >
          <Title>CHIA SẺ VỀ NGÀNH HỌC</Title>
          {/* Bài 1 */}
          <WrapMajor>
            <WrapSection>
              <MajorTitle ref="UDPM">ỨNG DỤNG PHẦN MỀM</MajorTitle>
              <WrapMajorContent>
                <MajorContent>
                  <p>
                    Với xu hướng phát triển mạnh mẽ của công nghệ cao
                     thì cơ hội và nhu cầu việc làm của ngành
                    Ứng Dụng Phần Mềm là rất lớn nên luôn thu hút đông
                     đảo các bạn trẻ và luôn là ngành thời thượng
                    trong lĩnh vực Thông tin và Truyền thông.
                  </p>
                  <br />
                  <p>
                    Chuyên ngành Ứng dụng phần mềm (UDPM) này phù hợp cho
                     những bạn nào thích lập trình thuần túy.
                    Khi lập trình xong, thường ta sẽ tạo ra một sản phẩm
                     gọi là “phần mềm”, “chương trình” hoặc “ứng dụng”.
                  </p>
                </MajorContent>
              </WrapMajorContent>
            </WrapSection>
            <WrapSection>
              <SectionTitle ref="UDPM-1">1. Môi trường học tập</SectionTitle>
              <WrapSectionContent>
                <SectionContent>
                  <p>
                    Sinh viên học ngành này được trang bị các kiến thức chuyên sâu
                     về công nghiệp phần mềm, bao gồm: quy trình phát triển phần mềm,
                     kỹ năng vận dụng các công cụ phần mềm vào việc hỗ trợ phát triển
                     các phần mềm khác. Sinh viên cũng được trang bị các kiến thức cần
                     thiết liên quan đến các pha thực hiện trong một dự án phần mềm như:
                     thu thập yêu cầu, phân tích, thiết kế, lập trình, kiểm thử, vận
                     hành và bảo trì phần mềm.
                  </p>
                </SectionContent>
              </WrapSectionContent>
            </WrapSection>
            <WrapSection>
              <SectionTitle ref="UDPM-2">2. Môi trường làm việc</SectionTitle>
              <WrapSectionContent>
                <SectionContent>
                  <p>
                    Sinh viên tốt nghiệp sẽ trở thành các kỹ sư phần mềm có chất
                     lượng tốt, có thể làm việc trong các dự án phần mềm vừa và
                     lớn như sau:
                  </p>
                  <br />
                  <p>
                    Các công ty phát triển phần mềm, thiết kế website, gia công
                     phần mềm, game; bộ phận vận hành và phát triển CNTT của các
                     cơ quan, nhà máy, trường học, ngân hàng, …,các doanh nghiệp
                     có ứng dụng CNTT; các trường đại học, cao đẳng, trung học
                     chuyên nghiệp thuộc lĩnh vực CNTT.
                  </p>
                  <br />
                  <p>
                    Chuyên viên phân tích, thiết kế, cài đặt, quản trị, bảo trì
                     các phần mềm máy tính đáp ứng các ứng dụng khác nhau trong
                     các cơ quan, công ty, trường học...
                  </p>
                  <br />
                  <p>
                    Làm việc ở bộ phận công nghệ thông tin hoặc cần ứng dụng công
                     nghệ thông tin của tất cả các đơn vị có nhu cầu (hành chính
                     sự nghiệp, ngân hàng, viễn thông, hàng không, xây dựng…).
                  </p>
                  <br />
                  <p>
                    Làm việc trong các công ty sản xuất, gia công phần mềm trong
                     nước cũng như nước ngoài. Làm việc tại các công ty tư vấn về
                     đề xuất giải pháp, xây dựng và bảo trì các hệ thống thông tin
                  </p>
                  <br />
                  <p>
                    Có thể tự phát hành các sản phẩm game,
                     ứng dụng trên thiết bị di động.
                  </p>
                  <br />
                  <img src="" alt="hình ảnh minh họa chuyên ngành Ứng Dụng Phần Mềm" />
                </SectionContent>
              </WrapSectionContent>
            </WrapSection>
            <WrapSection>
              <SectionTitle ref="UDPM-3">3. Tính chất ngành học</SectionTitle>
              <WrapSectionContent>
                <SectionContent>
                  <p>
                    Ngành Ứng dụng phần mềm đóng vai trò quan trọng để bảo đảm chất
                     lượng phần mềm và là hoạt động mang tính sống còn trong các dự
                     án sản xuất hoặc gia công phần mềm. Vì vậy, kiểm thử phần mềm đã
                     trở thành qui trình bắt buộc trong các dự án phát triển phần mềm
                     trên thế giới và đang trở thành xu hướng tất yếu ở Việt Nam.
                  </p>
                </SectionContent>
              </WrapSectionContent>
            </WrapSection>
          </WrapMajor>

          {/* Bài 2 */}
          <WrapMajor>
            <WrapSection>
              <MajorTitle ref="TKW">THIẾT KẾ WEBSITE</MajorTitle>
              <WrapMajorContent>
                <MajorContent>
                  <p>
                    Ngày nay, công nghệ thông tin và Internet đã tạo nên những thay
                     đổi sâu sắc trong cuộc sống của chúng ta. Đặc biệt tại doanh nghiệp,
                     website trở thành một thành phần không thể thiếu, là công cụ của
                     doanh nghiệp để giới thiệu hình ảnh, quảng bá sản phẩm của doanh
                     nghiệp với khách hàng, đối tác trong, ngoài nước thông qua internet
                     và kinh doanh trực tuyến.
                  </p>
                </MajorContent>
              </WrapMajorContent>
            </WrapSection>
            <WrapSection>
              <SectionTitle ref="TKW-1">1. Môi trường học tập</SectionTitle>
              <WrapSectionContent>
                <SectionContent>
                  <p>
                    Sinh viên học ngành này khi hoàn thành khóa học sẽ thiết
                     kế được trang web với bố cục hợp lý, màu sắc, đồ họa tinh
                     tế, truyền tải được thông điệp thông qua hình ảnh và nội
                     dung một cách khoa học, đảm bảo đáp ứng được các tiêu chí
                     và tiêu chuẩn ứng dụng của người chủ sử dụng website.
                  </p>
                  <br />
                  <h4 style={{ color: theme.color.green }}>NỘI DUNG ĐÀO TẠO:</h4>
                  <br />
                  <p>Thiết kế giao diện website với Photoshop, Illustrator</p>
                  <br />
                  <p>Thiết kế đa truyền thông với Flash</p>
                  <br />
                  <p>Cắt giao diện,Thiết kế Web tĩnh trên nền tảng HTML5, CSS/ Js</p>
                  <br />
                  <p>Thiết kế cơ sở dữ liệu MySQL</p>
                  <br />
                  <p>Lập trình, xây dựng Website động bằng ngôn ngữ PHP</p>
                  <br />
                  <p>Tối ưu hóa mã nguồn PHP</p>
                  <br />
                  <p>Tối ưu hóa giao diện trên PC, điện thoại và máy tính bảng</p>
                  <br />
                  <p>SEO website, quảng bá và marketting online</p>
                  <br />
                  <p>Bảo trì hệ thống website</p>
                  <br />
                  <p>
                    Kỹ năng mềm và ngoại ngữ: Kỹ năng giao tiếp, thuyết trình, kỹ năng
                     làm việc nhóm, kỹ năng xử lý tình huống phát sinh trong quá trình
                     thực hiện công việc, tiếng Anh giao tiếp.
                  </p>
                  <br />
                  <img src="" alt="hình ảnh minh họa thiết kế website" />
                </SectionContent>
              </WrapSectionContent>
            </WrapSection>
            <WrapSection>
              <SectionTitle ref="TKW-2">2. Môi trường làm việc</SectionTitle>
              <WrapSectionContent>
                <SectionContent>
                  <p>
                    Thường thị bạn sẽ được làm việc tại các công ty trẻ trung, nhân
                     viên cũng vậy. Môi trường làm việc thoải mái, dễ chịu và chỉ có
                     vậy bạn mới thỏa sức thiết kế. Không gian làm việc cũng vậy,
                    thoáng mát và sinh đông.
                  </p>
                  <br />
                  <p>
                    Mỗi lần thiết kế là mỗi lần khác, vì vậy bạn tha hồ tưởng tượng. Trang
                     Web sinh động không chắc là web đẹp, web tốt mà nó phải phù hợp với
                     yêu cầu. Do đó, có rất nhiều yêu cầu, vì vậy bạn đừng lo hết ý tưởng.
                  </p>
                </SectionContent>
              </WrapSectionContent>
            </WrapSection>
            <WrapSection>
              <SectionTitle ref="TKW-3">3. Tính chất ngành học</SectionTitle>
              <WrapSectionContent>
                <SectionContent>
                  <p>
                    Chuyên ngành Thiết kế lập trình Website đón đầu các xu thế mới nhất
                     trong năm 2019, trang bị cho người học những kỹ năng, kiến thức và
                     công nghệ mới nhất để xây dựng các website một cách chuyên nghiệp.
                     Bạn sẽ được học tập trong một môi trường chuyên nghiệp, năng động
                     và giàu tính thực tiễn. Với triết lý đào tạo “Thực học – Thực nghiệp”,
                     kết hợp phương pháp học tập qua dự án (Project-based-learning), sinh
                     viên sẽ được trải nghiệm với những dự án thực tế cùng với đội ngũ giảng
                     viên dày dặn kinh nghiệm đã từng tham gia vào các dự án xây dựng website
                     cho các công ty trong và ngoài nước.
                  </p>
                </SectionContent>
              </WrapSectionContent>
            </WrapSection>
          </WrapMajor>

          {/* Bài. 3 */}
          <WrapMajor>
            <WrapSection>
              <MajorTitle ref="TKDH">THIẾT KẾ ĐỒ HỌA</MajorTitle>
              <WrapMajorContent>
                <MajorContent>
                  <p>
                    Ngành thiết kế đồ họa thuộc lĩnh vực nghệ thuật ứng dụng,
                     là sự kết hợp giữa ý tưởng sáng tạo và khả năng cảm nhận
                     thẩm mỹ, thông qua các thủ pháp đồ họa, phần mềm thiết kế,
                     kỹ năng thiết kế để truyền tải thông điệp bằng những hình
                     ảnh đẹp, ấn tượng, đi vào lòng người
                  </p>
                  <br />
                  <p>
                    Với sự phát triển nhanh chóng của truyền thông và quảng cáo tại
                     Việt Nam, Thiết kế đồ họa đang trở thành một trong những ngành
                     hấp dẫn giới trẻ, nhất là với những ai đam mê sáng tạo và thích
                     làm việc trong môi trường năng động.
                  </p>
                </MajorContent>
              </WrapMajorContent>
            </WrapSection>
            <WrapSection>
              <SectionTitle ref="TKDH-1">1. Môi trường học tập</SectionTitle>
              <WrapSectionContent>
                <SectionContent>
                  <p>
                    Ngành thiết kế đồ họa là một ngành năng động và đầy tính chất sáng tạo.
                  </p>
                  <br />
                  <p>Bạn sẽ được học với nội dung được đào tạo như:</p>
                  <br />
                  <p>Đồ họa cơ bản: Thiết kế hình ảnh với Photoshop, minh họa với Illustrator</p>
                  <br />
                  <p>Chế bản điện tử với InDesign, Autocad 2D, 3D, in ấn</p>
                  <br />
                  <p>
                    Các kỹ năng tư duy mỹ thuật cơ bản (Luật xa gần, bố cục, màu sắc, nghệ thuật
                     chữ, thiết kế bao bì,…)
                  </p>
                  <br />
                  <p>Thiết kế đồ họa động và hoạt hình (Flash, 3Ds Studio Max)</p>
                  <br />
                  <p>Các kỹ năng nghề: Kỹ thuật in ấn, nhiếp ảnh, làm phim.</p>
                  <br />
                  <p>
                    Xử lý hậu kỳ với âm thanh, video với các phần mềm mới nhất như Adobe
                     Premier, After Effect….
                  </p>
                  <br />
                  <p>
                    Kỹ năng mềm và ngoại ngữ: kỹ năng giao tiếp, thuyết trình, kỹ năng làm
                     việc nhóm, kỹ năng xử lý tình huống phát sinh trong quá trình thực hiện
                     công việc, tiếng Anh giao tiếp
                  </p>
                </SectionContent>
              </WrapSectionContent>
            </WrapSection>
            <WrapSection>
              <SectionTitle ref="TKDH-2">2. Môi trường làm việc</SectionTitle>
              <WrapSectionContent>
                <SectionContent>
                  <p>
                    Môi trường làm việc thân thiện và trẻ năng động, tạo điều kiện cho
                     bạn phát huy tối đa năng lực và khả năng của bản thân mình.
                  </p>
                  <br />
                  <p>Với ngành này bạn có thể làm những công việc như sau:</p>
                  <br />
                  <p>Chuyên viên thiết kế đồ hoạ 2D, 3D</p>
                  <br />
                  <p>
                    Chuyên viên thiết kế dàn trang, chế bản điện tử, thiết kế in
                     ấn, biên tập ảnh số
                  </p>
                  <br />
                  <p>Chuyên viên thiết kế giao diện cho Website</p>
                  <br />
                  <p>Chuyên viên thiết kế quảng cáo, marketing</p>
                  <br />
                  <p>Chuyên viên xử lý ảnh làm việc tại các studio</p>
                  <br />
                  <p>Phụ trách mỹ thuật tại các doanh nghiệp</p>
                  <br />
                  <p>
                    Với tay nghề thiết kế đồ họa trong tay bạn có thể trở thành
                     một chuyên viên thiết kế hay tư vấn thiết kế tại các công ty
                     chuyên sản xuất phim hoạt hình, nhà xuất bản, công ty thiết kế,
                     công ty quảng cáo sự kiện… Không chỉ vậy các công ty lớn nhỏ hiện
                     nay đều cần đến thiết kế nên việc khan hiếm nguồn lực ngành thiết
                     kế đồ họa cho tới thời điểm này. Một con đường khác dành cho những
                     ai theo đuổi ngành thiết kế đồ họa đó là tự mở câu lạc bộ, trung
                     tâm để giảng dạy, dịch vụ studio hay các công ty thiết kế.
                  </p>
                  <br />
                  <p>
                    Mức lương cơ bản của ngành thiết kế đồ họa sau 1,5 đến 2 năm kinh
                     nghiệm thường không dưới 8 chữ số. Với cơ hội việc làm rộng mở và
                     mức lương tạm ổn thì thiết kế đồ họa là một ngành nghề mà bạn đáng quan tâm.
                  </p>
                </SectionContent>
              </WrapSectionContent>
            </WrapSection>
            <WrapSection>
              <SectionTitle ref="TKDH-3">3. Tính chất ngành học</SectionTitle>
              <WrapSectionContent>
                <SectionContent>
                  Thiết kế đồ họa đang ngày càng trở nên quan trọng trong công nghiệp
                   quảng cáo và truyền thông. Với sự hỗ trợ đắc lực của Công nghệ thông
                   tin, việc thiết kế đồ họa trở nên dễ dàng. Chỉ cần bạn có ý tưởng và
                   được cung cấp các kiến thức cần thiết về đồ họa cùng kỹ năng sử dụng
                   các phần mềm thiết kế là có thể bắt đầu sáng tạo.
                </SectionContent>
              </WrapSectionContent>
            </WrapSection>
          </WrapMajor>

          {/* Bài. 4 */}
          <WrapMajor>
            <WrapSection>
              <MajorTitle ref="LTDD">LẬP TRÌNH MOBILE</MajorTitle>
              <WrapMajorContent>
                <MajorContent>
                  <p>
                    Ngày nay, các doanh nghiệp có thể dùng ứng dụng điện
                     thoại để khảo sát khách hàng của mình, cung cấp cho
                     họ các thông tin về giá cả của sản phẩm, các chương
                     trình giảm giá, khuyến mãi giúp cho khách hàng dễ dàng
                     tìm kiếm thông tin, cung cấp các thông tin mới nhất.
                  </p>
                  <br />
                  <p>
                    Một lợi ích rất lớn ứng dụng di động  mang lại trong kênh
                     tiếp thị này đó là mọi thông tin của bạn ở ngay trong đầu
                     ngón tay của khách hàng, họ sẽ có bất  cứ khi nào cần, không
                     cần phải gọi điện, SMS hay tìm kiếm trên báo chí và các trang
                     mạng. Nhanh chóng, tiện lợi và hiện diện luôn là những lợi
                     ích rất lớn mà lập trình mobile mang lại cho thương hiệu của bạn.
                  </p>
                </MajorContent>
              </WrapMajorContent>
            </WrapSection>
            <WrapSection>
              <SectionTitle ref="LTDD-1">1. Môi trường học tập</SectionTitle>
              <WrapSectionContent>
                <SectionContent>
                  <p>
                    Môi trường học tập hiện đại với đầy đủ những vật chất cần
                     thiết cho ngành. Không gian rộng rãi tiện ích cho việc
                     học lý thuyết và thực hành.
                  </p>
                  <br />
                  <p>
                    Phòng học rộng rãi, thoải mái được trang bị 100 % máy điều hòa.
                  </p>
                  <br />
                  <p>
                    Với những nội dung đào tạo rất vững chắc cho sinh viên như:
                  </p>
                  <br />
                  <p>
                    Thiết kế hình ảnh với Photoshop
                  </p>
                  <br />
                  <p>
                    Lập trình Java cơ bản
                  </p>
                  <br />
                  <p>
                    Lập trình Android cơ bản đến nâng cao
                  </p>
                  <br />
                  <p>
                    Lập trình ứng dụng native trên nền tảng Android, xây dựng các ứng
                     dụng trên smart phone, tablet sử dụng Android
                  </p>
                  <br />
                  <p>
                    Lập trình ứng dụng cross platform, xây dựng các ứng dụng đa nền tảng
                     trên mobile, phát triển một lần nhưng có thể đồng thời triển khai
                     trên các nền tảng khác nhau như iOS, Android, Window Phone,…
                  </p>
                  <br />
                  <p>
                    Lập trình Game Unity đa nền tảng, phát triển game một lần nhưng có thể
                     đồng thời xuất ra các game trên các nền tảng khác nhau như iOS, Android,
                     Window Phone,…
                  </p>
                  <br />
                  <p>
                    Quản trị dự án CNTT (Agile)
                  </p>
                  <br />
                  <p>
                    Marketing trên mobile
                  </p>
                  <br />
                  <p>
                    Kỹ năng mềm và ngoại ngữ: kỹ năng giao tiếp, thuyết trình, kỹ năng làm việc
                     nhóm, kỹ năng xử lý tình huống phát sinh trong quá trình thực hiện công việc,
                     tiếng Anh giao tiếp.
                  </p>
                </SectionContent>
              </WrapSectionContent>
            </WrapSection>
            <WrapSection>
              <SectionTitle ref="LTDD-2">2. Môi trường làm việc</SectionTitle>
              <WrapSectionContent>
                <SectionContent>
                  <p>Sau quá trình học tập, khi ra trường bạn có thể trở nhành:</p>
                  <br />
                  <p>Chuyên viên lập trình ứng dụng native trên nền tảng Android</p>
                  <br />
                  <p>
                    Chuyên viên lập trình ứng dụng cross platform cho các nền tảng
                     Android, Window Phone, IOS sử dụng công nghệ PhoneGap
                  </p>
                  <br />
                  <p>
                    Chuyên viên lập trình game trên các nền tảng Android, Window
                     Phone, IOS sử dụng Unity
                  </p>
                  <br />
                  <p>Chuyên viên kiểm thử và triển khai ứng dụng Android</p>
                  <br />
                  <p>
                    Chuyên viên quảng cáo trên mobile
                  </p>
                  <br />
                  <p>
                    Quản trị dự án công nghệ thông tin theo phương pháp Agile.
                  </p>
                  <br />
                  <img src="" alt="hình ảnh minh họa chuyên ngành thiết kế website" />
                </SectionContent>
              </WrapSectionContent>
            </WrapSection>
            <WrapSection>
              <SectionTitle ref="LTDD-3">3. Tính chất ngành học</SectionTitle>
              <WrapSectionContent>
                <SectionContent>
                  <p>
                    Sự ra đời của các thiết bị di động thông minh như iPhone,
                     iPad chạy trên hệ điều hành iOS, Android, Windows Phone
                     đã mang lại cuộc cách mạng lớn về cách thức sử dụng thiết
                     bị di động trong cuộc sống và công việc. Hiện nay số lượng
                     thiết bị cầm tay đã vượt qua số lượng máy tính cá nhân.
                     Điều này đã thực sự mở ra một kỷ nguyên công nghệ mới.
                  </p>
                  <br />
                  <p>
                    Sinh viên sẽ được đào tạo về các công nghệ phổ biến như Java,
                     XML, android, cross platform, HTML5/CSS3,… để phát triển ứng
                     dụng trên các nền tảng chủ đạo như Android, Window Phone, IOS.
                     Sau khi tốt nghiệp, sinh viên có thể phát triển được ứng dụng
                     native, đa nền tảng hoặc games Unity trên những nền tảng này.
                  </p>
                </SectionContent>
              </WrapSectionContent>
            </WrapSection>
          </WrapMajor>
        </WrapBody>
      </WrapSharedArticleTab>
    );
  }
}
