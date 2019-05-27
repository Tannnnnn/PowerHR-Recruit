import Images from '../static/vendor/Images/ImageDataUrl'
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { ref , firebase } from '../firebase/index'

pdfMake.vfs = pdfFonts.pdfMake.vfs;
pdfMake.fonts = {
    Kanit: {
      normal: 'Kanit-Light.ttf',
      bold: 'Kanit-Bold.ttf',
      italics: 'Kanit-Italic.ttf',
      bolditalics: 'Kanit-BoldItalic.ttf'
    },
    Roboto: {
      normal: 'Roboto-Regular.ttf',
      bold: 'Roboto-Medium.ttf',
      italics: 'Roboto-Italic.ttf',
      bolditalics: 'Roboto-MediumItalic.ttf'
    },
    THSarabunNew: {
        normal: 'THSarabunNew.ttf',
        bold: 'THSarabunNew-Bold.ttf',
        italics: 'THSarabunNew-Italic.ttf',
        bolditalics: 'THSarabunNew-BoldItalic.ttf'
    }
}

const setTimeLocal = (localTime) =>{     
    if (localTime !== undefined) {
        const dateTime = localTime.split('-')           
        const years = parseInt(dateTime[0])
        const month = parseInt(dateTime[1]) 
        const days  = parseInt(dateTime[2])                  
        let localDate = new Date(Date.UTC(years , month-1 , days));
        let options = { year: 'numeric', month: 'long', day: 'numeric' };
        return localDate.toLocaleDateString('th-TH', options)
    }
    else{
        return '-'
    }
}

export const PDF_GENERATOR = (resume , props) => {        
    //set Data Status For PDF
    let married_fname = '-'
    let married_lname = '-'
    let married_child = '-'
    let married_company = '-'
    if (resume.status === 'สมรส') {
        married_fname = resume.status_married_fname
        married_lname = resume.status_married_lname
        married_child = resume.status_married_child
        married_company = resume.status_married_company
    }
    
    //Date Now
    let today = new Date()
    let days = today.getDate()
    let month = today.getMonth()
    let years = today.getFullYear()
    let localDate = new Date(Date.UTC(years , month , days));
    let options = { year: 'numeric', month: 'long', day: 'numeric' };

    //Create PDF
    var docDefinition = {
        info: {
            title: `Cupcode Recruitment :  ${props.detail.position_name}`,
            author: ` ${props.detail.position_name}`,
            subject: `Recruitment  ${props.detail.position_name}`,
            keywords: 'Cupcode Recruitment',
        },
        content: [
            {
                image : `${Images.Cupcode}`,
                width: 110,
                height: 50,
                margin: [-30, -35 , 0 , 0],
            },
            {
                text : 'บริษัท คัพโค้ด จำกัด (สำนักงานใหญ่)',
                margin: [ 90, -45 , 0 , 0],
                style: 'header'
            },
            {
                text : 'ทาวน์อินทาวน์ ซอย 11 แขวง พลับพลา เขต วังทองหลาง กรุงเทพมหานคร 10312',
                margin: [ 90 ,  0 , 0 , 0],
                style: 'header'
            },
            {
                text : 'ติดต่อสอบถาม : oraphan@cupcodeteam.com',
                margin: [ 90 ,  0 , 0 , 0],
                style: 'header'
            },
            {
                canvas: [
                    { 
                        type: 'line', 
                        x1: -20, 
                        y1: 9, 
                        x2: 595-2*30, 
                        y2: 9, 
                        lineWidth: 1 ,
                        lineColor  : '#363636'
                    }
                ]
            },
            {
                text : 'ใบสมัครงาน',
                margin: [ 0 , 15 , 0 , 0],
                fontSize: 18,
                alignment: 'center'
            },
            {
                text : `ตำแหน่งงานที่สมัคร.......... ${props.detail.position_name}.......... เงินเดือนที่ต้องการ..........${props.salary}..........บาท`,
                margin: [ -20 , 15 , 0 , 0],
                fontSize: 12,
            },
            {
                image : `${resume.imageBase64}`,
                width: 85,
                height: 100,
                margin: [ 450 , -53 , 0 , 0 ],
            },
            {
                text : `ประวัติส่วนตัว / การศึกษา`,
                margin: [ -20 , -30 , 0 , 0],
                fontSize: 12,
                color : '#ff5722'
            },
            {
                text : `1.  ชื่อ (ภาษาไทย)........${resume.firstname} ${resume.lastname}........  เพศ........${resume.sex}........`,
                margin: [ -10 , 5 , 0 , 0],
                style : 'content'
            }, 
            {
                text : `รหัสบัตรประชาชน..........${resume.idcard}..........  อีเมล..........${resume.email}..........  Facebook..........${resume.facebook}..........`,
                margin: [ 3 , 5 , 0 , 0],
                style : 'content'
            },
            {
                text : `2.  วัน/เดือน/ปีเกิด........${setTimeLocal(resume.birthday)}........  อายุ........${resume.age}........ปี  น้ำหนัก........${resume.weight}........กก.  ส่วนสูง........${resume.height}........ซม.`,
                margin: [ -10 , 10 , 0 , 0],
                style : 'content'
            },
            {
                text : `เชื้อชาติ........${resume.ethnicity}........  สัญชาติ........${resume.nationality}........  ศาสนา........${resume.religion}........`,
                margin: [ 4 , 5 , 0 , 0],
                style : 'content'
            },
            {
                text : `3.  ที่อยู่ตามทะเบียนบ้าน  เลขที่........${resume.primary_hno}........  หมู่ที่........${resume.primary_vilno}........  ซอย........${resume.primary_alley}........  ถนน........${resume.primary_road}........`,
                margin: [ -10 , 10 , 0 , 0],
                style : 'content'
            },
            {
                text : `ตำบล/แขวง........${resume.primary_area}........  อำเภอ/เขต........${resume.primary_district}........  จังหวัด........${resume.primary_province}........  รหัสไปรษณีย์........${resume.primary_zipcode}........  \nโทรศัพท์บ้าน........${resume.primary_tel}........  มือถือ........${resume.primary_phone}........`,
                margin: [ 4 , 0 , 0 , 0],
                style : 'content'
            },
            {
                text : `ที่อยู่ปัจจุบันที่ติดต่อได้  เลขที่........${resume.present_hno}........  หมู่ที่........${resume.present_vilno}........  ซอย........${resume.present_alley}........  ถนน........${resume.present_road}........`,
                margin: [ 4 , 5 , 0 , 0],
                style : 'content'
            },
            {
                text : `ตำบล/แขวง........${resume.present_area}........  อำเภอ/เขต........${resume.present_district}........  จังหวัด........${resume.present_province}........  รหัสไปรษณีย์........${resume.present_zipcode}........\nโทรศัพท์บ้าน........${resume.present_tel}........  มือถือ........${resume.present_phone}........`,
                margin: [ 4 , 0 , 0 , 0],
                style : 'content'
            },
            {
                text : `4.  ชื่อบิดา........${resume.dad_name}........  อาชีพ........${resume.dad_career}........  ชื่อมารดา........${resume.mom_name}........  อาชีพ........${resume.mom_career}........`,
                margin: [ -10 , 10 , 0 , 0],
                style : 'content'
            },
            {
                text : `จำนวนพี่น้อง........${resume.brethren}........คน  คุณเป็นลูกคนที่........${resume.sequence}........`,
                margin: [ 4 , 5 , 0 , 0],
                style : 'content'
            },
            {
                text : `5.  สภานภาพการสมรส........${resume.status}........  ชื่อคู่สมรส........${married_fname}........  นามสกุลเดิม........${married_lname}........  จำนวนบุตร........${married_child}........คน`,
                margin: [ -10 , 10 , 0 , 0],
                style : 'content'
            },
            {
                text : `สถานที่ทำงาน(คู่สมรส)..........${married_company}..........`,
                margin: [ 4 , 5 , 0 , 0],
                style : 'content'
            },
            {
                text : `6.  พันธะเกี่ยวกับการรับราชการทหาร..........${resume.soldier}..........`,
                margin: [ -10 , 10 , 0 , 0],
                style : 'content'
            },
            {
                text : `7.  ประวัติการศึกษา`,
                margin: [ -10 , 10 , 0 , 0],
                style : 'content'
            },
            {
                table: {
                    widths: [ 90 , '*' , 60 , 40 , '*' , 65 ],
                    body: [
                        [{text : 'ระดับการศึกษา' , alignment: 'center'}, {text : 'ชื่อสถานศึกษา' , alignment: 'center'} , {text : 'ประเทศ' , alignment: 'center'} , {text : 'เกรดเฉลี่ย' , alignment: 'center'} , {text :  'สาขาวิชา' , alignment: 'center'} , {text : 'ปีที่สำเร็จการศึกษา' , alignment: 'center'}],
                        ['มัธยมศึกษาตอนปลาย/ปวช.' , `${resume.highSchool_name}` , `${resume.highSchool_country}` , `${resume.highSchool_grade}` , `${resume.highSchool_major}` , `${resume.highSchool_congrate}`],
                        ['ปวส./ปวท./อนุปริญญา' , `${resume.diplomaSchool_name}` , `${resume.diplomaSchool_country}` , `${resume.diplomaSchool_grade}` , `${resume.diplomaSchool_major}` , `${resume.diplomaSchool_congrate}`],
                        ['ปริญญาตรี' , `${resume.bechelorSchool_name}` , `${resume.bechelorSchool_country}` , `${resume.bechelorSchool_grade}` , `${resume.bechelorSchool_major}` , `${resume.bechelorSchool_congrate}`],
                        ['อื่นๆ' , `${resume.otherSchool_name}` , `${resume.otherSchool_country}` , `${resume.otherSchool_grade}` , `${resume.otherSchool_major}` , `${resume.otherSchool_congrate}`]
                    ],
                },
                margin: [ -10 , 10 , 0 , 0],
                fontSize: 8,
            },
            {
                text : `8.  โรคประจำตัว..........${(resume.congenitalDisease === 'มี') ? '' : 'ไม่มี'}${resume.congenitalDisease_name}..........`,
                margin: [ -10 , 10 , 0 , 0],
                style : 'content'
            },
            {
                text : `9.  บุคคลที่ติดต่อกรณีเร่งด่วน..........${resume.urgent_contact}..........  ความสัมพันธ์..........${resume.urgent_relation}..........  โทรศัพท์..........${resume.urgent_phone}..........`,
                margin: [ -10 , 10 , 0 , 0],
                style : 'content'
            },
            {
                text : `10. ทราบการรับสมัครจากช่องทางใด..........${resume.urgent_apply}..........`,
                margin: [ -10 , 10 , 0 , 0],
                style : 'content'
            },
            {
                text : `11.  แจ้งชื่อผู้ที่จะอ้างอิงหรือสอบถามได้ ซึ่งมิใช่ญาติ หรืออดีตผู้ว่าจ้าง`,
                margin: [ -10 , 10 , 0 , 0],
                style : 'content'
            },
            {
                text : `ชื่อ - นามสกุล..........${resume.refer_name}..........  อาชีพ..........${resume.refer_career}..........  โทรศัพท์..........${resume.refer_phone}..........`,
                margin: [ 4 , 5 , 0 , 0],
                style : 'content'
            },
            {
                text : `ที่อยู่..........${resume.refer_address}..........`,
                margin: [ 4 , 5 , 0 , 0],
                style : 'content',
                pageBreak: 'after'

            },

            // PDF PAGE 2
            {
                image : `${Images.Cupcode}`,
                width: 110,
                height: 50,
                margin: [-30, -35 , 0 , 0],
            },
            {
                text : 'บริษัท คัพโค้ด จำกัด (สำนักงานใหญ่)',
                margin: [ 90, -45 , 0 , 0],
                style: 'header'
            },
            {
                text : 'ทาวน์อินทาวน์ ซอย 11 แขวง พลับพลา เขต วังทองหลาง กรุงเทพมหานคร 10312',
                margin: [ 90 ,  0 , 0 , 0],
                style: 'header'
            },
            {
                text : 'ติดต่อสอบถาม : oraphan@cupcodeteam.com',
                margin: [ 90 ,  0 , 0 , 0],
                style: 'header'
            },
            {
                canvas: [
                    { 
                        type: 'line', 
                        x1: -20, 
                        y1: 9, 
                        x2: 595-2*30, 
                        y2: 9, 
                        lineWidth: 1 ,
                        lineColor  : '#363636'
                    }
                ]
            },
            {
                text : `ประวัติการทำงาน`,
                margin: [ -20 , 20 , 0 , 0],
                fontSize: 12,
                color : '#ff5722'
            },
            {
                text : `12. ประสบการณ์การทำงาน เรียงลำดับจากปัจจุบันถึงอดีต`,
                margin: [ -10 , 5 , 0 , 0],
                style : 'content'
            },
            {
                text : `1 บริษัทที่ทำงานในปัจจุบัน..........${resume.current_work}..........  ตำแหน่ง..........${resume.current_position}..........`,
                margin: [ 5 , 5 , 0 , 0],
                style : 'content'
            },
            {
                text : `ลักษณะงานที่รับผิดชอบ`,
                margin: [ 14 , 0 , 0 , 0],
                style : 'content'
            },
            {
                text : `${resume.current_description}`,
                margin: [ 30 , 0 , 0 , 0],
                style : 'content'
            },
            {
                text : `ระยะเวลาตั้งแต่..........${setTimeLocal(resume.current_startwork)}..........ถึง..........${setTimeLocal(resume.current_endwork)}..........  เงินเดือนสุดท้ายที่ได้รับ..........${resume.current_final_salary}..........`,
                margin: [ 14 , 0 , 0 , 0],
                style : 'content'
            },
            {
                text : `รายได้อื่นๆจากบริษัทนอกเหนือจากเงินเดือนพื้นฐาน..........${resume.current_other_income}..........  รวมรายได้สุทธิต่อเดือน..........${resume.current_net_income}..........`,
                margin: [ 14 , 0 , 0 , 0],
                style : 'content'
            },
            {
                text : `สวัสดิการอื่นๆของบริษัท..........${resume.current_welfare}..........  สาเหตุที่ลาออก..........${resume.current_resign}..........`,
                margin: [ 14 , 0 , 0 , 0],
                style : 'content'
            },
            {
                text : `2 บริษัท..........${resume.old_work}..........  ตำแหน่ง..........${resume.old_position}..........  เงินเดือนสุดท้ายที่ได้รับ..........${resume.old_final_salary}..........`,
                margin: [ 5 , 5 , 0 , 0],
                style : 'content'
            },
            {
                text : `ระยะเวลาตั้งแต่..........${setTimeLocal(resume.old_startwork)}..........  ถึง..........${setTimeLocal(resume.old_endwork)}..........\nสาเหตุที่ลาออก..........${resume.old_resign}..........`,
                margin: [ 14 , 0 , 0 , 0],
                style : 'content'
            },
            {
                text : `3 บริษัท..........${resume.older_work}..........  ตำแหน่ง..........${resume.older_position}..........  เงินเดือนสุดท้ายที่ได้รับ..........${resume.older_final_salary}..........`,
                margin: [ 5 , 5 , 0 , 0],
                style : 'content'
            },
            {
                text : `ระยะเวลาตั้งแต่..........${setTimeLocal(resume.older_startwork)}..........ถึง..........${setTimeLocal(resume.older_endwork)}..........\nสาเหตุที่ลาออก..........${resume.older_resign}..........`,
                margin: [ 14 , 0 , 0 , 0],
                style : 'content'
            },
            {
                text : `13. ความสามารถพิเศษ`,
                margin: [ -10 , 5 , 0 , 0],
                style : 'content'
            },
            {
                text : `1. ความรู้ด้านภาษาอังกฤษ  `,
                margin: [ 5 , 0 , 0 , 0],
                style : 'content'
            },
            {
                text : `ฟัง..........${resume.english}..........  พูด..........${resume.english_speak}..........  อ่าน..........${resume.english_read}..........  เขียน..........${resume.english_writh}..........`,
                margin: [ 15 , 0 , 0 , 0],
                style : 'content'
            },
            {
                text : `2. พิมพ์ดีดภาษาไทย..........${resume.thaiprint}..........คำ/นาที    พิมพ์ดีดภาษาอังกฤษ..........${resume.engprint}..........คำ/นาที`,
                margin: [ 5 , 0 , 0 , 0],
                style : 'content'
            },
            {
                text : `3. ความสามารถด้านการขับรถ  `,
                margin: [ 5 , 0 , 0 , 0],
                style : 'content'
            },
            {
                text : `ใบอนุญาติขับขี่รถจักรยายนต์..........${resume.motorcycles}..........    ใบอนุญาติขับขี่รถยนต์..........${resume.car}..........`,
                margin: [ 15 , 0 , 0 , 0],
                style : 'content'
            },
            {
                text : `4. สามารถออกปฏิบัติงานนอกพื้นที่..........${resume.outer}..........`,
                margin: [ 5 , 0 , 0 , 0],
                style : 'content'
            },
            {
                text : `5. ความสามารถด้านคอมพิวเตอร์ `,
                margin: [ 5 , 0 , 0 , 0],
                style : 'content'
            },
            {
                text : `${resume.computerSkill}`,
                margin: [ 15 , 0 , 0 , 0],
                style : 'content',
            },
            {
                canvas : [
                    {
                        type: 'rect',
                        x: -20,
                        y: 60,
                        w: 550,
                        h: 50,
                        r: 4,
                        lineColor: 'black',
                    }
                ]
            },
            {
                text : `“ ข้าพเจ้าขอรับรองว่า ข้อความที่กล่าวไว้ข้างต้นทั้งหมดนี้เป็นความจริงทุกประการ หากสำนักงานฯ ตรวจพบภายหลังว่า\nข้อมูลใดไม่ตรงกับความจริงสำนักงานฯ สามารถยกเลิกสิทธิการเป็นเจ้าหน้าที่ของข้าพเจ้าโดยชอบธรรม ”`,
                margin: [ -10 , -42 , 0 , 0],
                fontSize: 11.3,
            },
            {
                text : `ลงชื่อ.......................................................................ผู้สมัคร`,
                margin: [ 0 , 100 , 0 , 0],
                style : 'content',
                alignment : 'right'
            },
            {
                text : `( ${resume.firstname} ${resume.lastname} )`,
                margin: [ 377 , 5 , 0 , 0],
                style : 'content',
            },
            
            {
                text : `วันที่ ${localDate.toLocaleDateString('th-TH', options)}`,
                margin: [ 376 , 5 , 0 , 0],
                style : 'content',
            },
        ],
        styles: {
            header: {
                fontSize: 8,
            },
            content: {
                fontSize: 10,
            }
        },
        defaultStyle:{
            font : 'Kanit',
        }
    };   
    return pdfMake.createPdf(docDefinition)
}