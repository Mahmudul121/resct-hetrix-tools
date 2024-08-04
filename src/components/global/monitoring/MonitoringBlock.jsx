import React from "react";
import "./monitoring.scss";
import { Col, Row } from "react-bootstrap";
import MonitItem from "./MonitItem";

const MonitoringBlock = () => {
  return (
    <div className="home-block">
      <h2 className="hh-2">Monitor Details</h2>
      <hr style={{ backgroundColor: "#E8E9FF" }} />
      <Row>
        <Col md={6}>
          <div className="monit-block">
            <div>
              <div>
                <p className="pp-2 mb-2">Monitored Since:</p>
                <h2 className="hh-2">1st of March 2023</h2>
              </div>
              <div className="mt-3">
                <p className="pp-2 mb-2">Last Overall Check:</p>
                <h2 className="hh-2 round-block">19sec ago</h2>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-6">
                <div>
                  <p className="pp-2 mb-2">Monitor frequency:</p>
                  <h2 className="hh-2">1 min</h2>
                </div>
              </div>
              <div className="col-6">
                <div>
                  <p className="pp-2 mb-2">Timeout limit:</p>
                  <h2 className="hh-2">5 min</h2>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col md={6}>
          <div className="monit-right-block">
            <MonitItem
              title={"Last 24 hours uptime:"}
              value={"100.0000%"}
              value2={"(100.0000%)"}
            />
            <MonitItem
              title={"Last 24 hours uptime:"}
              value={"100.0000%"}
              value2={"(100.0000%)"}
            />
            <MonitItem
              title={"Last 24 hours uptime:"}
              value={"100.0000%"}
              value2={"(100.0000%)"}
            />
            <MonitItem
              title={"Last 24 hours uptime:"}
              value={"100.0000%"}
              value2={"(100.0000%)"}
            />
            <MonitItem
              title={"Last 24 hours uptime:"}
              value={"100.0000%"}
              value2={"(100.0000%)"}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default MonitoringBlock;
