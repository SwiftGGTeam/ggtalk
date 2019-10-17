import React, { Component } from 'react';
import './Main.css';
import NavBar from './NavBar'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import BtnBar from './BtnBar'
import Loading from './Loading'
const xml = require('xml-js')

class Main extends Component {
  constructor(props) {
    super(props)

    this.state = {
      episodes: [],
      loading: true
    }
  }

  componentDidMount() {
    var episodes = []

    fetch('https://talkcdn.swift.gg/static/rss.xml').then((data) => data.text()).then((text) => {
      const rssContent = xml.xml2js(text, {compact: true})
      episodes = rssContent.rss.channel.item
      if (!Array.isArray(episodes)) episodes = [episodes]
      this.setState({
        episodes,
        loading: false
      })
    })
  }

  formatDate = (date) => {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }

  render() {
    return (
      <Container fluid className='main'>
        <Row>
          <NavBar />
        </Row>
        <Row>
          <Col className='screen'>
            <div className='title'>ggtalk</div>  
            <div className='intro'>程序员的闲聊节目</div>
          </Col>
        </Row>
        <BtnBar />
        <Row className='desc'>
          <Col className='center' xs={12} sm={10} md={8} lg={6}>
            <div className='subtitle'>
              简介
            </div>
            <div className='description'>
              接地气、有价值的闲聊节目。一帮程序员，在无尽的接需求写代码改 bug 加班上线循环中开辟出来的一块空地，想想过去，聊聊现在，偶尔也展望一下未来。
              <br /><br />
              头发越来越少，经验越来越多；颈椎开始僵硬，头脑依然灵活。代码写多了就想尝试点新东西，聊技术，聊工作，聊生活。挤地铁？又堵车？随便点一期吧，听个乐呵。
              <br /><br />
              我们的网站：<a target='_blank' rel="noopener noreferrer" href='https://swift.gg'>https://swift.gg</a>，我们的微博 <a target='_blank' rel="noopener noreferrer" href='https://www.weibo.com/swiftguide'>@SwiftGG翻译组</a>，我的微博 <a target='_blank' rel="noopener noreferrer" href='https://www.weibo.com/numbbbbb'>@梁杰_numbbbbb</a>，我的邮箱：numbbbbb@swift.gg。
            </div>
          </Col>
        </Row>
        <Row className='episodes'>
          <Col className='center' xs={12} sm={10} md={8} lg={6}>
            <div className='subtitle'>
              节目列表
            </div>
            {this.state.loading && (<Loading />)}
            {this.state.episodes.map((episode, i) => {
              return (
                <Row className='episode' key={i}>
                  <Col>
                    <Link target='_blank' className='title' to={'/' + i}>{episode.title._text}</Link>
                    <div className='intro'>
                      发布日期：{this.formatDate(episode.pubDate._text)}&nbsp;|&nbsp;长度：{episode['itunes:duration']._text}
                    </div>
                    <div className='description'>
                      {episode['itunes:summary']._text ? episode['itunes:summary']._text.split('\n')[1] : episode['itunes:summary'].p[0]._text}
                    </div>
                  </Col>
                </Row>
              )
            }).reverse()}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Main
