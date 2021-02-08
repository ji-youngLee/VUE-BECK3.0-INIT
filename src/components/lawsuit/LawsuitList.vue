<template>
    <div>
        <div id="container" class="section lawsuit">
            <div class="clearfix" style="margin: 19px 0 15px;">
                <button class="btn__active fr" @click="showPopup = true">+ 소송/중재 생성하기</button>
            </div>
            <div class="section__contents">
                <GridListTop />
                <div class="list_wrap">
                    <table class="table_list">
                        <tr>
                            <th v-for="(header,idx) in headers" :key="idx" :class="colClassCount(idx)" >{{header}}</th>
                        </tr>
                        <tr v-for="(lawsuit) in lawsuitList" :key="lawsuit.rowNum">
                            <td>{{lawsuit.rowNum}}</td>
                            <td>
                                <router-link to="" class="b">{{lawsuit.projectName}}</router-link>
                                <div class="label_itms">
                                    <label class="label_itm itm1">{{lawsuit.label_name}}</label>
                                </div>
                            </td>
                            <td>{{lawsuit.senceName}}}</td>
                            <td>
                                {{lawsuit.caseName}}
                                <p class="list_itm1">{{lawsuit.caseNo}}</p>
                            </td>
                            <td>{{lawsuit.opponent}}</td>
                            <td>{{lawsuit.manager}}</td>
                            <td class="txt_xs">{{lawsuit.money}}<br>{{lawsuit.currency}}
                            </td>
                            <td class="txt_xs">
                                <p>{{lawsuit.raiseDate}}</p>
                                <p>{{lawsuit.decideDate}}</p>
                            </td>
                            <td>
                                <p class="status_itm itm1">{{lawsuit.progress}}</p>
                                <div style="margin-top: 5px;"></div>
                                <p class="result_itm itm1">{{lawsuit.result}}</p>
                            </td>
                        </tr>
                    </table>
                </div>
                <pageNavigation v-if = "totalCount > 0" :totalCount="totalCount" :pagePerNum="pagePerNum" @movePage = "movePage" />
            </div>
            </div>
            <Popup v-if="showPopup"  @close="showPopup = false">
                <p slot="header" class="lg_p" >유저관리</p>
                <input slot="search_top" class="input_search" value="AAA 프로젝트" style="width: 335px;" />
                <div slot="modal_body" class="area mt15">
                    <div class="mb18">
                        <label class="txt_label">이메일</label>
                        <table class="table_sub tableLawsuitCreate">
                            <tr>
                                <th>사건명</th>
                                <td>AAA 공사 OOOO 소송</td>
                                <th>구분</th>
                                <td>
                                    <div style="width: 140px">
                                        <select>
                                            <option>제소-신청</option>
                                            <option>제소-신청</option>
                                        </select>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th>유형</th>
                                <td>
                                    <div class="inb_wrap xs">
                                        <div class="inb" style="width: 60px">
                                            <select>
                                                <option>소송</option>
                                            </select>
                                        </div>
                                        <div class="inb" style="width: 60px">
                                            <select>
                                                <option>민사</option>
                                            </select>
                                        </div>
                                        <div class="inb" style="width: 70px">
                                            <select>
                                                <option>간접비</option>
                                            </select>
                                        </div>
                                    </div>
                                </td>
                                <th>반소여부</th>
                                <td>
                                    <div class="inb_wrap m">
                                        <div class="radio inb">
                                            <input type="radio">
                                            <label>Yes</label>
                                        </div>
                                        <div class="radio inb">
                                            <input type="radio">
                                            <label>No</label>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th>당사지위</th>
                                <td>
                                    <div class="inb_wrap m">
                                        <div class="radio inb">
                                            <input type="radio">
                                            <label>피고</label>
                                        </div>
                                        <div class="radio inb">
                                            <input type="radio">
                                            <label>원고</label>
                                        </div>
                                    </div>
                                </td>
                                <th>주요사건여부</th>
                                <td>
                                    <div class="inb_wrap m">
                                        <div class="radio inb">
                                            <input type="radio">
                                            <label>Yes</label>
                                        </div>
                                        <div class="radio inb">
                                            <input type="radio">
                                            <label>No</label>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th>가액(당사분)</th>
                                <td colspan="3">30,000,000 KRW</td>
                            </tr>
                            <tr>
                                <th>관련사건</th>
                                <td colspan="3"><a class="btn__b btn_s">+ 관련사건 추가</a></td>
                            </tr>
                        </table>
                    </div>

                    <div class="mb18">
                        <label class="txt_label">현장정보</label>
                        <table class="table_sub tableLawsuitCreate tableLawsuitType1">
                            <tr>
                                <th>현장</th>
                                <td class="td_input_dis">
                                    <input type="text" class="input" value="공사현장" disabled>
                                </td>
                                <th>사업본부</th>
                                <td class="td_input_dis">
                                    <input type="text" class="input" value="AAA 사업본부" disabled>
                                </td>
                            </tr>
                            <tr>
                                <th>발주처</th>
                                <td>
                                    <div class="td_input">
                                        <input type="text" class="input">
                                    </div>
                                </td>
                                <th>계약고</th>
                                <td>
                                    <div class="td_input">
                                        <input type="text" class="input">
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th>당사지분</th>
                                <td>
                                    <div class="td_input">
                                        <input type="text" class="input">
                                    </div>
                                </td>
                                <th>회원사</th>
                                <td>
                                    <div class="td_input">
                                        <input type="text" class="input">
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th>계약기간</th>
                                <td>
                                    <div class="td_input">
                                        <input type="text" class="input">
                                    </div>
                                </td>
                                <th>공정률</th>
                                <td>
                                    <div class="td_input">
                                        <input type="text" class="input">
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th>준공여부</th>
                                <td>
                                    <div class="td_input">
                                        <input type="text" class="input">
                                    </div>
                                </td>
                                <th>현장소장</th>
                                <td>
                                    <div class="td_input">
                                        <input type="text" class="input">
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th>관리책임자</th>
                                <td>
                                    <div class="td_input">
                                        <input type="text" class="input">
                                    </div>
                                </td>
                                <th>시행률</th>
                                <td>
                                    <div class="td_input">
                                        <input type="text" class="input">
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </div>

                    <div class="mb18">
                        <label class="txt_label">현장정보</label>
                        <div class="box_sub">
                            OOO 수행한 XXX 시설 공사와 관련하여. AAA 사가 제기한 공기 연장에 대한 추가 간접비 요구. 2019.09 Naver 포탈 뉴스를 통해 미디어 최초 보도 된 사건. 당사 “주요사건” 으로 등록하며 가액 규모가 큼.
                        </div>
                    </div>

                    <div class="mb18">
                        <label class="txt_label">쟁점</label>
                        <div class="box_sub">
                            공기 연장의 귀책 당사자 / 간접비 금액의 적정성
                        </div>
                    </div>

                    <div class="mb18 clearfix_20">
                        <div class="dvs__2">
                            <label class="txt_label">원고 - 신청인 주장</label>
                            <div class="box_sub">
                                연장 사유는 자연재해로 인하여 발생하였기 때문에, 사유가 없음을 주장.
                            </div>
                        </div>
                        <div class="dvs__2">
                            <label class="txt_label">피고 - 피신청인 주장</label>
                            <div class="box_sub">
                                간접비 금액이 과도하며, 공기 준수의 책임을 다하지 못하였으므로, 소송이 적절치 못하다.
                            </div>
                        </div>
                    </div>

                    <div class="mb18">
                        <label class="txt_label">비고</label>
                        <div class="box_sub">
                            미디어 보도된 건으로 빠른 착수 요망.
                        </div>
                    </div>

                    <div class="mb20">
                        <label class="txt_label">첨부파일</label>
                        <!-- drop_wrap -->
                        <div class="drop_wrap">
                            <!-- dropzone -->
                            <div id="dropzone1">
                                <form class="dropzone needsclick" id="demo-upload" action="/upload">
                                    <p class="drop_p dz-message">Drop your images here</p>
                                    <div class="tc mt7">
                                        <a class="btn__b btn_s">+ 파일추가</a>
                                    </div>
                                </form>
                            </div>
                            <!-- //dropzone -->
                        </div>
                        <!-- //drop_wrap -->
                    </div>
                </div>
                <!-- //area -->
                <div slot="footer_btn">
                    <a href="lawsuit_view.html" class="btn__b modal_btn">등록</a>
                    <a class="btn__g modal_btn" @click="showPopup = false">취소</a>
                </div>
        </Popup>
    </div>
</template>

<script>
import GridListTop from '../layout/GridListTop';
import pageNavigation from '../layout/pageNavigation';
import Popup from '@/components/common/Popup'; 

export default {
    name : 'LawsuitList',
    data() {
        return {
            showPopup : false, 
            msg : 'rrrrr',
            pageNum : "1", 
            pagePerNum : "10",
            totalCount : "0",
            headers : ['No','프로젝트명 / 유형','현장명','사건명/번호','상대방','법무담당자','가액','제기일/확정일','상태/결과'],
            lawsuitList : []
             /*
            lawsuitList : [
                {
                    rowNum : '1',
                    projectName :'두바이 AAA 소송프로젝트 두바이 AAA 소송프로젝트',
                    label_name : '중재',
                    senceName : '법틀 기지 현대화 시설 공사',
                    caseName : '공사대금 - XXXX',
                    caseNo : '2019가합 0301홍길동',
                    opponent : 'AIA',
                    manager : '홍길동',
                    money : '1,500,000,000',
                    currency : 'KRW',
                    raiseDate : '20.01.20',
                    decideDate : '21.01.19',
                    progress : '진행중',
                    result : '강제조정',
                },
               
                {
                    rowNum : '2',
                    projectName :'두바이 AAA 소송프로젝트 두바이 AAA 소송프로젝트',
                    label_name : '소송',
                    senceName : '법틀 기지 현대화 시설 공사',
                    caseName : '공사대금 - XXXX',
                    caseNo : '2019가합 0301홍길동',
                    opponent : 'AIA',
                    manager : '홍길동',
                    money : '1,500,000,000',
                    currency : 'KRW',
                    raiseDate : '20.01.20',
                    decideDate : '21.01.19',
                    progress : '계류중',
                    result : '취하',
                },
                 {
                    rowNum : '3',
                    projectName :'두바이 AAA 소송프로젝트 두바이 AAA 소송프로젝트',
                    label_name : '소송',
                    senceName : '법틀 기지 현대화 시설 공사',
                    caseName : '공사대금 - XXXX',
                    caseNo : '2019가합 0301홍길동',
                    opponent : 'AIA',
                    manager : '홍길동',
                    money : '1,500,000,000',
                    currency : 'KRW',
                    raiseDate : '20.01.20',
                    decideDate : '20.01.20',
                    progress : '합의종결',
                    result : '판결/판정',
                },

                {
                    rowNum : '4',
                    projectName :'두바이 AAA 소송프로젝트 두바이 AAA 소송프로젝트',
                    label_name : '소송',
                    senceName : '법틀 기지 현대화 시설 공사',
                    caseName : '공사대금 - XXXX',
                    caseNo : '2019가합 0301홍길동',
                    opponent : 'AIA',
                    manager : '홍길동',
                    money : '1,500,000,000',
                    currency : 'KRW',
                    raiseDate : '20.01.20',
                    decideDate : '21.01.19',
                    progress : '중재진행',
                    result : '임의조정',
                },
                 {
                    rowNum : '5',
                    projectName :'두바이 AAA 소송프로젝트 두바이 AAA 소송프로젝트',
                    label_name : '소송',
                    senceName : '법틀 기지 현대화 시설 공사',
                    caseName : '공사대금 - XXXX',
                    caseNo : '2019가합 0301홍길동',
                    opponent : 'AIA',
                    manager : '홍길동',
                    money : '1,500,000,000',
                    currency : 'KRW',
                    raiseDate : '20.01.20',
                    progress : '21.01.19',
                    decideDate : '진행중',
                    result : '기타',
                },
                {
                    rowNum : '6',
                    projectName :'두바이 AAA 소송프로젝트 두바이 AAA 소송프로젝트',
                    label_name : '소송',
                    senceName : '법틀 기지 현대화 시설 공사',
                    caseName : '공사대금 - XXXX',
                    caseNo : '2019가합 0301홍길동',
                    opponent : 'AIA',
                    manager : '홍길동',
                    money : '1,500,000,000',
                    currency : 'KRW',
                    raiseDate : '20.01.20',
                    decideDate : '21.01.19',
                    progress : '계류중',
                    result : '취하',
                },
               
            ] */
        }
    },
     beforeCreate : function() {
        console.log('lawsuit + 1')
    },
    created : function() {
        this.getList(this.pageNum, this.pagePerNum);
    },
    mounted : function() {
        console.log('lawsuit + 3')
        this.msg = 'dddd';
    },
    updated : function () {
        this.EventBus.$emit('getTotalPages');
    },
    components :{
        GridListTop,
        pageNavigation,
        Popup,
    },
    methods : {
        getList : function(pageNum, pagePerNum) {
            let vue = this  
            this.$send.request({
                method : 'post',
                url : '/lawsuit/list',
                data : {
                    pageNum :pageNum,
                    pagePerNum : pagePerNum
                }
                }).then(function(resp){
                console.log('in axios')
                console.log(vue.data)
                // console.log(resp);
                vue.$data.lawsuitList = resp.data.dataList;
                vue.$data.totalCount = resp.data.totalCount;
                vue.$data.pageNum = resp.data.pageNum;
            })

        },
        movePage : function (pageNum) {
            this.getList(pageNum, this.pagePerNum)
        },
        colClassCount : function (idx){
            return 'col '+  (idx + 1);
        },
    }
}
</script>