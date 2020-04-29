import React from "react";
import {  MDBRow, MDBCol, MDBIcon,} from "mdbreact";

const Page = () => {
  return (
    <section className="my-5">
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          PM 2.5
        </h2>

        <MDBRow>
          <MDBCol lg="5" className="mb-lg-0 mb-5">
            <img
              src="https://ngthai.com/app/uploads/2019/02/%E0%B8%9D%E0%B8%B8%E0%B9%88%E0%B8%99-2.5.jpg"
              alt=""
              className="img-fluid rounded z-depth-1"
            />
          </MDBCol>
          <MDBCol lg="7">
            <MDBRow className="mb-3">
              <MDBCol md="1" size="2">
                <MDBIcon far icon="chart-bar" size="2x" className="indigo-text" />
              </MDBCol>
              <MDBCol md="11" size="10">
                <h5 className="font-weight-bold mb-3">ค่าเฉลี่ย</h5>
                <p className="grey-text">
                AQI ของ PM 2.5 องค์การอนามัยโลก (WHO) ได้กำหนดไว้ที่ 25 μg/m3  สำหรับค่าเฉลี่ย 24 ชั่วโมง และ 10 μg/m3 
                สำหรับค่าเฉลี่ยต่อปี ขณะที่ประเทศไทยกำหนดมาตรฐานไว้ที่ 50 μg/m3  ในค่าเฉลี่ย 24 ชั่วโมง และ 25 μg/m3 ในค่าเฉลี่ยต่อปี 
                ซึ่งสูงกว่า WHO ถึงกว่า 2 เท่า
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol md="1" size="2">
                <MDBIcon icon="car" size="2x" className="pink-text" />
              </MDBCol>
              <MDBCol md="11" size="10">
                <h5 className="font-weight-bold mb-3">ฝุ่น pm 2.5 มาจาก</h5>
                <p className="grey-text">
                ฝุ่น PM 2.5 ส่วนใหญ่มักเกิดจากการเผาไหม้ที่ไม่สมบูรณ์ เช่น การเผาไหม้จากเครื่องยนต์ดีเซล โรงงานอุตสาหกรรม การเผาไหม้ในที่โล่งของการเกษตร
                การคมนาคมขนส่ง ไอเสียจากรถยนต์ ฝุ่น ควันดำ รวมถึงภัยธรรมชาติอย่างไฟป่าและภูเขาไฟระเบิด ในเวลาปกติชั้นบรรยากาศจะไล่อุณหภูมิความร้อนบริเวณพื้นดินขึ้นไปสู่ชั้นบรรยากาศด้านบน 
                ทำให้ฝุ่นต่างๆ ลอยขึ้นสูงและถูกกระแสลมพัดออกไปในที่สุด</p>
                <p className="grey-text"> แต่ในฤดูหนาวอุณหภูมิที่พื้นดินมักเย็นกว่าชั้นบรรยากาศด้านบน ทำให้ชั้นบรรยากาศเป็นแนวผกผัน (Inversion Layer) 
                จึงเปรียบเหมือนโดมครอบพื้นที่ไว้ ทำให้ฝุ่นละอองไม่สามารถขึ้นสูงด้านบนได้ และสะสมจนกลายเป็นฝุ่นควันฟุ้งกระจายทั่วเมืองในที่สุด
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol md="1" size="2">
                <MDBIcon far icon="smile" size="2x" className="blue-text" />
              </MDBCol>
              <MDBCol md="11" size="10">
                <h5 className="font-weight-bold mb-3">ปรากฏการณ์</h5>
                <p className="grey-text">
                สภาวะของปรากฏการณ์อุณหภูมิผกผันทำให้ควันและฝุ่นละอองต่างๆ ลอยขึ้นสู่ชั้นบรรยากาศ
                แต่ช่วงเวลากลางคืน อุณหภูมิเหนือพื้นดินจะมีความเย็นกว่าอากาศข้างบน เนื่องจากมีการคายความร้อนของพื้นผิวโลก 
                จึงทำให้เกิดปรากฏการณ์อุณหภูมิผกผันขึ้น
                </p>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
        {/* <hr className="my-5" />
        <MDBRow>
          <MDBCol lg="7">
            <MDBRow className="mb-3">
              <MDBCol md="1" size="2">
                <MDBIcon icon="book" size="2x" className="cyan-text" />
              </MDBCol>
              <MDBCol md="11" size="10">
                <h5 className="font-weight-bold mb-3">Education</h5>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing.
                  Reprehenderit maiores nam, aperiam minima elit assumenda
                  voluptate velit.
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol md="1" size="2">
                <MDBIcon icon="code" size="2x" className="red-text" />
              </MDBCol>
              <MDBCol md="11" size="10">
                <h5 className="font-weight-bold mb-3">Technology</h5>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing.
                  Reprehenderit maiores nam, aperiam minima elit assumenda
                  voluptate velit.
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol md="1" size="2">
                <MDBIcon far icon="money-bill-alt" size="2x" className="deep-purple-text" />
              </MDBCol>
              <MDBCol md="11" size="10">
                <h5 className="font-weight-bold mb-3">Finance</h5>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing.
                  Reprehenderit maiores nam, aperiam minima elit assumenda
                  voluptate velit.
                </p>
              </MDBCol>
            </MDBRow>
          </MDBCol>
          <MDBCol lg="5">
            <img
              src="https://mdbootstrap.com/img/Photos/Others/images/82.jpg"
              alt=""
              className="img-fluid rounded z-depth-1"
            />
          </MDBCol> */}
        {/* </MDBRow> */}
      </section>
  );
}

export default Page;