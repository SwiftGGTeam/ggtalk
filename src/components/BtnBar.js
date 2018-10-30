import React, { Component } from 'react';
import {
Row, Col, Button
} from 'reactstrap';
import './BtnBar.css'

class BtnBar extends Component {
  render() {
    return (
      <Row>
        <Col className='btns'>
          <a target='_blank' rel="noopener noreferrer" href='https://talk.swift.gg/static/rss.xml'>
            <Button outline color="secondary">RSS</Button>
          </a>
          <a target='_blank' rel="noopener noreferrer" href='https://itunes.apple.com/cn/podcast/ggtalk/id1440443653'>
            <Button outline color="secondary">苹果 Podcasts</Button>
          </a>
          <a target='_blank' rel="noopener noreferrer" href='/android'>
            <Button outline color="secondary">安卓说明</Button>
          </a>
        </Col>
      </Row>
    );
  }
}

export default BtnBar