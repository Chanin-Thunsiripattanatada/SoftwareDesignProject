import React from 'react';

const WarrantyConditions = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center">เงื่อนไขการรับประกัน</h2>
      <hr />
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">1. ระยะเวลาการรับประกัน</h5>
              <p className="card-text">
                สินค้าทุกชิ้นมีระยะเวลาการรับประกันตามที่ระบุในรายละเอียดสินค้า โดยทั่วไปจะอยู่ระหว่าง 1 ถึง 3 ปี ขึ้นอยู่กับประเภทของสินค้าและผู้ผลิต
              </p>

              <h5 className="card-title">2. การรับประกัน</h5>
              <p className="card-text">
                การรับประกันครอบคลุมข้อบกพร่องจากการผลิตและวัสดุที่ใช้ในการผลิต แต่ไม่รวมถึงความเสียหายที่เกิดจากการใช้งานผิดวิธีหรืออุบัติเหตุ
              </p>

              <h5 className="card-title">3. วิธีการเคลมรับประกัน</h5>
              <p className="card-text">
                ลูกค้าต้องแสดงใบเสร็จหรือหลักฐานการซื้อสินค้าร่วมกับสินค้าเมื่อทำการเคลม สินค้าที่ส่งคืนต้องอยู่ในสภาพเดิม ไม่เสียหาย และมีบรรจุภัณฑ์ครบถ้วน
              </p>

              <h5 className="card-title">4. ข้อยกเว้นการรับประกัน</h5>
              <p className="card-text">
                สินค้าที่เสียหายจากอุบัติเหตุ น้ำ ความชื้น ความร้อน หรือการใช้งานไม่ถูกต้อง และสินค้าที่มีการดัดแปลงหรือซ่อมแซมโดยบุคคลภายนอกที่ไม่ได้รับอนุญาต
              </p>

              <h5 className="card-title">5. ค่าธรรมเนียมการส่งคืน</h5>
              <p className="card-text">
                ลูกค้าอาจต้องรับผิดชอบค่าจัดส่งในการส่งสินค้ากลับเพื่อเคลมรับประกัน โดยกรณีนี้จะขึ้นอยู่กับนโยบายของผู้ผลิตหรือผู้จำหน่าย
              </p>

              <h5 className="card-title">6. ระยะเวลาในการดำเนินการเคลม</h5>
              <p className="card-text">
                ระยะเวลาในการดำเนินการเคลมรับประกันอาจใช้เวลาตั้งแต่ 7 ถึง 30 วัน ขึ้นอยู่กับประเภทของสินค้าและขั้นตอนการตรวจสอบ
              </p>

              <p className="card-text">
                <strong>หมายเหตุ:</strong> เงื่อนไขการรับประกันอาจแตกต่างกันไปตามประเภทของสินค้าและนโยบายของผู้ผลิต กรุณาตรวจสอบรายละเอียดการรับประกันของสินค้าแต่ละชิ้นก่อนทำการซื้อ
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WarrantyConditions;