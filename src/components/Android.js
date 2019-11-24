import React, { Component } from 'react'
import './Android.css'
import { Container, Row, Col } from 'reactstrap'
import NavBar from './NavBar'
import BtnBar from './BtnBar'

class Android extends Component {
  render() {
    return (
      <Container fluid className='android'>
        <Row>
          <NavBar />
        </Row>
        <Row>
          <Col className='screen'>
            <div className='title'>安卓说明</div>  
          </Col>
        </Row>
        <BtnBar />
        <Row className='desc'>
          <Col className='center' xs={12} sm={10} md={8} lg={6}>
            苹果可以使用自带的 Podcasts 应用收听节目，非常方便，没什么好说的。但是安卓的情况比较复杂。
            <br /><br />
            Google 官方有一个电台应用，叫 <a target='_blank' rel="noopener noreferrer" href='https://play.google.com/store/apps/details?id=com.google.android.apps.podcasts'>Google Podcasts</a>。不过由于是官方出品，国内可能使用起来并不方便。一般来说，还是要选择第三方应用收听节目。
            <br /><br />
            安卓平台的第三方电台类应用不少，但是目前似乎还没有出现一个公认的最强者，每个都有好有坏。我整理了一下比较出名的应用，大家可以自行搜索使用：
            <br />
            &nbsp;· Pocket Casts
            <br />
            &nbsp;· PlayerFM
            <br />
            &nbsp;· CastBox
            <br />
            &nbsp;· Audvel
            <br />
            <br />
            一般来说，这类电台应用都可以通过 RSS 地址来订阅电台，我们的 RSS 地址是：<a target='_blank' rel="noopener noreferrer" href='https://talkcdn.swift.gg/static/rss.xml'>https://talkcdn.swift.gg/static/rss.xml</a>，你可以自行复制订阅。
            <br />
            <br />
            如果你不太清楚如何设置，或者不想使用第三方应用，也可以直接在我们的网页中播放。在节目列表中点击标题，打开的详情页里有播放按钮。
            <br />
            <br />
            我自己很少使用安卓，很难对这些应用进行比较。大家在使用过程中如果发现好用的应用请告诉我，我会更新到这里。
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Android
