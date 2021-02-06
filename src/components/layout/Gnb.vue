<template>
    <nav id="gnb" class="nav_gnb">
        {{propsdata}}
        <div class="nav_inner">
            <ul class="nav_gnb_ul">
                <li class="active">
                    <router-link to="" class="gnb_itm">나의할일</router-link>
                    <div class="gnb_sub">
                        <ul class="gnb_sub_ul">
                            <li>
                                <router-link to="" class="gnb_sub_itm">국내</router-link>
                                <router-link to="" class="gnb_sub_itm">해외</router-link>
                            </li>
                            <li>
                                <router-link to="" class="gnb_sub_itm">국내</router-link>
                                <router-link to="" class="gnb_sub_itm">해외</router-link>
                            </li>
                        </ul>
                    </div>
                </li>
                <li><router-link to="" class="gnb_itm">프로젝트</router-link></li>
                <li><router-link to="" class="gnb_itm">계약</router-link></li>
                <li><router-link to="" class="gnb_itm">자문</router-link></li>
                <li><router-link to="/lawsutList" class="gnb_itm">소송</router-link></li>
                <li><router-link to="" class="gnb_itm">보험</router-link></li>
                <li><router-link to="/claimReviewList" class="gnb_itm">클레임</router-link></li>
                <li><router-link to="" class="gnb_itm">채권</router-link></li>
                <li><router-link to="" class="gnb_itm">컴플라이언스</router-link></li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    props : {
        propsdata : {
            type :String,
            default : void 0
        }
    },
    methods :{
    }
}
</script>