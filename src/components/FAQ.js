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
            最近一段时间陆陆续续有听众反馈无法播放，沟通了一下，目前来看唯一的共同点是大家都在广东。
            <br /><br />
            我们使用的是腾讯云的 CDN 服务，不是很清楚具体原因，可能是 CDN 在广东那边有什么问题，不能很好的提供服务。
            <br /><br />
            如果无法播放，请尝试使用我们的<a target='_blank' rel="noopener noreferrer" href='https://talkcdn.swift.gg'>备用域名</a>。
            <br /><br />
            如果备用域名也无法访问，请直接访问这个<a target='_blank' rel="noopener noreferrer" href='https://pan.baidu.com/s/1fT5zZp2lVE2DHtgdr1MtgQ'>百度盘</a>，我会上传所有音频文件。
            <br /><br />
            如果依然无法播放，请直接联系我：lj925184928@gmail.com，微博<a target='_blank' rel="noopener noreferrer" href='https://www.weibo.com/numbbbbb'>@梁杰_numbbbbb</a>。
          </Col>
        </Row>
      </Container>
    );
  }
}

export default FAQ
