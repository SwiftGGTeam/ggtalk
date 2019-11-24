import React, { Component } from 'react'
import {
Row, Col, Button
} from 'reactstrap'
import './BtnBar.css'

export const copyToClipboard = function (text) {
  if (window.clipboardData && window.clipboardData.setData) {
    // IE specific code path to prevent textarea being shown while dialog is visible.
    return window.clipboardData.setData("Text", text); 

  } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
    var textarea = document.createElement("textarea");
    textarea.textContent = text;
    textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in MS Edge.
    document.body.appendChild(textarea);
    textarea.select();
    try {
      return document.execCommand("copy");  // Security exception may be thrown by some browsers.
    } catch (ex) {
      console.warn("Copy to clipboard failed.", ex);
      return false;
    } finally {
      document.body.removeChild(textarea);
    }
  }
}

class BtnBar extends Component {
  constructor(props) {
    super(props)

    this.share = this.share.bind(this)
  }

  share(e) {
    e.preventDefault()
    copyToClipboard(window.location.origin + window.location.pathname + "?startfrom=" + localStorage.getItem(this.props.source)) && alert("当前时间点链接已复制！")
  }

  render() {
    return (
      <Row className='btns'>
        <Col sm={12} md={{size:8, offset: 2}} lg={{size:6, offset: 3}}>
          <Row>
            <Col sm={3}>
              <a target='_blank' rel="noopener noreferrer" href='https://talkcdn.swift.gg/static/rss.xml'>
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
            <Col className="links">
              <a className='faq-link' target='_blank' rel="noopener noreferrer" href='/faq'>
                无法播放？
              </a>
              <div className="separator">|</div>
              <a className='faq-link' target='_blank' rel="noopener noreferrer" href='/search'>
                搜索
              </a>
              {this.props.share && [
                <div key="separator" className="separator">|</div>,
                <a key="btn" className='faq-link' href="/" onClick={this.share}>
                  复制当前时间点链接
                </a>
              ]}
              <div className="separator">|</div>
              <a className='faq-link guide-link' target='_blank' rel="noopener noreferrer" href='/guide'>
                新听众指南
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
    )
  }
}

export default BtnBar
