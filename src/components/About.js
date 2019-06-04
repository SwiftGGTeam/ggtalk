import React, { Component } from 'react';
import './About.css';
import { Container, Row, Col } from 'reactstrap'
import NavBar from './NavBar'
import BtnBar from './BtnBar'

class About extends Component {
  render() {
    return (
      <Container fluid className='about'>
        <Row>
          <NavBar />
        </Row>
        <Row>
          <Col className='screen'>
            <div className='title'>关于我们</div>  
            <div className='intro'>{'//'} 一个业余项目<del>最重要的部分</del>必须有的部分</div>
          </Col>
        </Row>
        <BtnBar />
        <Row className='desc'>
          <Col className='center' xs={12} sm={10} md={8} lg={6}>
            之后可能会专门写一篇文章或者录一期节目来详细讲讲为什么想做电台，目前来说，先复用一下首页的介绍吧……
            <br /><br />
            接地气、有价值的闲聊节目。一帮程序员，在无尽的接需求写代码改 bug 加班上线循环中开辟出来的一块空地，想想过去，聊聊现在，偶尔也展望一下未来。
            <br /><br />
            头发越来越少，经验越来越多；颈椎开始僵硬，头脑依然灵活。代码写多了就想尝试点新东西，聊技术，聊工作，聊生活。挤地铁？又堵车？随便点一期吧，听个乐呵。
            <br /><br />
            我们的网站：<a target='_blank' rel="noopener noreferrer" href='https://swift.gg'>https://swift.gg</a>，我们的微博<a target='_blank' rel="noopener noreferrer" href='https://www.weibo.com/swiftguide'>@SwiftGG翻译组</a>，我的微博<a target='_blank' rel="noopener noreferrer" href='https://www.weibo.com/numbbbbb'>@梁杰_numbbbbb</a>，我的邮箱：numbbbbb@swift.gg。
          </Col>
        </Row>
        <Row className='desc'>
          <Col className='center' xs={12} sm={10} md={8} lg={6}>
            特别鸣谢：羊叔<a target='_blank' rel="noopener noreferrer" href='https://www.weibo.com/shanksyang'>@shanksyang</a>对本节目的大力支持！羊叔长期资助我们的 CDN 流量，一心付出不求回报。在这里祝羊叔早日 T4，心想事成！
            <br /><br />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default About
