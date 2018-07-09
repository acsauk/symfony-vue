<template>
    <div class="tile is-ancestor">
        <!--<div class="tile is-vertical is-parent box user-input">-->
            <!--<div class="tile is-child">-->
                <!--<button v-if="state === 'default'" class="btn btn-primary" @click="changeState('edit')">Add Item</button>-->
                <!--<button v-else class="btn btn-cancel" @click="changeState('default')">Cancel</button>-->
            <!--</div>-->

            <!--<div v-if="state === 'edit'" class="tile">-->
                <!--<input type="text" v-model="newItem" placeholder="Add an item" @keyup.enter="saveItem">-->
                <!--<p>{{ characterCount }}/200</p>-->
                <!--<button class="btn btn-primary" :disabled="newItem.length === 0" @click="saveItem">Save Item</button>-->
            <!--</div>-->
        <!--</div>-->

        <div class="tile is-vertical is-parent box">
            <div class="navbar is-transparent">
                <div class="navbar-menu">

                    <div class="navbar-start">
                        <a class="navbar-item" href="/">
                            Filter
                        </a>
                    </div>

                    <div class="navbar-end">
                        <a class="navbar-item" href="/">
                            New
                        </a>
                        <a class="navbar-item" href="/">
                            Export
                        </a>
                    </div>

                </div>
            </div>

            <div class="tile content">
                <ul>
                    <li v-for="item in reversedItems" :class="{strikeout: item.purchased}" @click="togglePurchased(item)">{{ item.label }}</li>
                </ul>
                <p v-if="items.length === 0">No items to buy :(</p>
            </div>

            <nav class="pagination" role="navigation" aria-label="pagination">
                <a class="pagination-previous">Previous</a>
                <a class="pagination-next">Next Page</a>
                <ul class="pagination-list">
                    <li>
                        <a class="pagination-link" aria-label="Goto page 1">1</a>
                    </li>
                    <li>
                        <a class="pagination-ellipsis">&hellip;</a>
                    </li>
                    <li>
                        <a class="pagination-link" aria-label="Goto page 7">7</a>
                    </li>
                    <li>
                        <a class="pagination-link" aria-label="Goto page 8">8</a>
                    </li>
                    <li>
                        <a class="pagination-link" aria-label="Goto page 9">9</a>
                    </li>
                    <li>
                        <a class="pagination-ellipsis">&hellip;</a>
                    </li>
                    <li>
                        <a class="pagination-link" aria-label="Goto page 20">20</a>
                    </li>
                </ul>
            </nav>
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                state: 'default',
                name: "Vue",
                greeter: "Alex",
                items: [
                    {
                        label: 'Item 1',
                        purchased: true,
                    },
                    {
                        label: 'Item 2',
                        purchased: false,
                    },
                    {
                        label: 'Item 3',
                        purchased: false,
                    }
                ],
                newItem: ''
            }
        },

        computed: {
            characterCount() {
                return this.newItem.length;
            },
            reversedItems() {
                return this.items.slice(0).reverse();
            }
        },

        methods: {
            saveItem: function() {
                this.items.push(
                    {
                        label: this.newItem,
                        purchased: false,
                    }
                );
                this.newItem = '';
            },
            changeState: function(newState) {
                this.state = newState;

                this.newItem = '';
            },
            togglePurchased: function (item) {
                item.purchased = !item.purchased;
            }
        }
    }
</script>

<style scoped>

</style>