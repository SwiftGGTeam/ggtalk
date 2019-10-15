import React, { Component } from 'react';
import './Episode.css';
import NavBar from './NavBar'
import { Container, Row, Col } from 'reactstrap'
import MediaElement from './MediaElement'
import BtnBar from './BtnBar'
var Autolinker = require( 'autolinker' )

class Episode extends Component {
  constructor(props) {
    super(props)

    this.state = {
      episodes: []
    }
  }

  componentDidMount () {
    const xml = require('xml-js')
    var episodes = []

    fetch('https://talkcdn.swift.gg/static/rss.xml').then((data) => data.text()).then((text) => {
      const rssContent = xml.xml2js(text, {compact: true})
      episodes = rssContent.rss.channel.item
      if (!Array.isArray(episodes)) episodes = [episodes]
      this.setState({episodes})
      document.title = 'ggtalk | ' + episodes[this.props.match.params.id].title._text
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
    if (this.state.episodes.length === 0) {
      return null
    }

    let i = this.props.match.params.id
    let episode = this.state.episodes[i]

    return (
      <div className='episode'>
        <Container fluid>
          <Row>
            <NavBar />
          </Row>
          <Row>
            <Col className='screen'>
              <div className='title'>{episode.title._text}</div>  
              <div className='intro'>第 {i} 期&nbsp;·&nbsp;{this.formatDate(episode.pubDate._text)}&nbsp;·&nbsp;{episode['itunes:duration']._text}</div>
            </Col>
          </Row>
          <Row className='audio'>
            <Col className='center' xs={12} sm={10} md={8} lg={6}>
              <MediaElement
                source={episode.guid._text}
                id='audioplayer'
                controls
                width='100%'
              />
            </Col>
          </Row>
          <BtnBar />
          <Row className='desc'>
            <Col className='center' xs={12} sm={10} md={8} lg={6}>
              <div className='subtitle'>
                简介
              </div>
              <div className='description' dangerouslySetInnerHTML={{ __html: Autolinker.link(episode.description._text).replace(/\n/g, '<br />')}} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Episode
