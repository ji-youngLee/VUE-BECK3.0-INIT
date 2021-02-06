<template>
    <!-- list_hd -->
    <div class="list_hd clearfix">
        <div class="fl">
            <div class="btn_excel"></div>
            <div class="line_type inb" style="margin-left: 17px;">
                <div class="checkbox">
                    <input type="checkbox">
                    <label>법무실</label>
                </div>
                <div class="checkbox ml10">
                    <input type="checkbox">
                    <label>나의 팀</label>
                </div>
                <div class="checkbox ml10">
                    <input type="checkbox">
                    <label>나의 업무</label>
                </div>
            </div>
        </div>

        <div class="fr">
            <div class="clearfix">
                <div class="search_history inb inb_wrap line_type mr15">
                    <p class="inb txt_b_under">최근검색어_01</p>
                    <p class="inb txt_b_under">최근검색어_02</p>
                    <p class="inb txt_b_under">최근검색어_03</p>
                </div>
                <div class="search_wrap inb">
                    <input class="input_search" placeholder="통합검색">
                    <button class="btn_p">검색</button>
                </div>
                <div class="btn_filter fl ml10"></div>
            </div>
        </div>
    </div>
    <!-- //list_hd -->
</template>

<script>
export default {
    name : 'GridListTop'
}
</script>
