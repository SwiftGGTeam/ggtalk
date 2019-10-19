import React, { Component } from 'react'
import 'mediaelement'

// Import stylesheet and shims
import 'mediaelement/build/mediaelementplayer.min.css'
import 'mediaelement/build/mediaelement-flash-video.swf'
import './speed/speed.js'
import './speed/speed-i18n.js'
import './speed/speed.css'

export default class MediaElement extends Component {
  render() {
    const props = this.props

    const
      mediaBody = props.source,
      mediaHtml = `<audio id="${props.id}" width="${props.width}" controls src="${mediaBody}" />`

    return (<div dangerouslySetInnerHTML={{__html: mediaHtml}}></div>)

  }

  componentDidMount() {

    const {MediaElementPlayer} = global;
    if (!MediaElementPlayer) {
      return
    }

    this.player = new MediaElementPlayer(this.props.id, {
      defaultSpeed: "1.00",
      features: ["playpause", "current", "progress", "duration", "tracks", "speed"]
    })
    let storedTime = localStorage.getItem(this.props.source)
    if (this.props.startfrom) {
      this.player.setCurrentTime(this.props.startfrom)
    } else if (storedTime) {
      this.player.setCurrentTime(storedTime)
    }

    this.tickId = setInterval(() => {
      localStorage.setItem(this.props.source, this.player.getCurrentTime())
    }, 1000)
  }

  componentWillUnmount() {
    if (this.player) {
      this.player.remove()
      this.player = null
    }
    if (this.tickId) clearInterval(this.tickId)
  }
}