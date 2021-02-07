<template>
    <div class="pagination_wrap clearfix">
        <ul class="pagination fr">
            <li class="prev">prev</li>
            <li v-for="(page, idx) in totalPage" :key="idx" :class="{active : page == active_id}" @click="movePage(page)">{{page}}</li>
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
        }
        
    },
    created() {
        var component = this; 
        this.EventBus.$on("getTotalPages",function(){
            component.totalPage = Math.ceil(Number(component.totalCount) /Number(component.pagePerNum));
        
        });

    },
    methods :  {
        movePage(page) {
            this.active_id = page 
            this.$emit("movePage", page);
        },
        nextPage() {
            alert('3333')
            if(this.totalPage == 10) {
                let nextPage = this.totalPage + 1; 
                this.totalPage = nextPage
                this.movePage(nextPage)
            }
        }
    }


}
</script>
    