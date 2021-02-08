<template>
    <div class="pagination_wrap clearfix">
        <ul class="pagination fr">
            <li class="prev" @click="prevPage()">prev</li>
            <li v-for="(page,idx) in pageRange" :key="idx" :class="{active : page == active_id}" @click="movePage(page)">{{page}}</li>
            <li class="next" @click="nextPage()">next</li>
        </ul>
    </div>
</template>

<script>
export default {
    name : 'pageNavigation',
    props :['totalCount', 'pagePerNum'], 
    data() {
        return {
            isActive : false, 
            totalPage : 1  ,
            active_id :1,  
            pageRange :[],
            pageRangeNum : 10
        }
        
    },
    created() {
        var component = this; 
        console.log(component)
        this.EventBus.$on("getTotalPages",function(){
           component.totalPage = Math.ceil(Number(component.totalCount) /Number(component.pagePerNum));
        });
        component.pageRange = this.range()
    },
    methods :  {
        movePage(page) {
            this.active_id = page 
            this.$emit("movePage", page);
        },
        nextPage() {
            let tmp_range = this.pageRange;
            let lastRangeNum = tmp_range[this.pagePerNum -1];
            if(lastRangeNum >= this.active_id) {
                let nextPage = this.totalPage > (lastRangeNum + this.pageRangeNum) ? (lastRangeNum +  this.pageRangeNum)  : this.totalPage; 
                let startPage = lastRangeNum + 1 ;
                if ( lastRangeNum < this.totalPage) {
                    this.pageRange = this.range(startPage,nextPage); 
                    this.movePage(startPage);
                }
            }
        },
        prevPage() {
            let tmp_range = this.pageRange;
            let startRangeNum = tmp_range[0];
            if(startRangeNum > this.pageRangeNum) {
                let prevPage = (startRangeNum  - this.pageRangeNum ) > 1 ? (startRangeNum  - this.pageRangeNum) : 1; 
                let nextPage =startRangeNum - 1; 
                this.pageRange = this.range(prevPage,nextPage); 
                this.movePage(nextPage);
            }
        },
        range(start_page, end_page) {
            this.totalPage = Math.ceil(Number(this.totalCount) /Number(this.pagePerNum));
            if( start_page && end_page ) {

            } else {
                start_page = 1;
                end_page = this.totalPage;
                if( end_page > this.pageRangeNum) {
                    end_page = this.pageRangeNum; 
                }
            }

            let pageRangeArray = [];
            
            for(let i = start_page; i <= end_page; i++ ) pageRangeArray.push(i);
            return pageRangeArray;
        }
    },
}
</script>
    