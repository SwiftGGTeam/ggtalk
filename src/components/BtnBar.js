import React, { Component } from 'react';
import {
Row, Col, Button
} from 'reactstrap';
import './BtnBar.css'

class BtnBar extends Component {
  render() {
    return (
      <Row className='btns'>
        <Col sm={12} md={{size:10, offset: 1}} lg={{size:8, offset: 2}}>
          <Row>
            <Col sm={2}>
              <a target='_blank' rel="noopener noreferrer" href='https://talk.swift.gg/static/rss.xml'>
                <Button outline color="secondary">RSS</Button>
              </a>
            </Col>
            <Col sm={4}>
              <a target='_blank' rel="noopener noreferrer" href='https://itunes.apple.com/cn/podcast/ggtalk/id1440443653'>
                <Button outline color="secondary">苹果 Podcasts</Button>
              </a>
            </Col>
            <Col sm={4}>
              <a target='_blank' rel="noopener noreferrer" href='https://playmusic.app.goo.gl/?ibi=com.google.PlayMusic&isi=691797987&ius=googleplaymusic&apn=com.google.android.music&link=https://play.google.com/music/m/Iprya7mjh2hcu4stmptywzvkxv4?t%3Dggtalk%26pcampaignid%3DMKT-na-all-co-pr-mu-pod-16'>
                <Button outline color="secondary">Google Podcasts</Button>
              </a>
            </Col>
            <Col sm={2}>
              <a target='_blank' rel="noopener noreferrer" href='/android'>
                <Button outline color="secondary">安卓</Button>
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default BtnBar
