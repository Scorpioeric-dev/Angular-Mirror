import React, { Component } from "react";
import { Row, Col, PageHeader } from "antd";

export default class display extends Component {
  render() {
    console.log(this.props.employee.photoPath);
    return (
      <div className="main">
        <Row className="row">
          <Col span={8}>
            <img
              className="images"
              src={this.props.employee.photoPath}
              alt=""
            />
          </Col>
          <PageHeader
            className="panel-title"
            title={this.props.employee.name}
          />
          <Col span={8} className='ant-col ant-col-8 container'>
            <h3>Gender: {this.props.employee.gender}</h3>
            <h3>Contact Preference: {this.props.employee.email}</h3>
            <h3>Email: {this.props.employee.email}</h3>
            <h3>Date Of Birth: {this.props.employee.dateOfBirth}</h3>
            <h3>Department: {this.props.employee.department}</h3>
            <h3>Is Active: {this.props.employee.isActive}</h3>
          </Col>
        </Row>
      </div>
    );
  }
}
