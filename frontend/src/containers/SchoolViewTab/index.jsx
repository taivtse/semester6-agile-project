import React, { Component } from 'react';

export default class SchoolViewTab extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'green',
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!4v1561205947535!6m8!1m7!1sCAoSLEFGMVFpcE1OYTIydTdMX2p2MlJJM2R4ak04ODRmWVo2NVkxejRTVms1Y1B1!2m2!1d10.7903916!2d106.6818794!3f291.65560380029984!4f-10.642068500544369!5f0.7820865974627469"
          title="school view"
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
          }}
        />
      </div>
    );
  }
}
