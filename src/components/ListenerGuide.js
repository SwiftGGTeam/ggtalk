import React, { Component } from 'react'
import './ListenerGuide.css'
import './github-markdown.css'
import { Container, Row, Col } from 'reactstrap'
import NavBar from './NavBar'
import BtnBar from './BtnBar'
import Loading from './Loading'

var showdown  = require('showdown')
var converter = new showdown.Converter({
  openLinksInNewWindow: true
})

class ListenerGuide extends Component {
  constructor(props) {
    super(props)

    this.state = {
      guideMD: ""
    }
  }

  componentDidMount () {
    fetch('https://raw.githubusercontent.com/numbbbbb/ggtalk-rss/master/ListenerGuide.md').then((data) => data.text()).then((text) => {
      this.setState({
        guideMD: text
      })
    })
  }

  render() {
    return (
      <Container fluid className='guide'>
        <Row>
          <NavBar />
        </Row>
        <Row>
          <Col className='screen'>
            <div className='title'>新听众指南</div>  
          </Col>
        </Row>
        <BtnBar />
        <Row className='desc'>
          <Col className='center' xs={12} sm={10} md={8} lg={6}>
            {this.state.guideMD ? <div className='description markdown-body' dangerouslySetInnerHTML={{ __html: converter.makeHtml(this.state.guideMD) }} /> : <Loading />}
          </Col>
        </Row>
      </Container>
    )
  }
}

export default ListenerGuide
