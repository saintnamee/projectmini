import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {MDBNavbar,MDBNavbarBrand,MDBNavbarNav,MDBNavItem,MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBMask, MDBRow, MDBCol, MDBFormInline, MDBBtn,
MDBView,MDBContainer} from 'mdbreact';
import './Paral.css';

class Paral extends React.Component {
  state = {
    collapsed: false
  };

  handleTogglerClick = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  componentDidMount() {
    document.querySelector('nav').style.height = '65px';
  }
  componentWillUnmount() {
    document.querySelector('nav').style.height = 'auto';
  }
  render() {
    const navStyle = { marginTop: '4rem' };
    const overlay = (
      <div
        id='sidenav-overlay'
        style={{ backgroundColor: 'transparent' }}
        onClick={this.handleTogglerClick}
      />
    );

    const { collapsed } = this.state;
    return (
      <div id='parallaxintro'>
        <Router>
          <div>
            <MDBNavbar
              color='primary-color'
              style={navStyle}
              dark
              expand='md'
              fixed='top'
              scrolling
              transparent
            >
              <MDBContainer>
                <MDBNavbarBrand>
                  <MDBNavLink to='https://www.greenpeace.org/thailand/explore/protect/cleanair/pm25-harm/'>
                    <strong className='white-text'>PM 2.5</strong>
                  </MDBNavLink>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={this.handleTogglerClick} />
                <MDBCollapse isOpen={collapsed} navbar>
                  <MDBNavbarNav left>
                    <MDBNavItem>
                      <MDBNavLink to='https://www.iqair.com/th-en/'>AQ Air</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to='#'>About</MDBNavLink>
                    </MDBNavItem>
                  </MDBNavbarNav>
                  <MDBNavbarNav right>
                    <MDBNavItem>
                      <MDBFormInline waves>
                        <div className='md-form my-0'>
                          <input
                            className='form-control mr-sm-2'
                            type='text'
                            placeholder='Search'
                            aria-label='Search'
                          />
                        </div>
                      </MDBFormInline>
                    </MDBNavItem>
                  </MDBNavbarNav>
                </MDBCollapse>
              </MDBContainer>
            </MDBNavbar>
            {collapsed && overlay}
          </div>
        </Router>
        <MDBView
          src={'https://mdbootstrap.com/img/Photos/Others/images/76.jpg'}
          fixed
        >
          <MDBMask className='rgba-white-light' />
          <MDBContainer
            className='d-flex justify-content-center align-items-center'
            style={{ height: '100%', width: '100%', paddingTop: '15rem' }}
          >
            <MDBRow>
              <MDBCol md='12' className='mb-4 white-text text-center'>
                <h1 className='display-3 mb-0 pt-md-5 pt-5 white-text font-weight-bold'>
                  PM 2.5 
                  <span className='indigo-text font-weight-bold'> & Wearther </span>
                </h1>
                <hr className='hr-light my-4' />
                <h3 className='text-uppercase pt-md-5 pt-sm-2 pt-5 pb-md-5 pb-sm-3 pb-5 white-text font-weight-bold'>
                    ข้อควรรู้เกี่ยวกับ ฝุ่น PM 2.5
                </h3>
                {/* <MDBBtn
                  className='btn-indigo'
                  size='lg'
                  href='https://mdbootstrap.com/docs/react/css/parallax/'
                  target='_blank'
                >
                  
                </MDBBtn> */}
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBView>
        <main>
          <MDBContainer>
            <MDBRow className='py-5'>
              <MDBCol md='12' className='text-center'>
                <p>
                PM ย่อมาจาก Particulate Matter หรืออนุภาคใดๆ ที่มีขนาดเล็กกว่า 2.5 ไมโครเมตร (ไมครอน) ซึ่งขนจมูกไม่ดักจับได้ โดยเป็นสารแขวนลอยที่ฟุ้งกระจายในชั้นบรรยากาศ 
                อาจอยู่ในสภาพของเหลวหรือของแข็งขนาดเล็ก เช่น อนุภาคต่างๆ เชื้อโรค หรือฝุ่นละออง จนทำให้เรามองเห็นในภาพกว้างเป็นลักษณะคล้ายหมอกหรือควัน
                </p>

              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </main>
      </div>
    );
  }
}

export default Paral;