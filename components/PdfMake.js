import Images from '../static/vendor/Images/ImageDataUrl'
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
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
    }
}

export const PDF_GENERATOR = (localStorage , props , setTimeLocal) => {    
    //set Data Status For PDF
    const local_status = JSON.parse(localStorage.getItem('Personal_page')).status
    let married_fname = '-'
    let married_lname = '-'
    let married_child = '-'
    let married_company = '-'
    if (local_status === 'สมรส') {
        married_fname = JSON.parse(localStorage.getItem('Personal_page')).status_married_fname
        married_lname = JSON.parse(localStorage.getItem('Personal_page')).status_married_lname
        married_child = JSON.parse(localStorage.getItem('Personal_page')).status_married_child
        married_company = JSON.parse(localStorage.getItem('Personal_page')).status_married_company
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
            title: `Cupcode Recruitment :  ${JSON.parse(localStorage.getItem('Personal_page')).position}`,
            author: ` ${JSON.parse(localStorage.getItem('Personal_page')).position}`,
            subject: `Recruitment  ${JSON.parse(localStorage.getItem('Personal_page')).position}`,
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
                text : `ตำแหน่งงานที่สมัคร.......... ${JSON.parse(localStorage.getItem('Personal_page')).position}.......... เงินเดือนที่ต้องการ..........${JSON.parse(localStorage.getItem('Personal_page')).salary}..........บาท`,
                margin: [ -20 , 15 , 0 , 0],
                fontSize: 12,
            },
            {
                image : `${JSON.parse(localStorage.getItem('Personal_page')).imageBase64}`,
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
                text : `1.  ชื่อ (ภาษาไทย)........${JSON.parse(localStorage.getItem('Personal_page')).fname_thai} ${JSON.parse(localStorage.getItem('Personal_page')).lname_thai}........  name (English)........${JSON.parse(localStorage.getItem('Personal_page')).fname_eng} ${JSON.parse(localStorage.getItem('Personal_page')).lname_eng}........  เพศ........${JSON.parse(localStorage.getItem('Personal_page')).sex}........`,
                margin: [ -10 , 5 , 0 , 0],
                style : 'content'
            }, 
            {
                text : `รหัสบัตรประชาชน..........${JSON.parse(localStorage.getItem('Personal_page')).idcard}..........  อีเมล..........${JSON.parse(localStorage.getItem('Personal_page')).email}..........  Facebook..........${JSON.parse(localStorage.getItem('Personal_page')).facebook}..........`,
                margin: [ 3 , 5 , 0 , 0],
                style : 'content'
            },
            {
                text : `2.  วัน/เดือน/ปีเกิด........${setTimeLocal(JSON.parse(localStorage.getItem('Personal_page')).birthday)}........  อายุ........${JSON.parse(localStorage.getItem('Personal_page')).age}........ปี  น้ำหนัก........${JSON.parse(localStorage.getItem('Personal_page')).weight}........กก.  ส่วนสูง........${JSON.parse(localStorage.getItem('Personal_page')).height}........ซม.`,
                margin: [ -10 , 10 , 0 , 0],
                style : 'content'
            },
            {
                text : `เชื้อชาติ........${JSON.parse(localStorage.getItem('Personal_page')).ethnicity}........  สัญชาติ........${JSON.parse(localStorage.getItem('Personal_page')).nationality}........  ศาสนา........${JSON.parse(localStorage.getItem('Personal_page')).religion}........`,
                margin: [ 4 , 5 , 0 , 0],
                style : 'content'
            },
            {
                text : `3.  ที่อยู่ตามทะเบียนบ้าน  เลขที่........${JSON.parse(localStorage.getItem('Address_page')).primary_hno}........  หมู่ที่........${JSON.parse(localStorage.getItem('Address_page')).primary_vilno}........  ซอย........${JSON.parse(localStorage.getItem('Address_page')).primary_alley}........  ถนน........${JSON.parse(localStorage.getItem('Address_page')).primary_road}........`,
                margin: [ -10 , 10 , 0 , 0],
                style : 'content'
            },
            {
                text : `ตำบล/แขวง........${JSON.parse(localStorage.getItem('Address_page')).primary_area}........  อำเภอ/เขต........${JSON.parse(localStorage.getItem('Address_page')).primary_district}........  จังหวัด........${JSON.parse(localStorage.getItem('Address_page')).primary_province}........  รหัสไปรษณีย์........${JSON.parse(localStorage.getItem('Address_page')).primary_zipcode}........  \nโทรศัพท์บ้าน........${JSON.parse(localStorage.getItem('Address_page')).primary_tel}........  มือถือ........${JSON.parse(localStorage.getItem('Address_page')).primary_phone}........`,
                margin: [ 4 , 0 , 0 , 0],
                style : 'content'
            },
            {
                text : `ที่อยู่ปัจจุบันที่ติดต่อได้  เลขที่........${JSON.parse(localStorage.getItem('Address_page')).present_hno}........  หมู่ที่........${JSON.parse(localStorage.getItem('Address_page')).present_vilno}........  ซอย........${JSON.parse(localStorage.getItem('Address_page')).present_alley}........  ถนน........${JSON.parse(localStorage.getItem('Address_page')).present_road}........`,
                margin: [ 4 , 5 , 0 , 0],
                style : 'content'
            },
            {
                text : `ตำบล/แขวง........${JSON.parse(localStorage.getItem('Address_page')).present_area}........  อำเภอ/เขต........${JSON.parse(localStorage.getItem('Address_page')).present_district}........  จังหวัด........${JSON.parse(localStorage.getItem('Address_page')).present_province}........  รหัสไปรษณีย์........${JSON.parse(localStorage.getItem('Address_page')).present_zipcode}........\nโทรศัพท์บ้าน........${JSON.parse(localStorage.getItem('Address_page')).present_tel}........  มือถือ........${JSON.parse(localStorage.getItem('Address_page')).present_phone}........`,
                margin: [ 4 , 0 , 0 , 0],
                style : 'content'
            },
            {
                text : `4.  ชื่อบิดา........${JSON.parse(localStorage.getItem('Personal_page')).dad_name}........  อาชีพ........${JSON.parse(localStorage.getItem('Personal_page')).dad_career}........  ชื่อมารดา........${JSON.parse(localStorage.getItem('Personal_page')).mom_name}........  อาชีพ........${JSON.parse(localStorage.getItem('Personal_page')).mom_career}........`,
                margin: [ -10 , 10 , 0 , 0],
                style : 'content'
            },
            {
                text : `จำนวนพี่น้อง........${JSON.parse(localStorage.getItem('Personal_page')).brethren}........คน  คุณเป็นลูกคนที่........${JSON.parse(localStorage.getItem('Personal_page')).sequence}........`,
                margin: [ 4 , 5 , 0 , 0],
                style : 'content'
            },
            {
                text : `5.  สภานภาพการสมรส........${local_status}........  ชื่อคู่สมรส........${married_fname}........  นามสกุลเดิม........${married_lname}........  จำนวนบุตร........${married_child}........คน`,
                margin: [ -10 , 10 , 0 , 0],
                style : 'content'
            },
            {
                text : `สถานที่ทำงาน(คู่สมรส)..........${married_company}..........`,
                margin: [ 4 , 5 , 0 , 0],
                style : 'content'
            },
            {
                text : `6.  พันธะเกี่ยวกับการรับราชการทหาร..........${JSON.parse(localStorage.getItem('Personal_page')).soldier}..........`,
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
                        ['มัธยมศึกษาตอนปลาย/ปวช.' , `${JSON.parse(localStorage.getItem('School_page')).highSchool_name}` , `${JSON.parse(localStorage.getItem('School_page')).highSchool_country}` , `${JSON.parse(localStorage.getItem('School_page')).highSchool_grade}` , `${JSON.parse(localStorage.getItem('School_page')).highSchool_major}` , `${JSON.parse(localStorage.getItem('School_page')).highSchool_congrate}`],
                        ['ปวส./ปวท./อนุปริญญา' , `${JSON.parse(localStorage.getItem('School_page')).diplomaSchool_name}` , `${JSON.parse(localStorage.getItem('School_page')).diplomaSchool_country}` , `${JSON.parse(localStorage.getItem('School_page')).diplomaSchool_grade}` , `${JSON.parse(localStorage.getItem('School_page')).diplomaSchool_major}` , `${JSON.parse(localStorage.getItem('School_page')).diplomaSchool_congrate}`],
                        ['ปริญญาตรี' , `${JSON.parse(localStorage.getItem('School_page')).bechelorSchool_name}` , `${JSON.parse(localStorage.getItem('School_page')).bechelorSchool_country}` , `${JSON.parse(localStorage.getItem('School_page')).bechelorSchool_grade}` , `${JSON.parse(localStorage.getItem('School_page')).bechelorSchool_major}` , `${JSON.parse(localStorage.getItem('School_page')).bechelorSchool_congrate}`],
                        ['อื่นๆ' , `${JSON.parse(localStorage.getItem('School_page')).otherSchool_name}` , `${JSON.parse(localStorage.getItem('School_page')).otherSchool_country}` , `${JSON.parse(localStorage.getItem('School_page')).otherSchool_grade}` , `${JSON.parse(localStorage.getItem('School_page')).otherSchool_major}` , `${JSON.parse(localStorage.getItem('School_page')).otherSchool_congrate}`]
                    ],
                },
                margin: [ -10 , 10 , 0 , 0],
                fontSize: 8,
            },
            {
                text : `8.  โรคประจำตัว..........${(JSON.parse(localStorage.getItem('Personal_page')).congenitalDisease === 'มี') ? '' : 'ไม่มี'}${JSON.parse(localStorage.getItem('Personal_page')).congenitalDisease_name}..........`,
                margin: [ -10 , 10 , 0 , 0],
                style : 'content'
            },
            {
                text : `9.  บุคคลที่ติดต่อกรณีเร่งด่วน..........${JSON.parse(localStorage.getItem('Personal_page')).urgent_contact}..........  ความสัมพันธ์..........${JSON.parse(localStorage.getItem('Personal_page')).urgent_relation}..........  โทรศัพท์..........${JSON.parse(localStorage.getItem('Personal_page')).urgent_phone}..........`,
                margin: [ -10 , 10 , 0 , 0],
                style : 'content'
            },
            {
                text : `10. ทราบการรับสมัครจากช่องทางใด..........${JSON.parse(localStorage.getItem('Personal_page')).urgent_apply}..........`,
                margin: [ -10 , 10 , 0 , 0],
                style : 'content'
            },
            {
                text : `11.  แจ้งชื่อผู้ที่จะอ้างอิงหรือสอบถามได้ ซึ่งมิใช่ญาติ หรืออดีตผู้ว่าจ้าง`,
                margin: [ -10 , 10 , 0 , 0],
                style : 'content'
            },
            {
                text : `ชื่อ - นามสกุล..........${JSON.parse(localStorage.getItem('Personal_page')).refer_name}..........  อาชีพ..........${JSON.parse(localStorage.getItem('Personal_page')).refer_career}..........  โทรศัพท์..........${JSON.parse(localStorage.getItem('Personal_page')).refer_phone}..........`,
                margin: [ 4 , 5 , 0 , 0],
                style : 'content'
            },
            {
                text : `ที่อยู่..........${JSON.parse(localStorage.getItem('Personal_page')).refer_address}..........`,
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
                text : `1 บริษัทที่ทำงานในปัจจุบัน..........${props.current_work}..........  ตำแหน่ง..........${props.current_position}..........`,
                margin: [ 5 , 5 , 0 , 0],
                style : 'content'
            },
            {
                text : `ลักษณะงานที่รับผิดชอบ`,
                margin: [ 14 , 0 , 0 , 0],
                style : 'content'
            },
            {
                text : `${props.current_description}`,
                margin: [ 30 , 0 , 0 , 0],
                style : 'content'
            },
            {
                text : `ระยะเวลาตั้งแต่..........${setTimeLocal(props.current_startwork)}..........ถึง..........${setTimeLocal(props.current_endwork)}..........  เงินเดือนสุดท้ายที่ได้รับ..........${props.current_final_salary}..........`,
                margin: [ 14 , 0 , 0 , 0],
                style : 'content'
            },
            {
                text : `รายได้อื่นๆจากบริษัทนอกเหนือจากเงินเดือนพื้นฐาน..........${props.current_other_income}..........  รวมรายได้สุทธิต่อเดือน..........${props.current_net_income}..........`,
                margin: [ 14 , 0 , 0 , 0],
                style : 'content'
            },
            {
                text : `สวัสดิการอื่นๆของบริษัท..........${props.current_welfare}..........  สาเหตุที่ลาออก..........${props.current_resign}..........`,
                margin: [ 14 , 0 , 0 , 0],
                style : 'content'
            },
            {
                text : `2 บริษัท..........${props.old_work}..........  ตำแหน่ง..........${props.old_position}..........  เงินเดือนสุดท้ายที่ได้รับ..........${props.old_final_salary}..........`,
                margin: [ 5 , 5 , 0 , 0],
                style : 'content'
            },
            {
                text : `ระยะเวลาตั้งแต่..........${setTimeLocal(props.old_startwork)}..........  ถึง..........${setTimeLocal(props.old_endwork)}..........\nสาเหตุที่ลาออก..........${props.old_resign}..........`,
                margin: [ 14 , 0 , 0 , 0],
                style : 'content'
            },
            {
                text : `3 บริษัท..........${props.older_work}..........  ตำแหน่ง..........${props.older_position}..........  เงินเดือนสุดท้ายที่ได้รับ..........${props.older_final_salary}..........`,
                margin: [ 5 , 5 , 0 , 0],
                style : 'content'
            },
            {
                text : `ระยะเวลาตั้งแต่..........${setTimeLocal(props.older_startwork)}..........ถึง..........${setTimeLocal(props.older_endwork)}..........\nสาเหตุที่ลาออก..........${props.older_resign}..........`,
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
                text : `ฟัง..........${JSON.parse(localStorage.getItem('Ability_page')).english}..........  พูด..........${JSON.parse(localStorage.getItem('Ability_page')).english_speak}..........  อ่าน..........${JSON.parse(localStorage.getItem('Ability_page')).english_read}..........  เขียน..........${JSON.parse(localStorage.getItem('Ability_page')).english_writh}..........`,
                margin: [ 15 , 0 , 0 , 0],
                style : 'content'
            },
            {
                text : `2. พิมพ์ดีดภาษาไทย..........${JSON.parse(localStorage.getItem('Ability_page')).thaiprint}..........คำ/นาที    พิมพ์ดีดภาษาอังกฤษ..........${JSON.parse(localStorage.getItem('Ability_page')).engprint}..........คำ/นาที`,
                margin: [ 5 , 0 , 0 , 0],
                style : 'content'
            },
            {
                text : `3. ความสามารถด้านการขับรถ  `,
                margin: [ 5 , 0 , 0 , 0],
                style : 'content'
            },
            {
                text : `ใบอนุญาติขับขี่รถจักรยายนต์..........${JSON.parse(localStorage.getItem('Ability_page')).motorcycles}..........    ใบอนุญาติขับขี่รถยนต์..........${JSON.parse(localStorage.getItem('Ability_page')).car}..........`,
                margin: [ 15 , 0 , 0 , 0],
                style : 'content'
            },
            {
                text : `4. สามารถออกปฏิบัติงานนอกพื้นที่..........${JSON.parse(localStorage.getItem('Ability_page')).outer}..........`,
                margin: [ 5 , 0 , 0 , 0],
                style : 'content'
            },
            {
                text : `5. ความสามารถด้านคอมพิวเตอร์ `,
                margin: [ 5 , 0 , 0 , 0],
                style : 'content'
            },
            {
                text : `${JSON.parse(localStorage.getItem('Ability_page')).computerSkill}`,
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
                text : `( ${JSON.parse(localStorage.getItem('Personal_page')).fname_thai} ${JSON.parse(localStorage.getItem('Personal_page')).lname_thai} )`,
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
    return pdfMake.createPdf(docDefinition).open()     
    
}