<template>
    <button class="g-button" :class="{right:iconRight}" @click="_click">
        <g-icon :name="icon" v-if="icon && !loading" ></g-icon>
        <g-icon name="loading" class="loading" v-if="loading"></g-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>

<script>
    import gIcon from './icon.vue'
    export default {
        name: 'gButton',
        components:{
            gIcon
        },
        props: {
            icon: {
                type:String,
            },
            iconRight: {
                type: Boolean,
                default: false,
            },
            loading:{
                type:Boolean,
                default: false,
            }
        },
        methods:{
            _click(){
                this.$emit('click')
            }
        }
    }
</script>

<style lang="scss" scoped>
    @keyframes spin {
        0% { transform: rotate(0) }
        100% { transform: rotate(360deg) }
    }
    .g-button {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        padding: 0 1em;
        height: var(--button-height);
        border: 1px solid var(--border-color);
        border-radius: var(--border-radius);
        font-size: var(--font-size);
        background: var(--button-bg);
        cursor: pointer;

        &:hover {
            border-color: var(--border-color-hover);
        }

        &:active {
            background-color: var(--button-active-bg);
        }

        &:focus {
            outline: none;
        }

        > .content {
            order: 2;
        }

        > .icon {
            order: 1;
            margin-right: .3em;
        }

        &.right {
            > .content {
                order: 1;
            }

            > .icon {
                order: 2;
                margin-right: 0;
                margin-left: .3em;
            }
        }

        .loading{
            animation: spin 2s infinite linear;
        }
    }
</style>