<template>
    <div class="col-sm-6 col-md-4 col-lg-3">
        <div class="panel paneldefault">
            <div class="panel-body quote">
                <slot> </slot>
            </div>
        </div>
    </div>    
</template>

<script>
export default {
    props: ['quotes']
}
</script>

<style>
    .panel-body{
        font-family: 'Arizonia', cursive;
        font-size: 24px;
        color: purple;
    }

    .quote{
        cursor: pointer;
    }

    .quote:hover{
        background-color: lightpink;
    }
</style>
