import React, { Component } from 'react';
import './Episode.css';
import NavBar from './NavBar'
import { Container, Row, Col } from 'reactstrap'
import MediaElement from './MediaElement'
import BtnBar from './BtnBar'
import Loading from './Loading'
var Autolinker = require('autolinker')
const xml = require('xml-js')

class Episode extends Component {
  constructor(props) {
    super(props)

    this.state = {
      episodes: [],
      loading: true
    }
  }

  componentDidMount () {
    var episodes = []

    fetch('https://talkcdn.swift.gg/static/rss.xml').then((data) => data.text()).then((text) => {
      const rssContent = xml.xml2js(text, {compact: false})
      episodes = rssContent.elements[0].elements[0].elements.filter(item => item.name === "item")
      this.setState({
        episodes,
        loading: false
      })
      document.title = 'ggtalk | ' + episodes[this.props.match.params.id].elements.find(item => item.name === "title").elements[0].text
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
    if (this.state.loading) return (
      <div className='episode'>
        <Container fluid>
          <Row>
            <NavBar />
          </Row>
          <Row>
            <Loading />
          </Row>
        </Container>
      </div>
    )

    let i = this.props.match.params.id
    let episode = this.state.episodes[i]
    let title = episode.elements.find(item => item.name === "title").elements[0].text
    let pubDate = episode.elements.find(item => item.name === "pubDate").elements[0].text
    let duration = episode.elements.find(item => item.name === "itunes:duration").elements[0].text
    let url = episode.elements.find(item => item.name === "guid").elements[0].text
    let description = episode.elements.find(item => item.name === "description")

    return (
      <div className='episode'>
        <Container fluid>
          <Row>
            <NavBar />
          </Row>
          <Row>
            <Col className='screen'>
              <div className='title'>{title}</div>  
              <div className='intro'>第 {i} 期&nbsp;·&nbsp;{this.formatDate(pubDate)}&nbsp;·&nbsp;{duration}</div>
            </Col>
          </Row>
          <Row className='audio'>
            <Col className='center' xs={12} sm={10} md={8} lg={6}>
              <MediaElement
                source={url}
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
              <div className='description' dangerouslySetInnerHTML={{ __html: Autolinker.link(xml.js2xml(description, {compact: false, ignoreComment: true, spaces: 4}))}} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Episode
