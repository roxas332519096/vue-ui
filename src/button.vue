<template>
    <button class="g-button" :class="{right:iconRight}">
        <svg v-if="icon" class="icon">
            <use :xlink:href="`#i-${icon}`"></use>
        </svg>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>

<script>
    export default {
        name: 'gButton',
        props:['icon','iconRight'],
    }
</script>

<style lang="scss" scoped>
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
            > .content{
                order: 1;
            }
            > .icon {
                order: 2;
                margin-right: 0;
                margin-left: .3em;
            }
        }
    }
</style>