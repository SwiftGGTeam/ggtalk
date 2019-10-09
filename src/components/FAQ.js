import React, { Component } from 'react';
import './FAQ.css';
import { Container, Row, Col } from 'reactstrap'
import NavBar from './NavBar'
import BtnBar from './BtnBar'

class FAQ extends Component {
  render() {
    return (
      <Container fluid className='android'>
        <Row>
          <NavBar />
        </Row>
        <Row>
          <Col className='screen'>
            <div className='title'>无法播放？</div>  
            <div className='intro'>请尝试下列方法， 或者给我反馈：lj925184928@gmail.com，微博<a target='_blank' rel="noopener noreferrer" href='https://www.weibo.com/numbbbbb'>@梁杰_numbbbbb</a></div>
          </Col>
        </Row>
        <BtnBar />
        <Row className='desc'>
          <Col className='center' xs={12} sm={10} md={8} lg={6}>
            最近一段时间陆陆续续有听众反馈无法播放。我们使用的是腾讯云的 CDN 服务，只针对国内有效，如果在海外，或者使用了代理，可能会不太稳定。
            <br /><br />
            如果无法播放，可以尝试：
            <br />
            &nbsp;&nbsp;• 关闭代理<br />
            &nbsp;&nbsp;• 刷新网页<br />
            &nbsp;&nbsp;• 刷新 RSS（苹果 podcast 可以在播客列表页下拉刷新）<br />
            &nbsp;&nbsp;• 第三方应用可以尝试取消订阅后重新订阅，或者取消订阅后用 RSS 地址（https://talk.swift.gg/static/rss.xml）重新订阅<br />
            &nbsp;&nbsp;• 访问我们的<a target='_blank' rel="noopener noreferrer" href='https://talkcdn.swift.gg'>备用域名</a><br />
            &nbsp;&nbsp;• 访问这个<a target='_blank' rel="noopener noreferrer" href='https://pan.baidu.com/s/1fT5zZp2lVE2DHtgdr1MtgQ'>百度盘</a>，我会上传所有音频文件
            <br /><br />
            如果还有问题，请直接联系我：lj925184928@gmail.com，微博<a target='_blank' rel="noopener noreferrer" href='https://www.weibo.com/numbbbbb'>@梁杰_numbbbbb</a>。
          </Col>
        </Row>
      </Container>
    );
  }
}

export default FAQ
