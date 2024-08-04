import React from "react";
import "./serverInfo.scss";
import { Col, Row } from "react-bootstrap";
import ItemTitleBlock from "../ItemTitleBlock";
import ListItemShow from "./ListItemShow";

const ServerInfo = () => {
  return (
    <div className="home-block">
      <h2 className="hh-2">Monitor Details</h2>
      <hr style={{ backgroundColor: "#E8E9FF" }} />
      <Row>
        <Col md={6}>
          <div className="server-left-block">
            <div>
              <ItemTitleBlock
                title={"CPU Model"}
                subTitle={"Intel Xeon E5-2680 v2 @ 2.80GHz (12,626)"}
              />
              <div className="row mt-3">
                <div className="col-6">
                  <ItemTitleBlock title={"CPU Speed"} subTitle={"3100MHz"} />
                </div>
                <div className="col-6">
                  <ItemTitleBlock title={"Cores"} subTitle={"40"} />
                </div>
              </div>
            </div>
            <div className="mt-4">
              <ItemTitleBlock
                title={"Operating System"}
                subTitle={"Debian GNU/Linux 10 (buster)"}
              />
            </div>
          </div>
        </Col>
        <Col md={6}>
          <div className="server-info-right">
            <ListItemShow
              title={"Total Disk"}
              value={"45.03TiB"}
              color="#2C2C2C"
              textColor="#FFFFFF"
            />
            <div className="row">
              <div className="col-6">
                <ListItemShow
                  title={"RAM"}
                  value={"125.87GiB"}
                  color="#C7FFA5"
                  textColor="#2C2C2C"
                />
              </div>
              <div className="col-6">
                <ListItemShow
                  title={"Swap"}
                  value={"15.26GiB"}
                  color="#2C2C2C"
                  textColor="#FFFFFF"
                />
              </div>
            </div>
            <ListItemShow
              title={"System Uptime"}
              value={"374d 7hr 18min"}
              color="#6425FE"
              textColor="#FFFFFF"
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ServerInfo;
