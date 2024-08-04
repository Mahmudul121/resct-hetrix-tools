import { Col, Row } from "react-bootstrap";
import "./App.scss";
import Layout from "./components/layout/Layout";
import HomeTop from "./components/global/homeTop/HomeTop";
import Uptime from "./components/global/uptimeBlock/Uptime";
import MonitoringBlock from "./components/global/monitoring/MonitoringBlock";
import ServerInfo from "./components/global/serverInfo/ServerInfo";

const App = () => {
  return (
    <div className="app-wrapper">
      <Layout>
        <h1 className="hh-1 my-3">Storage - NONLINE (Recent History)</h1>
        <div className="home-block">
          <Row>
            <Col md={3}>
              <HomeTop
                title={"Online"}
                subTitile={"Since 14w 2d ago"}
                color={"#A6F7E2"}
                icon={"./assets/top_icon_1.svg"}
              />
            </Col>
            <Col md={3}>
              <HomeTop
                title={"99.6798%"}
                subTitile={"Overall Uptime"}
                color={"#B79BFF"}
                icon={"./assets/top_icon_2.svg"}
              />
            </Col>
            <Col md={3}>
              <HomeTop
                title={"Debian"}
                subTitile={"Operating system"}
                color={"#FFE5A5"}
                icon={"./assets/top_icon_3.svg"}
              />
            </Col>
            <Col md={3}>
              <HomeTop
                title={"Heartbeat"}
                subTitile={"Monitor"}
                color={"#C7FFA5"}
                icon={"./assets/top_icon_4.svg"}
              />
            </Col>
          </Row>
        </div>
        {/* 3rd */}
        <Uptime />
        {/* 3rd */}
        <MonitoringBlock />
        {/* 4th */}
        <ServerInfo />

        {/* 5th */}
        <h2>CPU Usage</h2>
        <ul>
          <li>1</li>
          <li>1</li>
          <li>1</li>
        </ul>
        <div>
          <div>
            <label>asd</label>
            <h4>asd</h4>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default App;
