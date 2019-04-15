import React, { Component } from 'react';
import {
Row, Col, Button
} from 'reactstrap';
import './BtnBar.css'

class BtnBar extends Component {
  render() {
    return (
      <Row className='btns'>
        <Col sm={12} md={{size:8, offset: 2}} lg={{size:6, offset: 3}}>
          <Row>
            <Col sm={3}>
              <a target='_blank' rel="noopener noreferrer" href='https://talk.swift.gg/static/rss.xml'>
                <Button outline color="secondary">RSS</Button>
              </a>
            </Col>
            <Col sm={6}>
              <a target='_blank' rel="noopener noreferrer" href='https://itunes.apple.com/cn/podcast/ggtalk/id1440443653'>
                <Button outline color="secondary">苹果 Podcasts</Button>
              </a>
            </Col>
            <Col sm={3}>
              <a target='_blank' rel="noopener noreferrer" href='/android'>
                <Button outline color="secondary">安卓</Button>
              </a>
            </Col>
          </Row>
          <Row>
            <Col>
              <a className='faq-link' target='_blank' rel="noopener noreferrer" href='/faq'>
                无法播放？
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default BtnBar
