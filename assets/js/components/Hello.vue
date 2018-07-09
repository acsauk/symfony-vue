<template>
    <div>
        <div class="section">
            <div class="shopping-list container">
                <h2>Hello {{ name }} from {{ greeter }}!</h2>
                <button v-if="state === 'default'" class="btn btn-primary" @click="changeState('edit')">Add Item</button>
                <button v-else class="btn btn-cancel" @click="changeState('default')">Cancel</button>
            </div>
        </div>

        <div v-if="state === 'edit'" class="add-item-form">
            <input type="text" v-model="newItem" placeholder="Add an item" @keyup.enter="saveItem">
            <p>{{ characterCount }}/200</p>
            <button class="btn btn-primary" :disabled="newItem.length === 0" @click="saveItem">Save Item</button>
        </div>

        <ul>
            <li v-for="item in reversedItems" :class="{strikeout: item.purchased}" @click="togglePurchased(item)">{{ item.label }}</li>
        </ul>
        <p v-if="items.length === 0">No items to buy :(</p>
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