import React, { Component } from 'react';
import 'mediaelement';

// Import stylesheet and shims
import 'mediaelement/build/mediaelementplayer.min.css';
import 'mediaelement/build/mediaelement-flash-video.swf';

export default class MediaElement extends Component {
  render() {
    const props = this.props

    const
      mediaBody = props.source,
      mediaHtml = `<audio id="${props.id}" width="${props.width}" controls src="${mediaBody}" />` ;

    return (<div dangerouslySetInnerHTML={{__html: mediaHtml}}></div>);

  }

  componentDidMount() {

    const {MediaElementPlayer} = global;
    if (!MediaElementPlayer) {
      return;
    }


    this.player = new MediaElementPlayer(this.props.id)
    console.log(this.player)
  }

  componentWillUnmount() {
    if (this.player) {
      this.player.remove();
      this.player = null
    }
  }
}