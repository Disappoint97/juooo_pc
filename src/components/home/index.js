import './index.css';
import React from 'react';
import { connect } from 'react-redux';
import { getTodoListThunkAction } from '../../store/action'
import { Row, Col, Divider } from 'antd';
const style = { background: '#0092ff', padding: '8px 0' };



class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    componentDidMount () {

    }

    render () {
        return <div>
<<<<<<< HEAD
            <span>kkkk</span>
=======
            <span>jjjjjj</span>
>>>>>>> f3ea4615c1158a2be3099eaf4047a23e1eabec1b
            <Divider orientation="left">Horizontal</Divider>
            <Row gutter={16} align='top'>
                <Col className="gutter-row" span={6}>
                    <div style={style}>col-6</div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div style={style}>col-6</div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div style={style}>col-6</div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div style={style}>col-6</div>
                </Col>
            </Row>
            <Divider orientation="left">Responsive</Divider>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={6}>
                    <div style={style}>col-6</div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div style={style}>col-6</div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div style={style}>col-6</div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div style={style}>col-6</div>
                </Col>
            </Row>
            <Divider orientation="left">Vertical</Divider>
            <Row gutter={[16, 24]}>
                <Col className="gutter-row" span={6}>
                    <div style={style}>col-6</div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div style={style}>col-6</div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div style={style}>col-6</div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div style={style}>col-6</div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div style={style}>col-6</div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div style={style}>col-6</div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div style={style}>col-6</div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div style={style}>col-6</div>
                </Col>
            </Row>
        </div >
    }
}



export default connect(state => ({ state }), { getTodoListThunkAction })(Home);