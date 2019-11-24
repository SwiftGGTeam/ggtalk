import React, { Component } from 'react'
import './Search.css'
import { Container, Row, Col, FormGroup, Input, Button } from 'reactstrap'
import NavBar from './NavBar'
import Loading from './Loading'
import Fuse from "fuse.js"
import { getParameterByName } from "./Episode"
import { copyToClipboard } from "./BtnBar"
var AV = require('leancloud-storage')

function insertParam(key, value)
{
    key = encodeURI(key); value = encodeURI(value);

    var kvp = document.location.search.substr(1).split('&');

    var i=kvp.length; var x; while(i--) 
    {
        x = kvp[i].split('=');

        if (x[0]==key)
        {
            x[1] = value;
            kvp[i] = x.join('=');
            break;
        }
    }

    if(i<0) {kvp[kvp.length] = [key,value].join('=');}

    //this will reload the page, it's likely better to store this until finished
    document.location.search = kvp.join('&'); 
}

class Search extends Component {
  constructor(props) {
    super(props)

    this.state = {
      keyword: "",
      data: null,
      results: [],
      displayEmptyMsg: false,
      loading: true
    }
    this.handleChange = this.handleChange.bind(this)
    this.share = this.share.bind(this)

    AV.init({
      appId: "Ab21p9Df2hlkXxzSiwHuUSr5",
      appKey: "MNphO03YUzWhy9k6rHHi4eHA",
      serverURLs: "https://lcapi.swift.gg"
    })

    fetch("https://raw.githubusercontent.com/numbbbbb/ggtalk-rss/master/search_data.json")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          data: this.convertToList(data),
          loading: false
        })
        this.fuse = new Fuse(this.convertToList(data), {
          keys: ["title", "tags"],
          threshold: 0.3,
        })
        if (getParameterByName("q")) {
          this.setState({
            keyword: getParameterByName("q"),
            results: this.fuse.search(getParameterByName("q")),
            displayEmptyMsg: false
          })
        }
      })
  }

  timeToSeconds(time) {
    var p = time.split(':'), s = 0, m = 1
    while (p.length > 0) {
      s += m * parseInt(p.pop(), 10)
      m *= 60
    }
    return s
  }

  convertToList(data) {
    let result = []
    for (let item of data) {
      result.push({
        episode: item.episode,
        title: (parseInt(item.episode) + 1) + '. ' + item.title,
        tags: item.tags.concat([item.episode + 1 + ""])
      })
      if (item.times) {
        for (let subitem of item.times) {
          result.push({
            episode: item.episode,
            title: (parseInt(item.episode) + 1) + '. ' + item.title,
            subtitle: subitem.subtitle,
            time: subitem.time,
            tags: subitem.tags.concat([item.episode + 1 + ""])
          })
        }
      }
    }

    return result
  }

  handleChange(e) {
    let value = e.target.value
    let that = this
    this.setState({
      keyword: value,
      results: this.fuse.search(value),
      displayEmptyMsg: false
    })
    this.tickId && clearTimeout(this.tickId)
    this.tickId = setTimeout(() => {
      that.setState({
        displayEmptyMsg: true
      })
      if (value) {
        let keyword = new (AV.Object.extend('ggtalk_search_keyword'))()
        keyword.set("keyword", value)
        keyword.save()
      }
    }, 1500)
  }

  share(e) {
    e.preventDefault()
    copyToClipboard(window.location.origin + window.location.pathname + "?q=" + this.state.keyword) && alert("此搜索页链接已复制！")
  }

  render() {
    if (this.state.loading) return (
      <div className='search'>
        <Container fluid>
          <Row>
            <NavBar />
          </Row>
          <Row>
            <Col className='screen'>
              <div className='title'>搜索节目</div>  
              <div className='intro'>手动添加标签，帮助你找到感兴趣的内容</div>
            </Col>
          </Row>
          <br />
          <Row>
            <Loading />
          </Row>
        </Container>
      </div>
    )

    return (
      <Container fluid className='search'>
        <Row>
          <NavBar />
        </Row>
        <Row>
          <Col className='screen'>
            <div className='title'>搜索节目</div>  
            <div className='intro'>纯手工添加标签，帮你找到感兴趣的内容</div>
          </Col>
        </Row>
        <Row className='desc first'>
          <Col className='center' xs={12} sm={10} md={8} lg={6}>
            <FormGroup>
              <Input value={this.state.keyword} onChange={this.handleChange} type="text" name="keyword" id="keyword" placeholder="请输入你感兴趣的话题/嘉宾/单集序号" />
            </FormGroup>
          </Col>
        </Row>
        <Row className='linksWrapper'>
          <Col className='center' xs={12} sm={10} md={8} lg={6}>
            <div className="links">
              <a key="btn" className='faq-link' href="/" onClick={this.share}>
                分享此搜索页
              </a>
            </div>
          </Col>
        </Row>
        <Row className='desc'>
          <Col className='center' xs={12} sm={10} md={8} lg={6}>
            {this.state.keyword && this.state.results.length === 0 && this.state.displayEmptyMsg && ("没有找到符合条件的内容")}
            {this.state.results.map(item => (
              <Row key={item.title + item.subtitle + item.time} className="search-result-wrapper">
                <Col xs={12} md={9} className="search-item-info">
                  <Row>
                    <Col xs={12} md={item.subtitle ? 4 : 12}>
                      <div className="search-title">《{item.title}》</div>
                    </Col>
                    <Col xs={12} md={4}>
                      {item.subtitle && (<div className="search-subtitle">{item.subtitle}</div>)}
                    </Col>
                    <Col xs={12} md={4}>
                      {item.time && (<div className="time">时间点：{item.time}</div>)}
                    </Col>
                  </Row> 
                </Col>
                <Col xs={12} md={3}>
                  {!item.time && (
                    <a target='_blank' rel="noopener noreferrer" href={`/${item.episode}`}>
                      <Button block outline color="success">收听本期</Button>
                    </a>
                  )}
                  {item.time && (
                    <a target='_blank' rel="noopener noreferrer" href={`/${item.episode}?startfrom=${this.timeToSeconds(item.time)}`}>
                      <Button block outline color="success">从时间点开始收听</Button>
                    </a>
                  )}
                </Col>
              </Row>
            ))}
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Search
